if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    var i,
        extraArgs = [],
        fn = this

    for (i = 1; i < arguments.length; i++) {
      extraArgs.push(arguments[i])
    }

    var bound = function() {
      return fn.apply(
        (!this ||  this === (window || global)) ? obj : this,
        extraArgs.concat(arguments)
      )
    }

    bound.prototype = Object.create(fn.prototype)
    return bound
  }
}
