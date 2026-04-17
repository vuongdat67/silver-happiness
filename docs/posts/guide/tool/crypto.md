# Cryptography Playground

<style>
.crypto-container { max-width: 1000px; margin: 20px auto; }
.tool-selector { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0; }
.tool-btn { padding: 10px 20px; border: 2px solid var(--md-primary-fg-color); border-radius: 6px; background: transparent; color: var(--md-primary-fg-color); cursor: pointer; font-weight: 500; transition: all 0.2s; }
.tool-btn:hover { background: var(--md-primary-fg-color); color: white; }
.tool-btn.active { background: var(--md-primary-fg-color); color: white; }
.crypto-tool { display: none; margin: 20px 0; }
.crypto-tool.active { display: block; }
.io-group { margin: 15px 0; }
.io-group label { display: block; margin-bottom: 8px; font-weight: 500; }
.io-group textarea, .io-group input { width: 100%; padding: 10px; border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px; background: var(--md-code-bg-color); color: var(--md-default-fg-color); font-family: 'Consolas', monospace; resize: vertical; }
.io-group textarea { min-height: 100px; }
.controls { display: flex; gap: 10px; margin: 15px 0; flex-wrap: wrap; }
.btn { padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; transition: opacity 0.2s; }
.btn-primary { background: var(--md-primary-fg-color); color: white; }
.btn-secondary { background: var(--md-accent-fg-color); color: white; }
.btn:hover { opacity: 0.85; }
.output-box { padding: 12px; background: var(--md-code-bg-color); border-radius: 4px; margin: 10px 0; font-family: 'Consolas', monospace; word-break: break-all; cursor: pointer; border: 1px solid var(--md-default-fg-color--lightest); }
.output-box:hover { background: var(--md-accent-fg-color--transparent); }
.key-display { display: flex; gap: 10px; align-items: center; margin: 10px 0; }
.key-display pre { flex: 1; padding: 10px; background: var(--md-code-bg-color); border-radius: 4px; margin: 0; overflow-x: auto; }
.info-box { padding: 12px; background: var(--md-code-bg-color); border-left: 4px solid var(--md-accent-fg-color); margin: 15px 0; border-radius: 4px; }
</style>

<div class="crypto-container">
  <div class="tool-selector">
    <button class="tool-btn active" onclick="switchTool('classical')">Classical</button>
    <button class="tool-btn" onclick="switchTool('hash')">Hash</button>
    <button class="tool-btn" onclick="switchTool('encoding')">Encoding</button>
    <button class="tool-btn" onclick="switchTool('xor')">XOR</button>
    <button class="tool-btn" onclick="switchTool('rsa')">RSA</button>
  </div>

  <!-- Classical Ciphers -->
  <div class="crypto-tool active" id="classical">
    <h3>Classical Ciphers</h3>
    
    <div class="io-group">
      <label>Select Cipher:</label>
      <select id="cipherType" style="width: 100%; padding: 8px; border-radius: 4px; background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest);">
        <option value="caesar">Caesar Cipher</option>
        <option value="rot13">ROT13</option>
        <option value="vigenere">Vigenère Cipher</option>
        <option value="atbash">Atbash Cipher</option>
      </select>
    </div>
    
    <div class="io-group" id="keyInput" style="display: none;">
      <label>Key:</label>
      <input type="text" id="classicalKey" placeholder="Enter key">
    </div>
    
    <div class="io-group" id="shiftInput">
      <label>Shift (0-25):</label>
      <input type="number" id="caesarShift" min="0" max="25" value="3">
    </div>
    
    <div class="io-group">
      <label>Input Text:</label>
      <textarea id="classicalInput" placeholder="Enter text to encrypt/decrypt"></textarea>
    </div>
    
    <div class="controls">
      <button class="btn btn-primary" onclick="classicalEncrypt()">Encrypt</button>
      <button class="btn btn-primary" onclick="classicalDecrypt()">Decrypt</button>
      <button class="btn btn-secondary" onclick="clearClassical()">Clear</button>
    </div>
    
    <div class="io-group">
      <label>Output:</label>
      <div class="output-box" id="classicalOutput" onclick="copyOutput('classicalOutput')">Result will appear here...</div>
    </div>
  </div>

  <!-- Hash Functions -->
  <div class="crypto-tool" id="hash">
    <h3>Hash Functions</h3>
    
    <div class="io-group">
      <label>Input Text:</label>
      <textarea id="hashInput" placeholder="Enter text to hash"></textarea>
    </div>
    
    <div class="controls">
      <button class="btn btn-primary" onclick="computeHash()">Compute Hashes</button>
      <button class="btn btn-secondary" onclick="clearHash()">Clear</button>
    </div>
    
    <div class="io-group">
      <label>MD5:</label>
      <div class="output-box" id="md5Output" onclick="copyOutput('md5Output')">-</div>
    </div>
    
    <div class="io-group">
      <label>SHA-1:</label>
      <div class="output-box" id="sha1Output" onclick="copyOutput('sha1Output')">-</div>
    </div>
    
    <div class="io-group">
      <label>SHA-256:</label>
      <div class="output-box" id="sha256Output" onclick="copyOutput('sha256Output')">-</div>
    </div>
    
    <div class="info-box">
      <strong>Note:</strong> MD5 và SHA-1 không còn an toàn cho mục đích bảo mật. Dùng SHA-256 hoặc cao hơn.
    </div>
  </div>

  <!-- Encoding -->
  <div class="crypto-tool" id="encoding">
    <h3>Encoding / Decoding</h3>
    
    <div class="io-group">
      <label>Select Encoding:</label>
      <select id="encodingType" style="width: 100%; padding: 8px; border-radius: 4px; background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest);">
        <option value="base64">Base64</option>
        <option value="hex">Hexadecimal</option>
        <option value="url">URL Encoding</option>
        <option value="binary">Binary</option>
      </select>
    </div>
    
    <div class="io-group">
      <label>Input:</label>
      <textarea id="encodingInput" placeholder="Enter text"></textarea>
    </div>
    
    <div class="controls">
      <button class="btn btn-primary" onclick="encodeText()">Encode</button>
      <button class="btn btn-primary" onclick="decodeText()">Decode</button>
      <button class="btn btn-secondary" onclick="clearEncoding()">Clear</button>
    </div>
    
    <div class="io-group">
      <label>Output:</label>
      <div class="output-box" id="encodingOutput" onclick="copyOutput('encodingOutput')">Result will appear here...</div>
    </div>
  </div>

  <!-- XOR Cipher -->
  <div class="crypto-tool" id="xor">
    <h3>XOR Cipher</h3>
    
    <div class="io-group">
      <label>Input Text:</label>
      <textarea id="xorInput" placeholder="Enter text"></textarea>
    </div>
    
    <div class="io-group">
      <label>Key:</label>
      <input type="text" id="xorKey" placeholder="Enter key">
    </div>
    
    <div class="controls">
      <button class="btn btn-primary" onclick="xorCipher()">XOR Encrypt/Decrypt</button>
      <button class="btn btn-secondary" onclick="clearXor()">Clear</button>
    </div>
    
    <div class="io-group">
      <label>Output (Hex):</label>
      <div class="output-box" id="xorOutput" onclick="copyOutput('xorOutput')">Result will appear here...</div>
    </div>
    
    <div class="io-group">
      <label>Output (Text):</label>
      <div class="output-box" id="xorOutputText" onclick="copyOutput('xorOutputText')">-</div>
    </div>
    
    <div class="info-box">
      <strong>Tip:</strong> XOR là reversible - encrypt và decrypt giống nhau. Dùng để phân tích malware.
    </div>
  </div>

  <!-- RSA -->
  <div class="crypto-tool" id="rsa">
    <h3>RSA Encryption (Demo)</h3>
    
    <div class="controls">
      <button class="btn btn-secondary" onclick="generateRSA()">Generate RSA Keys</button>
    </div>
    
    <div class="key-display" id="rsaKeys" style="display: none;">
      <div style="flex: 1;">
        <label>Public Key (e, n):</label>
        <pre id="publicKey"></pre>
      </div>
      <div style="flex: 1;">
        <label>Private Key (d, n):</label>
        <pre id="privateKey"></pre>
      </div>
    </div>
    
    <div class="io-group">
      <label>Message (number only, small value):</label>
      <input type="number" id="rsaMessage" placeholder="Enter a number (e.g., 42)" min="1">
    </div>
    
    <div class="controls">
      <button class="btn btn-primary" onclick="rsaEncrypt()">Encrypt</button>
      <button class="btn btn-primary" onclick="rsaDecrypt()">Decrypt</button>
    </div>
    
    <div class="io-group">
      <label>Encrypted:</label>
      <div class="output-box" id="rsaEncrypted" onclick="copyOutput('rsaEncrypted')">-</div>
    </div>
    
    <div class="io-group">
      <label>Decrypted:</label>
      <div class="output-box" id="rsaDecrypted" onclick="copyOutput('rsaDecrypted')">-</div>
    </div>
    
    <div class="info-box">
      <strong>Note:</strong> Demo đơn giản với số nhỏ. RSA thực tế dùng số nguyên tố rất lớn (2048+ bits).
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>

<script>
function switchTool(tool) {
  document.querySelectorAll('.crypto-tool').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tool).classList.add('active');
  event.target.classList.add('active');
}

function copyOutput(id) {
  const text = document.getElementById(id).textContent;
  if (text && text !== '-' && !text.includes('Result will appear')) {
    navigator.clipboard.writeText(text);
    const original = document.getElementById(id).textContent;
    document.getElementById(id).textContent = '✓ Copied!';
    setTimeout(() => document.getElementById(id).textContent = original, 1000);
  }
}

// Classical Ciphers
document.getElementById('cipherType').addEventListener('change', function() {
  const type = this.value;
  document.getElementById('shiftInput').style.display = type === 'caesar' ? 'block' : 'none';
  document.getElementById('keyInput').style.display = type === 'vigenere' ? 'block' : 'none';
});

function classicalEncrypt() {
  const type = document.getElementById('cipherType').value;
  const text = document.getElementById('classicalInput').value;
  let result = '';
  
  if (type === 'caesar') {
    const shift = parseInt(document.getElementById('caesarShift').value);
    result = caesarCipher(text, shift);
  } else if (type === 'rot13') {
    result = caesarCipher(text, 13);
  } else if (type === 'vigenere') {
    const key = document.getElementById('classicalKey').value;
    result = vigenereCipher(text, key, true);
  } else if (type === 'atbash') {
    result = atbashCipher(text);
  }
  
  document.getElementById('classicalOutput').textContent = result;
}

function classicalDecrypt() {
  const type = document.getElementById('cipherType').value;
  const text = document.getElementById('classicalInput').value;
  let result = '';
  
  if (type === 'caesar') {
    const shift = parseInt(document.getElementById('caesarShift').value);
    result = caesarCipher(text, 26 - shift);
  } else if (type === 'rot13') {
    result = caesarCipher(text, 13);
  } else if (type === 'vigenere') {
    const key = document.getElementById('classicalKey').value;
    result = vigenereCipher(text, key, false);
  } else if (type === 'atbash') {
    result = atbashCipher(text);
  }
  
  document.getElementById('classicalOutput').textContent = result;
}

function caesarCipher(text, shift) {
  return text.replace(/[a-z]/gi, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
  });
}

function vigenereCipher(text, key, encrypt) {
  key = key.toUpperCase();
  let result = '', keyIndex = 0;
  
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (/[a-z]/i.test(c)) {
      const base = c <= 'Z' ? 65 : 97;
      const shift = key.charCodeAt(keyIndex % key.length) - 65;
      const newChar = encrypt ? 
        String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base) :
        String.fromCharCode(((c.charCodeAt(0) - base - shift + 26) % 26) + base);
      result += newChar;
      keyIndex++;
    } else {
      result += c;
    }
  }
  return result;
}

function atbashCipher(text) {
  return text.replace(/[a-z]/gi, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(25 - (c.charCodeAt(0) - base) + base);
  });
}

function clearClassical() {
  document.getElementById('classicalInput').value = '';
  document.getElementById('classicalOutput').textContent = 'Result will appear here...';
}

// Hash Functions
function computeHash() {
  const text = document.getElementById('hashInput').value;
  document.getElementById('md5Output').textContent = CryptoJS.MD5(text).toString();
  document.getElementById('sha1Output').textContent = CryptoJS.SHA1(text).toString();
  document.getElementById('sha256Output').textContent = CryptoJS.SHA256(text).toString();
}

function clearHash() {
  document.getElementById('hashInput').value = '';
  document.getElementById('md5Output').textContent = '-';
  document.getElementById('sha1Output').textContent = '-';
  document.getElementById('sha256Output').textContent = '-';
}

// Encoding
function encodeText() {
  const type = document.getElementById('encodingType').value;
  const text = document.getElementById('encodingInput').value;
  let result = '';
  
  try {
    if (type === 'base64') {
      result = btoa(unescape(encodeURIComponent(text)));
    } else if (type === 'hex') {
      result = Array.from(text).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
    } else if (type === 'url') {
      result = encodeURIComponent(text);
    } else if (type === 'binary') {
      result = Array.from(text).map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
    }
    document.getElementById('encodingOutput').textContent = result;
  } catch (e) {
    document.getElementById('encodingOutput').textContent = 'Error: ' + e.message;
  }
}

function decodeText() {
  const type = document.getElementById('encodingType').value;
  const text = document.getElementById('encodingInput').value;
  let result = '';
  
  try {
    if (type === 'base64') {
      result = decodeURIComponent(escape(atob(text)));
    } else if (type === 'hex') {
      result = text.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    } else if (type === 'url') {
      result = decodeURIComponent(text);
    } else if (type === 'binary') {
      result = text.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
    }
    document.getElementById('encodingOutput').textContent = result;
  } catch (e) {
    document.getElementById('encodingOutput').textContent = 'Error: ' + e.message;
  }
}

function clearEncoding() {
  document.getElementById('encodingInput').value = '';
  document.getElementById('encodingOutput').textContent = 'Result will appear here...';
}

// XOR Cipher
function xorCipher() {
  const text = document.getElementById('xorInput').value;
  const key = document.getElementById('xorKey').value;
  
  if (!key) {
    alert('Please enter a key');
    return;
  }
  
  let result = [];
  for (let i = 0; i < text.length; i++) {
    result.push(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  
  const hexResult = result.map(b => b.toString(16).padStart(2, '0')).join('');
  const textResult = result.map(b => String.fromCharCode(b)).join('');
  
  document.getElementById('xorOutput').textContent = hexResult;
  document.getElementById('xorOutputText').textContent = textResult;
}

function clearXor() {
  document.getElementById('xorInput').value = '';
  document.getElementById('xorKey').value = '';
  document.getElementById('xorOutput').textContent = 'Result will appear here...';
  document.getElementById('xorOutputText').textContent = '-';
}

// RSA (Simple demo)
let rsaPublic = {}, rsaPrivate = {};

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function modInverse(e, phi) {
  let [old_r, r] = [phi, e];
  let [old_s, s] = [0, 1];
  
  while (r !== 0) {
    const quotient = Math.floor(old_r / r);
    [old_r, r] = [r, old_r - quotient * r];
    [old_s, s] = [s, old_s - quotient * s];
  }
  
  return old_s < 0 ? old_s + phi : old_s;
}

function modPow(base, exp, mod) {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}

function generateRSA() {
  const p = 61, q = 53;
  const n = p * q;
  const phi = (p - 1) * (q - 1);
  let e = 17;
  
  while (gcd(e, phi) !== 1) e++;
  
  const d = modInverse(e, phi);
  
  rsaPublic = { e, n };
  rsaPrivate = { d, n };
  
  document.getElementById('publicKey').textContent = `e: ${e}\nn: ${n}`;
  document.getElementById('privateKey').textContent = `d: ${d}\nn: ${n}`;
  document.getElementById('rsaKeys').style.display = 'flex';
}

function rsaEncrypt() {
  const m = parseInt(document.getElementById('rsaMessage').value);
  if (!rsaPublic.e || m >= rsaPublic.n) {
    alert('Generate keys first or enter smaller number');
    return;
  }
  const c = modPow(m, rsaPublic.e, rsaPublic.n);
  document.getElementById('rsaEncrypted').textContent = c;
}

function rsaDecrypt() {
  const c = parseInt(document.getElementById('rsaEncrypted').textContent);
  if (!rsaPrivate.d || isNaN(c)) {
    alert('Encrypt a message first');
    return;
  }
  const m = modPow(c, rsaPrivate.d, rsaPrivate.n);
  document.getElementById('rsaDecrypted').textContent = m;
}
</script>