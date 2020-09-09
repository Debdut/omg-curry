# omg-curry

[![Generic badge](https://img.shields.io/badge/build-success-brightgreen.svg)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/tests-100%25-brightgreen.svg)](https://shields.io/) 

[![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fshields.io)](https://ctt.ac/MabC3)
[![Twitter](https://img.shields.io/twitter/follow/KarmakarDebdut?label=Follow)](https://ctt.ac/MabC3)

> _Feature Complete Curry Library_

![Logo](/assets/logo.png)

## Features

- Fixed Functions ⟶ Curry
- Operators ⟶ Curry
- Curry ⟶ Fixed Functions
- Infinite Currying
- Lazy Curry

## Installation

```sh
npm install omg-curry
```

## Usage

```js
const curry = require('omg-curry')
```

### Fixed Functions
Convert a function into curry

```js
function map (fn, default, list) {}

const mapK = curry.fixed(map)
const square = a => a**2

mapK(square)(0)([1, 2, 3, 4, null])
// [1, 4, 9, 16, 0]

// or reuse

const mapSquare = mapK(square)(0)
mapSquare([1, 2, 3, 4, null])
// [1, 4, 9, 16, 0]
```

### Operators

Create N-length Curry from an operator

```js
const add = (a, b) => a+b
const add4 = curry.op(add, 4)

add4(1)(3)(5)(10)
add4(1)(3,5)(10)
add4(1,3,5,10)
// 19

const addInfty = curry.op(add, Infinity)

// () to end
addInfty(1)(1)(1,1)(1)(1)()
// 6

const add4Lazy = curry.op(add, 4, true)
// same as add4 buts evaluates at the end
```

```js
const altSum = (a, b, i) => a + (-1)**i * b
const altSum5 = curry.op(altSum, 5)
// (a, b, c, d, e) => a - b + c - d + e

altSum5(1)(2)(3)(4,5)
// 1 - 2 + 3 - 4 + 5
// 3
```

### DeCurry

Convert Curry to Fixed Functions

```js
const add4Fixed = curry.deCurry(add4Curry)
```

## WTF is Curry?

A Curry takes arguments one by one unlike functions which takes all arguments at once.

```js
// Function
add(1, 2, 3)
// 6

// Curry
add(1)(2)(3)
// 6
```

## Support

- Browser
- Node
