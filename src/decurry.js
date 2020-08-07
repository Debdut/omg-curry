function deCurry(curry) {
  return function (...args) {
    let f = curry
    for (let i = 0; i < args.length; i++) {
      const arg = args[i]
      f = f(arg)
    }
    return f
  }
}

export default deCurry