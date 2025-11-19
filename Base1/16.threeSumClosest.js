var threeSumClosest = (nums,target) => {
    // 1.依旧从小到大排序进行夹逼
    nums.sort((a,b) => a - b);
    const n = nums.length;

    // 2.定义最开始的closestSum 后续再做更新
    let closestSum = nums[0] + nums[1] + nums[2];

    // 进行数组的遍历，固定一个数，然后再不断循环直到找到最接近的结果
    for (let i = 0; i < n - 2; i++) {
        // 定义左右指针进行加逼
        let left = i + 1;
        let right = n - 1;

        // 移动双指针进行找最合适的数
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // 4.判断当前的currentSum是否比之前的closeSum更加接近
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // 5.根据当前和 与 target 的关系，移动指针
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return currentSum;
            }
        }
    }

    return closestSum;
}