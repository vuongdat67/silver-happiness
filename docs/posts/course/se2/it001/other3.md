# O3. Other 3
## Con Trỏ (Pointer)

### Biến và Vùng Nhớ

#### Tổ Chức Bộ Nhớ

!!! note "Cấu trúc bộ nhớ RAM"
    - RAM gồm nhiều ô nhớ, mỗi ô có kích thước **1 byte**
    - Mỗi ô nhớ có **địa chỉ duy nhất** được đánh số từ 0
    - RAM lưu trữ cả mã chương trình và dữ liệu

**Sơ đồ bộ nhớ:**
```
Địa chỉ    Nội dung
┌──────┬──────────┐
│ 0x00 │    ...   │
├──────┼──────────┤
│ 0x01 │    ...   │
├──────┼──────────┤
│ 0x02 │    ...   │
├──────┼──────────┤
│ 0x03 │    ...   │
├──────┼──────────┤
│ ...  │    ...   │
└──────┴──────────┘
```

#### Biến và Địa Chỉ

Khi khai báo biến, máy tính cấp phát vùng nhớ cho biến đó.

```cpp
int main() {
    char ch = 'x';    // 1 byte tại địa chỉ 0x50
    int a = 7;        // 4 bytes tại địa chỉ 0x54
}
```

**Sơ đồ:**
```
Địa chỉ    Biến    Giá trị
┌──────┬──────┬──────────┐
│ 0x50 │  ch  │    'x'   │ 1 byte
├──────┼──────┼──────────┤
│ 0x51 │      │          │
├──────┼──────┼──────────┤
│ 0x52 │      │          │
├──────┼──────┼──────────┤
│ 0x53 │      │          │
├──────┼──────┼──────────┤
│ 0x54 │  a   │    7     │ 4 bytes
│ 0x55 │      │          │
│ 0x56 │      │          │
│ 0x57 │      │          │
└──────┴──────┴──────────┘
```

### Toán Tử & và *

#### Toán Tử & (Address-of Operator)

!!! note "Toán tử &"
    Cho biết **địa chỉ** của biến trong bộ nhớ

```cpp
int value = 3200;

cout << value;      // 3200 (giá trị)
cout << &value;     // 0x50 (địa chỉ)
```

#### Toán Tử * (Dereferencing Operator)

!!! note "Toán tử *"
    Cho biết **giá trị** tại một địa chỉ

```cpp
int value = 3200;

cout << *(&value);  // 3200 (giá trị tại địa chỉ của value)
```

**Mối quan hệ:**
```cpp
value      // Giá trị của biến
&value     // Địa chỉ của biến
*(&value)  // Giá trị tại địa chỉ đó = value
```

### Khái Niệm Con Trỏ

!!! note "Định nghĩa"
    **Con trỏ** (pointer) là một biến lưu trữ **địa chỉ** của một biến khác.

**Đặc điểm:**
- Con trỏ lưu địa chỉ, không lưu giá trị trực tiếp
- Con trỏ có kiểu (int*, float*, char*,...)
- Kích thước con trỏ thường cố định (4 bytes trên hệ 32-bit, 8 bytes trên 64-bit)

**Minh họa:**
```cpp
int a = 1000;
int *ptr = &a;  // ptr lưu địa chỉ của a

// ptr "trỏ đến" a
```

```
     ptr              a
┌──────────┐    ┌──────────┐
│  0x34    │───→│   1000   │
└──────────┘    └──────────┘
  Địa chỉ: 0x90   Địa chỉ: 0x34
```

### Khai Báo Con Trỏ

**Cú pháp:**
```cpp
<kiểu_dữ_liệu> *<tên_con_trỏ>;
```

**Ví dụ:**
```cpp
int *ptrI;        // Con trỏ kiểu int
float *ptrF;      // Con trỏ kiểu float
char *ptrC;       // Con trỏ kiểu char
double *ptrD;     // Con trỏ kiểu double

// Khai báo nhiều con trỏ
int *p1, *p2, *p3;

// LƯU Ý: Dấu * gắn với từng biến
int* p4, p5;      // p4 là con trỏ, p5 là biến int thường!
```

### Khởi Tạo Con Trỏ

**Cú pháp:**
```cpp
<kiểu_dữ_liệu> *<tên_con_trỏ> = &<biến>;
```

**Ví dụ:**
```cpp
int a = 10;
int *ptr = &a;    // ptr lưu địa chỉ của a

float x = 3.14;
float *pf = &x;

// SAI: Kiểu không khớp
int a = 10;
float *ptr = &a;  // Lỗi!
```

### Sử Dụng Con Trỏ

#### Đọc Giá Trị Qua Con Trỏ

```cpp
int a = 1000;
int *ptr = &a;

cout << ptr;      // Địa chỉ của a (VD: 0x34)
cout << *ptr;     // Giá trị tại địa chỉ đó = 1000
```

#### Thay Đổi Giá Trị Qua Con Trỏ

```cpp
int a = 1000;
int *ptr = &a;

*ptr = 3200;      // Thay đổi giá trị của a qua con trỏ
cout << a;        // 3200

(*ptr)++;         // Tăng giá trị của a lên 1
cout << a;        // 3201
```

### Ví Dụ Chi Tiết

```cpp
#include <iostream>
using namespace std;

int main() {
    int a;
    int *ptr;
    int value;
    
    a = 3200;
    ptr = &a;
    value = --(*ptr);
    
    cout << "Gia tri a: " << a << endl;           // 3199
    cout << "Gia tri value: " << value << endl;   // 3199
    cout << "Dia chi a: " << &a << endl;          // 0x34
    cout << "Gia tri ptr: " << ptr << endl;       // 0x34
    cout << "Gia tri *ptr: " << *ptr << endl;     // 3199
    
    return 0;
}
```

**Phân tích từng bước:**
```
Bước 1: a = 3200
┌─────────┐
│  3200   │ a (0x34)
└─────────┘

Bước 2: ptr = &a
┌─────────┐      ┌─────────┐
│  0x34   │ ptr →│  3200   │ a
└─────────┘      └─────────┘

Bước 3: value = --(*ptr)
- Giảm *ptr xuống 3199 (a = 3199)
- Gán value = 3199
```

### Phép Gán Con Trỏ

```cpp
int x = 10;
int *p1 = &x;
int *p2;

p2 = p1;          // p2 cũng trỏ đến x
*p2 = 20;         // Thay đổi x thành 20

cout << x;        // 20
cout << *p1;      // 20
cout << *p2;      // 20
```

!!! warning "Phân biệt"
    ```cpp
    p2 = p1;      // Gán địa chỉ: p2 trỏ đến nơi p1 trỏ
    *p2 = *p1;    // Gán giá trị: giá trị tại p2 = giá trị tại p1
    ```

**Minh họa:**
```
Ban đầu:
p1 → [27]
p2 → [5]

Sau p2 = p1:
p1 → [27]
p2 → [27]  (cùng trỏ đến 27)

Sau *p2 = *p1:
p1 → [27]
p2 → [27]  (p2 vẫn trỏ chỗ cũ, nhưng giá trị = 27)
```

### Con Trỏ NULL

!!! important "Con trỏ NULL"
    Con trỏ NULL là con trỏ **không trỏ vào đâu cả**.

```cpp
int *p1 = NULL;         // C-style
int *p2 = nullptr;      // C++11 (khuyến khích)

// Kiểm tra con trỏ NULL
if (p1 == NULL) {
    cout << "Con tro NULL" << endl;
}
```

!!! danger "Lỗi thường gặp"
    ```cpp
    int *p;           // Con trỏ chưa khởi tạo (nguy hiểm!)
    *p = 100;         // SAI: p trỏ đến đâu không xác định!
    
    // Đúng:
    int *p = NULL;    // Khởi tạo NULL
    int x;
    p = &x;           // Gán địa chỉ hợp lệ
    *p = 100;         // OK
    ```

### Kích Thước Con Trỏ

!!! note "sizeof con trỏ"
    Kích thước con trỏ phụ thuộc vào kiến trúc hệ thống, **không phụ thuộc kiểu dữ liệu**.

```cpp
int a;
double b;
char c;
int *pa;
double *pb;
char *pc;

cout << sizeof(a) << endl;      // 4
cout << sizeof(b) << endl;      // 8
cout << sizeof(c) << endl;      // 1

cout << sizeof(pa) << endl;     // 4 (32-bit) hoặc 8 (64-bit)
cout << sizeof(pb) << endl;     // 4 (32-bit) hoặc 8 (64-bit)
cout << sizeof(pc) << endl;     // 4 (32-bit) hoặc 8 (64-bit)
```

### Từ Khóa const và Con Trỏ

#### 1. Con Trỏ Trỏ Đến Hằng

```cpp
const int *p;         // Không thể thay đổi giá trị qua p
int const *p;         // Tương đương

int x = 10;
const int *p = &x;

*p = 20;              // SAI: không thể thay đổi giá trị
p = &y;               // OK: có thể trỏ đến nơi khác
```

#### 2. Con Trỏ Hằng

```cpp
int * const p;        // Không thể thay đổi địa chỉ mà p trỏ đến

int x = 10;
int * const p = &x;

*p = 20;              // OK: có thể thay đổi giá trị
p = &y;               // SAI: không thể trỏ đến nơi khác
```

#### 3. Con Trỏ Hằng Trỏ Đến Hằng

```cpp
const int * const p;  // Không thể thay đổi cả địa chỉ lẫn giá trị

int x = 10;
const int * const p = &x;

*p = 20;              // SAI
p = &y;               // SAI
```

**Bảng tóm tắt:**

| Khai báo | Thay đổi giá trị | Thay đổi địa chỉ |
|----------|------------------|------------------|
| `int *p` | ✓ | ✓ |
| `const int *p` | ✗ | ✓ |
| `int * const p` | ✓ | ✗ |
| `const int * const p` | ✗ | ✗ |

### Con Trỏ và Hàm

#### Truyền Con Trỏ Vào Hàm

```cpp
// Hàm hoán vị hai số (dùng con trỏ)
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 7, y = 8;
    cout << "Truoc: x = " << x << ", y = " << y << endl;
    
    swap(&x, &y);
    
    cout << "Sau: x = " << x << ", y = " << y << endl;
    return 0;
}
```

#### Hàm Nhập Giá Trị Qua Con Trỏ

```cpp
void nhapGiaTri(int *p) {
    cout << "Nhap gia tri: ";
    cin >> *p;
}

int main() {
    int a;
    nhapGiaTri(&a);
    cout << "Gia tri a = " << a << endl;
    return 0;
}
```

### Con Trỏ và Mảng

#### Mảng và Hằng Con Trỏ

!!! important "Quy tắc"
    - Tên mảng là một **hằng con trỏ** trỏ đến phần tử đầu tiên
    - `arr` ≡ `&arr[0]`

```cpp
int arr[6] = {5, 6, 9, 4, 1, 2};

cout << arr;         // Địa chỉ phần tử đầu tiên
cout << &arr[0];     // Tương đương
```

**Sơ đồ:**
```
     arr (0x10)
        ↓
┌────┬────┬────┬────┬────┬────┐
│ 5  │ 6  │ 9  │ 4  │ 1  │ 2  │
└────┴────┴────┴────┴────┴────┘
0x10 0x14 0x18 0x1C 0x20 0x24
```

#### Truy Xuất Mảng Qua Con Trỏ

```cpp
int arr[6] = {5, 6, 9, 4, 1, 2};
int *p = arr;

// Các cách truy xuất tương đương:
arr[i]      ≡ *(arr + i)    ≡ p[i]      ≡ *(p + i)
&arr[i]     ≡ arr + i       ≡ &p[i]     ≡ p + i
```

**Ví dụ:**
```cpp
int arr[6] = {5, 6, 9, 4, 1, 2};
int *p = arr;

cout << arr[2];      // 9
cout << *(arr + 2);  // 9
cout << p[2];        // 9
cout << *(p + 2);    // 9

cout << &arr[2];     // 0x18
cout << arr + 2;     // 0x18
cout << &p[2];       // 0x18
cout << p + 2;       // 0x18
```

#### Phép Toán Số Học Trên Con Trỏ

!!! note "Pointer Arithmetic"
    - `p + n` → `p + n × sizeof(kiểu dữ liệu)`
    - `p - n` → `p - n × sizeof(kiểu dữ liệu)`
    - `p2 - p1` → số phần tử giữa hai con trỏ

```cpp
int arr[6] = {5, 6, 9, 4, 1, 2};
int *p = &arr[2];    // p trỏ đến arr[2]

p + 1;               // Trỏ đến arr[3]
p - 1;               // Trỏ đến arr[1]
p + 2;               // Trỏ đến arr[4]

int *p1 = &arr[1];
int *p2 = &arr[5];
p2 - p1;             // 4 (khoảng cách 4 phần tử)
```

**Các phép toán cho phép:**
- Cộng/trừ số nguyên: `p + n`, `p - n`
- So sánh: `p1 == p2`, `p1 < p2`, `p1 >= p2`
- Tăng/giảm: `p++`, `p--`, `p += n`, `p -= n`
- Hiệu hai con trỏ: `p2 - p1`

**Các phép toán KHÔNG cho phép:**
- Cộng hai con trỏ: `p1 + p2`
- Nhân/chia: `p * n`, `p / n`

#### Duyệt Mảng Qua Con Trỏ

```cpp
int arr[6] = {5, 6, 9, 4, 1, 2};
int *p = arr;

// Cách 1: Dùng chỉ số
for (int i = 0; i < 6; i++) {
    cout << *(p + i) << " ";
}

// Cách 2: Tăng con trỏ
for (int i = 0; i < 6; i++) {
    cout << *p << " ";
    p++;
}

// Cách 3: Dùng con trỏ kết thúc
int *end = arr + 6;
for (int *p = arr; p < end; p++) {
    cout << *p << " ";
}
```

#### Truyền Mảng Vào Hàm

```cpp
// Cách 1: Dùng mảng
void xuatMang(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}

// Cách 2: Dùng con trỏ (tương đương)
void xuatMang(int *arr, int n) {
    for (int i = 0; i < n; i++) {
        cout << *(arr + i) << " ";
    }
}

// Cách 3: Tăng con trỏ
void xuatMang(int *arr, int n) {
    for (int i = 0; i < n; i++, arr++) {
        cout << *arr << " ";
    }
}
```

!!! warning "Lưu ý"
    ```cpp
    int arr[10];
    
    // Trong hàm main: arr là hằng con trỏ, KHÔNG thể tăng
    arr++;           // SAI!
    
    // Nhưng khi truyền vào hàm: arr là con trỏ thường, CÓ thể tăng
    void func(int arr[]) {
        arr++;       // OK!
    }
    ```

### Con Trỏ và Chuỗi

```cpp
char str[] = "Hello";
char *p = str;

// Duyệt chuỗi
while (*p != '\0') {
    cout << *p;
    p++;
}

// Chuyển thành chữ hoa
for (int i = 0; str[i] != '\0'; i++) {
    str[i] = toupper(str[i]);
}

// Hoặc dùng con trỏ
p = str;
while (*p) {
    *p = toupper(*p);
    p++;
}
```

### Con Trỏ và Struct

```cpp
struct DIEM {
    int x;
    int y;
};

DIEM d = {10, 20};
DIEM *p = &d;

// Cách 1: Dùng toán tử .
(*p).x = 30;
(*p).y = 40;

// Cách 2: Dùng toán tử -> (khuyến khích)
p->x = 30;
p->y = 40;

cout << p->x << ", " << p->y << endl;
```

!!! note "Toán tử ->"
    `p->member` ≡ `(*p).member`

---

## Cấp Phát Động (Dynamic Memory Allocation)

### Cấp Phát Tĩnh vs Động

#### Cấp Phát Tĩnh

```cpp
int a;                // Biến tự động
int arr[100];         // Mảng tĩnh
SINHVIEN sv;          // Struct tĩnh
```

**Nhược điểm:**
- Phải biết trước kích thước khi lập trình
- Không thể thay đổi kích thước
- Tốn bộ nhớ nếu cấp phát dư

#### Cấp Phát Động

```cpp
int *p = new int;           // Cấp phát 1 số nguyên
int *arr = new int[n];      // Cấp phát mảng n phần tử (n nhập từ bàn phím)
```

**Ưu điểm:**
- Cấp phát khi chạy chương trình
- Kích thước linh hoạt
- Sử dụng bộ nhớ hiệu quả hơn

### Cấu Trúc Bộ Nhớ Chương Trình

```
┌─────────────────────┐
│   STACK             │ ← Biến cục bộ, tham số hàm
│   (LIFO)            │   Tự động quản lý
├─────────────────────┤
│                     │
│   Vùng trống        │
│                     │
├─────────────────────┤
│   HEAP              │ ← Cấp phát động
│   (RAM + VM)        │   Lập trình viên quản lý
├─────────────────────┤
│   Biến toàn cục     │ ← Biến global, static
│   & static          │
├─────────────────────┤
│   Mã chương trình   │ ← Code, hằng số
└─────────────────────┘
```

### Toán Tử new

**Cú pháp:**
```cpp
<kiểu> *<con_trỏ> = new <kiểu>;
<kiểu> *<con_trỏ> = new <kiểu>(<giá_trị_khởi_tạo>);
<kiểu> *<con_trỏ> = new <kiểu>[<số_phần_tử>];
```

**Ví dụ:**
```cpp
// Cấp phát 1 biến
int *p = new int;
*p = 100;

// Cấp phát và khởi tạo
int *q = new int(99);
cout << *q;            // 99

// Cấp phát mảng
int n;
cout << "Nhap n: ";
cin >> n;
int *arr = new int[n];

// Kiểm tra cấp phát thành công
if (arr == NULL) {
    cout << "Khong du bo nho!" << endl;
    exit(1);
}
```

### Toán Tử delete

**Cú pháp:**
```cpp
delete <con_trỏ>;              // Giải phóng 1 biến
delete[] <con_trỏ>;            // Giải phóng mảng
```

**Ví dụ:**
```cpp
int *p = new int;
*p = 100;
delete p;
p = NULL;              // Tránh con trỏ lạc

int *arr = new int[100];
delete[] arr;
arr = NULL;
```

!!! danger "Con trỏ lạc (Dangling Pointer)"
    Sau khi `delete`, con trỏ vẫn lưu địa chỉ cũ (không hợp lệ).
    
    ```cpp
    int *p = new int(100);
    delete p;
    // p vẫn lưu địa chỉ cũ nhưng vùng nhớ đã được giải phóng!
    
    *p = 200;          // NGUY HIỂM!
    
    // Giải pháp: Gán NULL sau khi delete
    delete p;
    p = NULL;
    ```

### Typedef với Con Trỏ

```cpp
typedef int* IntPtr;

IntPtr p1, p2;         // Cả hai đều là con trỏ int
int *p3, p4;           // p3 là con trỏ, p4 là int thường!
```

### Mảng Động 1 Chiều

#### Cấp Phát

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap so phan tu: ";
    cin >> n;
    
    // Cấp phát mảng động
    int *arr = new int[n];
    
    // Kiểm tra
    if (arr == NULL) {
        cout << "Khong du bo nho!" << endl;
        return 1;
    }
    
    // Sử dụng như mảng thường
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    
    // Xuất
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    
    // Giải phóng
    delete[] arr;
    arr = NULL;
    
    return 0;
}
```

#### Truyền Mảng Động Vào Hàm

```cpp
// Cách 1: Hàm trả về con trỏ
int* nhapMang(int n) {
    int *p = new int[n];
    if (p == NULL) return NULL;
    
    for (int i = 0; i < n; i++) {
        cout << "Nhap phan tu " << i << ": ";
        cin >> p[i];
    }
    return p;
}

int main() {
    int n;
    cin >> n;
    
    int *arr = nhapMang(n);
    if (arr == NULL) {
        cout << "Loi cap phat!" << endl;
        return 1;
    }
    
    // Sử dụng arr...
    
    delete[] arr;
    return 0;
}

// Cách 2: Truyền tham chiếu con trỏ
void nhapMang(int *&p, int n) {
    p = new int[n];
    if (p == NULL) return;
    
    for (int i = 0; i < n; i++) {
        cout << "Nhap phan tu " << i << ": ";
        cin >> p[i];
    }
}

int main() {
    int n, *arr;
    cin >> n;
    
    nhapMang(arr, n);
    
    // Sử dụng arr...
    
    delete[] arr;
    return 0;
}
```

### Mảng Động 2 Chiều

**Cấp phát:**
```cpp
int m, n;
cout << "Nhap so dong, cot: ";
cin >> m >> n;

// Cấp phát mảng con trỏ
int **matrix = new int*[m];
if (matrix == NULL) {
    cout << "Loi cap phat!" << endl;
    return 1;
}

// Cấp phát từng dòng
for (int i = 0; i < m; i++) {
    matrix[i] = new int[n];
    if (matrix[i] == NULL) {
        // Giải phóng các dòng đã cấp phát
        for (int j = 0; j < i; j++) {
            delete[] matrix[j];
        }
        delete[] matrix;
        cout << "Loi cap phat!" << endl;
        return 1;
    }
}

// Sử dụng
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        matrix[i][j] = i * n + j;
    }
}
```

**Giải phóng:**
```cpp
// Giải phóng từng dòng
for (int i = 0; i < m; i++) {
    delete[] matrix[i];
}

// Giải phóng mảng con trỏ
delete[] matrix;
matrix = NULL;
```

**Sơ đồ:**
```
matrix
  ↓
┌────┐
│ p0 │──→ [a00][a01][a02][a03]
├────┤
│ p1 │──→ [a10][a11][a12][a13]
├────┤
│ p2 │──→ [a20][a21][a22][a23]
└────┘
```

### Cấp Phát Động cho Struct

```cpp
// Cấp phát 1 struct
SINHVIEN *sv = new SINHVIEN;
sv->mssv = "2151063";
sv->hoten = "Nguyen Van A";

delete sv;

// Cấp phát mảng struct
int n;
cin >> n;
SINHVIEN *danhsach = new SINHVIEN[n];

for (int i = 0; i < n; i++) {
    cout << "Nhap sinh vien " << i + 1 << ":\n";
    cin >> danhsach[i].mssv;
    cin.ignore();
    cin.getline(danhsach[i].hoten, 50);
}

delete[] danhsach;
```

### Memory Leak (Rò Rỉ Bộ Nhớ)

!!! danger "Memory Leak"
    Xảy ra khi cấp phát bộ nhớ nhưng không giải phóng.

```cpp
// SAI: Memory leak
void func() {
    int *p = new int[1000];
    // Quên delete[]
}  // Vùng nhớ không được giải phóng!

// ĐÚNG:
void func() {
    int *p = new int[1000];
    // Xử lý...
    delete[] p;
    p = NULL;
}
```

**Hậu quả:**
- Bộ nhớ bị chiếm dụng không cần thiết
- Chương trình chạy lâu sẽ hết RAM
- Hệ thống chậm lại

### Cấp Phát Động trong C (Tham khảo)

#### malloc()

```cpp
void* malloc(size_t size);

// Ví dụ
int *p = (int*)malloc(sizeof(int));
int *arr = (int*)malloc(10 * sizeof(int));

if (p == NULL) {
    printf("Khong du bo nho!");
}
```

#### calloc()

```cpp
void* calloc(size_t num, size_t size);

// Ví dụ (tự động khởi tạo = 0)
int *arr = (int*)calloc(10, sizeof(int));
```

#### realloc()

```cpp
void* realloc(void *ptr, size_t newsize);

// Ví dụ
int *arr = (int*)malloc(10 * sizeof(int));
arr = (int*)realloc(arr, 20 * sizeof(int));  // Mở rộng lên 20
```

#### free()

```cpp
void free(void *ptr);

// Ví dụ
int *p = (int*)malloc(sizeof(int));
free(p);
p = NULL;
```

!!! warning "Lưu ý"
    - Cấp phát bằng `new` → giải phóng bằng `delete`
    - Cấp phát bằng `malloc/calloc/realloc` → giải phóng bằng `free`
    - KHÔNG trộn lẫn!

---

## Bài Tập Thực Hành

### Bài Tập Con Trỏ Cơ Bản

!!! example "Bài 1"
    Tìm lỗi và giải thích:
    ```cpp
    int *x, y = 2;
    *x = y;
    *x += y++;
    cout << *x << y;
    ```

!!! example "Bài 2"
    Viết hàm hoán vị hai số sử dụng con trỏ.

!!! example "Bài 3"
    Cho mảng `int a[10]`, con trỏ `int *p = a`. Gán giá trị 100 cho phần tử thứ 5 bằng con trỏ p.

!!! example "Bài 4"
    Viết hàm nhập/xuất mảng 1 chiều sử dụng con trỏ.

!!! example "Bài 5"
    Tạo chuỗi `"hello class"`, dùng con trỏ chuyển thành `"HELLO CLASS"`.

### Bài Tập Cấp Phát Động

!!! example "Bài 1"
    Viết chương trình:
    - Nhập n từ bàn phím
    - Cấp phát động mảng n số nguyên
    - Nhập/xuất mảng
    - Tìm max/min
    - Giải phóng bộ nhớ

!!! example "Bài 2"
    Viết chương trình nhập dãy số hữu tỉ (số lượng tùy ý):
    - Xuất các số < 1
    - Tính tổng và tích
    - Giải phóng bộ nhớ

!!! example "Bài 3"
    Cấp phát động ma trận m×n:
    - Nhập/xuất ma trận
    - Tìm phần tử lớn nhất
    - Tính tổng các dòng/cột
    - Giải phóng bộ nhớ

!!! example "Bài 4"
    Viết chương trình quản lý danh sách sinh viên (cấp phát động):
    - Thêm sinh viên
    - Xóa sinh viên theo MSSV
    - Tìm kiếm
    - Sắp xếp theo điểm TB
    - Giải phóng bộ nhớ khi kết thúc

!!! example "Bài 5"
    Viết hàm sao chép mảng A sang mảng B (cấp phát động cho B).

---

## Tập Tin (File)

### Giới Thiệu

#### Tại Sao Cần Tập Tin?

!!! question "Vấn đề"
    - Dữ liệu nhập từ bàn phím lưu trên RAM
    - RAM: nhanh nhưng mất dữ liệu khi tắt máy
    - Không xử lý được dữ liệu lớn
    - Không lưu trữ lâu dài

**Giải pháp:** Lưu trữ dữ liệu trên **ổ cứng** (HDD, SSD) dưới dạng **tập tin**.

#### Khái Niệm Tập Tin

!!! note "Định nghĩa"
    **Tập tin** (file) là tập hợp dữ liệu được tổ chức theo cấu trúc xác định, có tên định danh, lưu trữ trên thiết bị lưu trữ ngoài.

**Đặc điểm:**
- Dãy byte liên tục
- Có tên và phần mở rộng
- Cho phép đọc/ghi dữ liệu
- Lưu trữ lâu dài

### Phân Loại Tập Tin

#### Theo Nội Dung

- **Tập tin văn bản** (Text file):
  - Chỉ chứa ký tự
  - Có thể đọc bằng Notepad, editor
  - VD: `.txt`, `.cpp`, `.h`

- **Tập tin nhị phân** (Binary file):
  - Chứa dữ liệu dạng byte
  - Không đọc được bằng text editor
  - VD: `.exe`, `.jpg`, `.mp3`, `.dat`

#### Theo Cách Sử Dụng

- **Text stream**: Xử lý theo từng dòng văn bản
- **Binary stream**: Xử lý theo từng byte

### Quy Tắc Đặt Tên Tập Tin

**Cú pháp:**
```
<tên_tập_tin>.<phần_mở_rộng>
```

**Quy tắc:**
- Tên tập tin: bắt buộc, tối đa 128 ký tự
- Ký tự cho phép: A-Z, a-z, 0-9, khoảng trắng, @#$%^()!
- Phần mở rộng: không bắt buộc, thường 3-4 ký tự

**Ví dụ:**
- `dulieu.txt`
- `SinhVien2024.dat`
- `Bao cao 01.docx`

### Đường Dẫn Tập Tin

**Đường dẫn tuyệt đối:**
```cpp
"C:\\data\\list.txt"          // Windows
"/home/user/data/list.txt"    // Linux/Mac
```

!!! warning "Lưu ý"
    Trong C++, dấu `\` phải viết thành `\\`

**Đường dẫn tương đối:**
```cpp
"data.txt"                    // Cùng thư mục với file .exe
"input\\data.txt"             // Thư mục con input
"..\\data.txt"                // Thư mục cha
```

### Thư Viện Xử Lý Tập Tin

```cpp
#include <fstream>            // File stream
```

**Các lớp chính:**
- `ifstream`: Input file stream (đọc)
- `ofstream`: Output file stream (ghi)
- `fstream`: File stream (đọc/ghi)

### Mở và Đóng Tập Tin

#### Mở Tập Tin Để Đọc

```cpp
#include <fstream>
using namespace std;

ifstream inFile("data.txt");

// Hoặc
ifstream inFile;
inFile.open("data.txt");

// Kiểm tra mở thành công
if (!inFile) {
    cout << "Khong mo duoc file!" << endl;
    return 1;
}
```

#### Mở Tập Tin Để Ghi

```cpp
ofstream outFile("output.txt");

// Hoặc
ofstream outFile;
outFile.open("output.txt");

// Kiểm tra
if (!outFile) {
    cout << "Khong mo duoc file!" << endl;
    return 1;
}
```

#### Chế Độ Mở Tập Tin

| Chế độ | Ý nghĩa |
|--------|---------|
| `ios::in` | Mở để đọc |
| `ios::out` | Mở để ghi (xóa nội dung cũ) |
| `ios::app` | Ghi tiếp vào cuối file |
| `ios::binary` | Chế độ nhị phân |
| `ios::trunc` | Xóa nội dung cũ |

```cpp
// Ghi tiếp vào cuối file
ofstream outFile("data.txt", ios::app);

// Mở file nhị phân để đọc
ifstream inFile("data.dat", ios::binary);

// Kết hợp nhiều chế độ
fstream file("data.txt", ios::in | ios::out);
```

#### Đóng Tập Tin

```cpp
inFile.close();
outFile.close();
```

!!! important "Luôn đóng file"
    - Giải phóng tài nguyên
    - Đảm bảo dữ liệu được ghi hoàn toàn
    - Cho phép chương trình khác truy cập

### Ghi Dữ Liệu Vào Tập Tin

**Giống như `cout`:**
```cpp
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("test.txt");
    
    if (!outFile) {
        cout << "Loi mo file!" << endl;
        return 1;
    }
    
    int x = 10;
    float y = 123.23;
    
    outFile << x << "\t" << y << endl;
    outFile << "HelloCplusplus." << endl;
    
    outFile.close();
    return 0;
}
```

**Nội dung file `test.txt`:**
```
10	123.23
HelloCplusplus.
```

#### Ghi Tiếp Vào Cuối File

```cpp
ofstream outFile("test.txt", ios::app);

if (!outFile) {
    cout << "Loi mo file!" << endl;
    return 1;
}

outFile << "Them dong moi" << endl;
outFile.close();
```

### Đọc Dữ Liệu Từ Tập Tin

#### Đọc Theo Từng Từ/Số

**Giống như `cin`:**
```cpp
#include <fstream>
using namespace std;

int main() {
    ifstream inFile("test.txt");
    
    if (!inFile) {
        cout << "Loi mo file!" << endl;
        return 1;
    }
    
    int x;
    float y;
    string str;
    
    inFile >> x >> y >> str;
    
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
    cout << "str = " << str << endl;
    
    inFile.close();
    return 0;
}
```

#### Đọc Theo Từng Ký Tự

```cpp
char ch;
ifstream inFile("test.txt");

while (inFile.get(ch)) {
    cout << ch;
}

inFile.close();
```

#### Đọc Theo Từng Dòng

```cpp
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream inFile("test.txt");
    
    if (!inFile) {
        cout << "Loi mo file!" << endl;
        return 1;
    }
    
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    
    inFile.close();
    return 0;
}
```

#### Kiểm Tra Cuối File

```cpp
ifstream inFile("test.txt");

while (!inFile.eof()) {
    string line;
    getline(inFile, line);
    
    if (!inFile.eof()) {  // Tránh đọc dòng cuối 2 lần
        cout << line << endl;
    }
}
```

### Ví Dụ Thực Tế

#### Ví Dụ 1: Lưu và Đọc Điểm Sinh Viên

```cpp
#include <fstream>
#include <iostream>
using namespace std;

struct SINHVIEN {
    char mssv[10];
    char hoten[50];
    float diemTB;
};

// Ghi danh sách sinh viên
void ghiFile(SINHVIEN ds[], int n) {
    ofstream outFile("sinhvien.txt");
    
    if (!outFile) {
        cout << "Loi mo file!" << endl;
        return;
    }
    
    outFile << n << endl;
    for (int i = 0; i < n; i++) {
        outFile << ds[i].mssv << endl;
        outFile << ds[i].hoten << endl;
        outFile << ds[i].diemTB << endl;
    }
    
    outFile.close();
    cout << "Da ghi file thanh cong!" << endl;
}

// Đọc danh sách sinh viên
int docFile(SINHVIEN ds[]) {
    ifstream inFile("sinhvien.txt");
    
    if (!inFile) {
        cout << "Loi mo file!" << endl;
        return 0;
    }
    
    int n;
    inFile >> n;
    inFile.ignore();  // Bỏ qua ký tự xuống dòng
    
    for (int i = 0; i < n; i++) {
        inFile.getline(ds[i].mssv, 10);
        inFile.getline(ds[i].hoten, 50);
        inFile >> ds[i].diemTB;
        inFile.ignore();
    }
    
    inFile.close();
    return n;
}
```

#### Ví Dụ 2: Tính Trung Bình Từ File

Cho file `trungbinh.txt` có nội dung:
```
46	56	12
12	34	56
45	78	90
```

Tính trung bình mỗi cột, ghi kết quả vào cuối file:

```cpp
#include <fstream>
#include <sstream>
#include <string>
using namespace std;

int main() {
    ifstream inFile("trungbinh.txt");
    
    if (!inFile) {
        cout << "Loi mo file!" << endl;
        return 1;
    }
    
    float s1 = 0, s2 = 0, s3 = 0;
    int count = 0;
    
    string line;
    while (getline(inFile, line)) {
        int col1, col2, col3;
        istringstream iss(line);
        
        if (iss >> col1 >> col2 >> col3) {
            s1 += col1;
            s2 += col2;
            s3 += col3;
            count++;
        }
    }
    inFile.close();
    
    // Tính trung bình
    s1 /= count;
    s2 /= count;
    s3 /= count;
    
    // Làm tròn 2 chữ số
    s1 = (int)(s1 * 100) / 100.0;
    s2 = (int)(s2 * 100) / 100.0;
    s3 = (int)(s3 * 100) / 100.0;
    
    // Ghi vào cuối file
    ofstream outFile("trungbinh.txt", ios::app);
    outFile << s1 << "\t" << s2 << "\t" << s3 << endl;
    outFile.close();
    
    cout << "Hoan thanh!" << endl;
    return 0;
}
```

#### Ví Dụ 3: Sao Chép File

```cpp
#include <fstream>
using namespace std;

int main() {
    ifstream inFile("nguon.txt");
    ofstream outFile("dich.txt");
    
    if (!inFile || !outFile) {
        cout << "Loi mo file!" << endl;
        return 1;
    }
    
    char ch;
    while (inFile.get(ch)) {
        outFile.put(ch);
    }
    
    inFile.close();
    outFile.close();
    
    cout << "Sao chep thanh cong!" << endl;
    return 0;
}
```

### Xử Lý File Nhị Phân

#### Ghi File Nhị Phân

```cpp
#include <fstream>
using namespace std;

struct SINHVIEN {
    char mssv[10];
    char hoten[50];
    float diemTB;
};

int main() {
    ofstream outFile("sinhvien.dat", ios::binary);
    
    if (!outFile) {
        cout << "Loi mo file!" << endl;
        return 1;
    }
    
    SINHVIEN sv = {"2151063", "Nguyen Van A", 8.5};
    
    outFile.write((char*)&sv, sizeof(SINHVIEN));
    
    outFile.close();
    return 0;
}
```

#### Đọc File Nhị Phân

```cpp
ifstream inFile("sinhvien.dat", ios::binary);

if (!inFile) {
    cout << "Loi mo file!" << endl;
    return 1;
}

SINHVIEN sv;
inFile.read((char*)&sv, sizeof(SINHVIEN));

cout << "MSSV: " << sv.mssv << endl;
cout << "Ho ten: " << sv.hoten << endl;
cout << "Diem TB: " << sv.diemTB << endl;

inFile.close();
```

---

## Bài Tập Thực Hành

### Bài Tập File

!!! example "Bài 1"
    Nhập dãy số nguyên, ghi vào file `Integer.txt` theo định dạng:
    ```
    Begin Day
    <số phần tử>
    <20 số/dòng>
    ...
    End Day
    ```
    Viết hàm đọc file và tìm phần tử lớn nhất.

!!! example "Bài 2"
    Nhập ma trận vuông, ghi vào file `matran.txt`:
    ```
    <cấp ma trận>
    <dòng 1>
    <dòng 2>
    ...
    ```
    Đọc file, tìm max/min, xuất dòng có tổng lớn nhất.

!!! example "Bài 3"
    Quản lý danh sách sinh viên (MSSV, họ tên, năm sinh, điểm TB):
    - Ghi danh sách vào file
    - Đọc file và xuất danh sách
    - Thêm sinh viên vào cuối file
    - Tìm kiếm theo MSSV

!!! example "Bài 4"
    File văn bản chứa nhiều dòng. Viết chương trình:
    - Đếm số dòng
    - Đếm số từ
    - Đếm số ký tự
    - Tìm từ xuất hiện nhiều nhất

!!! example "Bài 5"
    Cho 2 file chứa dãy số đã sắp xếp. Trộn 2 file thành file thứ 3 vẫn đảm bảo sắp xếp.

---

## Tổng Kết

!!! summary "Điểm Chính - Con Trỏ"
    - Con trỏ lưu địa chỉ của biến
    - Toán tử `&`: lấy địa chỉ
    - Toán tử `*`: lấy giá trị tại địa chỉ
    - Con trỏ và mảng: tên mảng là hằng con trỏ
    - Pointer arithmetic: `p+n` = `p + n×sizeof(type)`
    - Con trỏ NULL: không trỏ vào đâu
    - Con trỏ lạc: sau delete phải gán NULL

!!! summary "Điểm Chính - Cấp Phát Động"
    - Cấp phát: `new` (1 biến), `new[]` (mảng)
    - Giải phóng: `delete`, `delete[]`
    - Kiểm tra: `if (p == NULL)`
    - Luôn giải phóng sau khi dùng
    - Gán NULL sau delete
    - Memory leak: quên giải phóng

!!! summary "Điểm Chính - File"
    - `ifstream`: đọc file
    - `ofstream`: ghi file
    - `fstream`: đọc/ghi
    - Luôn kiểm tra mở thành công
    - Luôn đóng file sau khi dùng
    - Text file: đọc/ghi như cin/cout
    - Binary file: dùng read/write
    - `ios::app`: ghi tiếp vào cuối