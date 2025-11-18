一 说明
目标：筑牢「数组 / 字符串 / 链表 / 哈希表 / 栈 / 队列」核心结构，覆盖 80% 高频 Medium 题，适配头部企业初面基础题。
类别刷题重点（题量）对应 Node.js 场景联想推荐题目数组与字符串双指针、滑动窗口、前缀和（30 题）Buffer 处理、HTTP 请求参数解析15. 三数之和、76. 最小覆盖子串、56. 合并区间链表快慢指针、反转、环形检测（20 题）Node.js 链表式内存管理、Stream 流处理21. 合并两个有序链表、141. 环形链表、148. 排序链表哈希表映射优化、前缀哈希（25 题）对象 / Map/WeakMap 性能对比、缓存设计1. 两数之和、49. 字母异位词分组、128. 最长连续序列栈与队列单调栈、队列模拟（20 题）函数调用栈、EventEmitter 事件队列20. 有效的括号、739. 每日温度、232. 用栈实现队列树与二叉树递归遍历、BFS/DFS（30 题）AST 抽象语法树解析、路由树设计94. 二叉树中序遍历、102. 二叉树的层序遍历、124. 二叉树中的最大路径和堆TopK 问题、中位数（25 题）日志聚合排序、任务调度优先级215. 数组中的第 K 个最大元素、347. 前 K 个高频元素、295. 数据流的中位数
每周任务：
- 刷 25 题（每天 4-5 题），周末用 1 天复盘：按「题目→解题思路→最优解→Node.js 中如何实现（如用 Buffer 优化字符串处理）」整理笔记；
- 附加：刷 LeetCode Hot100 中对应类别的题目，确保高频考点无遗漏。

--------------------------------------------------------------------------------
二  题解和思路
1、双指针专题（10 题）
- 15. 三数之和（Medium，高频）
```
var threeSum = function(nums) {
    // 1.排序数组
    nums.sort((a,b) => a - b);
    // 2.准备结果数组
    const result = [];
    // 3.记录数组长度
    const n = nums.length;

    // 4.循环第一个数
    for(let i = 0; i < n - 2; i++) {
        // 5.固定方法去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // 跳过当前循环,直接进入下一个i
        }

        // 6.初始化左右指针，左指针从固定数右边第一个元素，右指针最后一个元素
        let left = i + 1;
        let right = n - 1;

        // 7.双指针循环 （left < right时继续）
        while( left < right) {
            // 计算当前数组之和 
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // 8.找到有效三元组，放进结果数组
                result.push([nums[i],nums[left],nums[right]]);

                // 9. 左指针去重：跳过后面的数
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                // 10. 右指针去重，跳过前面相同的数
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // 11. 移动指针，继续找下一组
                left++;
                right--;

            } else if(sum < 0) {
                // 12. left 太小，left右移
                left++;
            } else {
                // 13. right 太大，right 右移
                right--;
            }
        }


    }

    // 14. 发挥结果
    return result; 

}
```
- 题解思路
1.本到题目，我们采用 排序+双指针+去重复的方法进行，将时间复杂度降低到log(O^2)
2.首先采用去排序方法，将给我们的数组进行一个从小到大的排序形成新的数组
```
var threeSum = (nums) => {
    nums.sort((a,b) => a - b);
    // 使得此刻采用api调用从小到大排序
    const result = [];
    const n = nums.length;
}
```
3.此刻我们的思维是，定住第一个数i，然后利用双指针不断进行内缩，同时进行进行左右指针相邻数的重复判断
- 并且此刻有一个点，利用fot顶住i作为初始数，然后 i < n-2 是为了让留下两个空间给左右指针，因为i是从最左边最小一个数字开始，并且左指针从第2个位置，右指针是最右边位置开始
- 然后是在此for循环内，做当前i>0时候，i当前和上一个数的重复性，重复了则跳过当前i，进入下一i
```
var threeSum = (nums) => {
    // 以上代码    
    for(let i = 0; i < n - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;        
        }
    }
}
```
4.定义左右指针及值
```
let left = i + 1;
let right = n - 1;

// 进行sum的匹配
// 此刻我们需要使用while循环让left和right进行夹逼

while(left < right) {
    const sum = nums[i] + nums[left] + nums[right];
    
    if(sum === 0) {
        result.push([nums[i],nums[left],nums[right]]);
        // 先去重，再夹逼
        while(left < right && nums[left] === nums[right]) {
            left++;        
        }    
        while(left < right && nums[right] === nums[right - 1]) {
            right--;        
        }
        // 正式夹逼
        left++;
        right--;
    } else if(sum < 0) {
        left++;    
    } else {
        right--;    
    }
}

return result;
```

- 16. 最接近的三数之和（Medium）

- 18. 四数之和（Medium）
- 26. 删除有序数组中的重复项（Easy，双指针基础）
- 27. 移除元素（Easy，双指针入门）
- 80. 删除有序数组中的重复项 II（Medium）
- 11. 盛最多水的容器（Medium，双指针经典）
- 167. 两数之和 II - 输入有序数组（Medium）
- 344. 反转字符串（Easy，双指针基础）
- 557. 反转字符串中的单词 III（Easy，双指针+字符串处理）

---

### 二、滑动窗口专题（10 题）
- 76. 最小覆盖子串（Hard，滑动窗口天花板，高频）
- 3. 无重复字符的最长子串（Medium，高频）
- 438. 找到字符串中所有字母异位词（Medium）
- 567. 字符串的排列（Medium）
- 209. 长度最小的子数组（Medium）
- 159. 至多包含两个不同字符的最长子串（Medium）
- 340. 至多包含 K 个不同字符的最长子串（Medium）
- 763. 划分字母区间（Medium，贪心+滑动窗口）
- 904. 水果成篮（Medium，滑动窗口变形）
- 1004. 最大连续1的个数 III（Medium）

---

### 三、前缀和专题（5 题）
- 560. 和为 K 的子数组（Medium，高频）
- 974. 和可被 K 整除的子数组（Medium）
- 1248. 统计「优美子数组」（Medium）
- 303. 区域和检索 - 数组不可变（Easy，前缀和基础）
- 304. 二维区域和检索 - 矩阵不可变（Medium）

---

### 四、高频综合题（5 题）
- 56. 合并区间（Medium，高频，区间处理）
- 14. 最长公共前缀（Easy，字符串基础）
- 49. 字母异位词分组（Medium，字符串+哈希结合）
- 125. 验证回文串（Easy，字符串处理）
- 28. 找出字符串中第一个匹配项的下标（Medium，KMP 入门，高频）

---

这些题目覆盖了数组与字符串的核心考点，且多数是头部企业初面高频题，同时兼顾基础与进阶难度。要不要我帮你整理一份**按专题分类的题目清单（含题干链接、核心考点标注）**，方便你直接跳转刷题？
