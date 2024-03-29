function objDiff(o1, o2) {
  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }

  if (!isObject(o1) && !isObject(o2)) {
    // both primitive
    return o1 === o2 ? {} : [o1, o2];
  }
  if (!isObject(o1) || !isObject(o2)) {
    // one is primitive
    return [o1, o2];
  }
  if (Array.isArray(o1) !== Array.isArray(o2)) {
    // one is array
    return [o1, o2];
  }

  const diff = {};

  for (const key in o1) {
    if (o2.hasOwnProperty(key)) {
      const res = objDiff(o1[key], o2[key]);

      if (Object.keys(res).length > 0) {
        diff[key] = res;
      }
    }
  }

  return diff;
}
