const lengthOfLongestSubstringTwoDistinct = (s) => {
    const n = s.length;
    if (n <= 2) return n;

    const count = new Array(26).fill(0);
    let left = 0;   // 滑动窗口左指针
    let maxLen = 0; // 最长子串长度
    let diff = 0;   // 窗口内不同字符的数量

    for (let right = 0; right < n; right++) {
        const charIndex = s[right].charCodeAt(0) - 97;
        if (count[charIndex] === 0) {
            diff++;
        }
        count[charIndex]++;

        // 不同字符超过2时，缩小左窗口
        while (diff > 2) {
            const leftCharIndex = s[left].charCodeAt(0) - 97;
            count[leftCharIndex]--;
            if (count[leftCharIndex] === 0) {
                diff--;
            }
            left++; 
        }

        maxLen = Math.max(maxLen,right - left + 1);
    }
    return maxLen;
}

/** 
 * 题目描述：
给定一个字符串 s，找出 至多包含两个不同字符 的最长子串的长度。
示例 1：
输入：s = "eceba"输出：3解释：最长子串是 "ece" 或 "eba"，长度为 3。
示例 2：
输入：s = "ccaabbb"输出：5解释：最长子串是 "aabbb" 或 "ccaab"，长度为 5。
 */