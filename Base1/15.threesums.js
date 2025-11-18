var threeSum = (nums) => {
    nums.sort((a,b) => a - b);

    const result = [];
    const n = nums.length;

    for(let i = 0; i < n - 2; i++) {
        // 去除重复数 如何该两个数相同，则i跳过当前，直接 i+1 进入下一个循环
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // 不重复的时候进行左右指针的判断，利用双面夹层比较
        let left = i + 1;
        let right = n - 1;

        // 进行sum的匹配 此刻定num[i]不动
        while(left < right) {

            const sum = nums[i] + nums[left] + nums[right];

            if(sum === 0) {
                result.push([nums[i],nums[left],nums[right]]);
                // 做两次左右指针的内缩去重
                while( left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while(left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // 移动指针，进行下一组
                left++;
                right--;

            } else if( sum < 0) {
                left++;
            } else {
                right--;
            }

        }
        
    }

    return result
}