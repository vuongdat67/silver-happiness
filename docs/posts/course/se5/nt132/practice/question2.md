# Đề 2

## PHẦN 1: TRẮC NGHIỆM (50 CÂU)

### A. ROUTING & SWITCHING (15 câu)

**Câu 1:** Router lưu cấu hình đang chạy (running-config) ở đâu?
A. Flash
B. **RAM** ✓
C. NVRAM
D. ROM

**Câu 2:** Lệnh nào lưu cấu hình hiện tại vào NVRAM?
A. write memory
B. copy running-config startup-config
C. **Cả A và B đều đúng** ✓
D. save config

**Câu 3:** Metric của RIP là gì?
A. Bandwidth
B. **Hop count** ✓
C. Delay
D. Cost

**Câu 4:** RIPv2 gửi update đến địa chỉ nào?
A. 255.255.255.255
B. **224.0.0.9** ✓
C. 224.0.0.5
D. 239.255.255.255

**Câu 5:** OSPF sử dụng thuật toán nào?
A. Bellman-Ford
B. **Dijkstra** ✓
C. Distance Vector
D. DUAL

**Câu 6:** RIP gửi routing update mỗi bao lâu?
A. 15 giây
B. 60 giây
C. **30 giây** ✓
D. 90 giây

**Câu 7:** Ưu điểm của Static Routing là gì?
A. Tự động cập nhật khi topology thay đổi
B. **Bảo mật cao, tiêu tốn ít băng thông** ✓
C. Dễ dàng triển khai trên mạng lớn
D. Không cần kiến thức về topology

**Câu 8:** Wildcard mask của subnet 192.168.10.0/24 là gì?
A. 255.255.255.0
B. 0.0.0.0
C. **0.0.0.255** ✓
D. 255.255.255.255

**Câu 9:** Lệnh nào hiển thị routing table trên router?
A. show ip interface
B. **show ip route** ✓
C. show running-config
D. show protocols

**Câu 10:** Trong routing table, ký hiệu "C" có nghĩa là gì?
A. Static route
B. **Connected** ✓
C. RIP route
D. OSPF route

**Câu 11:** Default route được cấu hình như thế nào?
A. ip route 255.255.255.255 255.255.255.255 <next-hop>
B. **ip route 0.0.0.0 0.0.0.0 <next-hop>** ✓
C. ip route any any <next-hop>
D. ip default-gateway <next-hop>

**Câu 12:** Lệnh nào loại bỏ static route?
A. delete ip route
B. remove ip route
C. **no ip route** ✓
D. clear ip route

**Câu 13:** RIPv2 khác RIPv1 ở điểm nào?
A. Hỗ trợ VLSM/CIDR
B. Có authentication
C. Gửi multicast thay vì broadcast
D. **Tất cả đều đúng** ✓

**Câu 14:** Passive-interface trong RIP dùng để làm gì?
A. Tắt interface
B. **Ngăn gửi routing update ra interface đó** ✓
C. Chặn nhận routing update
D. Tăng tốc độ hội tụ

**Câu 15:** OSPF thuộc loại giao thức định tuyến nào?
A. Distance Vector
B. **Link-State** ✓
C. Hybrid
D. Path Vector

---

### B. VLAN & INTER-VLAN ROUTING (10 câu)

**Câu 16:** VLAN được tạo trên thiết bị nào?
A. Router
B. **Switch** ✓
C. Hub
D. Access Point

**Câu 17:** Trunk port cho phép traffic của bao nhiêu VLAN đi qua?
A. Chỉ 1 VLAN
B. Tối đa 10 VLAN
C. **Nhiều VLAN** ✓
D. Không VLAN nào

**Câu 18:** Giao thức encapsulation phổ biến cho trunk là gì?
A. **802.1Q (dot1q)** ✓
B. ISL
C. VTP
D. STP

**Câu 19:** Router-on-a-Stick sử dụng gì để phân biệt các VLAN?
A. Multiple physical interfaces
B. **Sub-interface** ✓
C. Virtual interface
D. Loopback interface

**Câu 20:** Native VLAN trên trunk mặc định là VLAN nào?
A. VLAN 0
B. **VLAN 1** ✓
C. VLAN 99
D. VLAN 1005

**Câu 21:** Multilayer Switch routing giữa các VLAN bằng cách nào?
A. Physical interface
B. Sub-interface
C. **SVI (Switch Virtual Interface)** ✓
D. Trunk interface

**Câu 22:** Lệnh nào gán port vào VLAN 10?
A. vlan 10
B. set vlan 10
C. **switchport access vlan 10** ✓
D. interface vlan 10

**Câu 23:** Lệnh tạo trunk port trên switch?
A. trunk enable
B. **switchport mode trunk** ✓
C. switchport trunk on
D. set trunk

**Câu 24:** Legacy Inter-VLAN routing có nhược điểm gì?
A. Cấu hình phức tạp
B. **Lãng phí port router** ✓
C. Không bảo mật
D. Tốc độ chậm

**Câu 25:** Lệnh nào kiểm tra VLAN đã tạo?
A. show vlan database
B. **show vlan brief** ✓
C. show running-config
D. Cả A và B

---

### C. DHCP & NAT (8 câu)

**Câu 26:** DHCP hoạt động ở layer nào của OSI?
A. Layer 2
B. Layer 3
C. Layer 4
D. **Layer 7** ✓

**Câu 27:** Thứ tự các bước trong DHCP là gì?
A. Offer → Discover → Request → Acknowledge
B. **Discover → Offer → Request → Acknowledge** ✓
C. Request → Discover → Offer → Acknowledge
D. Discover → Request → Offer → Acknowledge

**Câu 28:** DHCP client gửi Discover message đến địa chỉ nào?
A. DHCP server IP
B. **255.255.255.255** ✓
C. 224.0.0.9
D. 127.0.0.1

**Câu 29:** DHCP sử dụng port nào?
A. TCP 67 và 68
B. **UDP 67 và 68** ✓
C. TCP 80
D. UDP 53

**Câu 30:** Lệnh nào loại trừ dải IP không được cấp phát DHCP?
A. **ip dhcp excluded-address** ✓
B. no ip dhcp pool
C. ip dhcp deny
D. dhcp exclude

**Câu 31:** NAT chuyển đổi gì?
A. **Private IP ↔ Public IP** ✓
B. MAC address
C. Port number only
D. VLAN ID

**Câu 32:** NAT Overload còn được gọi là gì?
A. Static NAT
B. Dynamic NAT
C. **PAT (Port Address Translation)** ✓
D. Double NAT

**Câu 33:** Port Forwarding trong NAT dùng để làm gì?
A. Chuyển port sang IP khác
B. **Cho phép truy cập từ Internet vào server nội bộ** ✓
C. Tăng tốc độ kết nối
D. Bảo mật mạng

---

### D. ACL (ACCESS CONTROL LIST) (10 câu)

**Câu 34:** Standard ACL lọc traffic dựa trên gì?
A. **Source IP address** ✓
B. Destination IP address
C. Port number
D. Protocol type

**Câu 35:** Range số ACL của Standard ACL là gì?
A. **1-99 và 1300-1999** ✓
B. 100-199 và 2000-2699
C. 1-1000
D. 200-299

**Câu 36:** Extended ACL được đặt ở đâu trong topology?
A. Gần destination
B. **Gần source** ✓
C. Ở giữa mạng
D. Trên core switch

**Câu 37:** Wildcard mask 0.0.0.0 tương đương với keyword nào?
A. any
B. **host** ✓
C. network
D. broadcast

**Câu 38:** Trong ACL, implicit deny có nghĩa là gì?
A. Cho phép tất cả traffic
B. **Từ chối tất cả traffic không được permit** ✓
C. Cảnh báo administrator
D. Log tất cả traffic

**Câu 39:** ACL xử lý traffic theo thứ tự nào?
A. Bottom-up
B. **Top-down** ✓
C. Ngẫu nhiên
D. Theo priority

**Câu 40:** Lệnh nào apply ACL vào interface?
A. **ip access-group** ✓
B. ip access-list
C. access-class
D. apply acl

**Câu 41:** Extended ACL có thể lọc theo port SSH (22) không?
A. Không
B. **Có** ✓
C. Chỉ khi dùng với firewall
D. Cần thêm module

**Câu 42:** Một interface có thể có bao nhiêu ACL per direction?
A. Không giới hạn
B. Tối đa 5
C. **1 ACL per protocol per direction** ✓
D. 2 ACL

**Câu 43:** Lệnh nào xóa ACL số 10?
A. delete access-list 10
B. remove acl 10
C. **no access-list 10** ✓
D. clear access-list 10

---

### E. WINDOWS & LINUX ADMINISTRATION (7 câu)

**Câu 44:** Active Directory Domain Services (AD DS) quản lý gì?
A. File sharing only
B. **User authentication và authorization tập trung** ✓
C. Network routing
D. Email service

**Câu 45:** Share permission "Change" cho phép làm gì?
A. Chỉ xem file
B. **Read + tạo/sửa/xóa file** ✓
C. Thay đổi permission
D. Take ownership

**Câu 46:** File /etc/passwd trong Linux chứa gì?
A. Mật khẩu user
B. **Thông tin user account** ✓
C. Group information
D. Network configuration

**Câu 47:** Lệnh nào tạo user trong Linux?
A. createuser
B. adduser
C. **useradd** ✓
D. newuser

**Câu 48:** Lệnh nào xem IP address trên Linux?
A. ipconfig
B. **ifconfig hoặc ip addr** ✓
C. netstat
D. route

**Câu 49:** DNS Server có chức năng gì?
A. Cấp phát IP
B. **Phân giải tên miền thành IP** ✓
C. Chia sẻ file
D. Bảo mật mạng

**Câu 50:** Group Policy trong Windows dùng để làm gì?
A. Tạo group user
B. **Áp dụng chính sách quản lý tập trung** ✓
C. Chia sẻ file
D. Cấu hình DNS

---

## PHẦN 2: TỰ LUẬN (5-6 ĐIỂM)

### ĐỀ MẪU 1: ROUTING & TROUBLESHOOTING

**MÔ HÌNH:**
```bash
[PC1: 192.168.1.10/24] --- [R1] --- [R2] --- [PC2: 192.168.3.10/24]
                            |         |
                      192.168.1.1   192.168.3.1
                      
Link giữa R1-R2: 10.0.0.0/30
R1: G0/0 (192.168.1.1), S0/0/0 (10.0.0.1)
R2: S0/0/0 (10.0.0.2), G0/0 (192.168.3.1)
```

**YÊU CẦU:**

**Phần 1 (3 điểm):** Cấu hình Static Routing để PC1 ping được PC2
- Đưa ra các lệnh cấu hình trên R1 và R2
- Giải thích mục đích của từng lệnh

**Phần 2 (3 điểm):** Cho show running-config sau:

**R1:**
```bash
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
!
interface Serial0/0/0
 ip address 10.0.0.1 255.255.255.252
!
ip route 192.168.3.0 255.255.255.0 10.0.0.3
```

**R2:**
```
interface Serial0/0/0
 ip address 10.0.0.2 255.255.255.252
!
interface GigabitEthernet0/0
 ip address 192.168.3.1 255.255.255.0
```

**Hiện tượng:** PC1 không ping được PC2

**Yêu cầu:**
1. Xác định vấn đề (có thể có nhiều vấn đề)
2. Đưa ra giải pháp cấu hình chi tiết
3. Lệnh kiểm tra sau khi sửa

---

### ĐÁP ÁN MẪU ĐỀ 1:

**Phần 1:**

**Cấu hình R1:**
```
R1(config)# ip route 192.168.3.0 255.255.255.0 10.0.0.2
(Hoặc: ip route 192.168.3.0 255.255.255.0 Serial0/0/0)
```
→ Tạo static route đến mạng 192.168.3.0/24 qua next-hop 10.0.0.2

**Cấu hình R2:**
```
R2(config)# ip route 192.168.1.0 255.255.255.0 10.0.0.1
(Hoặc: ip route 192.168.1.0 255.255.255.0 Serial0/0/0)
```
→ Tạo static route đến mạng 192.168.1.0/24 qua next-hop 10.0.0.1

**Phần 2:**

**Vấn đề phát hiện:**
1. **R1:** Next-hop sai (10.0.0.3 thay vì 10.0.0.2)
2. **R2:** Thiếu route về mạng 192.168.1.0/24

**Giải pháp:**

**Trên R1:**
```
R1(config)# no ip route 192.168.3.0 255.255.255.0 10.0.0.3
R1(config)# ip route 192.168.3.0 255.255.255.0 10.0.0.2
```

**Trên R2:**
```
R2(config)# ip route 192.168.1.0 255.255.255.0 10.0.0.1
```

**Lệnh kiểm tra:**
```
R1# show ip route
→ Kiểm tra route 192.168.3.0/24 có next-hop đúng 10.0.0.2

R2# show ip route
→ Kiểm tra có route đến 192.168.1.0/24

PC1> ping 192.168.3.10
→ Phải thành công
```

---

### ĐỀ MẪU 2: VLAN & INTER-VLAN ROUTING

**MÔ HÌNH:**
```
[PC1: VLAN10] ---\
                   [SW1] --- [R1] --- [Internet]
[PC2: VLAN20] ---/

PC1: 192.168.10.5/24
PC2: 192.168.20.5/24
SW1: Port 1-10 (VLAN10), Port 11-20 (VLAN20), Port 24 (Trunk to R1)
R1: G0/0 (kết nối SW1)
```

**YÊU CẦU:**

**Phần 1 (3 điểm):** Cấu hình Router-on-a-Stick
- Cấu hình SW1: tạo VLAN, gán port, trunk
- Cấu hình R1: sub-interface cho VLAN 10, 20
- PC1, PC2 phải ping được nhau

**Phần 2 (3 điểm):** Troubleshooting

**Hiện tượng:** PC1 ping được PC trong cùng VLAN nhưng không ping được PC2

**Show running-config:**

**SW1:**
```
vlan 10
 name Sales
!
vlan 20
 name IT
!
interface range Fa0/1-10
 switchport mode access
 switchport access vlan 10
!
interface range Fa0/11-20
 switchport mode access
 switchport access vlan 20
!
interface Fa0/24
 switchport mode access
```

**R1:**
```
interface GigabitEthernet0/0
 no shutdown
!
interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
!
interface GigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
```

**Yêu cầu:**
1. Xác định vấn đề
2. Giải pháp cấu hình
3. Lệnh kiểm tra

---

### ĐÁP ÁN MẪU ĐỀ 2:

**Phần 1:**

**Cấu hình SW1:**
```
SW1(config)# vlan 10
SW1(config-vlan)# name Sales
SW1(config)# vlan 20
SW1(config-vlan)# name IT

SW1(config)# interface range fa0/1-10
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 10

SW1(config)# interface range fa0/11-20
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 20

SW1(config)# interface fa0/24
SW1(config-if)# switchport mode trunk
```

**Cấu hình R1:**
```
R1(config)# interface g0/0
R1(config-if)# no shutdown

R1(config)# interface g0/0.10
R1(config-subif)# encapsulation dot1Q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0

R1(config)# interface g0/0.20
R1(config-subif)# encapsulation dot1Q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
```

**Phần 2:**

**Vấn đề:**
- Port Fa0/24 trên SW1 đang ở mode ACCESS thay vì TRUNK
- Traffic của các VLAN không thể đi qua được

**Giải pháp:**
```
SW1(config)# interface fa0/24
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 10,20
```

**Lệnh kiểm tra:**
```
SW1# show interface trunk
→ Kiểm tra Fa0/24 đã là trunk, cho phép VLAN 10,20

SW1# show vlan brief
→ Kiểm tra port gán đúng VLAN

R1# show ip interface brief
→ Kiểm tra sub-interface up/up

PC1> ping 192.168.20.5
→ Phải thành công
```

---

### ĐỀ MẪU 3: DHCP & NAT

**MÔ HÌNH:**
```
[DHCP Clients] --- [R1] --- [Internet]
               192.168.1.1  Public: 203.0.113.10

Mạng LAN: 192.168.1.0/24
Dải IP cấp phát: 192.168.1.100 - 192.168.1.200
IP loại trừ: 192.168.1.1 - 192.168.1.50
Gateway: 192.168.1.1
DNS: 8.8.8.8
```

**YÊU CẦU:**

**Phần 1 (3 điểm):**
1. Cấu hình R1 làm DHCP Server
2. Cấu hình NAT Overload (PAT) để client ra Internet
3. Giải thích từng bước cấu hình

**Phần 2 (3 điểm):** Troubleshooting

**Hiện tượng:** Client nhận được IP từ DHCP nhưng không ra được Internet

**Show running-config R1:**
```
ip dhcp excluded-address 192.168.1.1 192.168.1.50
!
ip dhcp pool LAN
 network 192.168.1.0 255.255.255.0
 default-router 192.168.1.1
 dns-server 8.8.8.8
!
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
 ip nat inside
!
interface GigabitEthernet0/1
 ip address 203.0.113.10 255.255.255.252
!
access-list 1 permit 192.168.1.0 0.0.0.255
!
ip nat inside source list 1 interface GigabitEthernet0/1 overload
```

**Yêu cầu:**
1. Xác định vấn đề
2. Giải pháp cấu hình
3. Lệnh kiểm tra NAT

---

### ĐÁP ÁN MẪU ĐỀ 3:

**Phần 1:**

**Bước 1: Cấu hình DHCP Server**
```
R1(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.50
→ Loại trừ dải IP không cấp phát

R1(config)# ip dhcp pool LAN
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
→ Khai báo network cấp phát

R1(dhcp-config)# default-router 192.168.1.1
→ Cấu hình gateway cho client

R1(dhcp-config)# dns-server 8.8.8.8
→ Cấu hình DNS server
```

**Bước 2: Cấu hình NAT**
```
R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255
→ Định nghĩa traffic được NAT

R1(config)# ip nat inside source list 1 interface g0/1 overload
→ NAT overload (PAT) ra interface g0/1

R1(config)# interface g0/0
R1(config-if)# ip nat inside
→ Khai báo inside interface

R1(config)# interface g0/1
R1(config-if)# ip nat outside
→ Khai báo outside interface
```

**Phần 2:**

**Vấn đề:**
- Interface G0/1 (outside) thiếu khai báo "ip nat outside"

**Giải pháp:**
```
R1(config)# interface g0/1
R1(config-if)# ip nat outside
```

**Lệnh kiểm tra:**
```
R1# show ip nat translations
→ Xem NAT translation table

R1# show ip nat statistics
→ Kiểm tra số lượng translation

R1# show ip interface brief
→ Kiểm tra interface up/up

Client> ipconfig
→ Kiểm tra nhận IP từ DHCP

Client> ping 8.8.8.8
→ Kiểm tra ra Internet
```

---

### ĐỀ MẪU 4: ACL SECURITY

**MÔ HÌNH:**
```
[192.168.1.0/24] --- [R1] --- [Server: 10.1.1.10]
   PC Network              Web(80), SSH(22), FTP(21)
```

**YÊU CẦU:**

**Phần 1 (3 điểm):** Cấu hình Extended ACL với chính sách:
- Cho phép mạng 192.168.1.0/24 truy cập HTTP đến Server
- Chặn mạng 192.168.1.0/24 truy cập SSH đến Server
- Chặn tất cả FTP traffic
- Cho phép tất cả traffic khác

**Phần 2 (3 điểm):** Troubleshooting

**Hiện tượng:** Không có PC nào trong mạng 192.168.1.0/24 truy cập được Server (cả HTTP)

**Show running-config:**
```
access-list 100 deny tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 22
access-list 100 deny tcp any any eq 21
access-list 100 permit tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 80
!
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
!
interface GigabitEthernet0/1
 ip address 10.1.1.1 255.255.255.0
 ip access-group 100 out
```

**Yêu cầu:**
1. Phân tích ACL hiện tại
2. Xác định vấn đề
3. Sửa lại ACL đúng

---

### ĐÁP ÁN MẪU ĐỀ 4:

**Phần 1:**

```
R1(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 80
→ Cho phép HTTP

R1(config)# access-list 100 deny tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 22
→ Chặn SSH

R1(config)# access-list 100 deny tcp any any eq 21
→ Chặn tất cả FTP

R1(config)# access-list 100 permit ip any any
→ Cho phép tất cả traffic khác (vượt implicit deny)

R1(config)# interface g0/1
R1(config-if)# ip access-group 100 out
→ Apply ACL outbound trên interface đến Server
```

**Giải thích:**
- ACL xử lý top-down, cần permit HTTP trước khi deny SSH
- Cuối cùng cần "permit ip any any" để không bị implicit deny

**Phần 2:**

**Vấn đề:**
- Thứ tự ACL SAI: Deny SSH đứng trước Permit HTTP
- ACL xử lý từ trên xuống, nên HTTP bị chặn bởi implicit deny ở cuối
- Thiếu "permit ip any any" ở cuối

**Phân tích:**
```
Line 1: deny SSH → OK
Line 2: deny FTP → OK  
Line 3: permit HTTP → OK nhưng đứng SAI VỊ TRÍ
→ Không có line nào khớp HTTP nên bị implicit deny
```

**Giải pháp:**

**Cách 1: Sửa thứ tự (KHUYẾN NGHỊ)**
```
R1(config)# no access-list 100

R1(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 80
R1(config)# access-list 100 deny tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 22
R1(config)# access-list 100 deny tcp any any eq 21
R1(config)# access-list 100 permit ip any any
```

**Cách 2: Dùng Named ACL (nâng cao)**
```
R1(config)# ip access-list extended SERVER_POLICY
R1(config-ext-nacl)# 10 permit tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 80
R1(config-ext-nacl)# 20 deny tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 22
R1(config-ext-nacl)# 30 deny tcp any any eq 21
R1(config-ext-nacl)# 40 permit ip any any

R1(config)# interface g0/1
R1(config-if)# no ip access-group 100 out
R1(config-if)# ip access-group SERVER_POLICY out
```

**Lệnh kiểm tra:**
```
R1# show access-lists
→ Kiểm tra thứ tự ACL

R1# show ip interface g0/1
→ Kiểm tra ACL applied đúng interface và direction

Client> telnet 10.1.1.10 80
→ Phải kết nối được (HTTP)

Client> ssh 10.1.1.10
→ Phải bị từ chối
```

---

### ĐỀ MẪU 5: NETWORK MANAGEMENT & MONITORING

**TÌNH HUỐNG:**

Công ty có hệ thống mạng gồm:
- 50 Windows Server
- 30 Linux Server  
- 100 network devices (router, switch)
- 5 chi nhánh ở các tỉnh khác nhau

**YÊU CẦU:**

**Phần 1 (3 điểm):** Đề xuất giải pháp quản lý và giám sát hệ thống
- Công cụ/phần mềm sử dụng
- Các thành phần cần triển khai
- Các chỉ số cần giám sát

**Phần 2 (3 điểm):** Đề xuất giải pháp bảo mật
- Bảo vệ network infrastructure
- Kiểm soát truy cập
- Phát hiện và phòng chống tấn công

---

### ĐÁP ÁN MẪU ĐỀ 5:

**Phần 1: GIẢI PHÁP GIÁM SÁT**

**1. Công cụ đề xuất:**

**A. Nagios/Zabbix (Network Monitoring System)**
- Giám sát thiết bị mạng (router, switch, firewall)
- Giám sát server (Windows, Linux)
- Cảnh báo real-time khi có sự cố

**B. SNMP (Simple Network Management Protocol)**
- Agent cài trên mỗi thiết bị
- Thu thập thông tin: CPU, RAM, bandwidth, interface status
- Gửi về NMS để phân tích

**2. Các thành phần triển khai:**

```
[Các thiết bị/server] → [SNMP Agent] → [Nagios/Zabbix Server] → [Web Dashboard]
                                              ↓
                                        [Alert System]
                                    (Email, SMS, Telegram)
```

**Thành phần:**
- **Management Server**: Cài Nagios/Zabbix tại trụ sở chính
- **Agent**: Cài trên mỗi server, thiết bị (SNMP, Nagios agent)
- **Database**: Lưu trữ historical data (MySQL/PostgreSQL)
- **Web Interface**: Xem dashboard, cấu hình

**3. Các chỉ số giám sát (FCAPS):**

**Fault Management:**
- Interface up/down
- Service status (HTTP, SSH, DNS, DHCP)
- Packet loss, latency

**Performance Management:**
- CPU utilization (>80% cảnh báo)
- RAM usage
- Disk space (>90% cảnh báo)
- Network bandwidth (in/out)
- Response time của services

**Configuration Management:**
- Backup config router/switch tự động hàng ngày
- Version control
- Change tracking

**Accounting Management:**
- Bandwidth usage per user/department
- Service usage logs

**Security Management:**
- Failed login attempts
- Firewall logs
- IDS/IPS alerts

**4. Cấu hình mẫu SNMP trên Router:**
```
R1(config)# snmp-server community public RO
R1(config)# snmp-server host 192.168.100.10 version 2c public
R1(config)# snmp-server enable traps
```
→ Cho phép NMS (192.168.100.10) đọc thông tin qua SNMP

---

**Phần 2: GIẢI PHÁP BẢO MẬT**

**1. Bảo vệ Network Infrastructure:**

**A. Phân tầng bảo mật:**
```
Internet → Firewall → DMZ (Web, Mail server) → Internal Firewall → LAN
```

**B. Hardening thiết bị:**
```
Router(config)# no ip http server
Router(config)# no cdp run
Router(config)# service password-encryption
Router(config)# enable secret <strong-password>
Router(config)# line vty 0 4
Router(config-line)# transport input ssh
Router(config-line)# login local
Router(config)# ip ssh version 2
```

**C. Port Security trên Switch:**
```
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security violation shutdown
Switch(config-if)# switchport port-security mac-address sticky
```
→ Giới hạn số MAC, tự động shutdown port nếu vi phạm

**2. Kiểm soát truy cập:**

**A. ACL trên Router:**
```
! Chỉ cho phép IT department (192.168.10.0/24) SSH vào router
access-list 10 permit 192.168.10.0 0.0.0.255
access-list 10 deny any

line vty 0 4
 access-class 10 in
```

**B. 802.1X (NAC - Network Access Control):**
- Xác thực thiết bị trước khi cho vào mạng
- Dùng RADIUS server
- Chỉ thiết bị có certificate mới vào được

**C. VPN cho chi nhánh:**
```
! IPsec VPN giữa HQ và chi nhánh
crypto isakmp policy 10
 encryption aes 256
 authentication pre-share
 group 2

crypto ipsec transform-set MYSET esp-aes 256 esp-sha-hmac

crypto map MYMAP 10 ipsec-isakmp
 set peer <chi-nhanh-IP>
 set transform-set MYSET
 match address 101

interface g0/1
 crypto map MYMAP
```

**3. Phát hiện và phòng chống tấn công:**

**A. IDS/IPS (Intrusion Detection/Prevention System):**
- Triển khai Snort/Suricata
- Đặt ở điểm kết nối Internet
- Detect: SQL injection, DDoS, port scanning
- Prevent: Tự động block IP tấn công

**B. DDoS Protection:**
```
! Rate limiting
interface g0/0
 rate-limit input 100000000 2000000 4000000 conform-action transmit exceed-action drop

! ACL chặn traffic bất thường
access-list 101 deny icmp any any echo
access-list 101 permit ip any any
```

**C. SIEM (Security Information and Event Management):**
- Sử dụng: Wazuh, Splunk, ELK Stack
- Thu thập log từ tất cả thiết bị
- Phát hiện pattern bất thường
- Cảnh báo khi có dấu hiệu tấn công

**D. Regular Security Audit:**
- Quét lỗ hổng định kỳ (Nessus, OpenVAS)
- Kiểm tra cấu hình ACL, firewall rules
- Review user permissions
- Update firmware/software

**Sơ đồ tổng thể:**
```
[Internet] 
    ↓
[Firewall + IPS]
    ↓
[DMZ: Web, Mail]
    ↓
[Internal Firewall]
    ↓
[Core Switch (802.1X)]
    ↓
[Access Switch (Port Security)]
    ↓
[End Users]

[Chi nhánh] ←→ [VPN Tunnel] ←→ [HQ]

[Tất cả devices] → [SIEM] → [SOC Team]
```

---

### ĐỀ MẪU 6: WINDOWS SERVER ADMINISTRATION

**TÌNH HUỐNG:**

Công ty cần triển khai hệ thống Windows Server cho 200 nhân viên:
- 3 phòng ban: Sales (80 users), IT (30 users), Admin (90 users)
- Mỗi phòng ban có file server riêng
- Cần quản lý tập trung user, password policy
- Website nội bộ: intranet.company.local

**YÊU CẦU:**

**Phần 1 (3 điểm):** Đề xuất giải pháp triển khai
- Active Directory Domain Services
- File Server với phân quyền
- DNS cho website nội bộ

**Phần 2 (3 điểm):** Cấu hình Group Policy
- Password Policy: tối thiểu 8 ký tự, phức tạp, đổi mỗi 90 ngày
- Chặn Sales department cài đặt phần mềm
- IT department cho phép Remote Desktop

---

### ĐÁP ÁN MẪU ĐỀ 6:

**Phần 1:**

**1. Active Directory Domain Services:**

**Cấu trúc OU (Organizational Unit):**
```
company.local
├── Sales_OU
│   ├── Sales_Users
│   └── Sales_Computers
├── IT_OU
│   ├── IT_Users
│   └── IT_Computers
└── Admin_OU
    ├── Admin_Users
    └── Admin_Computers
```

**Tạo Domain Controller:**
- Cài role "Active Directory Domain Services"
- Promote server thành DC
- Tạo domain: company.local
- Tạo các OU theo cấu trúc trên

**Tạo User/Group:**
```powershell
# Tạo OU
New-ADOrganizationalUnit -Name "Sales_OU" -Path "DC=company,DC=local"

# Tạo Group
New-ADGroup -Name "Sales_Group" -GroupScope Global -Path "OU=Sales_OU,DC=company,DC=local"

# Tạo User
New-ADUser -Name "John Smith" -SamAccountName "jsmith" -Path "OU=Sales_OU,DC=company,DC=local"

# Add user vào group
Add-ADGroupMember -Identity "Sales_Group" -Members "jsmith"
```

**2. File Server với phân quyền:**

**Cấu trúc thư mục:**
```
D:\Shares
├── Sales_Share
├── IT_Share
└── Admin_Share
```

**Cấu hình Share Permission:**
```powershell
# Tạo share
New-SmbShare -Name "Sales_Share" -Path "D:\Shares\Sales_Share" -FullAccess "Sales_Group"

# NTFS Permission
icacls "D:\Shares\Sales_Share" /grant "Sales_Group:(OI)(CI)M"
icacls "D:\Shares\Sales_Share" /grant "IT_Group:(OI)(CI)R"
```

**Phân quyền:**
- **Sales_Group**: Full Control trên Sales_Share
- **IT_Group**: Read trên tất cả share (support)
- **Admin_Group**: Full Control trên Admin_Share

**3. DNS cho website nội bộ:**

**Cài DNS Server Role:**
- Tự động cài khi tạo DC

**Tạo A Record:**
```
DNS Manager → Forward Lookup Zones → company.local
→ New Host (A)
Name: intranet
IP: 192.168.1.100 (IP của Web Server)
```

**Kiểm tra:**
```cmd
nslookup intranet.company.local
→ Phải trả về 192.168.1.100
```

**Cài IIS (Web Server):**
```powershell
Install-WindowsFeature -Name Web-Server -IncludeManagementTools
```

**Binding:**
- Site name: Intranet
- Binding: http://intranet.company.local

---

**Phần 2: Group Policy:**

**1. Password Policy:**

```
Group Policy Management → Create new GPO: "Password Policy"
→ Link to Domain (company.local)

Edit GPO:
Computer Configuration 
→ Policies 
→ Windows Settings 
→ Security Settings 
→ Account Policies 
→ Password Policy

Cấu hình:
- Minimum password length: 8 characters
- Password must meet complexity requirements: Enabled
- Maximum password age: 90 days
- Enforce password history: 5 passwords remembered
```

**2. Chặn Software Installation (Sales):**

```
Create GPO: "Block Software Installation - Sales"
→ Link to Sales_OU

User Configuration 
→ Policies 
→ Administrative Templates 
→ Windows Components 
→ Windows Installer

Cấu hình:
- Prohibit User Installs: Enabled
- Turn off Windows Installer: Enabled (for non-managed apps)
```

**Hoặc dùng AppLocker:**
```
Computer Configuration 
→ Policies 
→ Windows Settings 
→ Security Settings 
→ Application Control Policies 
→ AppLocker

Create rules:
- Deny: C:\Users\*\Downloads\*.exe
- Deny: C:\Users\*\Desktop\*.msi
- Allow: C:\Program Files\*
```

**3. Allow Remote Desktop (IT):**

```
Create GPO: "Enable Remote Desktop - IT"
→ Link to IT_OU

Computer Configuration 
→ Policies 
→ Administrative Templates 
→ Windows Components 
→ Remote Desktop Services 
→ Remote Desktop Session Host 
→ Connections

Cấu hình:
- Allow users to connect remotely: Enabled

Security Settings:
→ Restricted Groups
→ Add "IT_Group" to "Remote Desktop Users"
```

**Hoặc qua PowerShell:**
```powershell
# Enable RDP
Set-ItemProperty -Path 'HKLM:\System\CurrentControlSet\Control\Terminal Server' -Name "fDenyTSConnections" -Value 0

# Add IT_Group to Remote Desktop Users
Add-LocalGroupMember -Group "Remote Desktop Users" -Member "company\IT_Group"

# Firewall
Enable-NetFirewallRule -DisplayGroup "Remote Desktop"
```

**Kiểm tra GPO apply:**
```cmd
gpupdate /force
gpresult /r
```

---

## PHẦN 3: CÂU HỎI TÌNH HUỐNG NÂNG CAO

### ĐỀ MẪU 7: MULTI-SITE NETWORK WITH DYNAMIC ROUTING

**MÔ HÌNH:**
```
Site A (HQ): 10.1.0.0/16
├── VLAN 10: 10.1.10.0/24 (Management)
├── VLAN 20: 10.1.20.0/24 (Users)
└── VLAN 30: 10.1.30.0/24 (Servers)

Site B (Branch): 10.2.0.0/16
├── VLAN 10: 10.2.10.0/24
└── VLAN 20: 10.2.20.0/24

Kết nối Site A ↔ Site B: WAN Link
R1 (HQ): S0/0/0 - 172.16.1.1/30
R2 (Branch): S0/0/0 - 172.16.1.2/30
```

**YÊU CẦU:**

**Phần 1 (3 điểm):** 
- So sánh RIP vs OSPF cho mô hình này, chọn giao thức phù hợp
- Cấu hình routing protocol đã chọn
- Cấu hình để các VLAN ở 2 site ping được nhau

**Phần 2 (3 điểm):** Troubleshooting

**Hiện tượng:** Site B ping được Site A VLAN 10, nhưng không ping được VLAN 20, 30

**Show ip route tại R2:**
```
C    10.2.0.0/16 is directly connected, GigabitEthernet0/0
C    172.16.1.0/30 is directly connected, Serial0/0/0
O    10.1.10.0/24 [110/65] via 172.16.1.1
```

**Show run interface R1:**
```
interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 10.1.10.1 255.255.255.0
!
interface GigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 10.1.20.1 255.255.255.0
!
interface GigabitEthernet0/0.30
 encapsulation dot1Q 30
 ip address 10.1.30.1 255.255.255.0
```

**Show run OSPF R1:**
```
router ospf 1
 network 172.16.1.0 0.0.0.3 area 0
 network 10.1.10.0 0.0.0.255 area 0
```

Tìm vấn đề và sửa.

---

### ĐÁP ÁN MẪU ĐỀ 7:

**Phần 1:**

**So sánh RIP vs OSPF:**

| Tiêu chí | RIP | OSPF | Chọn |
|----------|-----|------|------|
| Scalability | Tối đa 15 hops | Không giới hạn | OSPF ✓ |
| Convergence | Chậm (30s update) | Nhanh (event-driven) | OSPF ✓ |
| Metric | Hop count | Cost (bandwidth) | OSPF ✓ |
| Bandwidth | Nhiều (periodic update) | Ít | OSPF ✓ |
| CPU/RAM | Thấp | Cao hơn | RIP |

**→ Chọn OSPF** vì:
- Mạng có nhiều subnet (6 VLAN)
- Cần convergence nhanh cho môi trường production
- Scalable cho tương lai mở rộng thêm site

**Cấu hình OSPF:**

**R1 (HQ):**
```
R1(config)# router ospf 1
R1(config-router)# network 10.1.0.0 0.0.255.255 area 0
(hoặc chi tiết: network 10.1.10.0 0.0.0.255 area 0
               network 10.1.20.0 0.0.0.255 area 0
               network 10.1.30.0 0.0.0.255 area 0)
R1(config-router)# network 172.16.1.0 0.0.0.3 area 0
R1(config-router)# passive-interface g0/0.10
R1(config-router)# passive-interface g0/0.20
R1(config-router)# passive-interface g0/0.30
```

**R2 (Branch):**
```
R2(config)# router ospf 1
R2(config-router)# network 10.2.0.0 0.0.255.255 area 0
R2(config-router)# network 172.16.1.0 0.0.0.3 area 0
R2(config-router)# passive-interface g0/0.10
R2(config-router)# passive-interface g0/0.20
```

**Giải thích:**
- `network 10.1.0.0 0.0.255.255`: Advertise tất cả subnet 10.1.x.x
- `area 0`: Backbone area
- `passive-interface`: Không gửi OSPF hello ra VLAN (LAN), tiết kiệm bandwidth

---

**Phần 2:**

**Vấn đề xác định:**
- R1 chỉ advertise VLAN 10 (10.1.10.0/24)
- VLAN 20, 30 KHÔNG có trong OSPF network statement

**Nguyên nhân:**
```
router ospf 1
 network 10.1.10.0 0.0.0.255 area 0  ← CHỈ CÓ VLAN 10
 (Thiếu VLAN 20, 30)
```

**Giải pháp:**

**Cách 1: Thêm từng network**
```
R1(config)# router ospf 1
R1(config-router)# network 10.1.20.0 0.0.0.255 area 0
R1(config-router)# network 10.1.30.0 0.0.0.255 area 0
```

**Cách 2: Dùng summary (KHUYẾN NGHỊ)**
```
R1(config)# router ospf 1
R1(config-router)# no network 10.1.10.0 0.0.0.255 area 0
R1(config-router)# network 10.1.0.0 0.0.255.255 area 0
```
→ Cover tất cả subnet 10.1.x.x

**Lệnh kiểm tra:**
```
R1# show ip ospf neighbor
→ Phải thấy R2 (172.16.1.2)

R1# show ip ospf database
→ Kiểm tra LSA của các network

R2# show ip route
→ Phải thấy:
O    10.1.10.0/24 [110/65] via 172.16.1.1
O    10.1.20.0/24 [110/65] via 172.16.1.1
O    10.1.30.0/24 [110/65] via 172.16.1.1

PC ở Site B VLAN 20> ping 10.1.30.5
→ Phải thành công
```

---

### ĐỀ MẪU 8: DHCP RELAY & CENTRALIZED SERVICES

**MÔ HÌNH:**
```
[DHCP Server: 192.168.100.10] --- [R1] --- [SW1] --- [Clients VLAN 10]
                                    |               \--- [Clients VLAN 20]
                                    |
                              [R1 interfaces]
                              G0/0: 192.168.100.1/24 (Server LAN)
                              G0/1: Trunk to SW1
                              G0/1.10: 192.168.10.1/24
                              G0/1.20: 192.168.20.1/24
```

**YÊU CẦU:**

**Phần 1 (2 điểm):** Giải thích vì sao cần DHCP Relay trong mô hình này

**Phần 2 (4 điểm):** 
- Cấu hình R1 làm DHCP Relay
- Cấu hình DHCP Server (có thể là Windows/Linux) với 2 scope:
  - VLAN 10: 192.168.10.100-200
  - VLAN 20: 192.168.20.100-200

**Troubleshooting:** Client VLAN 10 nhận được IP, nhưng VLAN 20 không nhận được

**Show run R1:**
```
interface GigabitEthernet0/1.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
 ip helper-address 192.168.100.10
!
interface GigabitEthernet0/1.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
```

Tìm vấn đề và sửa.

---

### LƯU Ý CHUNG KHI LÀM BÀI TỰ LUẬN:

**1. Phân tích đề kỹ:**
- Highlight keywords: routing, VLAN, DHCP, NAT, ACL, troubleshooting
- Xác định công nghệ nào đang được sử dụng (từ show running-config)

**2. Khi troubleshooting:**
- Bước 1: Mô tả hiện tượng bằng lời
- Bước 2: Phân tích show running-config/show ip route
- Bước 3: Xác định VẤN ĐỀ cụ thể (sai config, thiếu config, sai thứ tự)
- Bước 4: Đưa ra GIẢI PHÁP (lệnh cấu hình)
- Bước 5: Lệnh KIỂM TRA

**3. Không nhớ chính xác syntax:**
- Viết: "(Lệnh cấu hình OSPF advertise network 10.1.10.0/24 vào area 0)"
- Hoặc: "(Enable DHCP relay trên interface đến địa chỉ DHCP server)"
- Điểm vẫn được TÍNH nếu ý đúng

**4. Format trình bày:**
```
VẤN ĐỀ: 
- Mô tả vấn đề phát hiện

NGUYÊN NHÂN:
- Tại sao xảy ra vấn đề

GIẢI PHÁP:
- Lệnh 1: giải thích
- Lệnh 2: giải thích

KIỂM TRA:
- show ...
- ping ...
```

**5. Các lỗi thường gặp cần chú ý:**
- Static route: sai next-hop IP
- OSPF/RIP: thiếu network statement
- VLAN: port không phải trunk
- DHCP relay: thiếu ip helper-address
- NAT: thiếu ip nat inside/outside
- ACL: sai thứ tự, implicit deny


## PHẦN 4: TRẮC NGHIỆM BỔ SUNG (30 CÂU)

### F. DHCP & NETWORK SERVICES (10 câu)

**Câu 51:** DHCP Discover message được gửi dưới dạng gì?
A. Unicast
B. **Broadcast** ✓
C. Multicast
D. Anycast

**Câu 52:** DHCP Server gửi Offer message đến client như thế nào?
A. **Broadcast hoặc Unicast tùy cấu hình** ✓
B. Chỉ Broadcast
C. Chỉ Unicast
D. Multicast

**Câu 53:** Port nào được DHCP Server sử dụng?
A. UDP 68
B. **UDP 67** ✓
C. TCP 67
D. TCP 68

**Câu 54:** DHCP Relay (ip helper-address) được cấu hình ở đâu?
A. DHCP Server
B. Switch
C. **Router interface kết nối với client subnet** ✓
D. Client machine

**Câu 55:** Lệnh nào loại trừ dải IP không được DHCP cấp phát?
A. ip dhcp exclude
B. no ip dhcp pool
C. **ip dhcp excluded-address** ✓
D. dhcp reservation

**Câu 56:** DHCP lease time có tác dụng gì?
A. Thời gian client giữ IP
B. Sau đó phải renew
C. Hết hạn thì IP được thu hồi
D. **Tất cả đều đúng** ✓

**Câu 57:** DNS Server phân giải tên miền sang gì?
A. MAC address
B. **IP address** ✓
C. Port number
D. VLAN ID

**Câu 58:** DNS sử dụng port nào?
A. TCP 80
B. **UDP 53** ✓
C. TCP 443
D. UDP 67

**Câu 59:** Lệnh nào kiểm tra DHCP bindings trên router?
A. show dhcp pool
B. show ip dhcp database
C. **show ip dhcp binding** ✓
D. show dhcp server

**Câu 60:** DHCP Option 3 chỉ định thông tin gì?
A. DNS Server
B. **Default Gateway** ✓
C. Subnet Mask
D. Lease Time

---

### G. NAT (NETWORK ADDRESS TRANSLATION) (8 câu)

**Câu 61:** NAT chuyển đổi địa chỉ ở layer nào?
A. Layer 2
B. **Layer 3** ✓
C. Layer 4
D. Layer 7

**Câu 62:** PAT (Port Address Translation) còn được gọi là gì?
A. Static NAT
B. Dynamic NAT
C. **NAT Overload** ✓
D. Inside NAT

**Câu 63:** Lệnh nào xem NAT translation table?
A. show nat translations
B. show ip nat database
C. **show ip nat translations** ✓
D. show nat statistics

**Câu 64:** Inside Local address là gì?
A. Public IP ra Internet
B. **Private IP trong mạng LAN** ✓
C. IP của router WAN interface
D. IP của ISP

**Câu 65:** Static NAT thường dùng cho mục đích gì?
A. Cho nhiều client ra Internet
B. **Publish server ra Internet với IP cố định** ✓
C. Tiết kiệm địa chỉ IP
D. Load balancing

**Câu 66:** Port Forwarding hoạt động ở NAT loại nào?
A. Dynamic NAT
B. **Static NAT** ✓
C. NAT Overload
D. Pool NAT

**Câu 67:** Lệnh nào clear NAT translations?
A. clear ip nat all
B. **clear ip nat translation*** ✓
C. delete nat translations
D. reset nat table

**Câu 68:** NAT có thể gây vấn đề gì với một số ứng dụng?
A. IPsec VPN
B. FTP active mode
C. SIP/VoIP
D. **Tất cả đều đúng** ✓

---

### H. WINDOWS SERVER ADMINISTRATION (6 câu)

**Câu 69:** Domain Controller lưu trữ Active Directory database ở file nào?
A. AD.db
B. **NTDS.dit** ✓
C. SAM
D. Registry

**Câu 70:** NTFS permission "Modify" cho phép làm gì?
A. Read only
B. Read + Write
C. **Read + Write + Delete** ✓
D. Full Control

**Câu 71:** Group Policy áp dụng theo thứ tự nào?
A. Domain → OU → Site
B. Site → OU → Domain
C. **Local → Site → Domain → OU** ✓
D. OU → Domain → Site

**Câu 72:** DNS Zone loại nào cho phép dynamic update?
A. Secondary Zone
B. Stub Zone
C. **Primary Zone** ✓
D. Forward Zone

**Câu 73:** File /etc/shadow trong Linux chứa gì?
A. User information
B. **Encrypted passwords** ✓
C. Group membership
D. Shell configuration

**Câu 74:** Lệnh nào thay đổi quyền sở hữu file trong Linux?
A. chmod
B. **chown** ✓
C. chgrp
D. usermod

---

### I. SECURITY & TROUBLESHOOTING (6 câu)

**Câu 75:** Port Security violation mode "shutdown" làm gì?
A. Chỉ log vi phạm
B. Drop packet vi phạm
C. **Shutdown interface** ✓
D. Gửi SNMP trap

**Câu 76:** 802.1X authentication dùng protocol nào?
A. TACACS+
B. **RADIUS** ✓
C. LDAP
D. Kerberos

**Câu 77:** Lệnh nào kiểm tra neighbor OSPF?
A. show ospf database
B. **show ip ospf neighbor** ✓
C. show ip protocols
D. show ospf interface

**Câu 78:** Spanning Tree Protocol (STP) ngăn chặn vấn đề gì?
A. Routing loop
B. **Switching loop** ✓
C. Broadcast storm
D. Cả B và C

**Câu 79:** HSRP (Hot Standby Router Protocol) dùng để làm gì?
A. Load balancing
B. **Gateway redundancy** ✓
C. Dynamic routing
D. NAT failover

**Câu 80:** Lệnh nào kiểm tra trunk port trên switch?
A. show vlan
B. show interface status
C. **show interface trunk** ✓
D. show spanning-tree

---

## PHẦN 5: ĐỀ TỰ LUẬN NÂNG CAO

### ĐỀ MẪU 9: COMPREHENSIVE NETWORK DESIGN

**TÌNH HUỐNG:**

Công ty XYZ có yêu cầu:
- 3 tầng: Tầng 1 (Sales - 50 users), Tầng 2 (IT - 20 users), Tầng 3 (Management - 30 users)
- Mỗi tầng 1 VLAN riêng
- Có 1 Server Farm (VLAN 99): Web Server, File Server, Email Server
- Kết nối Internet qua Router biên với 1 public IP
- Yêu cầu bảo mật cao cho Management VLAN

**MÔ HÌNH:**
```
[Internet]
    |
[Router R1] - Public: 203.0.113.1/30
    |
[Core Switch L3]
    |
[Access Switches L2] - VLAN 10, 20, 30, 99
```

**YÊU CẦU TỔNG QUÁT (6 điểm):**

**Phần A (2 điểm):** Thiết kế IP Addressing
- Đề xuất subnet cho mỗi VLAN (từ mạng 10.0.0.0/16)
- Giải thích lý do chọn subnet mask

**Phần B (2 điểm):** Cấu hình Core Switch
- Inter-VLAN routing bằng SVI
- DHCP Server cho từng VLAN
- Security: Port Security, DHCP Snooping

**Phần C (2 điểm):** Cấu hình Router R1
- NAT Overload cho client ra Internet
- Port Forwarding cho Web Server (port 80, 443)
- ACL: Chỉ Management VLAN được SSH vào router

---

### ĐÁP ÁN MẪU ĐỀ 9:

**Phần A: IP Addressing Scheme**

| VLAN | Tên | Subnet | Subnet Mask | Usable IPs | Gateway |
|------|-----|--------|-------------|------------|---------|
| 10 | Sales | 10.0.10.0/24 | 255.255.255.0 | 254 | 10.0.10.1 |
| 20 | IT | 10.0.20.0/24 | 255.255.255.0 | 254 | 10.0.20.1 |
| 30 | Management | 10.0.30.0/24 | 255.255.255.0 | 254 | 10.0.30.1 |
| 99 | Servers | 10.0.99.0/24 | 255.255.255.0 | 254 | 10.0.99.1 |

**Giải thích:**
- Dùng /24 (255.255.255.0) cho mỗi VLAN → 254 usable IPs
- Sales (50 users): /24 đủ và có room mở rộng
- IT (20 users): /24 dư nhưng maintain consistency
- Management (30 users): /24 đủ
- Servers: /24 cho tương lai mở rộng thêm server
- **Lý do không dùng VLSM**: Đơn giản hóa quản lý, dễ troubleshoot, room mở rộng

---

**Phần B: Core Switch Configuration**

**1. Tạo VLAN và SVI (Inter-VLAN Routing):**

```
CoreSW(config)# vlan 10
CoreSW(config-vlan)# name Sales
CoreSW(config)# vlan 20
CoreSW(config-vlan)# name IT
CoreSW(config)# vlan 30
CoreSW(config-vlan)# name Management
CoreSW(config)# vlan 99
CoreSW(config-vlan)# name Servers

! Enable IP routing
CoreSW(config)# ip routing

! Tạo SVI cho mỗi VLAN
CoreSW(config)# interface vlan 10
CoreSW(config-if)# ip address 10.0.10.1 255.255.255.0
CoreSW(config-if)# no shutdown

CoreSW(config)# interface vlan 20
CoreSW(config-if)# ip address 10.0.20.1 255.255.255.0
CoreSW(config-if)# no shutdown

CoreSW(config)# interface vlan 30
CoreSW(config-if)# ip address 10.0.30.1 255.255.255.0
CoreSW(config-if)# no shutdown

CoreSW(config)# interface vlan 99
CoreSW(config-if)# ip address 10.0.99.1 255.255.255.0
CoreSW(config-if)# no shutdown

! Uplink to Router
CoreSW(config)# interface g0/1
CoreSW(config-if)# no switchport
CoreSW(config-if)# ip address 10.0.100.2 255.255.255.252
CoreSW(config-if)# no shutdown

! Default route to Internet
CoreSW(config)# ip route 0.0.0.0 0.0.0.0 10.0.100.1
```

**2. DHCP Server cho từng VLAN:**

```
! Loại trừ IP gateway và static IPs
CoreSW(config)# ip dhcp excluded-address 10.0.10.1 10.0.10.10
CoreSW(config)# ip dhcp excluded-address 10.0.20.1 10.0.20.10
CoreSW(config)# ip dhcp excluded-address 10.0.30.1 10.0.30.10

! DHCP Pool VLAN 10 - Sales
CoreSW(config)# ip dhcp pool VLAN10_SALES
CoreSW(dhcp-config)# network 10.0.10.0 255.255.255.0
CoreSW(dhcp-config)# default-router 10.0.10.1
CoreSW(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
CoreSW(dhcp-config)# lease 7

! DHCP Pool VLAN 20 - IT
CoreSW(config)# ip dhcp pool VLAN20_IT
CoreSW(dhcp-config)# network 10.0.20.0 255.255.255.0
CoreSW(dhcp-config)# default-router 10.0.20.1
CoreSW(dhcp-config)# dns-server 8.8.8.8 8.8.4.4

! DHCP Pool VLAN 30 - Management
CoreSW(config)# ip dhcp pool VLAN30_MGMT
CoreSW(dhcp-config)# network 10.0.30.0 255.255.255.0
CoreSW(dhcp-config)# default-router 10.0.30.1
CoreSW(dhcp-config)# dns-server 8.8.8.8 8.8.4.4

! Servers dùng Static IP nên không cần DHCP pool
```

**3. Security Configuration:**

**Port Security (trên Access Switch):**
```
AccessSW(config)# interface range fa0/1-24
AccessSW(config-if-range)# switchport mode access
AccessSW(config-if-range)# switchport port-security
AccessSW(config-if-range)# switchport port-security maximum 2
AccessSW(config-if-range)# switchport port-security violation shutdown
AccessSW(config-if-range)# switchport port-security mac-address sticky
```

**DHCP Snooping (trên Core & Access Switch):**
```
CoreSW(config)# ip dhcp snooping
CoreSW(config)# ip dhcp snooping vlan 10,20,30

! Trust uplink và SVI
CoreSW(config)# interface vlan 10
CoreSW(config-if)# ip dhcp snooping trust

CoreSW(config)# interface g0/1
CoreSW(config-if)# ip dhcp snooping trust

! Access ports - untrust (mặc định)
! Ngăn chặn rogue DHCP server từ client
```

**Dynamic ARP Inspection:**
```
CoreSW(config)# ip arp inspection vlan 10,20,30
CoreSW(config)# interface g0/1
CoreSW(config-if)# ip arp inspection trust
```

---

**Phần C: Router R1 Configuration**

**1. Interface Configuration:**
```
R1(config)# interface g0/0
R1(config-if)# ip address 10.0.100.1 255.255.255.252
R1(config-if)# ip nat inside
R1(config-if)# no shutdown

R1(config)# interface g0/1
R1(config-if)# ip address 203.0.113.1 255.255.255.252
R1(config-if)# ip nat outside
R1(config-if)# no shutdown
```

**2. NAT Overload (PAT):**
```
! ACL define traffic được NAT
R1(config)# access-list 1 permit 10.0.0.0 0.0.255.255

! NAT Overload
R1(config)# ip nat inside source list 1 interface g0/1 overload
```

**3. Port Forwarding cho Web Server (10.0.99.10):**
```
! HTTP (port 80)
R1(config)# ip nat inside source static tcp 10.0.99.10 80 203.0.113.1 80

! HTTPS (port 443)
R1(config)# ip nat inside source static tcp 10.0.99.10 443 203.0.113.1 443
```
→ User từ Internet truy cập http://203.0.113.1 → forward đến Web Server

**4. ACL Security - Chỉ Management SSH vào Router:**
```
! Standard ACL cho VTY
R1(config)# access-list 10 permit 10.0.30.0 0.0.0.255
R1(config)# access-list 10 deny any

! Apply vào VTY lines
R1(config)# line vty 0 4
R1(config-line)# access-class 10 in
R1(config-line)# transport input ssh
R1(config-line)# login local

! Tạo local user
R1(config)# username admin privilege 15 secret Str0ngP@ss

! Enable SSH
R1(config)# ip domain-name company.local
R1(config)# crypto key generate rsa modulus 2048
R1(config)# ip ssh version 2
```

**5. Default Route:**
```
R1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.2
(203.0.113.2 là ISP gateway)
```

**6. Kiểm tra:**
```
R1# show ip nat translations
R1# show ip nat statistics
R1# show access-lists
R1# show ip ssh

! Test từ Management VLAN
MGMT-PC> ssh admin@10.0.100.1
→ Phải kết nối được

! Test từ Sales VLAN
Sales-PC> ssh admin@10.0.100.1
→ Phải bị từ chối
```

---

### ĐỀ MẪU 10: ADVANCED TROUBLESHOOTING SCENARIO

**TÌNH HUỐNG:**

Mạng công ty gặp nhiều vấn đề sau khi có nhân viên mới join:

**Topology:**
```
[Internet] - [R1] - [CoreSW] - [AccessSW1] - [Users VLAN10]
                        |
                   [AccessSW2] - [Users VLAN20]
                        |
                   [Servers VLAN99]
```

**Hiện tượng báo cáo:**
1. User VLAN 10 không ra được Internet
2. User VLAN 20 không ping được Server
3. User VLAN 10 đôi khi nhận IP lạ (192.168.1.x thay vì 10.0.10.x)
4. Admin không SSH được vào Router từ xa

**YÊU CẦU (6 điểm):**

Phân tích các show command sau và đưa ra giải pháp cho TỪNG vấn đề:

---

**Show Running-Config R1:**
```
interface GigabitEthernet0/0
 ip address 10.0.100.1 255.255.255.252
 ip nat inside
!
interface GigabitEthernet0/1
 ip address 203.0.113.1 255.255.255.252
!
access-list 1 permit 10.0.10.0 0.0.0.255
!
ip nat inside source list 1 interface GigabitEthernet0/1 overload
!
line vty 0 4
 access-class 99 in
 transport input telnet
```

**Show Running-Config CoreSW:**
```
vlan 10
 name Sales
vlan 20
 name IT
vlan 99
 name Servers
!
interface Vlan10
 ip address 10.0.10.1 255.255.255.0
!
interface Vlan20
 ip address 10.0.20.1 255.255.255.0
!
interface Vlan99
 ip address 10.0.99.1 255.255.255.0
!
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,99
!
ip dhcp pool VLAN10
 network 10.0.10.0 255.255.255.0
 default-router 10.0.10.1
```

**Show MAC Address-Table AccessSW1:**
```
Vlan    Mac Address       Type        Ports
----    -----------       ----        -----
10      0011.2233.4455    DYNAMIC     Fa0/5
10      0066.7788.99aa    DYNAMIC     Fa0/10
```

**Show DHCP Snooping Binding AccessSW1:**
```
MacAddress          IpAddress        Lease(sec)  Type           VLAN  Interface
------------------  ---------------  ----------  -------------  ----  --------------------
00:11:22:33:44:55   192.168.1.100    86400       dhcp-snooping   10   FastEthernet0/5
```

---

### ĐÁP ÁN MẪU ĐỀ 10:

**PHÂN TÍCH VÀ GIẢI PHÁP:**

---

**VẤN ĐỀ 1: User VLAN 10 không ra được Internet**

**Nguyên nhân:**
1. R1: Interface G0/1 (outside) thiếu `ip nat outside`
2. ACL 1 chỉ permit VLAN 10 (10.0.10.0/24), không permit VLAN 20

**Giải pháp:**

```
! Trên R1
R1(config)# interface g0/1
R1(config-if)# ip nat outside

! Sửa ACL permit tất cả internal networks
R1(config)# no access-list 1
R1(config)# access-list 1 permit 10.0.0.0 0.0.255.255
```

**Kiểm tra:**
```
R1# show ip interface brief
→ G0/1 phải up/up

R1# show ip nat statistics
→ Kiểm tra inside/outside interface

VLAN10-PC> ping 8.8.8.8
→ Phải thành công
```

---

**VẤN ĐỀ 2: User VLAN 20 không ping được Server (VLAN 99)**

**Nguyên nhân:**
- CoreSW trunk port (G0/1) chỉ allow VLAN 10,99 → VLAN 20 bị block

**Giải pháp:**

```
CoreSW(config)# interface g0/1
CoreSW(config-if)# switchport trunk allowed vlan add 20

! Hoặc allow tất cả
CoreSW(config-if)# switchport trunk allowed vlan all
```

**Kiểm tra:**
```
CoreSW# show interface trunk
→ Vlan allowed on trunk phải có: 10,20,99

VLAN20-PC> ping 10.0.99.10
→ Phải thành công
```

---

**VẤN ĐỀ 3: User VLAN 10 nhận IP lạ (192.168.1.x)**

**Nguyên nhân:**
- Có ROGUE DHCP SERVER trên port Fa0/5 (MAC 0011.2233.4455)
- DHCP Snooping binding cho thấy IP 192.168.1.100 từ port này
- Có thể là:
  - User cắm router cá nhân
  - Laptop có Internet Connection Sharing bật
  - Thiết bị wireless AP không cấu hình đúng

**Giải pháp:**

**Bước 1: Shutdown port ngay lập tức**
```
AccessSW1(config)# interface fa0/5
AccessSW1(config-if)# shutdown
```

**Bước 2: Enable DHCP Snooping (nếu chưa có)**
```
AccessSW1(config)# ip dhcp snooping
AccessSW1(config)# ip dhcp snooping vlan 10,20

! Trust port lên CoreSW (G0/1)
AccessSW1(config)# interface g0/1
AccessSW1(config-if)# ip dhcp snooping trust

! Untrust access ports (default)
! Rate limit DHCP packets
AccessSW1(config)# interface range fa0/1-24
AccessSW1(config-if-range)# ip dhcp snooping limit rate 10
```

**Bước 3: Kiểm tra thiết bị vi phạm**
- Xác định PC/thiết bị trên port Fa0/5
- Hướng dẫn user gỡ bỏ rogue DHCP server
- Enable lại port sau khi xử lý

**Bước 4: Release/Renew IP cho users**
```
! Trên client bị ảnh hưởng
ipconfig /release
ipconfig /renew
→ Phải nhận IP 10.0.10.x
```

**Kiểm tra:**
```
AccessSW1# show ip dhcp snooping binding
→ Chỉ thấy IPs từ dải 10.0.10.x

AccessSW1# show ip dhcp snooping
→ Kiểm tra DHCP snooping active
```

---

**VẤN ĐỀ 4: Admin không SSH được vào Router từ xa**

**Nguyên nhân:**
1. VTY line dùng `transport input telnet` thay vì SSH
2. ACL 99 không tồn tại → implicit deny all
3. Thiếu cấu hình SSH (domain name, RSA key)

**Giải pháp:**

```
! Tạo ACL cho admin access
R1(config)# access-list 99 permit 10.0.30.0 0.0.0.255
(giả sử admin ở VLAN 30 - Management)

! Enable SSH
R1(config)# ip domain-name company.local
R1(config)# crypto key generate rsa modulus 2048
R1(config)# ip ssh version 2

! Tạo local user
R1(config)# username admin privilege 15 secret AdminP@ssw0rd

! Cấu hình VTY
R1(config)# line vty 0 4
R1(config-line)# transport input ssh
R1(config-line)# login local
R1(config-line)# access-class 99 in
```

**Bổ sung bảo mật:**
```
! Timeout
R1(config-line)# exec-timeout 10 0

! Enable password encryption
R1(config)# service password-encryption

! Console security
R1(config)# line console 0
R1(config-line)# password C0ns0leP@ss
R1(config-line)# login
R1(config-line)# logging synchronous
```

**Kiểm tra:**
```
R1# show ip ssh
→ SSH Enabled - version 2.0

R1# show access-lists 99
→ Kiểm tra ACL entries

! Test từ Management PC
Admin-PC> ssh admin@10.0.100.1
→ Phải kết nối được

! Test từ VLAN khác
Sales-PC> ssh admin@10.0.100.1
→ Phải bị từ chối
```

---

**TỔNG KẾT CÁC VẤN ĐỀ VÀ FIX:**

| Vấn đề | Nguyên nhân | Giải pháp | Độ ưu tiên |
|--------|-------------|-----------|------------|
| VLAN10 no Internet | Thiếu `ip nat outside` | Add nat outside trên G0/1 | HIGH |
| VLAN20 no ping Server | Trunk không allow VLAN20 | Add VLAN 20 vào trunk | MEDIUM |
| Rogue DHCP | Thiết bị cắm trái phép | Shutdown port + DHCP snooping | CRITICAL |
| No SSH | Telnet + ACL sai + no SSH config | Enable SSH + fix ACL | HIGH |

---

## PHẦN 6: MẸO VÀ CHIẾN THUẬT THI

### A. Chiến thuật làm bài Trắc nghiệm (20-25 câu ~ 20 phút)

**1. Đọc kỹ đề - chú ý keyword:**
- "NOT", "EXCEPT", "INCORRECT" → chọn đáp án SAI
- "BEST", "MOST" → có nhiều đáp án đúng nhưng chọn TỐT NHẤT
- "ALWAYS", "NEVER" → câu tuyệt đối, cẩn thận

**2. Loại trừ đáp án:**
- Gạch bỏ đáp án chắc chắn sai
- Giữa 2 đáp án còn lại → chọn theo logic

**3. Câu hỏi lệnh/syntax:**
- Nếu không chắc syntax → nghĩ mục đích lệnh
- VD: "show ip route" → hiển thị bảng định tuyến

**4. Quản lý thời gian:**
- Câu dễ → làm ngay (< 30s/câu)
- Câu khó → đánh dấu, quay lại sau
- Không bỏ trống → chọn theo intuition

---

### B. Chiến thuật làm bài Tự luận (55 phút)

**PHÂN BỔ THỜI GIAN:**

| Bước | Thời gian | Công việc |
|------|-----------|-----------|
| 1. Đọc đề | 5 phút | Highlight keyword, xác định yêu cầu |
| 2. Phân tích | 10 phút | Vẽ sơ đồ, xác định vấn đề |
| 3. Viết đáp án | 35 phút | Trình bày giải pháp chi tiết |
| 4. Review | 5 phút | Kiểm tra lại, bổ sung |
