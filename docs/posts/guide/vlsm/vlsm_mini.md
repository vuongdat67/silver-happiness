# VLSM Subnet Calculator

<!-- more -->

<style>
.vlsm-container { max-width: 900px; margin: 20px auto; }
.input-group { margin: 15px 0; }
.input-group label { display: block; margin-bottom: 5px; font-weight: 500; }
.input-group input { width: 100%; padding: 8px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-code-bg-color); color: var(--md-default-fg-color); }
.subnet-input { display: flex; gap: 10px; margin: 8px 0; align-items: center; }
.subnet-input input { flex: 1; }
.btn { padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; transition: opacity 0.2s; }
.btn:hover { opacity: 0.8; }
.btn-primary { background: var(--md-primary-fg-color); color: white; }
.btn-secondary { background: var(--md-accent-fg-color); color: white; }
.btn-remove { background: #f44336; color: white; padding: 8px 12px; }
.results { margin-top: 30px; }
.subnet-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.9em; }
.subnet-table th, .subnet-table td { padding: 12px 8px; text-align: left; border-bottom: 1px solid var(--md-default-fg-color--lightest); cursor: pointer; transition: background 0.2s; }
.subnet-table th { background: var(--md-code-bg-color); font-weight: 600; }
.subnet-table tr:hover { background: var(--md-code-bg-color); }
.subnet-table td:hover { background: var(--md-accent-fg-color--transparent); }
.copied-tooltip { position: fixed; background: #333; color: white; padding: 6px 12px; border-radius: 4px; font-size: 12px; pointer-events: none; z-index: 1000; opacity: 0; transition: opacity 0.2s; }
.copied-tooltip.show { opacity: 1; }
.error { color: #f44336; margin: 10px 0; }
</style>

<div class="vlsm-container">
  <div class="input-group">
    <label>Network Address (CIDR):</label>
    <input type="text" id="networkInput" placeholder="192.168.1.0/24" value="192.168.1.0/24">
  </div>
  
  <div class="input-group">
    <label>Subnets (Name - Required Hosts):</label>
    <div id="subnetInputs">
      <div class="subnet-input">
        <input type="text" placeholder="Subnet name" class="subnet-name">
        <input type="number" placeholder="Hosts" class="subnet-hosts" min="1">
        <button class="btn btn-remove" onclick="removeSubnet(this)">✕</button>
      </div>
    </div>
    <button class="btn btn-secondary" onclick="addSubnet()" style="margin-top: 10px;">+ Add Subnet</button>
  </div>
  
  <button class="btn btn-primary" onclick="calculateVLSM()">Calculate VLSM</button>
  
  <div id="error" class="error"></div>
  <div id="results" class="results"></div>
</div>

<div class="copied-tooltip" id="copiedTooltip">Copied!</div>

<script>
function addSubnet() {
  const container = document.getElementById('subnetInputs');
  const div = document.createElement('div');
  div.className = 'subnet-input';
  div.innerHTML = `
    <input type="text" placeholder="Subnet name" class="subnet-name">
    <input type="number" placeholder="Hosts" class="subnet-hosts" min="1">
    <button class="btn btn-remove" onclick="removeSubnet(this)">✕</button>
  `;
  container.appendChild(div);
}

function removeSubnet(btn) {
  const container = document.getElementById('subnetInputs');
  if (container.children.length > 1) {
    btn.parentElement.remove();
  }
}

function ip2long(ip) {
  const parts = ip.split('.');
  return (parseInt(parts[0]) << 24) + (parseInt(parts[1]) << 16) + (parseInt(parts[2]) << 8) + parseInt(parts[3]);
}

function long2ip(long) {
  return [(long >>> 24) & 0xFF, (long >>> 16) & 0xFF, (long >>> 8) & 0xFF, long & 0xFF].join('.');
}

function calculateVLSM() {
  const errorDiv = document.getElementById('error');
  const resultsDiv = document.getElementById('results');
  errorDiv.textContent = '';
  resultsDiv.innerHTML = '';
  
  try {
    const networkInput = document.getElementById('networkInput').value.trim();
    const [networkAddr, prefixLen] = networkInput.split('/');
    
    if (!networkAddr || !prefixLen) throw new Error('Invalid network format. Use CIDR notation (e.g., 192.168.1.0/24)');
    
    const prefix = parseInt(prefixLen);
    if (prefix < 0 || prefix > 30) throw new Error('Prefix length must be between 0 and 30');
    
    const subnets = [];
    const subnetDivs = document.querySelectorAll('.subnet-input');
    
    subnetDivs.forEach(div => {
      const name = div.querySelector('.subnet-name').value.trim();
      const hosts = parseInt(div.querySelector('.subnet-hosts').value);
      if (name && hosts > 0) {
        subnets.push({ name, hosts });
      }
    });
    
    if (subnets.length === 0) throw new Error('Add at least one subnet');
    
    subnets.sort((a, b) => b.hosts - a.hosts);
    
    const networkLong = ip2long(networkAddr);
    const networkSize = Math.pow(2, 32 - prefix);
    let currentAddr = networkLong;
    const results = [];
    
    subnets.forEach(subnet => {
      const requiredHosts = subnet.hosts + 2;
      const hostBits = Math.ceil(Math.log2(requiredHosts));
      const subnetPrefix = 32 - hostBits;
      const subnetSize = Math.pow(2, hostBits);
      
      if (currentAddr + subnetSize > networkLong + networkSize) {
        throw new Error(`Not enough space for subnet: ${subnet.name}`);
      }
      
      const subnetAddr = long2ip(currentAddr);
      const firstHost = long2ip(currentAddr + 1);
      const lastHost = long2ip(currentAddr + subnetSize - 2);
      const broadcast = long2ip(currentAddr + subnetSize - 1);
      const mask = long2ip((0xFFFFFFFF << (32 - subnetPrefix)) >>> 0);
      
      results.push({
        name: subnet.name,
        network: `${subnetAddr}/${subnetPrefix}`,
        mask: mask,
        first: firstHost,
        last: lastHost,
        broadcast: broadcast,
        usable: subnetSize - 2
      });
      
      currentAddr += subnetSize;
    });
    
    let html = '<h3>VLSM Results</h3><table class="subnet-table"><thead><tr>';
    html += '<th>Subnet</th><th>Network</th><th>Subnet Mask</th><th>First Host</th><th>Last Host</th><th>Broadcast</th><th>Usable Hosts</th>';
    html += '</tr></thead><tbody>';
    
    results.forEach(r => {
      html += `<tr>
        <td onclick="copyText('${r.name}', event)">${r.name}</td>
        <td onclick="copyText('${r.network}', event)">${r.network}</td>
        <td onclick="copyText('${r.mask}', event)">${r.mask}</td>
        <td onclick="copyText('${r.first}', event)">${r.first}</td>
        <td onclick="copyText('${r.last}', event)">${r.last}</td>
        <td onclick="copyText('${r.broadcast}', event)">${r.broadcast}</td>
        <td onclick="copyText('${r.usable}', event)">${r.usable}</td>
      </tr>`;
    });
    
    html += '</tbody></table>';
    resultsDiv.innerHTML = html;
    
  } catch (e) {
    errorDiv.textContent = e.message;
  }
}

function copyText(text, event) {
  navigator.clipboard.writeText(text).then(() => {
    const tooltip = document.getElementById('copiedTooltip');
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = (event.pageY - 30) + 'px';
    tooltip.classList.add('show');
    setTimeout(() => tooltip.classList.remove('show'), 1000);
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    addSubnet();
    addSubnet();
  });
}
</script>
