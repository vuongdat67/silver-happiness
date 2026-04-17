# Binary Analysis Toolkit

<style>
.binary-container { max-width: 1200px; margin: 20px auto; }
.tool-tabs { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0; border-bottom: 2px solid var(--md-default-fg-color--lightest); }
.tab-btn { padding: 12px 24px; border: none; background: transparent; color: var(--md-default-fg-color); cursor: pointer; font-weight: 500; border-bottom: 3px solid transparent; transition: all 0.2s; }
.tab-btn:hover { background: var(--md-code-bg-color); }
.tab-btn.active { border-bottom-color: var(--md-primary-fg-color); color: var(--md-primary-fg-color); }
.tool-panel { display: none; margin: 20px 0; }
.tool-panel.active { display: block; }
.input-area { margin: 15px 0; }
.input-area label { display: block; margin-bottom: 8px; font-weight: 500; }
.input-area textarea, .input-area input { width: 100%; padding: 10px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-code-bg-color); color: var(--md-default-fg-color); font-family: 'Consolas', monospace; }
.input-area textarea { min-height: 120px; resize: vertical; }
.action-btns { display: flex; gap: 10px; margin: 15px 0; flex-wrap: wrap; }
.btn { padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; transition: opacity 0.2s; }
.btn-primary { background: var(--md-primary-fg-color); color: white; }
.btn-secondary { background: var(--md-accent-fg-color); color: white; }
.btn:hover { opacity: 0.85; }
.hex-viewer { font-family: 'Consolas', monospace; font-size: 13px; background: var(--md-code-bg-color); padding: 15px; border-radius: 4px; overflow-x: auto; max-height: 400px; overflow-y: auto; border: 1px solid var(--md-default-fg-color--lightest); }
.hex-line { display: flex; gap: 15px; padding: 3px 0; }
.hex-line:hover { background: var(--md-accent-fg-color--transparent); }
.hex-offset { color: var(--md-primary-fg-color); min-width: 80px; }
.hex-bytes { flex: 1; display: grid; grid-template-columns: repeat(16, 1fr); gap: 5px; }
.hex-byte { cursor: pointer; }
.hex-byte:hover { color: var(--md-accent-fg-color); font-weight: bold; }
.hex-ascii { color: var(--md-accent-fg-color); min-width: 160px; }
.result-box { padding: 15px; background: var(--md-code-bg-color); border-radius: 4px; margin: 15px 0; font-family: 'Consolas', monospace; white-space: pre-wrap; word-break: break-all; border: 1px solid var(--md-default-fg-color--lightest); }
.shellcode-box { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.overflow-calc { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; }
.calc-item { padding: 15px; background: var(--md-code-bg-color); border-radius: 4px; border-left: 3px solid var(--md-primary-fg-color); }
.calc-label { font-size: 0.9em; opacity: 0.7; margin-bottom: 5px; }
.calc-value { font-size: 1.5em; font-weight: 600; font-family: 'Consolas', monospace; }
</style>

<div class="binary-container">
  <div class="tool-tabs">
    <button class="tab-btn active" onclick="switchTab('hexview')">Hex Viewer</button>
    <button class="tab-btn" onclick="switchTab('asm')">Assembler</button>
    <button class="tab-btn" onclick="switchTab('shellcode')">Shellcode</button>
    <button class="tab-btn" onclick="switchTab('overflow')">Integer Overflow</button>
    <button class="tab-btn" onclick="switchTab('format')">Format String</button>
  </div>

  <!-- Hex Viewer -->
  <div class="tool-panel active" id="hexview">
    <h3>Hex Viewer / Editor</h3>
    
    <div class="input-area">
      <label>Input (Text or Hex):</label>
      <textarea id="hexInput" placeholder="Enter text or hex bytes (e.g., 48656c6c6f)">Hello, World!\x00</textarea>
    </div>
    
    <div class="action-btns">
      <button class="btn btn-primary" onclick="viewAsHex()">View as Hex</button>
      <button class="btn btn-secondary" onclick="clearHex()">Clear</button>
    </div>
    
    <div class="hex-viewer" id="hexDisplay">Hex dump will appear here...</div>
  </div>

  <!-- Assembler/Disassembler -->
  <div class="tool-panel" id="asm">
    <h3>Assembly ↔ Machine Code</h3>
    
    <div class="input-area">
      <label>Architecture:</label>
      <select id="archSelect" style="width: 100%; padding: 8px; border-radius: 4px; background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest);">
        <option value="x86">x86</option>
        <option value="x64">x86-64</option>
      </select>
    </div>
    
    <div class="input-area">
      <label>Assembly Code:</label>
      <textarea id="asmInput" placeholder="mov eax, 0x1&#10;xor ebx, ebx&#10;int 0x80">mov eax, 0x1
xor ebx, ebx
int 0x80</textarea>
    </div>
    
    <div class="action-btns">
      <button class="btn btn-primary" onclick="assemble()">Assemble</button>
      <button class="btn btn-secondary" onclick="clearAsm()">Clear</button>
    </div>
    
    <div class="result-box" id="asmOutput">Machine code will appear here...</div>
    
    <div class="input-area" style="margin-top: 30px;">
      <label>Machine Code (Hex):</label>
      <textarea id="machineInput" placeholder="b801000000 31db cd80"></textarea>
    </div>
    
    <div class="action-btns">
      <button class="btn btn-primary" onclick="disassemble()">Disassemble</button>
    </div>
    
    <div class="result-box" id="disasmOutput">Assembly will appear here...</div>
  </div>

  <!-- Shellcode Generator -->
  <div class="tool-panel" id="shellcode">
    <h3>Shellcode Generator</h3>
    
    <div class="input-area">
      <label>Platform:</label>
      <select id="shellcodeType" style="width: 100%; padding: 8px; border-radius: 4px; background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest);">
        <option value="linux_x86">Linux x86 - execve(/bin/sh)</option>
        <option value="linux_x64">Linux x64 - execve(/bin/sh)</option>
        <option value="windows_x86">Windows x86 - WinExec(cmd.exe)</option>
      </select>
    </div>
    
    <div class="action-btns">
      <button class="btn btn-primary" onclick="generateShellcode()">Generate</button>
      <button class="btn btn-secondary" onclick="clearShellcode()">Clear</button>
    </div>
    
    <div class="shellcode-box">
      <div>
        <label style="font-weight: 500; margin-bottom: 10px; display: block;">Raw Bytes:</label>
        <div class="result-box" id="shellcodeRaw">-</div>
      </div>
      <div>
        <label style="font-weight: 500; margin-bottom: 10px; display: block;">Python Format:</label>
        <div class="result-box" id="shellcodePython">-</div>
      </div>
    </div>
    
    <div>
      <label style="font-weight: 500; margin-bottom: 10px; display: block;">C Format:</label>
      <div class="result-box" id="shellcodeC">-</div>
    </div>
    
    <div style="padding: 12px; background: var(--md-code-bg-color); border-left: 4px solid var(--md-accent-fg-color); margin: 15px 0; border-radius: 4px;">
      <strong>Warning:</strong> Shellcode chỉ để học tập và CTF. Không sử dụng cho mục đích bất hợp pháp.
    </div>
  </div>

  <!-- Integer Overflow Calculator -->
  <div class="tool-panel" id="overflow">
    <h3>Integer Overflow Calculator</h3>
    
    <div class="input-area">
      <label>Data Type:</label>
      <select id="dataType" onchange="updateLimits()" style="width: 100%; padding: 8px; border-radius: 4px; background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest);">
        <option value="int8">int8_t (signed 8-bit)</option>
        <option value="uint8">uint8_t (unsigned 8-bit)</option>
        <option value="int16">int16_t (signed 16-bit)</option>
        <option value="uint16">uint16_t (unsigned 16-bit)</option>
        <option value="int32" selected>int32_t (signed 32-bit)</option>
        <option value="uint32">uint32_t (unsigned 32-bit)</option>
      </select>
    </div>
    
    <div class="overflow-calc" id="limits"></div>
    
    <div class="input-area">
      <label>Value 1:</label>
      <input type="number" id="val1" value="2147483647">
    </div>
    
    <div class="input-area">
      <label>Value 2:</label>
      <input type="number" id="val2" value="1">
    </div>
    
    <div class="action-btns">
      <button class="btn btn-primary" onclick="calcOverflow('add')">Add</button>
      <button class="btn btn-primary" onclick="calcOverflow('sub')">Subtract</button>
      <button class="btn btn-primary" onclick="calcOverflow('mul')">Multiply</button>
    </div>
    
    <div class="result-box" id="overflowResult">Result will appear here...</div>
  </div>

  <!-- Format String -->
  <div class="tool-panel" id="format">
    <h3>Format String Vulnerability Tester</h3>
    
    <div class="input-area">
      <label>Format String:</label>
      <input type="text" id="formatInput" placeholder="%x %x %x %s" value="%p %p %p">
    </div>
    
    <div class="input-area">
      <label>Number of Arguments:</label>
      <input type="number" id="formatArgs" value="3" min="1" max="20">
    </div>
    
    <div class="action-btns">
      <button class="btn btn-primary" onclick="testFormat()">Test Format</button>
      <button class="btn btn-secondary" onclick="clearFormat()">Clear</button>
    </div>
    
    <div class="result-box" id="formatOutput">-</div>
    
    <div style="margin-top: 20px;">
      <h4>Common Format Specifiers:</h4>
      <div class="result-box">%p - Pointer address
%x - Hexadecimal
%s - String
%d - Decimal
%n - Write to memory (dangerous!)
%[number]$p - Access argument at position</div>
    </div>
    
    <div style="padding: 12px; background: var(--md-code-bg-color); border-left: 4px solid var(--md-accent-fg-color); margin: 15px 0; border-radius: 4px;">
      <strong>Exploitation:</strong> Format string bugs có thể leak memory, đọc/ghi arbitrary memory. Sử dụng %n để write.
    </div>
  </div>
</div>

<script>
function switchTab(tab) {
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
  event.target.classList.add('active');
}

// Hex Viewer
function viewAsHex() {
  let input = document.getElementById('hexInput').value;
  let bytes = [];
  
  if (/^[0-9a-fA-F\s]+$/.test(input.replace(/\\x/g, ''))) {
    input = input.replace(/\\x/g, '').replace(/\s/g, '');
    for (let i = 0; i < input.length; i += 2) {
      bytes.push(parseInt(input.substr(i, 2), 16));
    }
  } else {
    for (let i = 0; i < input.length; i++) {
      bytes.push(input.charCodeAt(i));
    }
  }
  
  let html = '';
  for (let i = 0; i < bytes.length; i += 16) {
    const offset = i.toString(16).padStart(8, '0');
    const lineBytes = bytes.slice(i, i + 16);
    const hexStr = lineBytes.map(b => b.toString(16).padStart(2, '0')).join(' ');
    const asciiStr = lineBytes.map(b => (b >= 32 && b <= 126) ? String.fromCharCode(b) : '.').join('');
    
    html += `<div class="hex-line">
      <span class="hex-offset">${offset}</span>
      <span class="hex-bytes">${hexStr}</span>
      <span class="hex-ascii">${asciiStr}</span>
    </div>`;
  }
  
  document.getElementById('hexDisplay').innerHTML = html || 'No data';
}

function clearHex() {
  document.getElementById('hexInput').value = '';
  document.getElementById('hexDisplay').textContent = 'Hex dump will appear here...';
}

// Assembler (Mock - thực tế cần backend hoặc library)
function assemble() {
  const code = document.getElementById('asmInput').value;
  const lines = code.split('\n').filter(l => l.trim());
  
  const opcodes = {
    'mov eax, 0x1': 'b8 01 00 00 00',
    'xor ebx, ebx': '31 db',
    'int 0x80': 'cd 80',
    'nop': '90',
    'ret': 'c3',
    'push ebp': '55',
    'pop ebp': '5d'
  };
  
  let result = [];
  lines.forEach(line => {
    const cleaned = line.trim().toLowerCase();
    if (opcodes[cleaned]) {
      result.push(opcodes[cleaned]);
    } else {
      result.push('?? ?? (unknown)');
    }
  });
  
  document.getElementById('asmOutput').textContent = result.join('\n');
}

function disassemble() {
  const hex = document.getElementById('machineInput').value.replace(/\s/g, '');
  const mapping = {
    'b801000000': 'mov eax, 0x1',
    '31db': 'xor ebx, ebx',
    'cd80': 'int 0x80',
    '90': 'nop',
    'c3': 'ret'
  };
  
  let result = [];
  let i = 0;
  while (i < hex.length) {
    let found = false;
    for (let len = 10; len >= 2; len -= 2) {
      const chunk = hex.substr(i, len);
      if (mapping[chunk]) {
        result.push(mapping[chunk]);
        i += len;
        found = true;
        break;
      }
    }
    if (!found) {
      result.push('db 0x' + hex.substr(i, 2));
      i += 2;
    }
  }
  
  document.getElementById('disasmOutput').textContent = result.join('\n');
}

function clearAsm() {
  document.getElementById('asmInput').value = '';
  document.getElementById('asmOutput').textContent = 'Machine code will appear here...';
}

// Shellcode Generator
function generateShellcode() {
  const type = document.getElementById('shellcodeType').value;
  
  const shellcodes = {
    linux_x86: '31c050682f2f7368682f62696e89e350535389e1b00bcd80',
    linux_x64: '31c048bbd19d9691d08c97ff48f7db53545f995257545eb03b0f05',
    windows_x86: '6a006863616c636a0068636d642e8d54240454505050505050506a44ffd0'
  };
  
  const raw = shellcodes[type];
  const bytes = raw.match(/.{1,2}/g);
  
  document.getElementById('shellcodeRaw').textContent = '\\x' + bytes.join('\\x');
  document.getElementById('shellcodePython').textContent = 'shellcode = b"\\x' + bytes.join('\\x') + '"';
  document.getElementById('shellcodeC').textContent = 'unsigned char shellcode[] = "\\x' + bytes.join('\\x') + '";';
}

function clearShellcode() {
  document.getElementById('shellcodeRaw').textContent = '-';
  document.getElementById('shellcodePython').textContent = '-';
  document.getElementById('shellcodeC').textContent = '-';
}

// Integer Overflow
const types = {
  int8: { min: -128, max: 127, bits: 8 },
  uint8: { min: 0, max: 255, bits: 8 },
  int16: { min: -32768, max: 32767, bits: 16 },
  uint16: { min: 0, max: 65535, bits: 16 },
  int32: { min: -2147483648, max: 2147483647, bits: 32 },
  uint32: { min: 0, max: 4294967295, bits: 32 }
};

function updateLimits() {
  const type = document.getElementById('dataType').value;
  const limits = types[type];
  
  document.getElementById('limits').innerHTML = `
    <div class="calc-item">
      <div class="calc-label">Min Value</div>
      <div class="calc-value">${limits.min}</div>
    </div>
    <div class="calc-item">
      <div class="calc-label">Max Value</div>
      <div class="calc-value">${limits.max}</div>
    </div>
    <div class="calc-item">
      <div class="calc-label">Bits</div>
      <div class="calc-value">${limits.bits}</div>
    </div>
  `;
}

function calcOverflow(op) {
  const type = document.getElementById('dataType').value;
  const limits = types[type];
  const v1 = BigInt(document.getElementById('val1').value);
  const v2 = BigInt(document.getElementById('val2').value);
  
  let result;
  if (op === 'add') result = v1 + v2;
  else if (op === 'sub') result = v1 - v2;
  else if (op === 'mul') result = v1 * v2;
  
  const range = BigInt(limits.max) - BigInt(limits.min) + 1n;
  let wrapped = ((result - BigInt(limits.min)) % range + range) % range + BigInt(limits.min);
  
  const overflowed = result < limits.min || result > limits.max;
  
  document.getElementById('overflowResult').textContent = 
    `Result: ${result}\n` +
    `Wrapped: ${wrapped}\n` +
    `Overflow: ${overflowed ? 'YES ⚠️' : 'NO'}\n` +
    `Valid range: [${limits.min}, ${limits.max}]`;
}

// Format String
function testFormat() {
  const format = document.getElementById('formatInput').value;
  const numArgs = parseInt(document.getElementById('formatArgs').value);
  
  const mockStack = Array(numArgs).fill(0).map((_, i) => {
    return '0x' + Math.floor(Math.random() * 0xFFFFFFFF).toString(16).padStart(8, '0');
  });
  
  let output = `Mock Stack:\n${mockStack.map((v, i) => `[${i}] ${v}`).join('\n')}\n\n`;
  output += `Format String: ${format}\n\n`;
  output += `Simulated Output:\n`;
  
  const specifiers = format.match(/%[\d$]*[xpsd]/g) || [];
  let argIndex = 0;
  
  specifiers.forEach(spec => {
    if (argIndex < mockStack.length) {
      output += `${spec} -> ${mockStack[argIndex]}\n`;
      argIndex++;
    }
  });
  
  document.getElementById('formatOutput').textContent = output;
}

function clearFormat() {
  document.getElementById('formatInput').value = '';
  document.getElementById('formatOutput').textContent = '-';
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', updateLimits);
}
</script>