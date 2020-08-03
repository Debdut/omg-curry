function fixed (f) {
  let args = []
  return function next (a) {
    args.push(a)
    if (args.length < f.length) {
      return function (b) {
        return next(b)
      }
    }
    return f(...args)
  }
}

module.exports = fixed