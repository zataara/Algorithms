function twoArrayObject(keys, values) {
  let out = {};
  if (keys.length >= values.length) {
    let dif = keys.length - values.length;
    while (dif > 0) {
      values.push(null);
      dif--;
    }
  }
  if (values.length > keys.length) {
    let dif = values.length - keys.length;
    values = values.splice(0, values.length - dif);
  }
  for (let i = 0; i < keys.length; i++) {
    out[keys[i]] = values[i];
  }

  return out;
}

module.exports = twoArrayObject;
