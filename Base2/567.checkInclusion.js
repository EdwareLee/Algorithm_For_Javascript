const checkInclusion = (s1,s2) => {
    const m = s1.length;
    const n = s2.length;

    if (m > n) return false;

    // 定义窗口接收
    const mCount = new Array(26).fill(0);
    const wCount = new Array(26).fill(0);

    for (let i = 0; i < m; i++) {
        mCount[s1[i].charCodeAt(0) - 97]++;
        wCount[s2[i].charCodeAt(0) - 97]++;
    }

    // if (mCount.every((_, i) => mCount[i] === wCount[i])) return true;
    if (mCount.every((_,i) => mCount[i] === wCount[i])) return true;

    for (let j = 1; j <= n - m; j++) {
        wCount[s2[j - 1].charCodeAt(0) - 97]--;
        wCount[s2[j + m - 1].charCodeAt(0) - 97]++;
        if (mCount.every((_, i) => mCount[i] === wCount[i])) return true;
    }

    return false;
}

/** 
 * 本题题意：
 * 1.看s1.length >= s2.length 时，有无可能s1的本身或异位数 s2中连续的小串
 * 2.其实这道题跟438很相似
 * 3.438是返回索引的起始值，这道题是直接找到有无符合情况的小串
 * 4.也是可以采用滑动窗口 + 双指针 的方式来做
 * 5.最好返回的是布尔值
 */