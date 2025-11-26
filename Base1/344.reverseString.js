var reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        // 数据倒序交换，类似快排，实际上是指：双指针交换法
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
}