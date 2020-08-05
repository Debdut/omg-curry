function fixed (f) {
  return function next (...a) {
    if (a.length < f.length) {
      return function (...b) {
        return next(...a, ...b)
      }
    }
    return f(...a)
  }
}

export default fixed