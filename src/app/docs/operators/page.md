---
title: 运算符
nextjs:
  metadata:
    title: 运算符
    description: 运算符是编程语言中用于执行各种操作的符号或关键字。在Python中，运算符可以用于算术运算、比较、逻辑运算、赋值和位操作。以下是Python中常见运算符的详细介绍和示例。
---

运算符是编程语言中用于执行各种操作的符号或关键字。在Python中，运算符可以用于算术运算、比较、逻辑运算、赋值和位操作。以下是Python中常见运算符的详细介绍和示例。

## 算术运算符

算术运算符用于执行基本的数学运算，如加法、减法、乘法、除法等。

**示例：**

```python
# 加法
result = 5 + 3
print(result)  # 输出: 8

# 减法
result = 5 - 3
print(result)  # 输出: 2

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

---

## 比较运算符

比较运算符用于比较两个值，并返回一个布尔值（True 或 False）结果。

**示例：**

```python
# 等于
result = (5 == 3)
print(result)  # 输出: False

# 不等于
result = (5 != 3)
print(result)  # 输出: True

# 大于
result = (5 > 3)
print(result)  # 输出: True

# 小于
result = (5 < 3)
print(result)  # 输出: False

# 大于等于
result = (5 >= 3)
print(result)  # 输出: True

# 小于等于
result = (5 <= 3)
print(result)  # 输出: False
```

---

## 逻辑运算符

逻辑运算符用于布尔值之间的运算和执行逻辑操作，如与、或、非等。

**示例：**

```python
# 与（and）
result = (True and False)
print(result)  # 输出: False

# 或（or）
result = (True or False)
print(result)  # 输出: True

# 非（not）
result = not True
print(result)  # 输出: False
```

---

## 赋值运算符

赋值运算符用于将右侧的值赋给左侧的变量。

**示例：**

```python
# 基本赋值
x = 5
print(x)  # 输出: 5

# 加法赋值
x += 3  # 等价于 x = x + 3
print(x)  # 输出: 8

# 减法赋值
x -= 2  # 等价于 x = x - 2
print(x)  # 输出: 6

# 乘法赋值
x *= 2  # 等价于 x = x * 2
print(x)  # 输出: 12

# 除法赋值
x /= 4  # 等价于 x = x / 4
print(x)  # 输出: 3.0

# 整除赋值
x //= 2  # 等价于 x = x // 2
print(x)  # 输出: 1.0

# 取余赋值
x %= 2  # 等价于 x = x % 2
print(x)  # 输出: 1.0

# 幂赋值
x **= 3  # 等价于 x = x ** 3
print(x)  # 输出: 1.0
```

---

## 位运算符

位运算符用于对二进制位运算操作，如按位与、按位或、按位异或等。

**示例：**

```python
# 按位与（&）
result = 5 & 3  # 5: 0101, 3: 0011 -> 0001
print(result)  # 输出: 1

# 按位或（|）
result = 5 | 3  # 5: 0101, 3: 0011 -> 0111
print(result)  # 输出: 7

# 按位非（~）
result = ~5  # 5: 0101 -> 1010 (在有符号整数中，~5 == -(5+1) = -6)
print(result)  # 输出: -6

# 按位异或（^）
result = 5 ^ 3  # 5: 0101, 3: 0011 -> 0110
print(result)  # 输出: 6

# 左移（<<）
result = 5 << 1  # 5: 0101 -> 1010 (左移1位，相当于乘以2)
print(result)  # 输出: 10

# 右移（>>）
result = 5 >> 1  # 5: 0101 -> 0010 (右移1位，相当于除以2)
print(result)  # 输出: 2
```

---

## 身份运算符

身份运算符用于比较两个对象的内存地址，即判断两个对象是否为同一对象。

**示例：**

```python
x = [1, 2, 3]
y = x
z = [1, 2, 3]

# is 运算符
print(x is y)  # 输出: True
print(x is z)  # 输出: False

# is not 运算符
print(x is not z)  # 输出: True
```

---

## 成员运算符

成员运算符用于判断一个对象是否属于另一个对象，即判断一个对象是否为另一个对象的成员。换句话来讲，成员运算符用于检查一个值是否在序列中。

**示例：**

```python
x = [1, 2, 3]

# in 运算符
print(1 in x)  # 输出: True
print(4 in x)  # 输出: False

# not in 运算符
print(4 not in x)  # 输出: True
print(1 not in x)  # 输出: False
```

---

## 运算符优先级

运算符优先级决定了在表达式中各个运算符的执行顺序。了解运算符优先级有助于避免编程错误和提高代码的可读性。以下是Python中运算符的优先级列表，从最高到最低：

### 1. 括号 `()`

括号具有最高的优先级，可以改变运算的执行顺序。

**示例：**

```python
result = (2 + 3) * 4  # 输出: 20
result = 2 + (3 * 4)  # 输出: 14
```

### 2. 指数 `**`

指数运算符用于幂运算。

**示例：**

```python
result = 2 ** 3  # 输出: 8
```

### 3. 按位取反 `~`，正负号 `+`，`-`

这些运算符的优先级高于乘除法。

**示例：**

```python
result = -5  # 输出: -5
result = +5  # 输出: 5
result = ~5  # 输出: -6
```

### 4. 乘、除、取余、整除 `*`，`/`，`%`，`//`

这些运算符用于基本的算术运算。

**示例：**

```python
result = 10 / 2  # 输出: 5.0
result = 10 * 2  # 输出: 20
result = 10 % 3  # 输出: 1
result = 10 // 3 # 输出: 3
```

### 5. 加减 `+`，`-`

加法和减法运算符。

**示例：**

```python
result = 10 + 5  # 输出: 15
result = 10 - 5  # 输出: 5
```

### 6. 按位移位 `<<`，`>>`

这些运算符用于二进制位的左移和右移。

**示例：**

```python
result = 1 << 2  # 输出: 4
result = 8 >> 2  # 输出: 2
```

### 7. 按位与 `&`

按位与运算符。

**示例：**

```python
result = 5 & 3  # 输出: 1
```

### 8. 按位异或 `^`

按位异或运算符。

**示例：**

```python
result = 5 ^ 3  # 输出: 6
```

### 9. 按位或 `|`

按位或运算符。

**示例：**

```python
result = 5 | 3  # 输出: 7
```

### 10. 比较运算符 `==`，`!=`，`>`，`<`，`>=`，`<=`，`is`，`is not`，`in`，`not in`

这些运算符用于比较两个值或检查成员资格。

**示例：**

```python
result = 5 == 5  # 输出: True
result = 5 != 3  # 输出: True
result = 5 > 3   # 输出: True
result = 5 < 3   # 输出: False
result = 5 >= 5  # 输出: True
result = 5 <= 3  # 输出: False
result = 5 is 5  # 输出: True
result = 5 is not 3  # 输出: True
result = 5 in [1, 2, 3, 5]  # 输出: True
result = 5 not in [1, 2, 3] # 输出: True
```

### 11. 逻辑非 `not`

逻辑非运算符。

**示例：**

```python
result = not True  # 输出: False
```

### 12. 逻辑与 `and`

逻辑与运算符。

**示例：**

```python
result = True and False  # 输出: False
```

### 13. 逻辑或 `or`

逻辑或运算符。

**示例：**

```python
result = True or False  # 输出: True
```

### 14. 赋值运算符 `=`，`+=`，`-=`，`*=`，`/=`，`%=`，`//=`，`**=`，`&=`，`|=`，`^=`，`>>=`，`<<=`

赋值运算符用于将右侧的值赋给左侧的变量，并支持复合赋值。

**示例：**

```python
x = 5
x += 3  # 等价于 x = x + 3
print(x)  # 输出: 8

x -= 2  # 等价于 x = x - 2
print(x)  # 输出: 6

x *= 2  # 等价于 x = x * 2
print(x)  # 输出: 12

x /= 4  # 等价于 x = x / 4
print(x)  # 输出: 3.0

x //= 2  # 等价于 x = x // 2
print(x)  # 输出: 1.0

x %= 2  # 等价于 x = x % 2
print(x)  # 输出: 1.0

x **= 3  # 等价于 x = x ** 3
print(x)  # 输出: 1.0

x &= 2  # 等价于 x = x & 2
print(x)  # 输出: 0

x |= 2  # 等价于 x = x | 2
print(x)  # 输出: 2

x ^= 2  # 等价于 x = x ^ 2
print(x)  # 输出: 0

x >>= 1  # 等价于 x = x >> 1
print(x)  # 输出: 0

x <<= 1  # 等价于 x = x << 1
print(x)  # 输出: 0
```

### 16. 条件表达式 `if` else

条件表达式（也称为三元运算符）用于在单行中执行条件语句。

**示例：**

```python
result = "Yes" if 5 > 3 else "No"
print(result)  # 输出: Yes
```

通过理解运算符的优先级，你可以编写出更加清晰和高效的代码，避免因优先级问题导致的逻辑错误。通常可以使用括号来明确表达式的执行顺序，提升代码的可读性。
