# O1. Other 1

## Mảng (Arrays)

### Giới thiệu về Mảng

Mảng là một cấu trúc dữ liệu cho phép lưu trữ nhiều giá trị cùng kiểu dữ liệu trong một biến duy nhất. Thay vì khai báo nhiều biến riêng lẻ, mảng giúp quản lý dữ liệu hiệu quả hơn.

!!! question "Vấn đề"
    - Lưu trữ 10 số: cần 10 biến riêng biệt
    - Lưu trữ 1000 số: cần 1000 biến riêng biệt?
    
    **Giải pháp**: Sử dụng mảng!

### Khái niệm Mảng

!!! note "Định nghĩa"
    **Mảng** là một tập hợp các phần tử có cùng kiểu dữ liệu, được lưu trữ liên tiếp trong bộ nhớ và được truy xuất thông qua chỉ số.

**Đặc điểm:**
- Các phần tử có cùng kiểu dữ liệu
- Kích thước cố định khi khai báo
- Lưu trữ liên tục trong bộ nhớ
- Truy xuất qua chỉ số (index)

### Các Yếu Tố Xác Định Mảng

Một mảng được xác định bởi 4 yếu tố:

1. **Tên mảng**: định danh của mảng
2. **Kiểu dữ liệu**: kiểu của các phần tử (int, float, char,...)
3. **Số chiều**: 1 chiều, 2 chiều,...
4. **Kích thước**: số lượng phần tử

---

## Mảng Một Chiều

### Khai báo Mảng 1 Chiều

**Cú pháp:**
```cpp
<kiểu_dữ_liệu> <tên_mảng>[<số_phần_tử>];
```

**Ví dụ:**
```cpp
int arr[10];           // Mảng 10 số nguyên
float scores[5];       // Mảng 5 số thực
char name[50];         // Mảng 50 ký tự
```

!!! warning "Lưu ý"
    - Số phần tử phải là hằng số hoặc được định nghĩa bằng `#define`
    - Không được dùng biến để khai báo kích thước (trừ C99/C++11 trở lên)

```cpp
// Cách tốt
#define MAX_SIZE 100
int arr[MAX_SIZE];

// Cách không nên (C++ cũ)
int n = 10;
int arr[n];  // Lỗi với một số compiler
```

### Khởi Tạo Mảng 1 Chiều

**Các cách khởi tạo:**

```cpp
// 1. Khởi tạo đầy đủ
int A[4] = {29, 137, 50, 4};

// 2. Khởi tạo một phần (phần còn lại = 0)
int B[4] = {91, 106};  // B = {91, 106, 0, 0}

// 3. Khởi tạo tất cả = 0
int C[4] = {0};  // C = {0, 0, 0, 0}

// 4. Tự động xác định kích thước
int D[] = {22, 16, 56, 19};  // D có 4 phần tử
```

### Chỉ Số Mảng

!!! important "Quy tắc chỉ số"
    - Chỉ số bắt đầu từ **0**
    - Chỉ số cuối cùng = số phần tử - 1
    - Mảng có n phần tử: chỉ số từ 0 đến n-1

```cpp
int A[5];  
// Chỉ số hợp lệ: 0, 1, 2, 3, 4
// Chỉ số không hợp lệ: -1, 5, 6,...
```

**Sơ đồ bộ nhớ:**
```
Mảng: int A[5] = {99, 17, 50, 43, 72}

┌─────┬─────┬─────┬─────┬─────┐
│ 99  │ 17  │ 50  │ 43  │ 72  │
└─────┴─────┴─────┴─────┴─────┘
  A[0]  A[1]  A[2]  A[3]  A[4]
```

### Truy Xuất Phần Tử

**Cú pháp:**
```cpp
<tên_mảng>[<chỉ_số>]
```

**Ví dụ:**
```cpp
int A[4] = {29, 137, 50, 4};

cout << A[0];      // In ra: 29
cout << A[2];      // In ra: 50

A[1] = 100;        // Gán giá trị mới
int x = A[3] + 5;  // x = 4 + 5 = 9
```

### Địa Chỉ Các Phần Tử

**Cú pháp lấy địa chỉ:**
```cpp
&<tên_mảng>[<chỉ_số>]
```

**Ví dụ:**
```cpp
int A[4] = {29, 137, 50, 4};

cout << &A[0];  // Địa chỉ phần tử đầu tiên
cout << &A[1];  // Địa chỉ phần tử thứ 2
```

### Truyền Mảng Cho Hàm

Mảng luôn được truyền theo **tham chiếu** (có thể thay đổi giá trị).

**Cú pháp:**
```cpp
void function_name(int arr[], int size);
void function_name(int arr[100], int size);  // Tương đương
```

**Ví dụ đầy đủ:**
```cpp
#include <iostream>
using namespace std;

// Hàm nhập mảng
void nhapMang(int arr[], int n) {
    for(int i = 0; i < n; i++) {
        cout << "Nhap phan tu thu " << i << ": ";
        cin >> arr[i];
    }
}

// Hàm xuất mảng
void xuatMang(int arr[], int n) {
    cout << "Mang: ";
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Hàm tính tổng
int tinhTong(int arr[], int n) {
    int sum = 0;
    for(int i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int a[100], n;
    
    cout << "Nhap so phan tu: ";
    cin >> n;
    
    nhapMang(a, n);
    xuatMang(a, n);
    
    int tong = tinhTong(a, n);
    cout << "Tong = " << tong << endl;
    
    return 0;
}
```

### Các Thao Tác Cơ Bản Trên Mảng 1 Chiều

#### 1. Tìm Kiếm Phần Tử

```cpp
// Tìm phần tử x trong mảng
int timKiem(int arr[], int n, int x) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == x) {
            return i;  // Trả về vị trí tìm thấy
        }
    }
    return -1;  // Không tìm thấy
}
```

#### 2. Tìm Giá Trị Lớn Nhất/Nhỏ Nhất

```cpp
// Tìm giá trị lớn nhất
int timMax(int arr[], int n) {
    int max = arr[0];
    for(int i = 1; i < n; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Tìm giá trị nhỏ nhất
int timMin(int arr[], int n) {
    int min = arr[0];
    for(int i = 1; i < n; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
```

#### 3. Đếm Số Lượng Phần Tử Thỏa Điều Kiện

```cpp
// Đếm số phần tử chẵn
int demChan(int arr[], int n) {
    int count = 0;
    for(int i = 0; i < n; i++) {
        if(arr[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}

// Đếm số phần tử dương
int demDuong(int arr[], int n) {
    int count = 0;
    for(int i = 0; i < n; i++) {
        if(arr[i] > 0) {
            count++;
        }
    }
    return count;
}
```

#### 4. Tính Tổng Các Phần Tử

```cpp
// Tổng tất cả phần tử
int tongMang(int arr[], int n) {
    int sum = 0;
    for(int i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}

// Tổng các phần tử chẵn
int tongChan(int arr[], int n) {
    int sum = 0;
    for(int i = 0; i < n; i++) {
        if(arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
```

#### 5. Kiểm Tra Tính Chất Mảng

```cpp
// Kiểm tra mảng có tăng dần không
bool kiemTraTangDan(int arr[], int n) {
    for(int i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

// Kiểm tra mảng có đối xứng không
bool kiemTraDoiXung(int arr[], int n) {
    for(int i = 0; i < n/2; i++) {
        if(arr[i] != arr[n-1-i]) {
            return false;
        }
    }
    return true;
}
```

#### 6. Sắp Xếp Mảng (Interchange Sort)

```cpp
// Sắp xếp tăng dần
void sapXepTang(int arr[], int n) {
    for(int i = 0; i < n - 1; i++) {
        for(int j = i + 1; j < n; j++) {
            if(arr[i] > arr[j]) {
                // Hoán đổi arr[i] và arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// Sắp xếp giảm dần
void sapXepGiam(int arr[], int n) {
    for(int i = 0; i < n - 1; i++) {
        for(int j = i + 1; j < n; j++) {
            if(arr[i] < arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
```

!!! note "Interchange Sort"
    - Duyệt qua tất cả các cặp phần tử
    - Hoán vị nếu không đúng thứ tự
    - Độ phức tạp: O(n²)

---

## Mảng Hai Chiều

### Khai Báo Mảng 2 Chiều

**Cú pháp:**
```cpp
<kiểu_dữ_liệu> <tên_mảng>[<số_dòng>][<số_cột>];
```

**Ví dụ:**
```cpp
int matrix[3][4];      // Ma trận 3 dòng, 4 cột
float table[2][5];     // Ma trận 2 dòng, 5 cột
char grid[10][20];     // Ma trận 10 dòng, 20 cột
```

### Khởi Tạo Mảng 2 Chiều

```cpp
// Khởi tạo đầy đủ
int A[2][3] = {
    {2, 45, 7},
    {73, 11, 187}
};

// Khởi tạo liên tiếp
int B[2][3] = {2, 45, 7, 73, 11, 187};

// Khởi tạo một phần
int C[2][3] = {
    {29, 5},
    {137, 32}
};  // Phần còn lại = 0
```

### Chỉ Số Mảng 2 Chiều

!!! important "Quy tắc"
    - Chỉ số dòng: từ 0 đến (số_dòng - 1)
    - Chỉ số cột: từ 0 đến (số_cột - 1)

**Sơ đồ:**
```
Ma trận A[2][3]:

        Cột 0   Cột 1   Cột 2
      ┌───────┬───────┬───────┐
Dòng 0│  2    │  45   │  7    │
      ├───────┼───────┼───────┤
Dòng 1│  73   │  11   │  187  │
      └───────┴───────┴───────┘
      A[0][0] A[0][1] A[0][2]
      A[1][0] A[1][1] A[1][2]
```

### Truy Xuất Phần Tử

**Cú pháp:**
```cpp
<tên_mảng>[<chỉ_số_dòng>][<chỉ_số_cột>]
```

**Ví dụ:**
```cpp
int A[2][3] = {
    {29, 137, 50},
    {3, 78, 943}
};

cout << A[0][0];  // 29
cout << A[0][2];  // 50
cout << A[1][1];  // 78

A[1][2] = 100;    // Gán giá trị mới
```

### Các Khái Niệm Liên Quan Ma Trận

#### Ma Trận Vuông

```cpp
// Ma trận 3x3
int A[3][3] = {
    {3, 7, 8},
    {6, 1, 4},
    {0, 9, 5}
};
```

#### Đường Chéo Chính

!!! note "Định nghĩa"
    Đường chéo chính gồm các phần tử có **chỉ số dòng = chỉ số cột**: A[i][i]

```cpp
// Các phần tử đường chéo chính: A[0][0], A[1][1], A[2][2]
// Với ma trận trên: {3, 1, 5}

// Duyệt đường chéo chính
for(int i = 0; i < n; i++) {
    cout << A[i][i] << " ";
}
```

#### Đường Chéo Phụ

!!! note "Định nghĩa"
    Đường chéo phụ gồm các phần tử có **i + j = n - 1**: A[i][n-1-i]

```cpp
// Các phần tử đường chéo phụ: A[0][2], A[1][1], A[2][0]
// Với ma trận trên: {8, 1, 0}

// Duyệt đường chéo phụ
for(int i = 0; i < n; i++) {
    cout << A[i][n-1-i] << " ";
}
```

#### Nửa Trên/Dưới Đường Chéo Chính

```cpp
// Nửa trên (bao gồm đường chéo chính): i <= j
for(int i = 0; i < n; i++) {
    for(int j = i; j < n; j++) {
        cout << A[i][j] << " ";
    }
}

// Nửa dưới (bao gồm đường chéo chính): i >= j
for(int i = 0; i < n; i++) {
    for(int j = 0; j <= i; j++) {
        cout << A[i][j] << " ";
    }
}
```

### Truyền Mảng 2 Chiều Cho Hàm

**Cú pháp:**
```cpp
void function_name(int arr[][MAX_COT], int dong, int cot);
```

!!! warning "Lưu ý"
    Phải chỉ định số cột khi truyền mảng 2 chiều vào hàm!

**Ví dụ:**
```cpp
#define MAXC 100

// Hàm nhập ma trận
void nhapMaTran(int A[][MAXC], int &m, int &n) {
    cout << "Nhap so dong, so cot: ";
    cin >> m >> n;
    
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            cout << "A[" << i << "][" << j << "] = ";
            cin >> A[i][j];
        }
    }
}

// Hàm xuất ma trận
void xuatMaTran(int A[][MAXC], int m, int n) {
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            cout << A[i][j] << " ";
        }
        cout << endl;
    }
}
```

### Các Thao Tác Cơ Bản Trên Mảng 2 Chiều

#### 1. Tìm Kiếm

```cpp
// Tìm phần tử x trong ma trận
bool timKiem(int A[][MAXC], int m, int n, int x) {
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            if(A[i][j] == x) {
                return true;
            }
        }
    }
    return false;
}
```

#### 2. Tìm Giá Trị Lớn Nhất/Nhỏ Nhất

```cpp
// Tìm max
int timMax(int A[][MAXC], int m, int n) {
    int max = A[0][0];
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            if(A[i][j] > max) {
                max = A[i][j];
            }
        }
    }
    return max;
}
```

#### 3. Tính Tổng

```cpp
// Tổng toàn ma trận
int tongMaTran(int A[][MAXC], int m, int n) {
    int sum = 0;
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            sum += A[i][j];
        }
    }
    return sum;
}

// Tổng đường chéo chính
int tongDuongCheoChinh(int A[][MAXC], int n) {
    int sum = 0;
    for(int i = 0; i < n; i++) {
        sum += A[i][i];
    }
    return sum;
}

// Tổng một dòng
int tongDong(int A[][MAXC], int n, int dong) {
    int sum = 0;
    for(int j = 0; j < n; j++) {
        sum += A[dong][j];
    }
    return sum;
}

// Tổng một cột
int tongCot(int A[][MAXC], int m, int cot) {
    int sum = 0;
    for(int i = 0; i < m; i++) {
        sum += A[i][cot];
    }
    return sum;
}
```

#### 4. Kiểm Tra Tính Chất

```cpp
// Kiểm tra ma trận đối xứng qua đường chéo chính
bool kiemTraDoiXung(int A[][MAXC], int n) {
    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {
            if(A[i][j] != A[j][i]) {
                return false;
            }
        }
    }
    return true;
}

// Kiểm tra ma trận đơn vị
bool kiemTraDonVi(int A[][MAXC], int n) {
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            if(i == j) {
                if(A[i][j] != 1) return false;
            } else {
                if(A[i][j] != 0) return false;
            }
        }
    }
    return true;
}
```

#### 5. Phép Toán Ma Trận

```cpp
// Cộng hai ma trận
void congMaTran(int A[][MAXC], int B[][MAXC], int C[][MAXC], int m, int n) {
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
}

// Nhân hai ma trận (A: m×p, B: p×n → C: m×n)
void nhanMaTran(int A[][MAXC], int B[][MAXC], int C[][MAXC], int m, int p, int n) {
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            C[i][j] = 0;
            for(int k = 0; k < p; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}

// Chuyển vị ma trận
void chuyenVi(int A[][MAXC], int B[][MAXC], int m, int n) {
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            B[j][i] = A[i][j];
        }
    }
}
```

---

## Chuỗi Ký Tự (String)

### Khái Niệm

!!! note "Định nghĩa"
    **Chuỗi ký tự** là một mảng các ký tự kết thúc bằng ký tự null `'\0'`

```cpp
char str[10] = "Hello";
// Thực tế trong bộ nhớ: {'H', 'e', 'l', 'l', 'o', '\0'}
```

**Đặc điểm:**
- Độ dài chuỗi = kích thước mảng - 1 (do ký tự `'\0'`)
- Tự động thêm `'\0'` khi khởi tạo bằng chuỗi

### Khai Báo và Khởi Tạo

```cpp
// Cách 1: Khai báo có kích thước
char name[30];

// Cách 2: Khởi tạo bằng chuỗi
char str1[10] = "THCS A";  // Tự động thêm '\0'

// Cách 3: Khởi tạo bằng mảng ký tự
char str2[10] = {'T', 'H', 'C', 'S', ' ', 'A', '\0'};

// Cách 4: Tự động xác định kích thước
char str3[] = "Hello";  // Kích thước = 6 (5 ký tự + '\0')
```

### Nhập Xuất Chuỗi

#### Sử Dụng gets/puts (C-style)

```cpp
#include <stdio.h>

char hoten[100];

// Nhập
gets(hoten);  // Đọc cả dòng (bao gồm khoảng trắng)

// Xuất
puts(hoten);  // Tự động xuống dòng
```

!!! warning "Lưu ý"
    - `gets()` không an toàn (deprecated trong C++11)
    - Nên dùng `fgets()` hoặc `cin.getline()`

#### Sử Dụng cin/cout (C++-style)

```cpp
#include <iostream>
using namespace std;

char str[100];

// Nhập (chỉ đọc đến khoảng trắng)
cin >> str;

// Nhập cả dòng
cin.getline(str, 100);

// Xuất
cout << str;
```

### Thư Viện `<string.h>`

#### Các Hàm Cơ Bản

```cpp
#include <string.h>

char s1[100] = "Hello";
char s2[100] = "World";
char s3[100];
```

**1. strlen() - Độ dài chuỗi**
```cpp
int len = strlen(s1);  // len = 5
```

**2. strcpy() - Sao chép chuỗi**
```cpp
strcpy(s3, s1);  // s3 = "Hello"
```

**3. strcat() - Nối chuỗi**
```cpp
strcat(s1, s2);  // s1 = "HelloWorld"
```

**4. strcmp() - So sánh chuỗi (phân biệt hoa/thường)**
```cpp
int result = strcmp(s1, s2);
// result < 0: s1 < s2
// result = 0: s1 = s2
// result > 0: s1 > s2
```

**5. stricmp() - So sánh không phân biệt hoa/thường**
```cpp
int result = stricmp("Hello", "HELLO");  // result = 0
```

**6. strupr() / strlwr() - Chuyển hoa/thường**
```cpp
strupr(s1);  // s1 = "HELLO"
strlwr(s1);  // s1 = "hello"
```

**7. strrev() - Đảo ngược**
```cpp
strrev(s1);  // s1 = "olleH"
```

**8. strstr() - Tìm chuỗi con**
```cpp
char *pos = strstr("Hello World", "World");
// pos trỏ đến vị trí bắt đầu của "World"
```

### Các Thao Tác Trên Chuỗi

#### 1. Đếm Ký Tự

```cpp
// Đếm khoảng trắng
int demKhoangTrang(char s[]) {
    int count = 0;
    for(int i = 0; i < strlen(s); i++) {
        if(s[i] == ' ') {
            count++;
        }
    }
    return count;
}

// Đếm chữ hoa
int demChuHoa(char s[]) {
    int count = 0;
    for(int i = 0; i < strlen(s); i++) {
        if(s[i] >= 'A' && s[i] <= 'Z') {
            count++;
        }
    }
    return count;
}

// Đếm chữ thường
int demChuThuong(char s[]) {
    int count = 0;
    for(int i = 0; i < strlen(s); i++) {
        if(s[i] >= 'a' && s[i] <= 'z') {
            count++;
        }
    }
    return count;
}
```

#### 2. Chuyển Đổi Hoa/Thường

```cpp
#include <ctype.h>

// Chuyển tất cả thành chữ hoa
void chuyenHoa(char s[]) {
    for(int i = 0; i < strlen(s); i++) {
        s[i] = toupper(s[i]);
    }
}

// Chuyển tất cả thành chữ thường
void chuyenThuong(char s[]) {
    for(int i = 0; i < strlen(s); i++) {
        s[i] = tolower(s[i]);
    }
}

// Viết hoa chữ cái đầu tiên
void vietHoaDau(char s[]) {
    s[0] = toupper(s[0]);
    for(int i = 1; i < strlen(s); i++) {
        s[i] = tolower(s[i]);
    }
}
```

#### 3. Xóa Khoảng Trắng

```cpp
// Xóa khoảng trắng đầu chuỗi
void xoaDau(char s[]) {
    while(s[0] == ' ') {
        for(int i = 0; i < strlen(s); i++) {
            s[i] = s[i + 1];
        }
    }
}

// Xóa khoảng trắng cuối chuỗi
void xoaCuoi(char s[]) {
    int len = strlen(s);
    while(len > 0 && s[len - 1] == ' ') {
        s[len - 1] = '\0';
        len--;
    }
}

// Xóa khoảng trắng thừa giữa các từ
void chuanHoa(char s[]) {
    xoaDau(s);
    xoaCuoi(s);
    
    // Xóa khoảng trắng thừa giữa các từ
    int i = 0;
    while(i < strlen(s)) {
        if(s[i] == ' ' && s[i+1] == ' ') {
            for(int j = i; j < strlen(s); j++) {
                s[j] = s[j + 1];
            }
        } else {
            i++;
        }
    }
}
```

#### 4. Tách Từ

```cpp
// Liệt kê các từ trong chuỗi
void lietKeTu(char s[]) {
    int batDau = 0;
    
    for(int i = 0; i <= strlen(s); i++) {
        if(s[i] == ' ' || s[i] == '\0') {
            // In từ từ batDau đến i-1
            for(int j = batDau; j < i; j++) {
                cout << s[j];
            }
            cout << endl;
            batDau = i + 1;
        }
    }
}
```

#### 5. Kiểm Tra Đối Xứng

```cpp
bool kiemTraDoiXung(char s[]) {
    int len = strlen(s);
    for(int i = 0; i < len/2; i++) {
        if(s[i] != s[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
```

### String Class (C++)

!!! tip "Cách hiện đại"
    C++ cung cấp class `string` tiện lợi hơn mảng ký tự

```cpp
#include <string>
using namespace std;

// Khai báo
string s1 = "Hello";
string s2 = "World";

// Nối chuỗi
string s3 = s1 + " " + s2;  // "Hello World"

// So sánh
if(s1 == s2) { }
if(s1 < s2) { }

// Độ dài
int len = s1.length();  // hoặc s1.size()

// Truy xuất ký tự
char c = s1[0];  // 'H'

// Chuỗi con
string sub = s1.substr(1, 3);  // "ell" (từ vị trí 1, lấy 3 ký tự)

// Tìm kiếm
int pos = s1.find("ll");  // Trả về vị trí, hoặc string::npos nếu không tìm thấy

// Nhập/xuất
cin >> s1;          // Đọc đến khoảng trắng
getline(cin, s1);   // Đọc cả dòng
cout << s1;
```

---

## Bài Tập Thực Hành

### Bài Tập Mảng 1 Chiều

!!! example "Bài 1"
    Viết chương trình nhập mảng tăng dần (kiểm tra điều kiện nhập). Liệt kê các số nguyên tố trong mảng.

!!! example "Bài 2"
    Kiểm tra mảng có đối xứng hay không?

!!! example "Bài 3"
    Liệt kê các giá trị xuất hiện đúng 1 lần trong mảng.

!!! example "Bài 4"
    Tìm vị trí của phần tử âm lớn nhất trong mảng.

!!! example "Bài 5"
    Xóa phần tử tại vị trí k. Trả về 0 nếu k không hợp lệ, 1 nếu xóa thành công.

### Bài Tập Mảng 2 Chiều

!!! example "Bài 1"
    Kiểm tra ma trận có đối xứng qua đường chéo chính không?

!!! example "Bài 2"
    Tìm giá trị nhỏ nhất/lớn nhất của ma trận và vị trí của chúng.

!!! example "Bài 3"
    Tính tổng các phần tử nửa trên/nửa dưới đường chéo chính.

!!! example "Bài 4"
    Cộng/nhân hai ma trận.

!!! example "Bài 5"
    Kiểm tra ma trận có phải ma trận đơn vị không?

### Bài Tập Chuỗi Ký Tự

!!! example "Bài 1"
    Xuất các ký tự in hoa trong chuỗi.

!!! example "Bài 2"
    Đảo ngược chuỗi.

!!! example "Bài 3"
    Đổi chữ xen kẽ: 1 chữ hoa, 1 chữ thường.

!!! example "Bài 4"
    Đếm một ký tự xuất hiện bao nhiêu lần.

!!! example "Bài 5"
    Tìm ký tự xuất hiện nhiều nhất.

!!! example "Bài 6"
    Nhập một từ và xóa từ đó khỏi chuỗi.

---

## Tổng Kết

!!! summary "Điểm Chính"
    **Mảng 1 Chiều:**
    - Lưu trữ nhiều giá trị cùng kiểu
    - Chỉ số từ 0 đến n-1
    - Truyền vào hàm theo tham chiếu
    
    **Mảng 2 Chiều:**
    - Ma trận dòng × cột
    - Phải chỉ định số cột khi truyền vào hàm
    - Các khái niệm: đường chéo chính, phụ, nửa trên/dưới
    
    **Chuỗi Ký Tự:**
    - Mảng ký tự kết thúc bằng '\0'
    - Thư viện `<string.h>` cho C-style string
    - Class `string` cho C++ hiện đại
    - Nhiều hàm xử lý chuỗi hữu ích

