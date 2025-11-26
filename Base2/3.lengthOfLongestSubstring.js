const lengthOfLongestSubstring = (s) => {
    const window = {};

    let left = 0;
    let right = 0;
    let maxLen = 0;

    while (right < s.length) {
        const i = s[right];
        right++;

        window[i] = (window[i] || 0) + 1;

        while (window[i] > 1) {
            const j = window[left];
            left++;

            window[j]--;
        }
        maxLen = Math.max(maxLen,right - left);
    }

    return maxLen;
}