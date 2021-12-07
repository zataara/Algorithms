function digital_root(n) {
  if (n.toString().length > 1) {
    return digital_root(
      n
        .toString()
        .split("")
        .reduce((a, b) => parseInt(a) + parseInt(b))
    );
  } else {
    return n;
  }
}
