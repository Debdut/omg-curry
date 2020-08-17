function fixed (f) {
  const me = this
  return function next (...a) {
    if (a.length < f.length) {
      return function (...b) {
        return next(...a, ...b)
      }
    }
    return f.call(me, ...a)
  }
}

export default fixed
