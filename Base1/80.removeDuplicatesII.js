var removeDuplicates = (nums) => {
    const n = nums.length;
    let i = 2;
    if (nums.length <= 2) {
        return n;
    }

    for (let j = 2; j < n; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}