---
title: 字符串（str）操作
nextjs:
  metadata:
    title: 字符串（str）操作
    description: 字符串是Python中最常用的数据类型之一，它是不可变的字符序列。Python提供了丰富的字符串操作方法。
---

字符串是Python中最常用的数据类型之一，它是不可变的字符序列。Python提供了丰富的字符串操作方法，以下是对字符串操作的详细讲解。

## 字符串的定义和使用

字符串可以使用单引号（`'`）、双引号（`"`）或三重引号（`'''` 或 `"""`）定义。三重引号可以用于定义多行字符串。

**示例：**

```python
# 使用单引号
str1 = 'Hello, World!'

# 使用双引号
str2 = "Hello, World!"

# 使用三重引号定义多行字符串
str3 = """This is a
multi-line
string."""
```

---

## 字符串操作

### 连接

使用加号（`+`）可以连接两个或多个字符串。

**示例：**

```python
str1 = 'Hello'
str2 = 'World'
result = str1 + ', ' + str2 + '!'
print(result)  # 输出: Hello, World!
```

### 重复

使用乘号（`*`）可以重复字符串。

**示例：**

```python
str1 = 'Hello'
result = str1 * 3
print(result)  # 输出: HelloHelloHello
```

### 切片和索引

通过索引可以访问字符串中的单个字符，通过切片可以访问字符串的子字符串。索引从0开始，负数索引从字符串末尾开始。

**示例：**

```python
str1 = 'Hello, World!'

# 访问单个字符
char = str1[0]
print(char)  # 输出: H

# 负数索引
char = str1[-1]
print(char)  # 输出: !

# 切片
substring = str1[0:5]
print(substring)  # 输出: Hello

# 省略开始和结束索引
substring = str1[:5]
print(substring)  # 输出: Hello

substring = str1[7:]
print(substring)  # 输出: World!

# 负数切片
substring = str1[-6:]
print(substring)  # 输出: World!
```

### 字符串长度

使用内置函数`len()`可以获取字符串的长度。

**示例：**

```python
str1 = 'Hello, World!'
length = len(str1)
print(length)  # 输出: 13
```

---

## 字符串方法

Python提供了许多内置的字符串方法，用于执行各种常见操作。

### 大小写转换

- `str.lower()`：将字符串转换为小写。
- `str.upper()`：将字符串转换为大写。
- `str.capitalize()`：将字符串的第一个字符转换为大写。
- `str.title()`：将字符串中的每个单词的首字母转换为大写。

**示例：**

```python
str1 = 'hello, world!'

lowercase = str1.lower()
print(lowercase)  # 输出: hello, world!

uppercase = str1.upper()
print(uppercase)  # 输出: HELLO, WORLD!

capitalized = str1.capitalize()
print(capitalized)  # 输出: Hello, world!

title_case = str1.title()
print(title_case)  # 输出: Hello, World!
```

### 去除空白

- `str.strip()`：去除字符串两端的空白字符。
- `str.lstrip()`：去除字符串左侧的空白字符。
- `str.rstrip()`：去除字符串右侧的空白字符。

**示例：**

```python
str1 = '   Hello, World!   '

stripped = str1.strip()
print(stripped)  # 输出: Hello, World!

left_stripped = str1.lstrip()
print(left_stripped)  # 输出: Hello, World!   

right_stripped = str1.rstrip()
print(right_stripped)  # 输出:    Hello, World!
```

### 查找和替换

- `str.find(sub)`：返回子字符串`sub`在字符串中首次出现的位置，如果没有找到返回-1。
- `str.rfind(sub)`：返回子字符串`sub`在字符串中最后一次出现的位置，如果没有找到返回-1。
- `str.replace(old, new)`：将字符串中的所有`old`子字符串替换为`new`子字符串。

**示例：**

```python
str1 = 'Hello, World!'

position = str1.find('World')
print(position)  # 输出: 7

position = str1.rfind('o')
print(position)  # 输出: 8

replaced = str1.replace('World', 'Python')
print(replaced)  # 输出: Hello, Python!
```

### 分割和连接

- `str.split(separator)`：使用指定的分隔符将字符串分割成列表。
- `separator.join(list)`：使用指定的分隔符将列表连接成字符串。

**示例：**

```python
str1 = 'Hello, World!'

# 分割字符串
words = str1.split(', ')
print(words)  # 输出: ['Hello', 'World!']

# 连接字符串
separator = ', '
joined = separator.join(words)
print(joined)  # 输出: Hello, World!
```

### 判断字符串内容

- `str.startswith(prefix)`：判断字符串是否以指定前缀开头。
- `str.endswith(suffix)`：判断字符串是否以指定后缀结尾。
- `str.isalpha()`：判断字符串是否只包含字母。
- `str.isdigit()`：判断字符串是否只包含数字。
- `str.isalnum()`：判断字符串是否只包含字母和数字。

**示例：**

```python
str1 = 'Hello, World!'
str2 = '12345'
str3 = 'Hello123'

print(str1.startswith('Hello'))  # 输出: True
print(str1.endswith('World!'))   # 输出: True

print(str1.isalpha())  # 输出: False
print(str2.isdigit())  # 输出: True
print(str3.isalnum())  # 输出: True
```

---

## 格式化字符串

### 使用百分号（%）

**示例：**

```python
name = 'Alice'
age = 30
result = 'My name is %s and I am %d years old.' % (name, age)
print(result)  # 输出: My name is Alice and I am 30 years old.
```

### 使用`str.format()`

**示例：**

```python
name = 'Alice'
age = 30
result = 'My name is {} and I am {} years old.'.format(name, age)
print(result)  # 输出: My name is Alice and I am 30 years old.
```

### 使用f-string（Python 3.6+）

**示例：**

```python
name = 'Alice'
age = 30
result = f'My name is {name} and I am {age} years old.'
print(result)  # 输出: My name is Alice and I am 30 years old.
```

通过掌握这些字符串操作方法，你可以高效地处理和操作字符串，为编写复杂的文本处理程序打下坚实的基础。
