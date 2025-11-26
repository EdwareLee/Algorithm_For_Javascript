const minWindow = (s, t) => {
  // 此处的滑动窗口采用两个，一个是need作为键值对进行字符出现的统计
  // 另外的window则是本题需求的滑动窗口
  const need = {};
  const window = {};

  for (const c of t) {
    need[c] = (need[c] || 0) + 1;
  }

  // 定义一个左右指针作为滑动窗口的边界
  let left = 0; // 左指针
  let right = 0; // 右指针
  let valid = 0; // 满足t需求 的字符种类数
  let start = 0; // 最小窗口的信息，start是启示索引
  let len = Infinity;

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) {
        valid++;
      }
    }

    while (valid === Object.keys(need).length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      const d = s[left];
      left++;

      if(need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }

  // 4.最后返回结果
  return len === Infinity ? "" : s.substr(start, len);
};
