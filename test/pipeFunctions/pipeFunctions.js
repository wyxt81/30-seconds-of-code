module.exports = pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));