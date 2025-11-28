const findAnagrams = (s, p) => {
  const result = [];
  const m = s.length;
  const n = p.length;

  if (m < n) return result;

  const sc = new Array(26).fill(0);
  const pc = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    pc[p[i].charCodeAt(0) - 97]++;
    sc[s[i].charCodeAt(0) - 97]++;
  }

  pc.every((v, i) => v === sc[i]) && result.push(0);

  for (let j = 1; j <= m - n; j++) {
    sc[s[j - 1].charCodeAt(0) - 97]--;
    sc[s[j + n - 1].charCodeAt(0) - 97]++;
    pc.every((v, i) => v === sc[i]) && result.push(j);
  }
  return result;
};
/**
 * 原本的思路太复杂了，时间复杂度和效率确实高，但是写起来太复杂了
 * 思路2:
 *  采用辅助函数inline
 */
