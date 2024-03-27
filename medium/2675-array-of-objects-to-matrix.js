function jsonToMatrix(arr) {
  const dfs = (key, obj) => {
    if (
      typeof obj === 'number' ||
      typeof obj === 'string' ||
      typeof obj === 'boolean' ||
      obj === null
    ) {
      return { [key]: obj };
    }

    const res = [];

    for (const [k, v] of Object.entries(obj)) {
      const newKey = key ? `${key}.${k}` : `${k}`;
      res.push(dfs(newKey, v));
    }

    return res.flat();
  };

  const kv = arr.map((obj) => dfs('', obj));

  const keys = [
    ...new Set(
      kv
        .flat()
        .map((obj) => Object.keys(obj))
        .flat()
    ),
  ].sort();

  const ans = [keys];

  for (const row of kv) {
    const newRow = [];
    for (const key of keys) {
      const v = row.find((r) => r.hasOwnProperty(key))?.[key];
      newRow.push(v === undefined ? '' : v);
    }
    ans.push(newRow);
  }

  return ans;
}

console.log(jsonToMatrix([{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }]));
