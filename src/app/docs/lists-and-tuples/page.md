---
title: 列表（list）与元组（tuple）
nextjs:
  metadata:
    title: 列表（list）与元组（tuple）
    description: 在Python中，列表和元组是两种重要的数据结构，用于存储有序的数据集合。虽然它们在很多方面相似，但也有一些关键的区别。本篇对列表和元组进行了详细的讲解，包括定义、操作、方法和用法示例。
---

在Python中，列表和元组是两种重要的数据结构，用于存储有序的数据集合。虽然它们在很多方面相似，但也有一些关键的区别。本篇对列表和元组进行了详细的讲解，包括定义、操作、方法和用法示例。

## 列表（list）

列表是可变的有序集合，允许在其中存储任意类型的元素。列表使用方括号`[]`定义，并且可以动态地添加、删除或修改元素。

### 列表的定义和创建

**示例：**

```python
# 创建空列表
empty_list = []

# 创建带有初始值的列表
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "Hello", 3.14, True]
nested_list = [[1, 2, 3], [4, 5, 6]]
```

### 访问和修改列表元素

可以使用索引访问列表中的元素，索引从0开始。可以使用切片访问子列表。

**示例：**

```python
numbers = [1, 2, 3, 4, 5]

# 访问元素
first_element = numbers[0]
print(first_element)  # 输出: 1

# 修改元素
numbers[0] = 10
print(numbers)  # 输出: [10, 2, 3, 4, 5]

# 切片访问子列表
sub_list = numbers[1:3]
print(sub_list)  # 输出: [2, 3]
```

### 列表的方法

列表提供了许多内置方法，用于执行各种操作。

**示例：**

```python
numbers = [1, 2, 3, 4, 5]

# append() - 添加元素到列表末尾
numbers.append(6)
print(numbers)  # 输出: [1, 2, 3, 4, 5, 6]

# insert() - 在指定位置插入元素
numbers.insert(2, 10)
print(numbers)  # 输出: [1, 2, 10, 3, 4, 5, 6]

# remove() - 移除指定元素
numbers.remove(10)
print(numbers)  # 输出: [1, 2, 3, 4, 5, 6]

# pop() - 移除并返回指定位置的元素
popped_element = numbers.pop(3)
print(popped_element)  # 输出: 4
print(numbers)  # 输出: [1, 2, 3, 5, 6]

# index() - 返回指定元素的索引
index_of_five = numbers.index(5)
print(index_of_five)  # 输出: 3

# count() - 返回指定元素的个数
count_of_two = numbers.count(2)
print(count_of_two)  # 输出: 1

# sort() - 排序列表
numbers.sort()
print(numbers)  # 输出: [1, 2, 3, 5, 6]

# reverse() - 反转列表
numbers.reverse()
print(numbers)  # 输出: [6, 5, 3, 2, 1]

# copy() - 返回列表的浅拷贝
numbers_copy = numbers.copy()
print(numbers_copy)  # 输出: [6, 5, 3, 2, 1]

# clear() - 清空列表
numbers.clear()
print(numbers)  # 输出: []
```

### 列表的其他操作

**示例：**

```python
# 列表连接
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined_list = list1 + list2
print(combined_list)  # 输出: [1, 2, 3, 4, 5, 6]

# 列表重复
repeated_list = list1 * 2
print(repeated_list)  # 输出: [1, 2, 3, 1, 2, 3]

# 检查元素是否在列表中
is_in_list = 2 in list1
print(is_in_list)  # 输出: True

# 列表推导式
squared_numbers = [x**2 for x in list1]
print(squared_numbers)  # 输出: [1, 4, 9]
```

---

## 元组（tuple）

元组是另一种有序的数据集合，与列表类似，但元组是不可变的，一旦创建便不能修改。元组使用圆括号`()`定义，并且只能通过索引访问元素。元组适用于存储不需要更改的数据。

### 元组的定义和创建

**示例：**

```python
# 创建空元组
empty_tuple = ()

# 创建带有初始值的元组
numbers = (1, 2, 3, 4, 5)
mixed_tuple = (1, "Hello", 3.14, True)
nested_tuple = ((1, 2, 3), (4, 5, 6))
```

### 访问元组元素

可以使用索引访问元组中的元素，索引从0开始。可以使用切片访问子元组。

**示例：**

```python
numbers = (1, 2, 3, 4, 5)

# 访问元素
first_element = numbers[0]
print(first_element)  # 输出: 1

# 切片访问子元组
sub_tuple = numbers[1:3]
print(sub_tuple)  # 输出: (2, 3)
```

### 元组的操作

虽然元组是不可变的，但可以进行一些基本操作。

**示例：**

```python
numbers = (1, 2, 3, 4, 5)

# 元组连接
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined_tuple = tuple1 + tuple2
print(combined_tuple)  # 输出: (1, 2, 3, 4, 5, 6)

# 元组重复
repeated_tuple = tuple1 * 2
print(repeated_tuple)  # 输出: (1, 2, 3, 1, 2, 3)

# 检查元素是否在元组中
is_in_tuple = 2 in tuple1
print(is_in_tuple)  # 输出: True

# 元组解包
a, b, c = tuple1
print(a, b, c)  # 输出: 1 2 3
```

### 元组的方法

元组的方法较少，因为元组是不可变的。

- `count()` 方法用于返回元组中指定元素的出现次数。
- `index()` 方法用于返回指定元素在元组中第一次出现的位置（索引）。如果元素不存在，会引发 `ValueError`。

**示例：**

```python
numbers = (1, 2, 3, 4, 5)

# index() - 返回指定元素的索引
index_of_three = numbers.index(3)
print(index_of_three)  # 输出: 2

# count() - 返回指定元素的个数
count_of_two = numbers.count(2)
print(count_of_two)  # 输出: 1
```

### 元组的其他操作

虽然元组没有列表那样丰富的内置方法，但它们仍然支持许多常见操作：

#### 访问元素

通过索引访问元组中的元素，索引从0开始。

**示例：**

```python
numbers = (1, 2, 3, 4, 5)
first_element = numbers[0]
print(first_element)  # 输出: 1
```

#### 切片访问子元组

使用切片操作符`[:]`可以访问元组中的子元组。

**示例：**

```python
numbers = (1, 2, 3, 4, 5)
sub_tuple = numbers[1:4]
print(sub_tuple)  # 输出: (2, 3, 4)
```

#### 解包

将元组的元素解包到变量中。

**示例：**

```python
numbers = (1, 2, 3)
a, b, c = numbers
print(a, b, c)  # 输出: 1 2 3
```

#### 元组连接

使用`+`操作符可以将两个元组连接起来。

**示例：**

```python
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined_tuple = tuple1 + tuple2
print(combined_tuple)  # 输出: (1, 2, 3, 4, 5, 6)
```

#### 元组重复

使用`*`操作符可以将元组重复指定的次数。

**示例：**

```python
tuple1 = (1, 2, 3)
repeated_tuple = tuple1 * 2
print(repeated_tuple)  # 输出: (1, 2, 3, 1, 2, 3)
```

#### 检查元素是否在元组中

使用`in`操作符可以检查元素是否在元组中。

**示例：**

```python
tuple1 = (1, 2, 3)
is_in_tuple = 2 in tuple1
print(is_in_tuple)  # 输出: True
```

#### 获取元组长度

使用内置函数 `len()` 获取元组的长度。

**示例：**

```python
tuple1 = (1, 2, 3)
length = len(tuple1)
print(length)  # 输出: 3
```

虽然元组的方法比列表少，但它们提供了足够的功能来支持常见的操作。元组的不可变特性使其在需要保护数据不被修改时非常有用。因此，元组确实有一些内置方法，主要包括 `count()` 和 `index()`，此外还支持各种操作符和内置函数。