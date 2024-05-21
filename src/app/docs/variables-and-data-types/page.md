---
title: 变量与数据类型
nextjs:
  metadata:
    title: 变量与数据类型 - DabPython
    description: 变量和数据类型是Python编程的基础，掌握它们是写好Python代码的第一步。本篇将详细讲解变量的定义和使用，以及Python中常见的数据类型及其操作。
---

变量和数据类型是Python编程的基础，掌握它们是写好Python代码的第一步。本篇将详细讲解变量的定义和使用，以及Python中常见的数据类型及其操作。

---

## 变量的定义和使用

### 变量命名规则

在Python中，变量名必须遵循以下规则：

- 变量名只能包含字母（a-z, A-Z）、数字（0-9）和下划线（_）。
- 变量名必须以字母或下划线开头。
- 变量名区分大小写（age 和 Age 是两个不同的变量）。
- 变量名不能是Python的关键字（如`if`, `else`, `for`等）。

**示例：**

```python
# 有效的变量名
age = 25
_name = "Alice"
height_in_cm = 170

# 无效的变量名（将导致语法错误）
2nd_place = "second"
my-name = "Bob"
class = "Physics"  # class 是关键字
```

### 变量赋值和重新赋值

在Python中，变量赋值使用等号（=）进行。变量可以随时重新赋值。

**示例：**

```python
# 变量赋值
x = 10
y = "Hello"
z = 3.14

# 重新赋值
x = 20
y = "World"
z = z + 1.0  # z 现在是 4.14
```

### 多变量赋值

Python支持在一行中同时为多个变量赋值。

**示例：**

```python
a, b, c = 1, 2, 3
x = y = z = 0  # 多个变量赋相同的值
```

---

## 数据类型

Python提供了多种内置数据类型，常见的包括：整数（int）、浮点数（float）、字符串（str）、列表（list）、元组（tuple）、字典（dict）。

### 数字类型

#### 整数 int

表示没有小数部分的数字。

**示例：**

```python
x = 10  # 十进制
y = 0b1010  # 二进制
z = 0o12  # 八进制
age = 25
count = -10
```

#### 浮点数 float

表示带有小数部分的数字。

**示例：**

```python
x = 3.14
y = 2.718281828459045
price = 19.99
temperature = -5.75
```

#### 复数 complex

表示实数和虚数的组合。

**示例：**

```python
complex_number = 1 + 2j
y = 3.14j
```

### 字符串 str

字符串是由字符组成的序列，用于表示文本数据。可以使用单引号（'）或双引号（"）定义字符串。

**示例：**

```python
greeting = "Hello, World!"
name = 'DabAZ'
x = """I am a multi-line
string."""
```

字符串可以通过索引和切片操作访问。

**示例：**

```python
x = "Hello, World!"

# 索引操作
print(x[0])  # 输出 "H"
print(x[7])  # 输出 "W"

# 切片操作
print(x[7:13])  # 输出 "World"
print(x[0:5])  # 输出 "Hello"
substring = x[7:]
print (substring) # 输出 "World!"
```

### 布尔值 bool

布尔值表示逻辑上的真（True）和假（False）。

**示例：**

```python
is_active = True
has_permission = False
```

布尔值常用于条件语句和循环控制。

### 列表 list

列表是一种有序的集合，可以包含不同类型的元素。列表用方括号（[]）表示，元素之间用逗号分隔。

**示例：**

```python
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]
mixed_list = [1, "Hello", 3.14, True]
```

### 元组 tuple

元组是有序的不可变序列。使用小括号 () 定义元组，元素之间用逗号分隔。

**示例：**

```python
coordinates = (10, 20)
person = ("Alice", 30, "Engineer")
```

元组通常用于存储一组相关的数据，并且一旦创建就不能被修改。

### 字典 dict

字典是无序的键值对集合。使用大括号（{}）定义字典，键值对之间用冒号分隔。

**示例：**

```python
student = {"name": "Alice", "age": 25, "grade": "A"}
```

### 集合 set

集合是一种无序且不重复的元素集合。使用大括号（{}）定义集合，元素之间用逗号分隔。

**示例：**

```python
fruits = {"apple", "banana", "cherry"}
unique_numbers = {1, 2, 3, 4, 5}
```

集合通常用于存储一组不重复的元素，并且不支持索引和切片操作。

---

## 数据类型的转换

### 显式转换

显式转换是通过使用Python内置的转换函数将一种数据类型转换为另一种数据类型。

**示例：**

```python
# 转换为整数
int_value = int(3.14)  # 3

# 转换为浮点数
float_value = float(5)  # 5.0

# 转换为字符串
str_value = str(123)  # "123"

# 转换为布尔值
bool_value = bool(1)  # True
```

### 隐式转换

隐式转换是Python自动进行的数据类型转换，通常发生在算术运算和比较运算中。

**示例：**

```python
result = 1 + 2.0  # 结果为 3.0，整数 1 被隐式转换为浮点数 1.0
```

---

## 数据类型的操作

Python提供了丰富的数据类型和相应的操作符，允许我们对不同类型的数据进行各种计算和操作。以下是Python中常见数据类型的计算方法和示例。

### 数字类型计算

**整数（int）和浮点数（float）**

Python支持对整数（int）和浮点数（float）进行各种算术运算。

**示例：**

```python
# 加法
result = 5 + 3
print(result)  # 输出: 8

# 减法
result = 5.0 - 3
print(result)  # 输出: 2.0

# 乘法
result = 5 * 3
print(result)  # 输出: 15

# 除法
result = 5 / 3
print(result)  # 输出: 1.6666666666666667

# 整除
result = 5 // 3
print(result)  # 输出: 1

# 取余
result = 5 % 3
print(result)  # 输出: 2

# 幂运算
result = 5 ** 3
print(result)  # 输出: 125
```

**复数（complex）**

Python支持复数（complex）运算，复数由实部和虚部组成，用`j`或`J`表示虚部。

**示例：**

```python
# 复数加法
result = (2 + 3j) + (1 + 2j)
print(result)  # 输出: (3+5j)

# 复数减法
result = (2 + 3j) - (1 + 2j)
print(result)  # 输出: (1+1j)

# 复数乘法
result = (2 + 3j) * (1 + 2j)
print(result)  # 输出: (-4+7j)

# 复数除法
result = (2 + 3j) / (1 + 2j)
print(result)  # 输出: (1.6-0.2j)
```

### 字符串（str）操作

字符串（str）是不可变序列，可以进行连接、重复、切片等操作。

**示例：**

```python
# 字符串连接
str1 = "Hello"
str2 = "World"
result = str1 + " " + str2
print(result)  # 输出: Hello World

# 字符串重复
result = str1 * 3
print(result)  # 输出: HelloHelloHello

# 字符串切片
result = str1[1:4]
print(result)  # 输出: ell

# 字符串长度
result = len(str1)
print(result)  # 输出: 5

# 字符串格式化
name = "Alice"
age = 30
result = f"My name is {name} and I am {age} years old."
print(result)  # 输出: My name is Alice and I am 30 years old.
```

### 列表（list）操作

列表（list）是可变序列，可以包含不同类型的元素。支持索引、切片、连接、重复等操作。

**示例：**

```python
# 列表连接
list1 = [1, 2, 3]
list2 = [4, 5, 6]
result = list1 + list2
print(result)  # 输出: [1, 2, 3, 4, 5, 6]

# 列表重复
result = list1 * 2
print(result)  # 输出: [1, 2, 3, 1, 2, 3]

# 列表切片
result = list1[1:3]
print(result)  # 输出: [2, 3]

# 列表元素修改
list1[0] = 10
print(list1)  # 输出: [10, 2, 3]

# 列表长度
result = len(list1)
print(result)  # 输出: 3
```

通过掌握变量的定义和使用，以及Python中常见的数据类型和类型转换，你将能够编写功能强大且灵活的Python代码，为更高级的编程概念打下坚实基础。
