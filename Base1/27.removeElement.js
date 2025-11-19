var removeEleemt = (nums,val) => {
    // 这道题采用双指针法，同时处理数组和得到个数
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}