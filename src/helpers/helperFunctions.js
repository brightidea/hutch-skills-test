export function isEmptyObject (obj) {
  for (var x in obj) { return false; }
  return true;
}
