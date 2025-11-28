const lengthOfLongestSubstringKDistinct = (s,k) => {
    const n = s.length;
    if (k === 0 || n === 0) return 0; // 空串或k=0

    let left = 0;
    let maxLen = 0;
    const charCount = new Map(); // 哈希表：记录员窗口内字符的出现次数

    // 右指针扩展窗口
    for (let right = 0; right < n; right++) {
        const currentChar = s[right];
        // 更新哈希表
        charCount.set(currentChar,(charCount.get(currentChar) || 0) + 1);

        // 当窗口内不同字符数 > k 时，收缩左指针
        while (charCount.size > k) {
            const leftChar = s[left];
            charCount.set(leftChar,charCount.get(leftChar) - 1);

            if (charCount.get(leftChar) === 0) {
                charCount.delete(leftChar);
            }
            left++;
        }

        const currentLen = right - left + 1;
        maxLen = Math.max(maxLen,currentLen);
    }
    return maxLen;
}

/**
 * 1. 滑动窗口解决子串的问题
 * 2. k是字符种类数，要求的是 s 中 至多包含k种字符的最长子串的长度
 * 3. 采用左右指针定位并且不断收缩的方式进行
 * 4. 基础不牢，地动山摇
 * 5. 哈希表Map + 左右指针
 */