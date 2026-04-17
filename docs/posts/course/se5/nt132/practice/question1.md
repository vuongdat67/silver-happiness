# Đề 1

## PHẦN 1: ROUTING & SWITCHING

**Câu 1: Router lưu trữ cấu hình đang chạy (running-config) ở đâu?**
A. Flash
B. NVRAM
C. **RAM** ✓
D. Hard Disk

**Câu 2: Metric của giao thức RIP là gì?**
A. Bandwidth
B. Delay
C. **Hop count** ✓
D. Cost

**Câu 3: RIPv2 gửi routing update đến địa chỉ nào?**
A. 255.255.255.255
B. **224.0.0.9** ✓
C. 224.0.0.10
D. 239.0.0.1

**Câu 4: Giá trị hop count tối đa của RIP là bao nhiêu?**
A. 10
B. **15** ✓
C. 16
D. 255

**Câu 5: OSPF sử dụng thuật toán nào để tính đường đi ngắn nhất?**
A. Bellman-Ford
B. **Dijkstra** ✓
C. Distance Vector
D. Link State Protocol

**Câu 6: Wildcard mask 0.0.0.255 tương ứng với subnet mask nào?**
A. 255.255.0.0
B. 255.0.0.0
C. **255.255.255.0** ✓
D. 255.255.255.255

**Câu 7: Câu lệnh nào dùng để tạo VLAN 10 trên switch?**
A. switch(config)# create vlan 10
B. **switch(config)# vlan 10** ✓
C. switch(config-if)# vlan 10
D. switch# vlan 10

**Câu 8: Trunk port được cấu hình bằng lệnh nào?**
A. switchport mode access
B. **switchport mode trunk** ✓
C. switchport trunk
D. switchport vlan trunk

**Câu 9: Inter-VLAN routing bằng Router-on-a-Stick sử dụng?**
A. Multiple physical interfaces
B. **Sub-interfaces** ✓
C. Virtual interfaces
D. Loopback interfaces

**Câu 10: Encapsulation nào được sử dụng trên trunk link Cisco?**
A. ISL
B. **802.1Q (dot1Q)** ✓
C. VTP
D. STP

## PHẦN 2: NETWORK SERVICES

**Câu 11: Quá trình DHCP diễn ra theo thứ tự nào?**
A. Offer - Discover - Request - ACK
B. **Discover - Offer - Request - ACK** ✓
C. Request - Discover - Offer - ACK
D. Discover - Request - Offer - ACK

**Câu 12: DHCP client gửi gói Discover đến địa chỉ nào?**
A. 0.0.0.0
B. 224.0.0.1
C. **255.255.255.255** ✓
D. 127.0.0.1

**Câu 13: Địa chỉ IP 169.254.x.x cho biết điều gì?**
A. DHCP server đang hoạt động bình thường
B. **DHCP client không liên lạc được với DHCP server** ✓
C. IP được cấu hình static
D. IP được cấp từ DHCP Relay

**Câu 14: Câu lệnh nào biến router thành DHCP relay agent?**
A. ip dhcp relay
B. **ip helper-address <dhcp-server-ip>** ✓
C. ip dhcp forward
D. dhcp relay-agent

**Câu 15: NAT Overload (PAT) cho phép?**
A. 1 IP private map với 1 IP public
B. **Nhiều IP private dùng chung 1 IP public** ✓
C. 1 IP public map với nhiều IP private
D. Chỉ cho phép static mapping

**Câu 16: Port Forwarding trong NAT dùng để?**
A. Chuyển tiếp traffic giữa các port
B. **Cho phép truy cập từ Internet vào server nội bộ** ✓
C. Thay đổi port number của ứng dụng
D. Load balancing giữa các server

## PHẦN 3: ACL & SECURITY

**Câu 17: Standard ACL nên đặt ở vị trí nào?**
A. Gần source
B. **Gần destination** ✓
C. Ở giữa source và destination
D. Bất kỳ đâu

**Câu 18: Extended ACL nên đặt ở vị trí nào?**
A. **Gần source** ✓
B. Gần destination
C. Ở giữa source và destination
D. Bất kỳ đâu

**Câu 19: Range số của Standard ACL là?**
A. 100-199
B. **1-99 và 1300-1999** ✓
C. 2000-2699
D. 1-1999

**Câu 20: Trong wildcard mask, bit "0" có ý nghĩa gì?**
A. Don't care
B. **Must match** ✓
C. Deny
D. Permit

**Câu 21: Keyword "any" trong ACL tương đương với?**
A. 0.0.0.0 0.0.0.0
B. **0.0.0.0 255.255.255.255** ✓
C. 255.255.255.255 0.0.0.0
D. 255.255.255.255 255.255.255.255

**Câu 22: Implicit deny all trong ACL có ý nghĩa?**
A. Cho phép tất cả traffic
B. **Từ chối tất cả traffic không match với các rule trước đó** ✓
C. Chỉ áp dụng cho inbound traffic
D. Phải được cấu hình thủ công

## PHẦN 4: WINDOWS & LINUX ADMINISTRATION

**Câu 23: File nào trong Linux chứa thông tin user accounts?**
A. /etc/shadow
B. **/etc/passwd** ✓
C. /etc/group
D. /etc/login.defs

**Câu 24: Active Directory sử dụng Group Policy theo thứ tự nào?**
A. LOUD
B. DSOU
C. **LSDOU** ✓ (Local - Site - Domain - OU)
D. OLSD

**Câu 25: DNS Forward Lookup Zone dùng để?**
A. IP → Name
B. **Name → IP** ✓
C. MAC → IP
D. Port → Service

---

# PHẦN TỰ LUẬN - ĐỀ THAM KHẢO

## ĐỀ 1: TROUBLESHOOTING ROUTING

### Mô hình:
```
PC1 (192.168.1.10/24) --- [G0/0/0] R1 [G0/0/1] --- [G0/0/0] R2 [G0/0/1] --- PC2 (192.168.3.10/24)
                            |                                      |
                      192.168.1.1/24                         192.168.3.1/24
                            
                    R1 G0/0/1: 192.168.2.1/24
                    R2 G0/0/0: 192.168.2.2/24
```

### Show running-config của R1:
```
interface GigabitEthernet0/0/0
 ip address 192.168.1.1 255.255.255.0
 no shutdown
!
interface GigabitEthernet0/0/1
 ip address 192.168.2.1 255.255.255.0
 no shutdown
!
router rip
 version 2
 network 192.168.1.0
!
```

### Show running-config của R2:
```
interface GigabitEthernet0/0/0
 ip address 192.168.2.2 255.255.255.0
 no shutdown
!
interface GigabitEthernet0/0/1
 ip address 192.168.3.1 255.255.255.0
 no shutdown
!
router rip
 version 2
 network 192.168.3.0
!
```

### Yêu cầu (5-6 điểm):

**Câu 1 (2 điểm):** PC1 không ping được PC2. Phân tích nguyên nhân và đưa ra giải pháp cấu hình chi tiết.

**Đáp án:**

**Phân tích vấn đề:**
- R1 chỉ advertise network 192.168.1.0, chưa advertise network 192.168.2.0
- R2 chỉ advertise network 192.168.3.0, chưa advertise network 192.168.2.0
- Hai router không trao đổi được routing information qua network 192.168.2.0

**Giải pháp:**

*Trên R1:*
```
R1(config)# router rip
R1(config-router)# network 192.168.2.0
```
(Lệnh này để advertise network 192.168.2.0 vào RIP process)

*Trên R2:*
```
R2(config)# router rip
R2(config-router)# network 192.168.2.0
```
(Lệnh này để advertise network 192.168.2.0 vào RIP process)

**Kiểm tra:**
```
R1# show ip route
R1# show ip protocols
R1# ping 192.168.3.1
```

**Câu 2 (1.5 điểm):** Sau khi sửa lỗi, yêu cầu cấu hình thêm static default route trên R1 để đi ra Internet qua router R3 (IP: 203.162.1.1). Viết các lệnh cấu hình.

**Đáp án:**
```
R1(config)# ip route 0.0.0.0 0.0.0.0 203.162.1.1
```
(Lệnh này tạo default static route đến gateway 203.162.1.1)

Hoặc có thể dùng exit interface:
```
R1(config)# ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/0/2
```
(Nếu G0/0/2 kết nối với R3)

**Câu 3 (1.5 điểm):** Giải thích cách RIP hoạt động trong mô hình này và tại sao cần phải advertise network 192.168.2.0 ở cả hai router?

**Đáp án:**
- RIP là distance vector protocol, routers chỉ biết về networks được khai báo trong RIP process
- Network 192.168.2.0 là network kết nối giữa R1 và R2 (transit network)
- Nếu không advertise network này:
  + R1 không gửi routing update qua interface G0/0/1
  + R2 không nhận được thông tin về network 192.168.1.0
  + R2 không gửi routing update qua interface G0/0/0
  + R1 không nhận được thông tin về network 192.168.3.0
- RIP gửi updates mỗi 30 giây qua multicast 224.0.0.9 (RIPv2)

---

## ĐỀ 2: VLAN & INTER-VLAN ROUTING

### Mô hình:
```
PC1 (VLAN 10) ---\
                  \
PC2 (VLAN 10) ----SW1 [Trunk] --- R1 --- Internet
                  /
PC3 (VLAN 20) ---/
                /
PC4 (VLAN 20) -/

PC1: 192.168.10.10/24, Gateway: 192.168.10.1
PC2: 192.168.10.20/24, Gateway: 192.168.10.1
PC3: 192.168.20.10/24, Gateway: 192.168.20.1
PC4: 192.168.20.20/24, Gateway: 192.168.20.1
```

### Show running-config của SW1:
```
vlan 10
 name SALES
!
vlan 20
 name IT
!
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10
!
interface FastEthernet0/2
 switchport mode access
 switchport access vlan 10
!
interface FastEthernet0/3
 switchport mode access
 switchport access vlan 20
!
interface FastEthernet0/4
 switchport mode access
 switchport access vlan 20
!
interface GigabitEthernet0/1
 switchport mode trunk
!
```

### Show running-config của R1:
```
interface GigabitEthernet0/0/0
 ip address 192.168.10.1 255.255.255.0
 no shutdown
!
```

### Yêu cầu (5-6 điểm):

**Câu 1 (3 điểm):** PC trong VLAN 10 không ping được PC trong VLAN 20. Phân tích vấn đề và đưa ra giải pháp cấu hình đầy đủ.

**Đáp án:**

**Phân tích vấn đề:**
- Router chỉ có 1 interface vật lý nhưng cần routing cho 2 VLANs
- Chưa cấu hình sub-interfaces cho Router-on-a-Stick
- Interface G0/0/0 của router chỉ có IP của VLAN 10
- Chưa có routing giữa VLAN 10 và VLAN 20

**Giải pháp - Router-on-a-Stick:**

*Bước 1: Xóa cấu hình cũ trên R1:*
```
R1(config)# interface g0/0/0
R1(config-if)# no ip address
```
(Xóa IP address cũ trên interface vật lý)

*Bước 2: Cấu hình sub-interfaces:*
```
R1(config)# interface g0/0/0.10
R1(config-subif)# encapsulation dot1Q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config-subif)# exit
```
(Tạo sub-interface cho VLAN 10 với encapsulation 802.1Q)

```
R1(config)# interface g0/0/0.20
R1(config-subif)# encapsulation dot1Q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
R1(config-subif)# exit
```
(Tạo sub-interface cho VLAN 20)

*Bước 3: Bật interface vật lý:*
```
R1(config)# interface g0/0/0
R1(config-if)# no shutdown
```

**Kiểm tra:**
```
R1# show ip interface brief
R1# show vlans
PC1> ping 192.168.20.10
```

**Câu 2 (2 điểm):** Yêu cầu chỉ cho phép PC trong VLAN 10 truy cập Internet, chặn VLAN 20. Viết cấu hình ACL.

**Đáp án:**

*Cách 1: Sử dụng Standard ACL:*
```
R1(config)# access-list 1 permit 192.168.10.0 0.0.0.255
R1(config)# access-list 1 deny 192.168.20.0 0.0.0.255
R1(config)# access-list 1 permit any
R1(config)# interface g0/0/1
R1(config-if)# ip access-group 1 out
```
(Áp dụng ACL trên interface ra Internet, chỉ cho VLAN 10 đi qua)

*Cách 2: Sử dụng Extended ACL:*
```
R1(config)# access-list 100 deny ip 192.168.20.0 0.0.0.255 any
R1(config)# access-list 100 permit ip any any
R1(config)# interface g0/0/0.20
R1(config-subif)# ip access-group 100 in
```
(Chặn traffic từ VLAN 20 ngay tại sub-interface)

**Câu 3 (1 điểm):** Giải thích tại sao cần encapsulation dot1Q trên sub-interfaces?

**Đáp án:**
- Encapsulation dot1Q (IEEE 802.1Q) là chuẩn tagging VLAN
- Khi frame đi qua trunk link, switch thêm VLAN tag vào frame
- Router cần biết frame thuộc VLAN nào để xử lý đúng
- Sub-interface với encapsulation dot1Q sẽ nhận và xử lý frame có VLAN tag tương ứng
- Không có encapsulation, router không thể phân biệt traffic của các VLAN khác nhau

---

## ĐỀ 3: DHCP TROUBLESHOOTING

### Mô hình:
```
DHCP Server (192.168.1.100) --- SW1 --- R1 [G0/0/1: 192.168.10.1/24] --- SW2 --- PC Clients (VLAN 10)
                                         |
                                    [G0/0/0: 192.168.1.1/24]
```

### Show running-config của R1:
```
interface GigabitEthernet0/0/0
 ip address 192.168.1.1 255.255.255.0
!
interface GigabitEthernet0/0/1
 ip address 192.168.10.1 255.255.255.0
!
```

### Hiện tượng:
- PC clients nhận được IP 169.254.x.x
- DHCP Server hoạt động bình thường
- PC ping được gateway 192.168.10.1

### Yêu cầu (5 điểm):

**Câu 1 (2.5 điểm):** Phân tích nguyên nhân PC nhận IP 169.254.x.x và đưa ra giải pháp.

**Đáp án:**

**Phân tích:**
- IP 169.254.x.x là APIPA (Automatic Private IP Addressing)
- PC tự động gán IP này khi không nhận được DHCP Offer
- DHCP Discover (broadcast 255.255.255.255) không đến được DHCP Server
- Router không forward broadcast packets giữa các subnet
- Cần cấu hình DHCP Relay Agent trên router

**Giải pháp:**
```
R1(config)# interface g0/0/1
R1(config-if)# ip helper-address 192.168.1.100
```
(Lệnh này biến router thành DHCP relay, forward DHCP broadcast sang unicast đến DHCP server)

**Kiểm tra:**
```
R1# show ip interface g0/0/1
PC> ipconfig /release
PC> ipconfig /renew
PC> ipconfig
```

**Câu 2 (2.5 điểm):** Mô tả chi tiết quá trình DHCP hoạt động sau khi cấu hình ip helper-address.

**Đáp án:**

**Quá trình DHCP với Relay Agent:**

1. **DISCOVER:**
   - PC gửi broadcast: Source 0.0.0.0:68, Dest 255.255.255.255:67
   - Router G0/0/1 nhận broadcast
   - Router chuyển thành unicast: Source 192.168.10.1, Dest 192.168.1.100:67
   - Router thêm giaddr (Gateway IP Address) = 192.168.10.1

2. **OFFER:**
   - DHCP Server nhận request, xem giaddr để biết subnet
   - Server chọn IP từ pool phù hợp với subnet 192.168.10.0/24
   - Server gửi unicast OFFER đến Router 192.168.10.1
   - Router forward OFFER đến PC (có thể broadcast hoặc unicast)

3. **REQUEST:**
   - PC gửi broadcast REQUEST
   - Router relay sang unicast đến DHCP Server

4. **ACK:**
   - Server gửi ACK qua Router
   - Router forward đến PC
   - PC cấu hình IP, subnet mask, gateway, DNS từ ACK

**Thông tin DHCP Server dựa vào để offer đúng IP:**
- **giaddr (Gateway IP Address)**: Router điền vào khi relay
- Từ giaddr, server xác định subnet cần cấp IP
- Server chọn pool DHCP tương ứng với subnet đó

---

## ĐỀ 4: NAT & PORT FORWARDING + SECURITY

### Mô hình:
```
Internet --- [G0/0/1: 203.162.1.100/24] R1 [G0/0/0: 192.168.1.1/24] --- LAN
                                         |
                                   Web Server: 192.168.1.10
                                   FTP Server: 192.168.1.20
```

### Yêu cầu (6 điểm):

**Câu 1 (2 điểm):** Cấu hình NAT Overload (PAT) để các PC trong LAN (192.168.1.0/24) truy cập Internet qua IP public 203.162.1.100.

**Đáp án:**
```
R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255
```
(Tạo ACL để xác định traffic nào được NAT)

```
R1(config)# ip nat inside source list 1 interface g0/0/1 overload
```
(Cấu hình PAT sử dụng IP của interface G0/0/1)

```
R1(config)# interface g0/0/0
R1(config-if)# ip nat inside
```
(Đánh dấu interface LAN là inside)

```
R1(config)# interface g0/0/1
R1(config-if)# ip nat outside
```
(Đánh dấu interface WAN là outside)

**Kiểm tra:**
```
R1# show ip nat translations
R1# show ip nat statistics
```

**Câu 2 (2 điểm):** Cấu hình Port Forwarding để người dùng Internet truy cập:
- Web Server qua http://203.162.1.100:80
- FTP Server qua ftp://203.162.1.100:21

**Đáp án:**
```
R1(config)# ip nat inside source static tcp 192.168.1.10 80 203.162.1.100 80
```
(Port forwarding HTTP đến Web Server)

```
R1(config)# ip nat inside source static tcp 192.168.1.20 21 203.162.1.100 21
```
(Port forwarding FTP đến FTP Server)

Hoặc sử dụng interface:
```
R1(config)# ip nat inside source static tcp 192.168.1.10 80 interface g0/0/1 80
R1(config)# ip nat inside source static tcp 192.168.1.20 21 interface g0/0/1 21
```

**Câu 3 (2 điểm):** Công ty bị tấn công DDoS từ dải IP 172.16.0.0/16. Viết ACL để chặn toàn bộ traffic từ dải IP này vào hệ thống.

**Đáp án:**

*Cách 1: Extended ACL tại interface outside (khuyến nghị):*
```
R1(config)# access-list 100 deny ip 172.16.0.0 0.0.255.255 any
R1(config)# access-list 100 permit ip any any
R1(config)# interface g0/0/1
R1(config-if)# ip access-group 100 in
```
(Chặn ngay tại interface nhận traffic từ Internet, hướng inbound)

*Cách 2: Chặn chi tiết hơn chỉ đến servers:*
```
R1(config)# access-list 101 deny ip 172.16.0.0 0.0.255.255 host 192.168.1.10
R1(config)# access-list 101 deny ip 172.16.0.0 0.0.255.255 host 192.168.1.20
R1(config)# access-list 101 permit ip any any
R1(config)# interface g0/0/1
R1(config-if)# ip access-group 101 in
```

**Giải thích:**
- Đặt ACL tại G0/0/1 (outside interface) hướng IN để chặn sớm nhất
- Deny traffic từ 172.16.0.0/16 đến bất kỳ đích nào (any)
- Permit ip any any ở cuối để cho phép traffic hợp lệ khác
- Implicit deny all sẽ tự động deny traffic không match

---

## ĐỀ 5: CLOUDFLARE & DNS TROUBLESHOOTING

### Tình huống:
Ngày 20/10/2025, Cloudflare gặp sự cố nghiêm trọng, nhiều website sử dụng Cloudflare DNS không thể truy cập.

### Yêu cầu (6 điểm):

**Câu 1 (2 điểm):** Giải thích tại sao khi user truy cập website lại đi qua Cloudflare server trước khi đến web server thực tế?

**Đáp án:**

**Cloudflare hoạt động như Reverse Proxy & CDN:**

1. **DNS Resolution:**
   - User query "example.com"
   - DNS trả về IP của Cloudflare server (không phải IP web server thực)
   - DNS record được config: example.com → CloudFlare IP

2. **Lợi ích:**
   - **DDoS Protection**: Cloudflare chặn traffic độc hại
   - **CDN**: Cache static content, giảm tải cho origin server
   - **SSL/TLS**: Cloudflare xử lý encryption
   - **Load Balancing**: Phân tải giữa các servers
   - **WAF**: Web Application Firewall bảo vệ

3. **Luồng traffic:**
   ```
   User → DNS Query → Cloudflare DNS
        ← Cloudflare IP
   User → HTTPS Request → Cloudflare Edge Server
        → Origin Server (IP thực ẩn)
        ← Response
        ← Response (cached/optimized)
   ```

**Câu 2 (2 điểm):** Cloudflare DNS (1.1.1.1) chết, user không resolve được domain. Đưa ra các giải pháp khắc phục nhanh.

**Đáp án:**

**Giải pháp ngay lập tức:**

1. **Sử dụng DNS backup:**
   ```
   # Windows
   ipconfig /flushdns
   Thay DNS sang: 8.8.8.8 (Google), 8.8.4.4
   
   # Linux
   /etc/resolv.conf:
   nameserver 8.8.8.8
   nameserver 8.8.4.4
   ```

2. **Sử dụng file hosts (temporary):**
   ```
   # Windows: C:\Windows\System32\drivers\etc\hosts
   # Linux: /etc/hosts
   
   203.162.1.100  example.com
   203.162.1.101  api.example.com
   ```
   (Map trực tiếp domain → IP, bypass DNS)

3. **Truy cập trực tiếp qua IP:**
   ```
   http://203.162.1.100
   ```
   (Nếu biết IP origin server, nhưng mất HTTPS certificate validation)

**Giải pháp dài hạn cho doanh nghiệp:**

1. **Multi-DNS Setup:**
   - Primary DNS: Cloudflare
   - Secondary DNS: Google DNS, AWS Route53
   - Tertiary DNS: Local DNS server

2. **Local DNS Caching Server:**
   - Cài đặt BIND, Unbound, hoặc dnsmasq
   - Cache DNS responses locally
   - Giảm dependency vào external DNS

3. **Monitoring & Alerting:**
   - Monitor DNS resolution time
   - Auto-failover khi DNS chậm/fail
   - Alert team khi có vấn đề

**Câu 3 (2 điểm):** Giải thích chi tiết luồng DNS resolution và các loại DNS server trong quá trình này.

**Đáp án:**

**Luồng DNS Resolution đầy đủ:**

1. **Local DNS Cache:**
   - User query "example.com"
   - Check browser cache → OS cache
   - Nếu có → return ngay

2. **Recursive DNS Server (Local DNS):**
   - Thường là DNS của ISP hoặc 1.1.1.1, 8.8.8.8
   - Nếu cache có → return
   - Nếu không → query tiếp

3. **Root DNS Server:**
   - Recursive server query "." (root)
   - Root server trả về: "Tìm .com tại TLD server A.B.C.D"
   - 13 root server clusters worldwide

4. **TLD DNS Server (.com):**
   - Query "example.com" tại TLD server
   - TLD trả về: "Tìm example.com tại Authoritative NS: ns1.cloudflare.com"

5. **Authoritative DNSServer:**
   - Query ns1.cloudflare.com
   - Authoritative server trả về: "example.com = 104.21.x.x"
   - Đây là IP Cloudflare (nếu dùng proxy)

6. **Response chain:**
   ```
   Authoritative → TLD → Root → Recursive → User
   ```
   - Mỗi level cache kết quả theo TTL
   - User nhận IP cuối cùng

**Local DNS vs Public DNS:**
- **Local DNS**: DNS server của ISP, company network
  + Gần user → faster
  + ISP có thể log/filter
  + Cache shared trong network
  
- **Public DNS**: 1.1.1.1, 8.8.8.8
  + Privacy tốt hơn
  + Reliable, fast
  + Không bị ISP censorship

---

## ĐỀ 6: MONITORING SYSTEM - NAGIOS/ZABBIX/WAZUH

### Yêu cầu (6 điểm):

**Câu 1 (3 điểm):** Lập bảng so sánh chi tiết Nagios, Zabbix, và Wazuh.

**Đáp án:**

| Tiêu chí | Nagios | Zabbix | Wazuh |
|----------|--------|---------|-------|
| **Mục đích chính** | Network/System monitoring | Infrastructure monitoring | Security monitoring (SIEM) |
| **Kiến trúc** | Server + Plugins | Server + Agent/Agentless | Manager + Agent |
| **Giao thức** | NRPE, SNMP, SSH | Zabbix Protocol (10051), SNMP | Syslog, API (1514, 1515, 55000) |
| **Port** | 5666 (NRPE), 161 (SNMP) | 10050 (Agent), 10051 (Trapper) | 1514 (Agent), 1515 (Enrollment), 55000 (API) |
| **Agent** | Optional (NRPE) | Optional nhưng khuyến khích | Bắt buộc để full features |
| **Dashboard** | Cơ bản (cần plugins) | Built-in powerful | Kibana-based |
| **Alerting** | Email, SMS (via plugins) | Email, SMS, Script | Email, Slack, PagerDuty |
| **Auto-discovery** | Limited | Excellent | Good |
| **Use case** | Basic monitoring | Enterprise monitoring | Security compliance, threat detection |
| **Learning curve** | Medium | Medium-High | High |

**Câu 2 (3 điểm):** Mô tả chi tiết cách thức giao tiếp giữa các thành phần trong hệ thống Zabbix. Lấy kịch bản: Giám sát CPU usage của một server Linux.

**Đáp án:**

**Kiến trúc Zabbix:**
```
Zabbix Server (Database + Server Process)
     ↕
Zabbix Agent (trên Linux server cần monitor)
     ↕
Zabbix Frontend (Web UI)
```

**Luồng hoạt động - Giám sát CPU:**

**1. Cài đặt & Enrollment:**
```
# Trên Linux server
yum install zabbix-agent -y
vi /etc/zabbix/zabbix_agentd.conf
   Server=<Zabbix-Server-IP>
   ServerActive=<Zabbix-Server-IP>
   Hostname=web-server-01
systemctl start zabbix-agent
systemctl enable zabbix-agent
```

**2. Agent gửi data (Active mode):**
- Agent kết nối đến Server port **10051** (Zabbix Trapper)
- Agent hỏi: "Tôi cần collect metric gì?"
- Server trả về list items cần monitor (CPU, RAM, Disk...)
- Agent collect data và gửi về Server theo interval (30s, 60s...)

**3. Server poll data (Passive mode):**
- Server connect đến Agent port **10050**
- Server request: "system.cpu.util[]"
- Agent execute command và trả về kết quả
- Server lưu vào Database (MySQL/PostgreSQL)

**4. Xử lý dữ liệu:**
```
Zabbix Server → Database:
- Time: 2025-01-17 10:30:00
- Host: web-server-01
- Item: system.cpu.util
- Value: 75.5%
```

**5. Trigger & Alerting:**
- Server evaluate trigger: "CPU > 80% for 5 mins"
- Nếu threshold vượt → Fire trigger
- Action: Send email/SMS/Slack notification
- Escalation: Nếu không resolve trong 30 mins → notify manager

**6. Frontend visualization:**
- Admin login Zabbix Web UI (port 80/443)
- Dashboard query Database
- Hiển thị graph, latest data, problems
- Realtime updates qua AJAX

**Giao thức & Ports chi tiết:**
```
Agent → Server:
- Port 10051 (Active checks, Agent push data)
- Protocol: Zabbix Protocol (JSON over TCP)
- Data: {"host":"web-server-01","key":"system.cpu.util","value":"75.5"}

Server → Agent:
- Port 10050 (Passive checks, Server pull data)
- Request: "system.cpu.util"
- Response: "75.5"

User → Frontend:
- Port 80/443 (HTTPS)
- Frontend → Database: SQL queries
- Frontend → Server: API calls (optional)
```

**Ví dụ metric collection:**
```
# Agent-side (Linux)
Item key: system.cpu.util[,avg1]
Command executed: top, mpstat, /proc/stat
Value collected: 75.5

# Server-side processing
Stored as: Float(75.5)
Timestamp: Unix epoch
Trigger check: IF {web-server-01:system.cpu.util.avg(5m)}>80
```

---

## ĐỀ 7: PROXY SERVER & WEB FILTERING

### Mô hình:
```
Clients (192.168.1.0/24) --- R1/Squid Proxy (192.168.1.1) --- Internet
```

### Yêu cầu (5 điểm):

**Câu 1 (2.5 điểm):** Cấu hình Squid Proxy để:
- Chặn truy cập facebook.com, youtube.com
- Chặn download file .exe, .zip
- Chỉ cho phép truy cập Internet từ 8h-17h các ngày trong tuần

**Đáp án:**

```bash
# /etc/squid/squid.conf

# 1. Define ACL cho blocked sites
acl blocked_sites dstdomain .facebook.com .youtube.com
acl blocked_sites dstdomain .fbcdn.net .ytimg.com

# 2. Define ACL cho blocked file types
acl blocked_files urlpath_regex -i \.exe$ \.zip$

# 3. Define ACL cho working hours
acl working_hours time MTWHF 08:00-17:00

# 4. Define ACL cho LAN
acl localnet src 192.168.1.0/24

# 5. HTTP port
http_port 3128 transparent

# 6. Apply rules (order matters!)
http_access deny blocked_sites
http_access deny blocked_files
http_access allow localnet working_hours
http_access deny all

# 7. Transparent proxy (không cần config trên client)
# Cần iptables redirect
```

**Cấu hình iptables để transparent:**
```bash
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3128
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 3128
```
(Redirect traffic HTTP/HTTPS từ clients tự động qua Squid port 3128)

**Câu 2 (2.5 điểm):** Giải thích chi tiết luồng traffic khi client request đến server qua Squid Proxy (cả HTTP và HTTPS).

**Đáp án:**

**Luồng HTTP (port 80) - Transparent Proxy:**

```
1. Client request: http://example.com
   PC (192.168.1.10) → [SYN] → 93.184.216.34:80

2. Iptables intercept:
   PREROUTING chain match: dport 80
   REDIRECT → localhost:3128

3. Squid receives:
   Source: 192.168.1.10:random
   Dest: 127.0.0.1:3128
   Request: GET / HTTP/1.1
            Host: example.com

4. Squid checks ACL:
   - Check blocked_sites → MISS
   - Check blocked_files → MISS
   - Check working_hours → MATCH
   - Check localnet → MATCH
   → ALLOW

5. Squid → Origin Server:
   Source: R1 Public IP
   Dest: 93.184.216.34:80
   Request: GET / HTTP/1.1

6. Origin Server → Squid:
   Response: HTTP/1.1 200 OK
             Content...

7. Squid → Client:
   - Cache response (if cacheable)
   - Forward to 192.168.1.10
   
8. Squid logs:
   /var/log/squid/access.log:
   192.168.1.10 TCP_MISS/200 example.com
```

**Luồng HTTPS (port 443) - SSL Bumping:**

```
1. Client CONNECT request:
   CONNECT example.com:443 HTTP/1.1

2. Squid intercepts:
   - Option 1: SSL Passthrough (không inspect)
     + Squid forward trực tiếp
     + Không thể filter content
     + Chỉ filter theo domain/IP
   
   - Option 2: SSL Bumping (MITM)
     + Squid terminate SSL từ client
     + Squid tạo SSL mới đến origin
     + Có thể inspect content
     + Cần CA certificate trên clients

3. SSL Bumping flow:
   Client → Squid: TLS Handshake
   Squid tạo fake certificate (signed by Squid CA)
   Client trust Squid CA → TLS established
   
   Squid → Origin: TLS Handshake mới
   Origin → Squid: Real certificate
   TLS established
   
4. Data flow:
   Client → Squid: Encrypted (Squid CA)
   Squid decrypt → inspect → re-encrypt
   Squid → Origin: Encrypted (Origin cert)
```

**Config SSL Bumping (advanced):**
```bash
# /etc/squid/squid.conf
http_port 3128 ssl-bump \
  cert=/etc/squid/ssl/squid.pem \
  generate-host-certificates=on

ssl_bump server-first all
sslcrtd_program /usr/lib64/squid/ssl_crtd -s /var/lib/ssl_db -M 4MB

# ACL for SSL sites
acl step1 at_step SslBump1
ssl_bump peek step1
ssl_bump bump all
```

---

## ĐỀ TỔNG HỢP CUỐI KHÓA

### Mô hình phức tạp:
```
Internet
   |
[G0/2: Public IP] R1 (Gateway Router)
   |
[G0/1: 10.0.0.1/24] --- [G0/1] R2 (Core Router) [G0/2: 172.16.0.1/24]
                         |                              |
                    [VLAN Trunk]                   [VLAN Trunk]
                         |                              |
                       SW1                            SW2
                    (Access SW)                   (Access SW)
                    /    |    \                    /    |    \
              VLAN10  VLAN20 VLAN30          VLAN10  VLAN20  VLAN30
               PCs     PCs    Servers         PCs     PCs    Servers

VLANs:
- VLAN 10 (Sales): 172.16.10.0/24
- VLAN 20 (IT): 172.16.20.0/24  
- VLAN 30 (Servers): 172.16.30.0/24

Servers in VLAN 30:
- DHCP Server: 172.16.30.10
- DNS Server: 172.16.30.20
- Web Server: 172.16.30.30
- Zabbix Server: 172.16.30.40
```

### Show running-config của R2:
```
hostname R2
!
interface GigabitEthernet0/1
 ip address 10.0.0.2 255.255.255.0
!
interface GigabitEthernet0/2
 no ip address
!
interface GigabitEthernet0/2.10
 encapsulation dot1Q 10
 ip address 172.16.10.1 255.255.255.0
!
interface GigabitEthernet0/2.20
 encapsulation dot1Q 20
 ip address 172.16.20.1 255.255.255.0
!
interface GigabitEthernet0/2.30
 encapsulation dot1Q 30
 ip address 172.16.30.1 255.255.255.0
!
router ospf 1
 network 10.0.0.0 0.0.0.255 area 0
!
ip dhcp excluded-address 172.16.10.1 172.16.10.10
ip dhcp excluded-address 172.16.20.1 172.16.20.10
!
ip dhcp pool VLAN10
 network 172.16.10.0 255.255.255.0
 default-router 172.16.10.1
 dns-server 172.16.30.20
!
ip dhcp pool VLAN20
 network 172.16.20.0 255.255.255.0
 default-router 172.16.20.1
 dns-server 172.16.30.20
!
```

### Yêu cầu (10 điểm tổng):

**Phần 1: Troubleshooting (4 điểm)**

**1.1 (2 điểm):** PC ở VLAN 10 không nhận được IP từ DHCP. Phân tích nguyên nhân và giải pháp.

**Đáp án:**
- **Vấn đề**: DHCP server ở VLAN 30, PC ở VLAN 10
- R2 đang có DHCP pool nhưng không relay đến DHCP server thực
- Cần config ip helper-address hoặc sử dụng DHCP local trên R2

**Giải pháp 1 - Sử dụng DHCP local (đã có pool):**
- Config hiện tại đã đúng, check:
```
R2# show ip dhcp binding
R2# show ip dhcp pool
```
- Nếu PC vẫn không nhận:
  + Check trunk between R2-SW1
  + Check VLAN config trên SW1
  + Check PC ở đúng VLAN 10

**Giải pháp 2 - Relay đến DHCP Server:**
```
R2(config)# no ip dhcp pool VLAN10
R2(config)# no ip dhcp pool VLAN20
R2(config)# interface g0/2.10
R2(config-subif)# ip helper-address 172.16.30.10
R2(config)# interface g0/2.20
R2(config-subif)# ip helper-address 172.16.30.10
```

**1.2 (2 điểm):** PC ở VLAN 10 không ping được Internet. Các PC ping được gateway và ping được PC VLAN 20. Tìm vấn đề và sửa.

**Đáp án:**
- **Vấn đề**: 
  + R2 chưa có default route đi Internet qua R1
  + R2 chỉ advertise network 10.0.0.0 trong OSPF, chưa có route đến 172.16.0.0/16
  + R1 không biết route về 172.16.0.0/16

**Giải pháp:**

*Trên R2:*
```
R2(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1
R2(config)# router ospf 1
R2(config-router)# network 172.16.0.0 0.0.255.255 area 0
R2(config-router)# default-information originate
```
(Tạo default route, advertise các network VLANs, và propagate default route vào OSPF)

*Trên R1:*
```
R1(config)# router ospf 1
R1(config-router)# network 10.0.0.0 0.0.0.255 area 0
```
(Join OSPF để học routes về 172.16.0.0/16)

```
R1(config)# access-list 1 permit 172.16.0.0 0.0.255.255
R1(config)# ip nat inside source list 1 interface g0/2 overload
R1(config)# interface g0/1
R1(config-if)# ip nat inside
R1(config)# interface g0/2
R1(config-if)# ip nat outside
```
(NAT cho internal networks đi Internet)

---

**Phần 2: Cấu hình mở rộng (3 điểm)**

**2.1 (1.5 điểm):** Thêm VLAN 40 (Guest WiFi: 172.16.40.0/24) vào hệ thống. Guest WiFi chỉ được phép:
- Truy cập Internet
- Không truy cập được các VLAN khác
- DHCP tự động

**Đáp án:**

*Trên SW1:*
```
SW1(config)# vlan 40
SW1(config-vlan)# name GUEST_WIFI
SW1(config)# interface range f0/20-24
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 40
```

*Trên R2:*
```
R2(config)# interface g0/2.40
R2(config-subif)# encapsulation dot1Q 40
R2(config-subif)# ip address 172.16.40.1 255.255.255.0

R2(config)# ip dhcp pool VLAN40
R2(dhcp-config)# network 172.16.40.0 255.255.255.0
R2(dhcp-config)# default-router 172.16.40.1
R2(dhcp-config)# dns-server 8.8.8.8

R2(config)# router ospf 1
R2(config-router)# network 172.16.40.0 0.0.0.255 area 0
```

*ACL để chặn VLAN 40 truy cập VLANs khác:*
```
R2(config)# access-list 100 deny ip 172.16.40.0 0.0.0.255 172.16.10.0 0.0.0.255
R2(config)# access-list 100 deny ip 172.16.40.0 0.0.0.255 172.16.20.0 0.0.0.255
R2(config)# access-list 100 deny ip 172.16.40.0 0.0.0.255 172.16.30.0 0.0.0.255
R2(config)# access-list 100 permit ip any any

R2(config)# interface g0/2.40
R2(config-subif)# ip access-group 100 in
```

**2.2 (1.5 điểm):** Cấu hình cho phép user truy cập Web Server từ Internet qua domain company.com (Public IP: 203.162.1.100).

**Đáp án:**

*Trên R1 - Port Forwarding:*
```
R1(config)# ip nat inside source static tcp 172.16.30.30 80 203.162.1.100 80
R1(config)# ip nat inside source static tcp 172.16.30.30 443 203.162.1.100 443
```

*DNS Configuration (trên DNS Server 172.16.30.20):*
```
# BIND9 config
zone "company.com" {
    type master;
    file "/etc/bind/db.company.com";
};

# /etc/bind/db.company.com
@   IN  A       203.162.1.100
www IN  CNAME   @
```

*Hoặc sử dụng Cloudflare:*
- Login Cloudflare Dashboard
- Add DNS record:
  + Type: A
  + Name: company.com
  + Value: 203.162.1.100
  + Proxy: Enabled (orange cloud)

---

**Phần 3: Monitoring & Security (3 điểm)**

**3.1 (1.5 điểm):** Triển khai Zabbix để giám sát toàn bộ hệ thống. Mô tả các bước cài đặt và cấu hình monitor CPU, Memory, Network của R2 và các switches.

**Đáp án:**

**Bước 1: Zabbix Server (đã có tại 172.16.30.40)**

```bash
# Trên Zabbix Server (Linux)
# Database
mysql -u root -p
CREATE DATABASE zabbix CHARACTER SET utf8 COLLATE utf8_bin;
GRANT ALL ON zabbix.* TO 'zabbix'@'localhost' IDENTIFIED BY 'password';

# Import schema
zcat /usr/share/doc/zabbix-server-mysql/create.sql.gz | mysql -u zabbix -p zabbix

# Config
vi /etc/zabbix/zabbix_server.conf
DBHost=localhost
DBName=zabbix
DBUser=zabbix
DBPassword=password

systemctl start zabbix-server
systemctl enable zabbix-server
```

**Bước 2: Monitor Routers/Switches (SNMP)**

*Trên R2:*
```
R2(config)# snmp-server community public RO
R2(config)# snmp-server location "Core-Router"
R2(config)# snmp-server contact "admin@company.com"
```

*Trên Zabbix Web UI:*
```
Configuration → Hosts → Create Host
- Host name: R2-Core-Router
- Groups: Network Devices
- Interfaces: SNMP
  - IP: 172.16.30.1
  - Port: 161
  - SNMP version: SNMPv2
  - Community: public
  
Templates:
- Template Net Cisco IOS SNMPv2

Items sẽ tự động monitor:
- CPU utilization
- Memory utilization  
- Interface status (g0/1, g0/2.10, .20, .30)
- Network traffic (in/out)
```

**Bước 3: Monitor Linux Servers (Agent)**

```bash
# Trên DHCP/DNS/Web Servers
yum install zabbix-agent -y

vi /etc/zabbix/zabbix_agentd.conf
Server=172.16.30.40
ServerActive=172.16.30.40
Hostname=dhcp-server-01

systemctl start zabbix-agent
systemctl enable zabbix-agent
```

*Trên Zabbix Web UI:*
```
Add Host → Template OS Linux by Zabbix agent
Monitor: CPU, Memory, Disk, Network, Services
```

**Bước 4: Setup Triggers & Alerts**

```
Configuration → Triggers → Create:
- R2 CPU > 80% for 5 mins
- R2 Interface down
- Web Server HTTP service down

Actions → Create:
- Send email to admin@company.com
- Send Slack notification
- Execute remote script (auto-restart service)
```

**3.2 (1.5 điểm):** Công ty bị tấn công brute-force SSH từ nhiều IP khác nhau. Đề xuất giải pháp toàn diện bao gồm cả phòng ngừa và giám sát.

**Đáp án:**

**Giải pháp 1: Trên Router/Firewall (Immediate)**

```
R1(config)# access-list 101 permit tcp any any eq 22 log
R1(config)# access-list 101 deny ip any any

R1(config)# ip access-list extended SSH_PROTECTION
R1(config-ext-nacl)# permit tcp 172.16.0.0 0.0.255.255 any eq 22
R1(config-ext-nacl)# deny tcp any any eq 22 log
R1(config-ext-nacl)# permit ip any any

R1(config)# interface g0/2
R1(config-if)# ip access-group SSH_PROTECTION in
```
(Chỉ cho phép SSH từ internal networks)

**Giải pháp 2: Trên Linux Servers**

*Fail2ban - Auto block brute-force:*
```bash
yum install fail2ban -y

vi /etc/fail2ban/jail.local
[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/secure
maxretry = 3
bantime = 3600
findtime = 600

systemctl start fail2ban
systemctl enable fail2ban
```
(Ban IP sau 3 lần login failed trong 10 phút)

*SSH Hardening:*
```bash
vi /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no  # Use key-based only
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
AllowUsers admin@172.16.0.0/16  # IP whitelist

systemctl restart sshd
```

**Giải pháp 3: Monitoring với Zabbix**

```
# Custom Zabbix item
UserParameter=ssh.failed.count,grep "Failed password" /var/log/secure | wc -l

# Trigger
{linux-server:ssh.failed.count.avg(5m)}>10

# Action
- Alert security team
- Run script: /usr/local/bin/block_attacker.sh
```

*Script tự động block:*
```bash
#!/bin/bash
# /usr/local/bin/block_attacker.sh
tail -100 /var/log/secure | grep "Failed password" | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | while read count ip; do
  if [ $count -gt 5 ]; then
    iptables -I INPUT -s $ip -j DROP
    echo "Blocked $ip - $count attempts"
  fi
done
```

**Giải pháp 4: IDS/IPS - Wazuh**

```bash
# Trên Wazuh Manager
vi /var/ossec/etc/ossec.conf
<localfile>
  <log_format>syslog</log_format>
  <location>/var/log/secure</location>
</localfile>

# Rule cho SSH brute-force
<rule id="100001" level="10">
  <if_sid>5551</if_sid>
  <description>Multiple SSH authentication failures</description>
  <group>authentication_failures,pci_dss_10.2.4,</group>
</rule>

# Active Response - Auto block
<active-response>
  <command>firewall-drop</command>
  <location>local</location>
  <rules_id>100001</rules_id>
  <timeout>600</timeout>
</active-response>
```

**Giải pháp 5: Logging & SIEM**

```bash
# Central logging
rsyslog config → Forward logs to SIEM

# ELK Stack
Logstash input:
  - /var/log/secure
  - /var/log/auth.log
  
Elasticsearch: Index and analyze
Kibana: Visualize attacks
  - Dashboard: Failed SSH attempts by IP
  - Dashboard: Geo-location of attackers
  - Alert: Spike in failed logins
```

**Tổng hợp giải pháp:**
1. **Prevention**: ACL, Fail2ban, SSH hardening
2. **Detection**: Wazuh IDS, Log monitoring
3. **Response**: Auto-blocking, Alerts
4. **Analysis**: SIEM, Dashboards
5. **Regular**: Review logs, Update blacklists, Patch systems

---

# KẾT LUẬN

Đề thi thực tế sẽ kết hợp:
- **20-25 câu trắc nghiệm** (kiến thức lý thuyết + nhận biết vấn đề)
- **1-2 bài tự luận lớn** với mô hình phức tạp yêu cầu:
  + Troubleshooting từ show commands
  + Đề xuất giải pháp cấu hình
  + Giải thích cách hoạt động
  + So sánh công nghệ
  + Thiết kế hệ thống monitoring/security

**Lưu ý khi thi:**
- Được mang A4 viết tay → Chuẩn bị sẵn các câu lệnh quan trọng
- Không cần nhớ chính xác syntax → Giải thích được chức năng là được điểm
- Troubleshooting: Luôn kiểm tra theo OSI model từ dưới lên
- Đọc kỹ yêu cầu đề, đưa giải pháp phù hợp với context


## PHẦN 1: ROUTING FUNDAMENTALS (15 câu)

**Câu 1: Router lưu trữ cấu hình đang chạy (running-config) ở đâu?**
A. Flash
B. NVRAM
C. **RAM** ✓
D. Hard Disk

**Câu 2: Router lưu trữ cấu hình khởi động (startup-config) ở đâu?**
A. Flash
B. **NVRAM** ✓
C. RAM
D. ROM

**Câu 3: Router lưu trữ IOS (hệ điều hành) ở đâu?**
A. **Flash** ✓
B. NVRAM
C. RAM
D. ROM

**Câu 4: Khi router khởi động, nó load cấu hình theo thứ tự nào?**
A. RAM → NVRAM → Flash
B. NVRAM → RAM → Flash
C. **NVRAM → RAM** ✓
D. Flash → RAM → NVRAM

**Câu 5: Metric của giao thức RIP là gì?**
A. Bandwidth
B. Delay
C. **Hop count** ✓
D. Cost

**Câu 6: Giá trị hop count tối đa của RIP là bao nhiêu?**
A. 10
B. **15** ✓
C. 16
D. 255

**Câu 7: Giá trị hop count = 16 trong RIP có ý nghĩa gì?**
A. Đường đi hợp lệ
B. **Network unreachable** ✓
C. Cần recalculate
D. Default route

**Câu 8: RIP gửi routing update mỗi bao lâu?**
A. 15 giây
B. **30 giây** ✓
C. 60 giây
D. 90 giây

**Câu 9: RIPv2 gửi routing update đến địa chỉ nào?**
A. 255.255.255.255
B. **224.0.0.9** ✓
C. 224.0.0.10
D. 239.0.0.1

**Câu 10: RIPv1 gửi routing update đến địa chỉ nào?**
A. **255.255.255.255** ✓
B. 224.0.0.9
C. 224.0.0.10
D. 239.0.0.1

**Câu 11: RIP sử dụng giao thức transport layer nào?**
A. TCP port 520
B. **UDP port 520** ✓
C. TCP port 179
D. UDP port 161

**Câu 12: RIP thuộc loại giao thức định tuyến nào?**
A. Link-state
B. **Distance-vector** ✓
C. Hybrid
D. Path-vector

**Câu 13: OSPF sử dụng thuật toán nào để tính đường đi ngắn nhất?**
A. Bellman-Ford
B. **Dijkstra** ✓
C. Distance Vector
D. Flood Fill

**Câu 14: OSPF sử dụng metric dựa trên gì?**
A. Hop count
B. Delay
C. **Cost (Bandwidth)** ✓
D. Load

**Câu 15: OSPF gửi hello packet mỗi bao lâu (mặc định trên broadcast network)?**
A. **10 giây** ✓
B. 30 giây
C. 40 giây
D. 120 giây

## PHẦN 2: STATIC ROUTING (10 câu)

**Câu 16: Câu lệnh nào dùng để tạo static route?**
A. router static
B. **ip route** ✓
C. route add
D. static-route

**Câu 17: Default route được biểu diễn như thế nào?**
A. 255.255.255.255 255.255.255.255
B. **0.0.0.0 0.0.0.0** ✓
C. any any
D. all-routes

**Câu 18: Administrative Distance của static route là bao nhiêu?**
A. 0
B. **1** ✓
C. 90
D. 110

**Câu 19: Administrative Distance của connected route là bao nhiêu?**
A. **0** ✓
B. 1
C. 5
D. 10

**Câu 20: Administrative Distance của OSPF là bao nhiêu?**
A. 90
B. 100
C. **110** ✓
D. 120

**Câu 21: Administrative Distance của RIP là bao nhiêu?**
A. 90
B. 110
C. **120** ✓
D. 150

**Câu 22: Administrative Distance của EIGRP là bao nhiêu?**
A. **90** ✓
B. 100
C. 110
D. 120

**Câu 23: Floating static route là gì?**
A. Static route tự động thay đổi
B. **Static route có AD cao hơn dynamic route để làm backup** ✓
C. Static route không bao giờ xuống
D. Static route load-balancing

**Câu 24: Để tạo floating static route, ta cần?**
A. Sử dụng metric cao
B. **Sử dụng AD cao hơn** ✓
C. Sử dụng priority
D. Sử dụng weight

**Câu 25: Static route có ưu điểm gì?**
A. Tự động cập nhật khi topology thay đổi
B. **Bảo mật tốt, không quảng bá** ✓
C. Dễ quản lý trong mạng lớn
D. Tự động load-balancing

## PHẦN 3: VLAN & SWITCHING (15 câu)

**Câu 26: VLAN hoạt động ở layer nào của OSI?**
A. Layer 1
B. **Layer 2** ✓
C. Layer 3
D. Layer 4

**Câu 27: Câu lệnh nào dùng để tạo VLAN 10 trên switch?**
A. switch(config)# create vlan 10
B. **switch(config)# vlan 10** ✓
C. switch(config-if)# vlan 10
D. switch# vlan 10

**Câu 28: Range VLAN ID hợp lệ là?**
A. 0-4095
B. **1-4094** ✓
C. 1-1024
D. 1-4096

**Câu 29: VLAN 1 có đặc điểm gì?**
A. Không tồn tại
B. Phải tạo thủ công
C. **Default VLAN, không thể xóa** ✓
D. Chỉ dùng cho management

**Câu 30: VLAN 1002-1005 được dùng cho?**
A. Extended VLANs
B. **Token Ring và FDDI** ✓
C. Management
D. Reserved

**Câu 31: Normal range VLAN là?**
A. **1-1005** ✓
B. 1-4094
C. 1006-4094
D. 1-1024

**Câu 32: Extended range VLAN là?**
A. 1-1005
B. 1-4094
C. **1006-4094** ✓
D. 2000-4094

**Câu 33: Trunk port được cấu hình bằng lệnh nào?**
A. switchport mode access
B. **switchport mode trunk** ✓
C. switchport trunk
D. switchport vlan trunk

**Câu 34: Access port được cấu hình bằng lệnh nào?**
A. **switchport mode access** ✓
B. switchport mode trunk
C. switchport access
D. switchport vlan

**Câu 35: Encapsulation nào được sử dụng trên trunk link Cisco?**
A. ISL
B. **802.1Q (dot1Q)** ✓
C. VTP
D. STP

**Câu 36: 802.1Q thêm bao nhiêu bytes vào Ethernet frame?**
A. 2 bytes
B. **4 bytes** ✓
C. 8 bytes
D. 12 bytes

**Câu 37: Native VLAN trong 802.1Q có tác dụng gì?**
A. VLAN có priority cao nhất
B. **VLAN không được tag trên trunk** ✓
C. VLAN quản lý
D. VLAN mặc định cho access port

**Câu 38: Native VLAN mặc định là VLAN nào?**
A. VLAN 0
B. **VLAN 1** ✓
C. VLAN 99
D. VLAN 1002

**Câu 39: VTP (VLAN Trunking Protocol) hoạt động ở mode nào KHÔNG tạo/sửa/xóa VLAN?**
A. Server
B. **Client** ✓
C. Transparent
D. Off

**Câu 40: STP (Spanning Tree Protocol) được dùng để?**
A. Tăng tốc độ switching
B. **Ngăn chặn loop trong mạng** ✓
C. Quản lý VLAN
D. Bảo mật port

## PHẦN 4: INTER-VLAN ROUTING (10 câu)

**Câu 41: Inter-VLAN routing hoạt động ở layer nào?**
A. Layer 2
B. **Layer 3** ✓
C. Layer 4
D. Layer 2 và 3

**Câu 42: Router-on-a-Stick sử dụng?**
A. Multiple physical interfaces
B. **Sub-interfaces** ✓
C. Virtual interfaces
D. Loopback interfaces

**Câu 43: Câu lệnh nào tạo sub-interface?**
A. interface g0/0 sub 10
B. **interface g0/0.10** ✓
C. interface g0/0-10
D. subinterface g0/0 10

**Câu 44: Encapsulation trên sub-interface được cấu hình bằng lệnh nào?**
A. encapsulation trunk
B. **encapsulation dot1Q <vlan-id>** ✓
C. encapsulation vlan <vlan-id>
D. encapsulation 802.1q <vlan-id>

**Câu 45: Multilayer switch khác switch layer 2 ở điểm nào?**
A. Có nhiều port hơn
B. **Có khả năng routing** ✓
C. Hỗ trợ nhiều VLAN hơn
D. Tốc độ nhanh hơn

**Câu 46: SVI (Switch Virtual Interface) là gì?**
A. Physical interface trên switch
B. **Virtual interface đại diện cho VLAN** ✓
C. Sub-interface
D. Management interface

**Câu 47: Để enable routing trên multilayer switch, dùng lệnh nào?**
A. enable routing
B. router enable
C. **ip routing** ✓
D. routing on

**Câu 48: Legacy inter-VLAN routing có nhược điểm gì?**
A. Cấu hình phức tạp
B. **Cần nhiều physical interfaces** ✓
C. Không bảo mật
D. Tốc độ chậm

**Câu 49: Router-on-a-Stick có nhược điểm gì?**
A. Cần nhiều router
B. **Single point of failure, bandwidth bottleneck** ✓
C. Không hỗ trợ nhiều VLAN
D. Khó cấu hình

**Câu 50: Multilayer switch inter-VLAN routing có ưu điểm gì?**
A. Rẻ hơn router
B. **Wire-speed routing, performance cao** ✓
C. Dễ cấu hình hơn
D. Bảo mật tốt hơn

## PHẦN 5: DHCP (12 câu)

**Câu 51: DHCP là viết tắt của?**
A. Dynamic Host Control Protocol
B. **Dynamic Host Configuration Protocol** ✓
C. Dynamic Hardware Configuration Protocol
D. Domain Host Configuration Protocol

**Câu 52: DHCP hoạt động ở layer nào?**
A. Layer 2
B. Layer 3
C. Layer 4
D. **Layer 7 (Application)** ✓

**Câu 53: DHCP sử dụng port nào?**
A. TCP 67, 68
B. **UDP 67 (server), 68 (client)** ✓
C. TCP 80, 443
D. UDP 520, 521

**Câu 54: Quá trình DHCP diễn ra theo thứ tự nào?**
A. Offer - Discover - Request - ACK
B. **Discover - Offer - Request - ACK** ✓
C. Request - Discover - Offer - ACK
D. Discover - Request - Offer - ACK

**Câu 55: DHCP Discover packet có đặc điểm gì?**
A. Unicast
B. **Broadcast** ✓
C. Multicast
D. Anycast

**Câu 56: DHCP Discover có source IP là?**
A. Client IP cũ
B. **0.0.0.0** ✓
C. 127.0.0.1
D. 169.254.x.x

**Câu 57: DHCP Discover có destination IP là?**
A. DHCP server IP
B. **255.255.255.255** ✓
C. 224.0.0.1
D. 0.0.0.0

**Câu 58: Địa chỉ IP 169.254.x.x cho biết điều gì?**
A. DHCP server đang hoạt động bình thường
B. **DHCP client không liên lạc được với DHCP server (APIPA)** ✓
C. IP được cấu hình static
D. IP được cấp từ DHCP Relay

**Câu 59: APIPA (Automatic Private IP Addressing) thuộc dải IP nào?**
A. 10.0.0.0/8
B. 172.16.0.0/12
C. **169.254.0.0/16** ✓
D. 192.168.0.0/16

**Câu 60: DHCP Relay Agent cần thiết khi nào?**
A. Khi có nhiều clients
B. **Khi DHCP server và client ở khác subnet** ✓
C. Khi cần bảo mật
D. Khi cần backup

**Câu 61: Câu lệnh nào biến router thành DHCP relay agent?**
A. ip dhcp relay
B. **ip helper-address <dhcp-server-ip>** ✓
C. ip dhcp forward
D. dhcp relay-agent

**Câu 62: DHCP lease time dùng để làm gì?**
A. Thời gian server đợi response
B. **Thời gian client được sử dụng IP** ✓
C. Thời gian timeout
D. Thời gian renewal

## PHẦN 6: NAT (15 câu)

**Câu 63: NAT là viết tắt của?**
A. Network Address Translation
B. **Network Address Translation** ✓
C. Network Access Translation
D. Network Application Translation

**Câu 64: NAT hoạt động ở layer nào?**
A. Layer 2
B. **Layer 3** ✓
C. Layer 4
D. Layer 7

**Câu 65: Inside Local address là gì?**
A. IP public của inside host
B. **IP private của inside host** ✓
C. IP của outside host
D. IP của NAT router

**Câu 66: Inside Global address là gì?**
A. IP private của inside host
B. **IP public đại diện cho inside host** ✓
C. IP của outside host
D. IP gateway

**Câu 67: Static NAT mapping là?**
A. Nhiều private → 1 public
B. **1 private → 1 public cố định** ✓
C. 1 private → nhiều public
D. Dynamic mapping

**Câu 68: Dynamic NAT sử dụng?**
A. Fixed mapping
B. **Pool of public IPs** ✓
C. Single public IP
D. No public IP

**Câu 69: PAT (Port Address Translation) còn được gọi là?**
A. Static NAT
B. Dynamic NAT
C. **NAT Overload** ✓
D. NAT Pool

**Câu 70: PAT cho phép?**
A. 1 IP private map với 1 IP public
B. **Nhiều IP private dùng chung 1 IP public** ✓
C. 1 IP public map với nhiều IP private
D. Chỉ cho phép static mapping

**Câu 71: PAT phân biệt các connection bằng?**
A. MAC address
B. IP address
C. **Port number** ✓
D. VLAN ID

**Câu 72: Câu lệnh nào cấu hình NAT Overload?**
A. ip nat inside source list 1 pool NAT
B. **ip nat inside source list 1 interface g0/1 overload** ✓
C. ip nat overload list 1
D. nat overload enable

**Câu 73: Port Forwarding trong NAT dùng để?**
A. Chuyển tiếp traffic giữa các port
B. **Cho phép truy cập từ Internet vào server nội bộ** ✓
C. Thay đổi port number của ứng dụng
D. Load balancing giữa các server

**Câu 74: Câu lệnh nào đánh dấu interface là NAT inside?**
A. nat inside
B. **ip nat inside** ✓
C. inside nat
D. set nat inside

**Câu 75: Câu lệnh nào đánh dấu interface là NAT outside?**
A. nat outside
B. **ip nat outside** ✓
C. outside nat
D. set nat outside

**Câu 76: Xem NAT translations bằng lệnh nào?**
A. show nat
B. **show ip nat translations** ✓
C. show translations
D. display nat

**Câu 77: Clear NAT translations bằng lệnh nào?**
A. delete nat translations
B. **clear ip nat translation *** ✓
C. remove nat translations
D. reset nat

## PHẦN 7: ACL (20 câu)

**Câu 78: ACL là viết tắt của?**
A. Access Control Language
B. **Access Control List** ✓
C. Access Configuration List
D. Application Control List

**Câu 79: ACL hoạt động ở layer nào?**
A. Layer 2
B. **Layer 3 và Layer 4** ✓
C. Layer 5
D. Layer 7

**Câu 80: Standard ACL filter dựa trên?**
A. Destination IP
B. **Source IP** ✓
C. Source và Destination IP
D. Port number

**Câu 81: Extended ACL filter dựa trên?**
A. Source IP only
B. Destination IP only
C. **Source IP, Dest IP, Protocol, Port** ✓
D. MAC address

**Câu 82: Range số của Standard ACL là?**
A. 100-199
B. **1-99 và 1300-1999** ✓
C. 2000-2699
D. 1-1999

**Câu 83: Range số của Extended ACL là?**
A. 1-99
B. **100-199 và 2000-2699** ✓
C. 1-199
D. 100-299

**Câu 84: Standard ACL nên đặt ở vị trí nào?**
A. Gần source
B. **Gần destination** ✓
C. Ở giữa source và destination
D. Bất kỳ đâu

**Câu 85: Extended ACL nên đặt ở vị trí nào?**
A. **Gần source** ✓
B. Gần destination
C. Ở giữa source và destination
D. Bất kỳ đâu

**Câu 86: Tại sao Standard ACL đặt gần destination?**
A. Để tăng tốc độ
B. **Để tránh block traffic không mong muốn** ✓
C. Để dễ cấu hình
D. Không có lý do cụ thể

**Câu 87: Tại sao Extended ACL đặt gần source?**
A. Để dễ cấu hình
B. **Để drop traffic sớm nhất, tiết kiệm bandwidth** ✓
C. Để tăng bảo mật
D. Không có lý do cụ thể

**Câu 88: Wildcard mask 0.0.0.0 có ý nghĩa gì?**
A. Match any
B. **Match exact IP** ✓
C. Don't care all bits
D. Deny all

**Câu 89: Wildcard mask 255.255.255.255 có ý nghĩa gì?**
A. Match exact IP
B. **Match any IP** ✓
C. Match network
D. Invalid

**Câu 90: Trong wildcard mask, bit "0" có ý nghĩa gì?**
A. Don't care
B. **Must match** ✓
C. Deny
D. Permit

**Câu 91: Trong wildcard mask, bit "1" có ý nghĩa gì?**
A. Must match
B. **Don't care** ✓
C. Deny
D. Permit

**Câu 92: Keyword "host" trong ACL tương đương với?**
A. 255.255.255.255 0.0.0.0
B. **<IP> 0.0.0.0** ✓
C. any
D. all

**Câu 93: Keyword "any" trong ACL tương đương với?**
A. 0.0.0.0 0.0.0.0
B. **0.0.0.0 255.255.255.255** ✓
C. 255.255.255.255 0.0.0.0
D. host

**Câu 94: ACL được xử lý theo thứ tự nào?**
A. Từ dưới lên
B. **Từ trên xuống (top-down)** ✓
C. Random
D. Theo priority

**Câu 95: Implicit deny all trong ACL có ý nghĩa?**
A. Cho phép tất cả traffic
B. **Từ chối tất cả traffic không match với các rule trước đó** ✓
C. Chỉ áp dụng cho inbound traffic
D. Phải được cấu hình thủ công

**Câu 96: Một interface có thể áp dụng bao nhiêu ACL per direction per protocol?**
A. Không giới hạn
B. 2
C. **1** ✓
D. 5

**Câu 97: Câu lệnh nào áp dụng ACL vào interface?**
A. apply access-list
B. **ip access-group <acl> {in|out}** ✓
C. set access-list
D. enable access-list

## PHẦN 8: DNS (8 câu)

**Câu 98: DNS là viết tắt của?**
A. Domain Network System
B. **Domain Name System** ✓
C. Dynamic Name System
D. Domain Name Service

**Câu 99: DNS hoạt động ở layer nào?**
A. Layer 3
B. Layer 4
C. **Layer 7 (Application)** ✓
D. Layer 5

**Câu 100: DNS sử dụng port nào?**
A. **UDP 53 (queries), TCP 53 (zone transfers)** ✓
B. TCP 53 only
C. UDP 53 only
D. TCP/UDP 80

**Câu 101: DNS Record type A dùng để?**
A. IP → Name
B. **Name → IPv4** ✓
C. Name → IPv6
D. Alias

**Câu 102: DNS Record type AAAA dùng để?**
A. Name → IPv4
B. **Name → IPv6** ✓
C. IP → Name
D. Mail server

**Câu 103: DNS Record type PTR dùng để?**
A. Name → IP
B. **IP → Name (Reverse lookup)** ✓
C. Alias
D. Mail server

**Câu 104: DNS Record type CNAME dùng để?**
A. Name → IP
B. IP → Name
C. **Alias (canonical name)** ✓
D. Mail server

**Câu 105: DNS Record type MX dùng để?**
A. Name → IP
B. IP → Name
C. Alias
D. **Mail server** ✓

## PHẦN 9: LINUX ADMINISTRATION (15 câu)

**Câu 106: File nào trong Linux chứa thông tin user accounts?**
A. /etc/shadow
B. **/etc/passwd** ✓
C. /etc/group
D. /etc/login.defs

**Câu 107: File nào trong Linux chứa encrypted passwords?**
A. /etc/passwd
B. **/etc/shadow** ✓
C. /etc/group
D. /etc/security

**Câu 108: File nào trong Linux chứa thông tin groups?**
A. /etc/passwd
B. /etc/shadow
C. **/etc/group** ✓
D. /etc/users

**Câu 109: Câu lệnh nào tạo user trong Linux?**
A. adduser
B. **useradd** ✓
C. createuser
D. newuser

**Câu 110: Câu lệnh nào xóa user trong Linux?**
A. deluser
B. removeuser
C. **userdel** ✓
D. deleteuser

**Câu 111: Option nào của userdel để xóa cả home directory?**
A. -d
B. -h
C. **-r** ✓
D. -f

**Câu 112: Câu lệnh nào đổi password user trong Linux?**
A. password
B. **passwd** ✓
C. chpasswd
D. pwchange

**Câu 113: Câu lệnh nào tạo group trong Linux?**
A. addgroup
B. **groupadd** ✓
C. creategroup
D. newgroup

**Câu 114: File cấu hình network interface trong CentOS/RHEL nằm ở đâu?**
A. /etc/network/interfaces
B. **/etc/sysconfig/network-scripts/ifcfg-eth0** ✓
C. /etc/netplan/
D. /etc/network/config

**Câu 115: File cấu hình DNS resolver trong Linux là?**
A. /etc/dns.conf
B. **/etc/resolv.conf** ✓
C. /etc/network/dns
D. /etc/hosts.conf

**Câu 116: Câu lệnh nào xem địa chỉ IP trong Linux?**
A. ipconfig
B. **ifconfig hoặc ip addr** ✓
C. showip
D. netstat -i

**Câu 117: Câu lệnh nào xem routing table trong Linux?**
A. **route -n hoặc ip route** ✓
B. netstat -r
C. show route
D. display route

**Câu 118: Câu lệnh nào test connectivity trong Linux?**
A. test
B. **ping** ✓
C. check
D. connect

**Câu 119: Câu lệnh nào xem listening ports trong Linux?**
A. **netstat -tuln** ✓
B. showports
C. listports
D. ports -l

**Câu 120: Câu lệnh nào SSH đến remote host?**
A. **ssh user@host** ✓
B. connect user@host
C. remote user@host
D. telnet user@host

## PHẦN 10: WINDOWS SERVER (12 câu)

**Câu 121: Active Directory Domain Services (AD DS) quản lý gì?**
A. File server only
B. **Users, Computers, Groups, Policies** ✓
C. Network devices
D. Web services

**Câu 122: Domain trong AD DS là gì?**
A. Network segment
B. **Security and administrative boundary** ✓
C. Physical location
D. VLAN

**Câu 123: OU (Organizational Unit) dùng để?**
A. Tạo user
B. **Organize objects và apply policies** ✓
C. Tạo groups
D. Backup data

**Câu 124: Group Policy được áp dụng theo thứ tự nào?**
A. LOUD
B. DSOU
C. **LSDOU (Local - Site - Domain - OU)** ✓
D. OLSD

**Câu 125: Security Group trong AD dùng để?**
A. Email distribution
B. **Assign permissions** ✓
C. Organize users
D. Backup

**Câu 126: Distribution Group trong AD dùng để?**
A. Assign permissions
B. **Email distribution lists** ✓
C. Security
D. Login

**Câu 127: DNS Forward Lookup Zone dùng để?**
A. IP → Name
B. **Name → IP** ✓
C. MAC → IP
D. Port → Service

**Câu 128: DNS Reverse Lookup Zone dùng để?**
A. Name → IP
B. **IP → Name** ✓
C. MAC → IP
D. Service → Port

**Câu 129: DHCP Scope là gì?**
A. DHCP server range
B. **Pool of IP addresses to lease** ✓
C. Subnet mask
D. Gateway

**Câu 130: DHCP Reservation dùng để?**
A. Reserve IP không cho thuê
B. **Bind MAC address to specific IP** ✓
C. Backup DHCP
D. Exclude IP range

**Câu 131: DHCP Exclusion dùng để?**
A. Exclude clients
B. **Exclude IP range from being leased** ✓
C. Exclude MAC
D. Exclude subnet

**Câu 132: IIS (Internet Information Services) là?**
A. DNS server
B. **Web server** ✓
C. Mail server
D. File server

## PHẦN 11: NETWORK SERVICES (10 câu)

**Câu 133: SNMP là viết tắt của?**
A. Simple Network Monitoring Protocol
B. **Simple Network Management Protocol** ✓
C. Secure Network Management Protocol
D. System Network Management Protocol

**Câu 134: SNMP sử dụng port nào?**
A. TCP 161, 162
B. **UDP 161 (agent), 162 (trap)** ✓
C. UDP 514
D. TCP 514

**Câu 135: SNMP Community String dùng để?**
A. Identify device
B. **Authentication (password)** ✓
C. Encryption
D. Compression

**Câu 136: Syslog sử dụng port nào?**
A. TCP 514
B. **UDP 514** ✓
C. UDP 161
D. TCP 162

**Câu 137: NTP (Network Time Protocol) sử dụng port nào?**
A. UDP 161
B. **UDP 123** ✓
C. TCP 123
D. UDP 514

**Câu 138: TFTP (Trivial FTP) sử dụng port nào?**
A. TCP 20, 21
B. **UDP 69** ✓
C. TCP 69
D. UDP 20, 21

**Câu 139: FTP sử dụng port nào?**
A. **TCP 20 (data), 21 (control)** ✓
B. UDP 20, 21
C. TCP 21 only
D. UDP 69

**Câu 140: Telnet sử dụng port nào?**
A. **TCP 23** ✓
B. TCP 22
C. UDP 23
D. TCP 80

**Câu 141: SSH sử dụng port nào?**
A. TCP 23
B. **TCP 22** ✓
C. UDP 22
D. TCP 21

**Câu 142: HTTP sử dụng port nào?**
A. **TCP 80** ✓
B. TCP 443
C. UDP 80
D. TCP 8080

## PHẦN 12: SECURITY & MONITORING (15 câu)

**Câu 143: HTTPS sử dụng port nào?**
A. TCP 80
B. **TCP 443** ✓
C. UDP 443
D. TCP 8443

**Câu 144: IDS là viết tắt của?**
A. Intrusion Detection Service
B. **Intrusion Detection System** ✓
C. Internet Detection System
D. Internal Detection Service

**Câu 145: IPS là viết tắt của?**
A. Intrusion Prevention Service
B. **Intrusion Prevention System** ✓
C. Internet Prevention System
D. Internal Prevention Service

**Câu 146: IDS và IPS khác nhau ở điểm nào?**
A. Port sử dụng
B. **IDS chỉ detect, IPS detect và prevent** ✓
C. IDS nhanh hơn
D. Không khác

**Câu 147: Firewall hoạt động ở layer nào?**
A. Layer 2
B. **Layer 3 và 4 (hoặc higher)** ✓
C. Layer 7 only
D. Layer 1

**Câu 148: VPN là viết tắt của?**
A. Virtual Public Network
B. **Virtual Private Network** ✓
C. Very Private Network
D. Virtual Protected Network

**Câu 149: VPN hoạt động dựa trên?**
A. NAT
B. Proxy
C. **Encryption tunnel** ✓
D. VLAN

**Câu 150: IPSec VPN hoạt động ở layer nào?**
A. Layer 2
B. **Layer 3** ✓
C. Layer 4
D. Layer 7

**Câu 151: SSL VPN hoạt động ở layer nào?**
A. Layer 2
B. Layer 3
C. **Layer 4/7** ✓
D. Layer 1

**Câu 152: Proxy server hoạt động ở layer nào?**
A. Layer 2
B. Layer 3
C. Layer 4
D. **Layer 7 (Application)** ✓

**Câu 153: Transparent proxy có đặc điểm gì?**
A. Cần cấu hình trên client
B. **Client không cần cấu hình** ✓
C. Chỉ hỗ trợ HTTP
D. Không cache được

**Câu 154: Squid Proxy mặc định lắng nghe trên port nào?**
A. 80
B. 8080
C. **3128** ✓
D. 8888

**Câu 155: Fail2ban dùng để làm gì?**
A. Monitor network
B. **Auto-block brute-force attacks** ✓
C. Backup system
D. Load balancing

**Câu 156: Zabbix Agent mặc định lắng nghe trên port nào?**
A. **10050** ✓
B. 10051
C. 161
D. 162

**Câu 157: Zabbix Server/Trapper lắng nghe trên port nào?**
A. 10050
B. **10051** ✓
C. 161
D. 162

## PHẦN 13: VIRTUALIZATION & CLOUD (10 câu)

**Câu 158: Hypervisor Type 1 còn được gọi là?**
A. Hosted
B. **Bare-metal** ✓
C. Container
D. Emulator

**Câu 159: Hypervisor Type 2 còn được gọi là?**
A. Bare-metal
B. **Hosted** ✓
C. Native
D. Hardware

**Câu 160: VMware ESXi là loại hypervisor nào?**
A. **Type 1** ✓
B. Type 2
C. Container
D. Emulator

**Câu 161: VirtualBox là loại hypervisor nào?**
A. Type 1
B. **Type 2** ✓
C. Container
D. Bare-metal

**Câu 162: Docker là công nghệ gì?**
A. Hypervisor Type 1
B. Hypervisor Type 2
C. **Container (OS-level virtualization)** ✓
D. Full virtualization

**Câu 163: Container khác VM ở điểm nào?**
A. Container nặng hơn
B. **Container share kernel, VM có kernel riêng** ✓
C. Container chậm hơn
D. Không khác

**Câu 164: IaaS là viết tắt của?**
A. Internet as a Service
B. **Infrastructure as a Service** ✓
C. Integration as a Service
D. Information as a Service

**Câu 165: PaaS là viết tắt của?**
A. **Platform as a Service** ✓
B. Programming as a Service
C. Processing as a Service
D. Protocol as a Service

**Câu 166: SaaS là viết tắt của?**
A. System as a Service
B. **Software as a Service** ✓
C. Security as a Service
D. Storage as a Service

**Câu 167: Ví dụ nào là SaaS?**
A. AWS EC2
B. Azure Virtual Machine
C. **Gmail, Office 365** ✓
D. VMware vSphere

## PHẦN 14: PROTOCOLS & STANDARDS (10 câu)

**Câu 168: TCP là giao thức?**
A. Connectionless
B. **Connection-oriented** ✓
C. Best-effort
D. Broadcast

**Câu 169: UDP là giao thức?**
A. Connection-oriented
B. **Connectionless** ✓
C. Reliable
D. Guaranteed delivery

**Câu 170: TCP sử dụng cơ chế nào để đảm bảo reliability?**
A. Broadcast
B. **ACK và retransmission** ✓
C. Multicast
D. ICMP

**Câu 171: Three-way handshake của TCP gồm?**
A. ACK - SYN - FIN
B. **SYN - SYN-ACK - ACK** ✓
C. SYN - ACK - FIN
D. HELLO - ACK - BYE

**Câu 172: ICMP là giao thức?**
A. Transport layer
B. **Network layer (control protocol)** ✓
C. Application layer
D. Data link layer

**Câu 173: Ping sử dụng giao thức nào?**
A. TCP
B. UDP
C. **ICMP** ✓
D. ARP

**Câu 174: ARP dùng để?**
A. IP → MAC
B. **IP → MAC** ✓
C. MAC → IP
D. Name → IP

**Câu 175: ARP hoạt động ở layer nào?**
A. Layer 1
B. **Layer 2** ✓
C. Layer 3
D. Layer 4

**Câu 176: RARP dùng để?**
A. IP → MAC
B. **MAC → IP** ✓
C. Name → IP
D. IP → Name

**Câu 177: MTU (Maximum Transmission Unit) mặc định của Ethernet là?**
A. 1024 bytes
B. **1500 bytes** ✓
C. 2048 bytes
D. 9000 bytes

## PHẦN 15: TROUBLESHOOTING & BEST PRACTICES (10 câu)

**Câu 178: Khi troubleshoot network, nên kiểm tra theo thứ tự nào?**
A. Top-down (Layer 7 → 1)
B. **Bottom-up (Layer 1 → 7)** ✓
C. Random
D. Application first

**Câu 179: Câu lệnh nào kiểm tra connectivity nhanh nhất?**
A. traceroute
B. **ping** ✓
C. telnet
D. netstat

**Câu 180: Traceroute dùng để?**
A. Test connectivity
B. **Xem đường đi của packet** ✓
C. Scan ports
D. Monitor bandwidth

**Câu 181: Nslookup/dig dùng để?**
A. Test connectivity
B. **Query DNS** ✓
C. Scan ports
D. Monitor network

**Câu 182: Khi PC không lên được mạng, bước đầu tiên nên?**
A. Restart router
B. **Kiểm tra cable và IP address** ✓
C. Reinstall OS
D. Call ISP

**Câu 183: Lệnh nào xem routing table trên router?**
A. show route
B. **show ip route** ✓
C. display route
D. get route

**Câu 184: Lệnh nào xem interface status trên router?**
A. **show ip interface brief** ✓
B. show interfaces
C. display interface
D. get interface

**Câu 185: Lệnh nào save cấu hình trên Cisco router?**
A. save
B. **copy running-config startup-config** ✓
C. write memory
D. Cả B và C

**Câu 186: Lệnh nào xem VLAN trên switch?**
A. show vlans
B. **show vlan brief** ✓
C. display vlan
D. get vlan

**Câu 187: Lệnh nào xem trunk status trên switch?**
A. show trunk
B. **show interfaces trunk** ✓
C. display trunk
D. get trunk

---

# BỔ SUNG PHẦN TỰ LUẬN

Phần tự luận tôi đã cung cấp ở trên đã khá đầy đủ với các dạng bài chính:
1. ✓ Routing troubleshooting
2. ✓ VLAN & Inter-VLAN routing
3. ✓ DHCP troubleshooting
4. ✓ NAT & Security (ACL, DDoS protection)
5. ✓ DNS & Cloudflare scenario
6. ✓ Monitoring systems (Zabbix/Nagios/Wazuh)
7. ✓ Đề tổng hợp phức tạp

## THÊM MỘT SỐ DẠNG BÀI TỰ LUẬN BỔ SUNG:

---

## ĐỀ BỔ SUNG 1: PROXY & WEB FILTERING HEART

### Mô hình:
```
Clients (192.168.10.0/24) --- SW1 --- R1/Squid [G0/1: 203.162.1.1] --- Internet
                                      |
                                 Web Server (192.168.20.10)
```

### Show squid.conf (có lỗi):
```
http_port 3128

acl localnet src 192.168.10.0/24
acl SSL_ports port 443
acl Safe_ports port 80
acl Safe_ports port 443
acl CONNECT method CONNECT

http_access deny !Safe_ports
http_access deny CONNECT !SSL_ports
http_access allow localhost manager
http_access deny manager
http_access allow localnet
http_access deny all
```

### Yêu cầu (5 điểm):

**1. (2đ) Users báo không truy cập được HTTPS sites. Tìm lỗi và sửa.**

**Đáp án:**
- Vấn đề: `http_access deny CONNECT !SSL_ports` chặn tất cả CONNECT method không phải port 443
- Nhưng HTTPS cần CONNECT method để establish tunnel
- Thứ tự rules: deny trước allow

Sửa:
```
# Cho phép CONNECT đến SSL ports
http_access allow CONNECT SSL_ports localnet
http_access deny CONNECT
```

**2. (1.5đ) Thêm yêu cầu: Block facebook.com, youtube.com, download .exe/.zip, chỉ cho 8h-17h.**

**Đáp án:**
```
# Block sites
acl blocked_sites dstdomain .facebook.com .youtube.com .fbcdn.net .ytimg.com

# Block files
acl blocked_files urlpath_regex -i \.exe$ \.zip$

# Working hours
acl working_hours time MTWHF 08:00-17:00

# Apply (add before "http_access allow localnet")
http_access deny blocked_sites
http_access deny blocked_files
http_access deny !working_hours
http_access allow localnet
```

**3. (1.5đ) Mô tả chi tiết luồng traffic khi client request https://google.com qua transparent proxy.**

**Đáp án:**
```
1. Client browser: GET https://google.com
   Source: 192.168.10.5:random
   Dest: 142.250.x.x:443

2. iptables PREROUTING:
   Match: -p tcp --dport 443
   Action: REDIRECT --to-port 3128

3. Squid receives:
   CONNECT google.com:443 HTTP/1.1
   
4. Squid checks ACL:
   - Safe_ports 443: PASS
   - SSL_ports: PASS
   - CONNECT SSL_ports: PASS
   - localnet: PASS
   → ALLOW

5. Two options:
   a) SSL Passthrough (default):
      - Squid forwards CONNECT
      - Client ↔ Google: Direct TLS
      - Squid: Tunnel only (no inspection)
   
   b) SSL Bumping (if configured):
      - Squid MITM
      - Client ↔ Squid: TLS (Squid CA)
      - Squid ↔ Google: TLS (Google cert)

6. Data flow (Passthrough):
   Client → Squid (port 3128) → Google (port 443)
   Client ← Squid ← Google
```

---

## ĐỀ BỔ SUNG 2: HSRP (High Availability)

### Mô hình:
```
Internet
   |
[G0/2] R1 [G0/1: 10.0.1.1/24] ---|
                                  |--- SW --- Clients (10.0.1.0/24)
[G0/2] R2 [G0/1: 10.0.1.2/24] ---|

Gateway ảo: 10.0.1.254
```

### Yêu cầu (5 điểm):

**1. (2đ) Giải thích HSRP hoạt động như thế nào? Tại sao cần HSRP?**

**Đáp án:**
- **Vấn đề**: Single gateway = single point of failure
- **Giải pháp**: HSRP tạo virtual gateway, multiple routers backup cho nhau

**Hoạt động:**
- R1, R2 share virtual IP 10.0.1.254, virtual MAC
- Election: Router có priority cao hơn = Active
- Active router trả lời ARP cho virtual IP
- Standby router monitor Active qua hello packets (multicast 224.0.0.2, UDP 1985)
- Nếu Active fail (hello timeout), Standby become Active

**2. (2đ) Cấu hình HSRP với yêu cầu:**
- Virtual IP: 10.0.1.254
- R1 là Active (priority 110)
- R2 là Standby (priority 100)
- Preempt enable

**Đáp án:**

*Trên R1:*
```
R1(config)# interface g0/1
R1(config-if)# ip address 10.0.1.1 255.255.255.0
R1(config-if)# standby 1 ip 10.0.1.254
R1(config-if)# standby 1 priority 110
R1(config-if)# standby 1 preempt
R1(config-if)# no shutdown
```

*Trên R2:*
```
R2(config)# interface g0/1
R2(config-if)# ip address 10.0.1.2 255.255.255.0
R2(config-if)# standby 1 ip 10.0.1.254
R2(config-if)# standby 1 priority 100
R2(config-if)# standby 1 preempt
R2(config-if)# no shutdown
```

*Verify:*
```
R1# show standby brief
R1# show standby
```

**3. (1đ) Preempt có tác dụng gì? Nếu không enable preempt thì sao?**

**Đáp án:**
- **Preempt**: Router với priority cao hơn sẽ trở lại Active khi recover
- **Không preempt**: Active router giữ role ngay cả khi router priority cao hơn online lại
- Use case: Maintenance - Tạm thời hạ priority của R1, R2 become Active, sau đó raise priority R1 lại → R1 become Active (nếu có preempt)

---

## ĐỀ BỔ SUNG 3: STP TROUBLESHOOTING

### Mô hình:
```
       R1
        |
       SW1 (Root Bridge)
      /   \
    SW2   SW3
      \   /
       PC1
```

### Hiện tượng:
- Network bị loop, broadcast storm
- Switches CPU 100%
- Không ping được gì

### Show spanning-tree trên SW1:
```
VLAN0001
  Spanning tree enabled protocol ieee
  Root ID    Priority    32769
             Address     aabb.cc00.1000
             This bridge is the root
  
  Bridge ID  Priority    32769
             Address     aabb.cc00.1000
```

### Show spanning-tree trên SW2:
```
VLAN0001
  Spanning tree enabled protocol ieee
  Root ID    Priority    32769
             Address     aabb.cc00.1000
             Cost        4
             Port        1 (FastEthernet0/1)
  
  Bridge ID  Priority    32769
             Address     aabb.cc00.2000
```

### Yêu cầu (5 điểm):

**1. (1.5đ) Phân tích nguyên nhân gây loop.**

**Đáp án:**
- STP đã enable nhưng vẫn bị loop
- Có thể:
  + Link giữa SW2-SW3 không chạy STP (portfast hoặc STP disabled)
  + STP convergence chưa xong
  + Có loop ở layer 2 khác không được STP cover
  + BPDUGuard không enable

**2. (2đ) Đề xuất giải pháp cấu hình STP tối ưu.**

**Đáp án:**

*Trên SW1 (Root Bridge):*
```
SW1(config)# spanning-tree vlan 1 priority 4096
```
(Đảm bảo SW1 là root, priority thấp nhất)

*Trên SW2, SW3:*
```
SW2(config)# spanning-tree vlan 1 priority 32768
SW3(config)# spanning-tree vlan 1 priority 32768
```

*Enable BPDU Guard trên access ports:*
```
SW2(config)# interface range f0/10-24
SW2(config-if-range)# spanning-tree portfast
SW2(config-if-range)# spanning-tree bpduguard enable
```
(Portfast: Port chuyển sang Forwarding ngay, BPDUGuard: Shutdown port nếu nhận BPDU - prevent loops from endusers)

*Enable Root Guard trên uplinks:*
```
SW2(config)# interface f0/1
SW2(config-if)# spanning-tree guard root
```
(Prevent superior BPDUs, protect root bridge)

**3. (1.5đ) Giải thích các STP port states và timers.**

**Đáp án:**

**Port States:**
1. **Disabled**: Port shutdown
2. **Blocking**: Nhận BPDUs, không forward, không học MAC (20s)
3. **Listening**: Nhận/gửi BPDUs, không forward, không học MAC (15s - Forward Delay)
4. **Learning**: Học MAC table, không forward data (15s - Forward Delay)
5. **Forwarding**: Forward data, học MAC

**Timers:**
- **Hello Time**: 2s (gửi BPDU)
- **Forward Delay**: 15s (Listening → Learning → Forwarding)
- **Max Age**: 20s (BPDU timeout)
- **Convergence time**: 30-50s (Max Age + 2x Forward Delay)

**RSTP (Rapid STP) cải thiện:**
- Convergence < 1s
- Port states: Discarding, Learning, Forwarding
- Proposal/Agreement mechanism

---

## ĐỀ BỔ SUNG 4: IPv6 BASIC

### Yêu cầu (5 điểm):

**1. (2đ) So sánh IPv4 và IPv6.**

**Đáp án:**

| Tiêu chí | IPv4 | IPv6 |
|----------|------|------|
| Address length | 32-bit | 128-bit |
| Format | Decimal (192.168.1.1) | Hexadecimal (2001:db8::1) |
| Address space | ~4.3 billion | 340 undecillion |
| Header size | 20-60 bytes | 40 bytes (fixed) |
| Fragmentation | Router và sender | Sender only |
| Broadcast | Yes | No (Multicast instead) |
| NAT | Required | Optional |
| IPSec | Optional | Mandatory (built-in) |
| Autoconfiguration | DHCP | SLAAC + DHCPv6 |

**2. (1.5đ) Cấu hình IPv6 trên router và verify.**

**Đáp án:**

*Enable IPv6 routing:*
```
R1(config)# ipv6 unicast-routing
```

*Cấu hình interface:*
```
R1(config)# interface g0/0
R1(config-if)# ipv6 address 2001:db8:1::1/64
R1(config-if)# ipv6 address fe80::1 link-local
R1(config-if)# no shutdown
```

*Cấu hình OSPFv3:*
```
R1(config)# ipv6 router ospf 1
R1(config-rtr)# router-id 1.1.1.1
R1(config)# interface g0/0
R1(config-if)# ipv6 ospf 1 area 0
```

*Verify:*
```
R1# show ipv6 interface brief
R1# show ipv6 route
R1# ping ipv6 2001:db8:1::2
```

**3. (1.5đ) Giải thích SLAAC (Stateless Address Autoconfiguration).**

**Đáp án:**

**SLAAC Process:**
1. **Router Solicitation (RS):**
   - Host gửi multicast FF02::2 (all-routers)
   - Request: "Tôi cần thông tin network"

2. **Router Advertisement (RA):**
   - Router gửi multicast FF02::1 (all-nodes)
   - Include: Prefix (2001:db8:1::/64), Flags, MTU, DNS (if configured)

3. **Address Generation:**
   - Host tạo IPv6 = Prefix + Interface ID
   - Interface ID từ MAC (EUI-64) hoặc random (Privacy Extensions)
   - Example: 2001:db8:1:0:a1b2:c3d4:e5f6:7890

4. **DAD (Duplicate Address Detection):**
   - Host gửi Neighbor Solicitation đến địa chỉ vừa tạo
   - Nếu không ai reply → OK
   - Nếu có reply → Conflict, regenerate

**RA Flags:**
- **M-flag**: Use DHCPv6 for addresses
- **O-flag**: Use DHCPv6 for other info (DNS, NTP)
- **A-flag**: Use SLAAC for addresses

---

Tổng cộng bây giờ đã có:
- **187 câu trắc nghiệm** 
- **11 đề tự luận** chi tiết covering:
  + Routing (Static, RIP, OSPF)
  + VLAN & Inter-VLAN
  + DHCP
  + NAT & Security
  + DNS & Cloudflare
  + Monitoring
  + Proxy & Web Filtering
  + HSRP (High Availability)
  + STP (Spanning Tree)
  + IPv6
  + Tổng hợp complex

Ví dụ:
- EtherChannel/Port-channel
- GRE Tunnel
- Route Redistribution
- QoS (Quality of Service)
- WAN Technologies (PPP, Frame Relay)

# BỔ SUNG TOÀN DIỆN

## PHẦN TRẮC NGHIỆM BỔ SUNG

### PHẦN 16: EtherChannel/Port-Channel (10 câu)

**Câu 188: EtherChannel dùng để làm gì?**
A. Tăng số lượng VLANs
B. **Gom nhiều physical links thành 1 logical link** ✓
C. Tạo VLAN trunk
D. Load balancing giữa routers

**Câu 189: EtherChannel có thể gom tối đa bao nhiêu ports?**
A. 4
B. **8** ✓
C. 16
D. 32

**Câu 190: PAgP là giao thức gì?**
A. Chuẩn IEEE
B. **Cisco proprietary EtherChannel protocol** ✓
C. Open standard
D. Routing protocol

**Câu 191: LACP là giao thức gì?**
A. Cisco proprietary
B. **IEEE 802.3ad open standard** ✓
C. Routing protocol
D. VLAN protocol

**Câu 192: PAgP mode "desirable" có nghĩa gì?**
A. Không tạo EtherChannel
B. **Actively negotiate EtherChannel** ✓
C. Passive wait
D. Force EtherChannel

**Câu 193: PAgP mode "auto" có nghĩa gì?**
A. Tự động tạo
B. **Passively wait for negotiation** ✓
C. Disable EtherChannel
D. Force on

**Câu 194: LACP mode "active" có nghĩa gì?**
A. Passive wait
B. **Actively negotiate EtherChannel** ✓
C. Disable LACP
D. Force on

**Câu 195: LACP mode "passive" có nghĩa gì?**
A. Actively negotiate
B. **Passively wait for negotiation** ✓
C. Disable LACP
D. Auto create

**Câu 196: Để PAgP tạo được EtherChannel, cần mode nào?**
A. auto - auto
B. **desirable - desirable hoặc desirable - auto** ✓
C. on - on
D. Bất kỳ

**Câu 197: EtherChannel load-balancing dựa trên gì (mặc định)?**
A. Round-robin
B. **Source/Dest MAC hoặc IP** ✓
C. Random
D. Port number only

### PHẦN 17: STP ADVANCED (10 câu)

**Câu 198: RSTP (Rapid STP) là chuẩn IEEE nào?**
A. 802.1D
B. **802.1w** ✓
C. 802.1Q
D. 802.1X

**Câu 199: PVST+ là gì?**
A. Chuẩn IEEE
B. **Cisco proprietary, STP per VLAN** ✓
C. Open standard
D. Routing protocol

**Câu 200: MSTP là chuẩn IEEE nào?**
A. 802.1D
B. 802.1w
C. **802.1s** ✓
D. 802.1Q

**Câu 201: PortFast có tác dụng gì?**
A. Tăng tốc độ port
B. **Port chuyển sang Forwarding ngay, bỏ qua Listening/Learning** ✓
C. Disable STP
D. Tăng priority

**Câu 202: BPDUGuard có tác dụng gì?**
A. Protect root bridge
B. **Shutdown port nếu nhận BPDU** ✓
C. Filter BPDU
D. Forward BPDU

**Câu 203: RootGuard có tác dụng gì?**
A. Shutdown port
B. **Prevent port becoming root port** ✓
C. Protect access ports
D. Filter traffic

**Câu 204: LoopGuard có tác dụng gì?**
A. Prevent loops
B. **Prevent alternate/root port becoming designated port do mất BPDUs** ✓
C. Shutdown port
D. Protect root

**Câu 205: UplinkFast dùng khi nào?**
A. Root bridge
B. **Access layer switch, fast convergence khi uplink fail** ✓
C. Distribution layer
D. Core layer

**Câu 206: BackboneFast dùng để?**
A. Fast convergence ở access layer
B. **Detect indirect link failure, fast convergence** ✓
C. Protect root bridge
D. Load balancing

**Câu 207: STP Bridge Priority range là?**
A. 0-255
B. 1-65535
C. **0-65535 (increments of 4096)** ✓
D. 0-32768

### PHẦN 18: WIRELESS LAN (10 câu)

**Câu 208: SSID là viết tắt của?**
A. Secure Service Identifier
B. **Service Set Identifier** ✓
C. System Service ID
D. Security Set ID

**Câu 209: BSS là gì?**
A. Basic Security Set
B. **Basic Service Set (1 AP)** ✓
C. Broadband Service Set
D. Bridge Service Set

**Câu 210: ESS là gì?**
A. Enhanced Service Set
B. **Extended Service Set (multiple APs, same SSID)** ✓
C. Ethernet Service Set
D. Enterprise Service Set

**Câu 211: WPA2 sử dụng encryption nào?**
A. WEP
B. TKIP
C. **AES (CCMP)** ✓
D. DES

**Câu 212: WPA3 cải thiện gì so với WPA2?**
A. Tốc độ nhanh hơn
B. **SAE (Simultaneous Authentication of Equals), better protection** ✓
C. Range xa hơn
D. Hỗ trợ nhiều devices hơn

**Câu 213: 802.11n hoạt động ở tần số nào?**
A. 2.4 GHz
B. 5 GHz
C. **Cả 2.4 GHz và 5 GHz** ✓
D. 6 GHz

**Câu 214: 802.11ac hoạt động ở tần số nào?**
A. 2.4 GHz
B. **5 GHz only** ✓
C. Cả 2.4 và 5 GHz
D. 6 GHz

**Câu 215: 802.11ax (WiFi 6) hoạt động ở tần số nào?**
A. 2.4 GHz
B. 5 GHz
C. **2.4 GHz, 5 GHz, và 6 GHz** ✓
D. 6 GHz only

**Câu 216: Channel width càng lớn thì?**
A. Range càng xa
B. **Throughput càng cao nhưng interference nhiều hơn** ✓
C. Bảo mật tốt hơn
D. Không ảnh hưởng

**Câu 217: LWAPP/CAPWAP là giao thức gì?**
A. Wireless encryption
B. **Control and Provisioning of Wireless Access Points** ✓
C. Authentication protocol
D. Routing protocol

### PHẦN 19: QoS (Quality of Service) (10 câu)

**Câu 218: QoS dùng để làm gì?**
A. Tăng bandwidth
B. **Prioritize traffic, đảm bảo quality cho critical applications** ✓
C. Bảo mật
D. Giảm latency cho tất cả traffic

**Câu 219: CoS (Class of Service) hoạt động ở layer nào?**
A. **Layer 2 (802.1p)** ✓
B. Layer 3
C. Layer 4
D. Layer 7

**Câu 220: DSCP (Differentiated Services Code Point) hoạt động ở layer nào?**
A. Layer 2
B. **Layer 3 (IP header)** ✓
C. Layer 4
D. Layer 7

**Câu 221: CoS có bao nhiêu bits?**
A. **3 bits (0-7)** ✓
B. 6 bits
C. 8 bits
D. 16 bits

**Câu 222: DSCP có bao nhiêu bits?**
A. 3 bits
B. **6 bits (0-63)** ✓
C. 8 bits
D. 16 bits

**Câu 223: EF (Expedited Forwarding) DSCP value là?**
A. 0
B. 8
C. **46** ✓
D. 63

**Câu 224: AF (Assured Forwarding) có bao nhiêu classes?**
A. 3
B. **4** ✓
C. 5
D. 8

**Câu 225: Queuing mechanism nào là FIFO?**
A. Priority Queuing
B. **First In First Out (no prioritization)** ✓
C. Weighted Fair Queuing
D. Class-Based Weighted Fair Queuing

**Câu 226: LLQ (Low Latency Queuing) dùng cho traffic nào?**
A. Bulk data
B. **Voice, video (real-time)** ✓
C. Email
D. File transfer

**Câu 227: Policing và Shaping khác nhau như thế nào?**
A. Giống nhau
B. **Policing drop excess, Shaping buffer và delay** ✓
C. Policing slow, Shaping fast
D. Không khác

### PHẦN 20: WAN TECHNOLOGIES (10 câu)

**Câu 228: PPP là viết tắt của?**
A. Private Point Protocol
B. **Point-to-Point Protocol** ✓
C. Public Point Protocol
D. Packet Point Protocol

**Câu 229: PPP hoạt động ở layer nào?**
A. Layer 1
B. **Layer 2** ✓
C. Layer 3
D. Layer 4

**Câu 230: HDLC là gì?**
A. Routing protocol
B. **High-Level Data Link Control (Layer 2 protocol)** ✓
C. WAN service
D. Encryption method

**Câu 231: Cisco HDLC khác HDLC chuẩn ở điểm nào?**
A. Không khác
B. **Cisco thêm proprietary field** ✓
C. Tốc độ khác
D. Encapsulation khác

**Câu 232: PPP authentication methods gồm?**
A. MD5
B. **PAP và CHAP** ✓
C. SHA
D. AES

**Câu 233: PAP (Password Authentication Protocol) có đặc điểm gì?**
A. Encrypted
B. **Clear-text, không bảo mật** ✓
C. Challenge-response
D. Certificate-based

**Câu 234: CHAP (Challenge Handshake Authentication Protocol) có đặc điểm gì?**
A. Clear-text
B. **Challenge-response, MD5 hash** ✓
C. No authentication
D. Certificate-based

**Câu 235: Frame Relay hoạt động ở layer nào?**
A. Layer 1
B. **Layer 2** ✓
C. Layer 3
D. Layer 4

**Câu 236: DLCI trong Frame Relay là gì?**
A. IP address
B. **Data Link Connection Identifier** ✓
C. MAC address
D. Port number

**Câu 237: MPLS là viết tắt của?**
A. Multi-Protocol LAN Service
B. **Multi-Protocol Label Switching** ✓
C. Multiple Path Link Service
D. Metro Point LAN Service

### PHẦN 21: GRE TUNNEL (8 câu)

**Câu 238: GRE là viết tắt của?**
A. Generic Router Encapsulation
B. **Generic Routing Encapsulation** ✓
C. General Route Encryption
D. Global Routing Extension

**Câu 239: GRE tunnel có đặc điểm gì?**
A. Encrypted
B. **Encapsulate IP packets, không encrypted** ✓
C. Only for IPv4
D. Require certificate

**Câu 240: GRE thêm bao nhiêu bytes overhead?**
A. 4 bytes
B. 20 bytes
C. **24 bytes (20 IP + 4 GRE)** ✓
D. 50 bytes

**Câu 241: GRE tunnel hỗ trợ multicast không?**
A. Không
B. **Có** ✓
C. Chỉ với IPv6
D. Cần cấu hình đặc biệt

**Câu 242: GRE over IPSec có lợi gì?**
A. Faster
B. **Encrypted + hỗ trợ multicast/routing protocols** ✓
C. Simpler
D. Không có lợi

**Câu 243: GRE tunnel MTU nên set bao nhiêu (nếu physical MTU = 1500)?**
A. 1500
B. **1476 (1500 - 24)** ✓
C. 1400
D. 1200

**Câu 244: Recursive routing trong GRE tunnel là gì?**
A. Normal routing
B. **Tunnel destination route qua chính tunnel đó** ✓
C. Load balancing
D. Multipath routing

**Câu 245: Để tránh recursive routing, cần?**
A. Disable routing
B. **Ensure tunnel destination reachable qua physical interface** ✓
C. Use static routes only
D. Disable GRE

### PHẦN 22: ROUTE REDISTRIBUTION (8 câu)

**Câu 246: Route Redistribution là gì?**
A. Load balancing
B. **Share routes giữa các routing protocols khác nhau** ✓
C. Route filtering
D. Route summarization

**Câu 247: Khi redistribute giữa OSPF và RIP, vấn đề gì có thể xảy ra?**
A. Không vấn đề
B. **Routing loops, suboptimal routing** ✓
C. Faster convergence
D. Better load balancing

**Câu 248: Seed metric trong redistribution là gì?**
A. Original metric
B. **Initial metric assigned to redistributed routes** ✓
C. Best metric
D. Average metric

**Câu 249: Administrative Distance dùng để làm gì?**
A. Calculate best path
B. **Choose giữa routes từ protocols khác nhau** ✓
C. Set metric
D. Filter routes

**Câu 250: Route map trong redistribution dùng để?**
A. Disable redistribution
B. **Filter và modify routes selectively** ✓
C. Tăng tốc độ
D. Bảo mật

**Câu 251: Redistribute OSPF vào RIP cần set gì?**
A. Area
B. **Metric (hop count)** ✓
C. Priority
D. Cost

**Câu 252: Redistribute RIP vào OSPF cần set gì?**
A. Hop count
B. **Metric (cost) và metric-type** ✓
C. Priority
D. Version

**Câu 253: OSPF metric-type E1 và E2 khác nhau như thế nào?**
A. Giống nhau
B. **E1: metric tăng khi đi qua OSPF domain, E2: metric không đổi** ✓
C. E1 nhanh hơn
D. E2 bảo mật hơn

### PHẦN 23: IPv6 ADVANCED (10 câu)

**Câu 254: IPv6 address :: có nghĩa gì?**
A. Loopback
B. **Unspecified address (0.0.0.0 trong IPv4)** ✓
C. Default route
D. Multicast

**Câu 255: IPv6 address ::1 có nghĩa gì?**
A. Default route
B. **Loopback (127.0.0.1 trong IPv4)** ✓
C. Link-local
D. Multicast

**Câu 256: Link-local address IPv6 có prefix nào?**
A. 2001::/64
B. FC00::/7
C. **FE80::/10** ✓
D. FF00::/8

**Câu 257: Unique Local Address (ULA) IPv6 có prefix nào?**
A. 2001::/64
B. **FC00::/7 (FD00::/8 commonly used)** ✓
C. FE80::/10
D. FF00::/8

**Câu 258: Global Unicast Address IPv6 thường có prefix nào?**
A. FC00::/7
B. FE80::/10
C. **2000::/3** ✓
D. FF00::/8

**Câu 259: Multicast address IPv6 có prefix nào?**
A. FE80::/10
B. FC00::/7
C. 2001::/64
D. **FF00::/8** ✓

**Câu 260: IPv6 không có broadcast, thay vào đó dùng?**
A. Unicast
B. Anycast
C. **Multicast** ✓
D. Broadcast vẫn có

**Câu 261: FF02::1 là địa chỉ multicast cho?**
A. All routers
B. **All nodes** ✓
C. DHCP servers
D. DNS servers

**Câu 262: FF02::2 là địa chỉ multicast cho?**
A. All nodes
B. **All routers** ✓
C. DHCP servers
D. NTP servers

**Câu 263: EUI-64 trong IPv6 có tác dụng gì?**
A. Encryption
B. **Tạo Interface ID từ MAC address** ✓
C. Routing
D. Authentication

### PHẦN 24: NETWORK SECURITY ADVANCED (12 câu)

**Câu 264: Port Security trên switch dùng để?**
A. Encrypt traffic
B. **Limit số MAC addresses trên port** ✓
C. Filter IP
D. Monitor traffic

**Câu 265: Port Security violation mode "shutdown" làm gì?**
A. Drop packets
B. **Err-disable port** ✓
C. Log only
D. Send SNMP trap

**Câu 266: Port Security violation mode "restrict" làm gì?**
A. Shutdown port
B. **Drop violating frames, log, SNMP trap** ✓
C. Allow all
D. Protect only

**Câu 267: Port Security violation mode "protect" làm gì?**
A. Shutdown port
B. **Drop violating frames, không log** ✓
C. Allow all
D. Send alert

**Câu 268: DHCP Snooping có tác dụng gì?**
A. Speed up DHCP
B. **Prevent rogue DHCP servers** ✓
C. Encrypt DHCP
D. Load balance DHCP

**Câu 269: Dynamic ARP Inspection (DAI) dùng để?**
A. Speed up ARP
B. **Prevent ARP spoofing/poisoning** ✓
C. Encrypt ARP
D. Cache ARP

**Câu 270: IP Source Guard dùng để?**
A. NAT
B. **Prevent IP spoofing** ✓
C. Routing
D. DHCP

**Câu 271: 802.1X là gì?**
A. VLAN protocol
B. **Port-based Network Access Control (NAC)** ✓
C. Routing protocol
D. QoS standard

**Câu 272: RADIUS hoạt động trên port nào?**
A. TCP 49
B. **UDP 1812 (auth), 1813 (accounting)** ✓
C. TCP 1812
D. UDP 49

**Câu 273: TACACS+ hoạt động trên port nào?**
A. UDP 49
B. **TCP 49** ✓
C. UDP 1812
D. TCP 1812

**Câu 274: RADIUS và TACACS+ khác nhau như thế nào?**
A. Giống nhau
B. **RADIUS UDP, combines auth+author; TACACS+ TCP, separates AAA** ✓
C. TACACS+ mới hơn
D. RADIUS bảo mật hơn

**Câu 275: AAA là viết tắt của?**
A. Access, Audit, Authorization
B. **Authentication, Authorization, Accounting** ✓
C. Automatic Access Administration
D. Advanced Authentication Algorithm

### PHẦN 25: TROUBLESHOOTING TOOLS (8 câu)

**Câu 276: Wireshark là gì?**
A. IDS
B. **Packet analyzer/sniffer** ✓
C. Firewall
D. Antivirus

**Câu 277: tcpdump hoạt động trên?**
A. Windows only
B. **Linux/Unix** ✓
C. Cisco IOS
D. Web browser

**Câu 278: Nmap dùng để?**
A. Monitor bandwidth
B. **Network scanning, port scanning** ✓
C. Encrypt traffic
D. Route packets

**Câu 279: iperf dùng để?**
A. Scan ports
B. **Test bandwidth/throughput** ✓
C. Monitor CPU
D. Analyze packets

**Câu 280: MTR (My TraceRoute) kết hợp?**
A. ping + nslookup
B. **ping + traceroute** ✓
C. netstat + route
D. dig + host

**Câu 281: Câu lệnh debug trên Cisco router có nguy cơ gì?**
A. Xóa config
B. **High CPU usage, có thể crash router** ✓
C. Không nguy hiểm
D. Chỉ xem log

**Câu 282: Để capture packets trên Cisco switch, dùng?**
A. tcpdump
B. **SPAN/RSPAN/ERSPAN** ✓
C. Wireshark
D. Debug

**Câu 283: SPAN là viết tắt của?**
A. Secure Port Analysis
B. **Switched Port Analyzer** ✓
C. System Packet Analyzer
D. Security Port Access

### PHẦN 26: SDWAN & MODERN NETWORKING (7 câu)

**Câu 284: SD-WAN là viết tắt của?**
A. Secure Domain WAN
B. **Software-Defined WAN** ✓
C. Standard Digital WAN
D. System Data WAN

**Câu 285: SD-WAN có lợi ích gì?**
A. Rẻ hơn traditional WAN only
B. **Centralized management, app-aware routing, multi-link support** ✓
C. Faster only
D. More secure only

**Câu 286: SDN (Software-Defined Networking) tách biệt?**
A. Hardware và software
B. **Control plane và data plane** ✓
C. LAN và WAN
D. IPv4 và IPv6

**Câu 287: OpenFlow là gì?**
A. Routing protocol
B. **SDN protocol (controller ↔ switches)** ✓
C. VPN protocol
D. QoS mechanism

**Câu 288: NFV là viết tắt của?**
A. Network Flow Virtualization
B. **Network Functions Virtualization** ✓
C. New Fast VLAN
D. Network Firewall Version

**Câu 289: Intent-Based Networking (IBN) là gì?**
A. Traditional networking
B. **Network tự động config dựa trên business intent** ✓
C. Manual configuration
D. CLI-based only

**Câu 290: Zero Trust Network có nguyên tắc gì?**
A. Trust everyone inside
B. **Never trust, always verify** ✓
C. Trust no one
D. Trust based on IP

---

# PHẦN TỰ LUẬN BỔ SUNG

## ĐỀ BỔ SUNG 5: ETHERCHANNEL TROUBLESHOOTING

### Mô hình:
```
SW1 --- [F0/1-4] --- [F0/1-4] SW2
     Port-channel 1
```

### Show etherchannel summary trên SW1:
```
Group  Port-channel  Protocol    Ports
------+-------------+-----------+-----------------------------------------------
1      Po1(SD)       PAgP        Fa0/1(I)  Fa0/2(I)  Fa0/3(I)  Fa0/4(I)

(SD) - suspended
(I) - Individual (not part of bundle)
```

### Show etherchannel summary trên SW2:
```
Group  Port-channel  Protocol    Ports
------+-------------+-----------+-----------------------------------------------
1      Po1(SU)       LACP        Fa0/1(P)  Fa0/2(P)  Fa0/3(P)  Fa0/4(P)

(SU) - in use
(P) - bundled in port-channel
```

### Yêu cầu (6 điểm):

**Câu 1 (2 điểm):** Phân tích nguyên nhân EtherChannel không hoạt động.

**Đáp án:**

**Vấn đề:**
1. **Mismatch protocols**: SW1 dùng PAgP, SW2 dùng LACP
2. SW1 status "suspended", ports "Individual" → EtherChannel fail
3. SW2 status "in use" nhưng SW1 không respond

**Nguyên nhân:**
- PAgP (Cisco proprietary) incompatible với LACP (IEEE 802.3ad)
- Không thể negotiate vì khác protocol
- SW1 interfaces không bundle

**Câu 2 (2 điểm):** Đưa ra giải pháp cấu hình đúng (sử dụng LACP).

**Đáp án:**

**Trên SW1 (sửa lại):**
```
SW1(config)# no interface port-channel 1
SW1(config)# interface range f0/1-4
SW1(config-if-range)# shutdown
SW1(config-if-range)# no channel-group 1
SW1(config-if-range)# channel-group 1 mode active
SW1(config-if-range)# no shutdown
```

**Hoặc giữ nguyên SW2, sửa SW1 dùng PAgP:**
```
SW2(config)# interface range f0/1-4
SW2(config-if-range)# shutdown
SW2(config-if-range)# no channel-group 1
SW2(config-if-range)# channel-group 1 mode desirable
SW2(config-if-range)# no shutdown
```

**Best practice - LACP:**
```
# SW1
SW1(config)# interface range f0/1-4
SW1(config-if-range)# channel-group 1 mode active
SW1(config-if-range)# switchport trunk encapsulation dot1q
SW1(config-if-range)# switchport mode trunk

# SW2
SW2(config)# interface range f0/1-4
SW2(config-if-range)# channel-group 1 mode active
SW2(config-if-range)# switchport trunk encapsulation dot1q
SW2(config-if-range)# switchport mode trunk

# Verify
SW1# show etherchannel summary
SW1# show interfaces port-channel 1
```

**Câu 3 (2 điểm):** Giải thích sự khác biệt giữa các mode: on, active, passive, desirable, auto.

**Đáp án:**

**LACP Modes:**
| Mode | Behavior | Form channel with? |
|------|----------|-------------------|
| **active** | Actively send LACP packets | active, passive |
| **passive** | Listen for LACP packets | active |
| **on** | Force on, no negotiation | on |

**PAgP Modes:**
| Mode | Behavior | Form channel with? |
|------|----------|-------------------|
| **desirable** | Actively send PAgP packets | desirable, auto |
| **auto** | Listen for PAgP packets | desirable |
| **on** | Force on, no negotiation | on |

**Combinations:**
```
✓ active - active    → Channel forms
✓ active - passive   → Channel forms
✗ passive - passive  → No channel (both waiting)

✓ desirable - desirable → Channel forms
✓ desirable - auto      → Channel forms
✗ auto - auto           → No channel (both waiting)

✓ on - on → Channel forms (no negotiation)
✗ on - active/passive/desirable/auto → FAIL (mismatch)
```

---

## ĐỀ BỔ SUNG 6: GRE TUNNEL VPN

### Mô hình:
```
LAN1 (10.1.1.0/24) --- [G0/0] R1 [G0/1: 203.162.1.1] --- Internet --- [G0/1: 203.162.2.1] R2 [G0/0] --- LAN2 (10.2.2.0/24)
                               Tunnel0: 172.16.0.1/30                    Tunnel0: 172.16.0.2/30
```

### Yêu cầu (6 điểm):

**Câu 1 (3 điểm):** Cấu hình GRE tunnel để kết nối 2 LANs qua Internet, enable OSPF qua tunnel.

**Đáp án:**

**Trên R1:**
```
! Physical interface
R1(config)# interface g0/1
R1(config-if)# ip address 203.162.1.1 255.255.255.0
R1(config-if)# no shutdown

! LAN interface
R1(config)# interface g0/0
R1(config-if)# ip address 10.1.1.1 255.255.255.0
R1(config-if)# no shutdown

! GRE Tunnel
R1(config)# interface tunnel 0
R1(config-if)# ip address 172.16.0.1 255.255.255.252
R1(config-if)# tunnel source 203
