# 🧩 VLSM (Variable Length Subnet Mask)

> Tra cứu nhanh subnet mask, CIDR và các dải mạng phổ biến.

<!-- more -->

## 📘 Subnet Mask Information

| CIDR | Subnet Mask | Hosts | Network | Broadcast |
|------|--------------|--------|----------|------------|
| /24  | <code>255.255.255.0</code> | 254 | <code>192.168.1.0</code> | <code>192.168.1.255</code> |
| /25  | <code>255.255.255.128</code> | 126 | <code>192.168.1.0</code> | <code>192.168.1.127</code> |
| /26  | <code>255.255.255.192</code> | 62 | <code>192.168.1.0</code> | <code>192.168.1.63</code> |
| /27  | <code>255.255.255.224</code> | 30 | <code>192.168.1.0</code> | <code>192.168.1.31</code> |
| /28  | <code>255.255.255.240</code> | 14 | <code>192.168.1.0</code> | <code>192.168.1.15</code> |
| /29  | <code>255.255.255.248</code> | 6  | <code>192.168.1.0</code> | <code>192.168.1.7</code> |
| /30  | <code>255.255.255.252</code> | 2  | <code>192.168.1.0</code> | <code>192.168.1.3</code> |

---

## 📗 IPv4 Subnet Summary Table

<div class="center-table" markdown>
|Number of  <br>Addresses|Number of  <br>Bits|Prefix|Classful  <br>Notation|Mask|
|:--|:--|---|:--|:--|
|1|0|/32||<code>255.255.255.255</code>|
|2|1|/31||<code>255.255.255.254</code>|
|4|2|/30||<code>255.255.255.252</code>|
|8|3|/29||<code>255.255.255.248</code>|
|16|4|/28||<code>255.255.255.240</code>|
|32|5|/27||<code>255.255.255.224</code>|
|64|6|/26||<code>255.255.255.192</code>|
|128|7|/25||<code>255.255.255.128</code>|
|256|8|/24|1 C|<code>255.255.255.0</code>|
|512|9|/23|2 C|<code>255.255.254.0</code>|
|1 K|10|/22|4 C|<code>255.255.252.0</code>|
|2 K|11|/21|8 C|<code>255.255.248.0</code>|
|4 K|12|/20|16 C|<code>255.255.240.0</code>|
|8 K|13|/19|32 C|<code>255.255.224.0</code>|
|16 K|14|/18|64 C|<code>255.255.192.0</code>|
|32 K|15|/17|128 C|<code>255.255.128.0</code>|
|64 K|16|/16|1 B|<code>255.255.0.0</code>|
|128 K|17|/15|2 B|<code>255.254.0.0</code>|
|256 K|18|/14|4 B|<code>255.252.0.0</code>|
|512 K|19|/13|8 B|<code>255.248.0.0</code>|
|1 M|20|/12|16 B|<code>255.240.0.0</code>|
|2 M|21|/11|32 B|<code>255.224.0.0</code>|
|4 M|22|/10|64 B|<code>255.192.0.0</code>|
|8 M|23|/9|128 B|<code>255.128.0.0</code>|
|16 M|24|/8|1 A|<code>255.0.0.0</code>|
|32 M|25|/7|2 A|<code>254.0.0.0</code>|
|64 M|26|/6|4 A|<code>252.0.0.0</code>|
|128 M|27|/5|8 A|<code>248.0.0.0</code>|
|256 M|28|/4|16 A|<code>240.0.0.0</code>|
|512 M|29|/3|32 A|<code>224.0.0.0</code>|
|1024 M|30|/2|64 A|<code>192.0.0.0</code>|
</div>


<script>
// Tự động thêm nút copy cho tất cả <code> trong bảng
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("td code").forEach((code) => {
    const btn = document.createElement("button");
    btn.innerHTML = "📋";
    btn.classList.add("copy-btn");
    btn.title = "Copy value";

    btn.onclick = () => {
      navigator.clipboard.writeText(code.textContent);
      btn.innerHTML = "✅";
      setTimeout(() => (btn.innerHTML = "📋"), 800);
    };

    code.insertAdjacentElement("afterend", btn);
  });
});
</script>

<style>
.center-table table {
  margin: 1.5rem auto;
  width: auto;
  text-align: center;
}
.copy-btn {
  margin-left: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.9em;
  opacity: 0.7;
  transition: all 0.2s ease;
}
.copy-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>


---

### REFERENCES

[cheats sheet](https://subnetmaskcheatsheet.com/)
[others](https://networkproguide.com/cidr-subnet-mask-ipv4-cheat-sheet/)
[other](https://cnes.com/subnets.html)
