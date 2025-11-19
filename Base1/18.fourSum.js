var fourSum = (nums,target) => {
    nums.sort((a,b) => a - b);

    const n = nums.length;
    const result = [];

    if(n <4 ) { 
        return result
    };

    // 2.固定第一个数nums[i]
    for (let i = 0; i < n - 3; i++) {
        // 去重，如果当前i 和 i-1 是相同的值，那么跳过该次，直接进入下一个i
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        // 3.固定第二个数j进行比较
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            // 定义双指针，进行类似15题的夹逼
            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const fourSum = nums[i] + nums[j] + nums[left] + nums[right];

                if (fourSum === target) {
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    console.log("found it!")

                    // 先做去重校验
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }

                    while(left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;

                } else if (fourSum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }

    }
    return result;
}