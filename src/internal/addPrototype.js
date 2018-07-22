exports.addPrototype = (name, func) => {
  if (Date.prototype[name]) {
    throw new Error(`${name} is already a prototype of Date`);
  } else {
    Date.prototype[name] = func;
  }
};
