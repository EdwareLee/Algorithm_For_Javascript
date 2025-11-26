// 锻炼基本功
const reverseWords = (s) => {
  // 1.定义words数组，利用split将字符串分割成数组内容
  const words = s.split(" ");

  // 2.然后定义一个reversedWords数组，将数组words进行map遍历，然后在map遍历中利用双指针倒序进行单词的倒序
  const reversedWords = words.map((word) => {
    // 此刻仍需将每个words里面的字符串进行spilt拆分成小数组
    const arr = word.split("");
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    // 需要将arr数组转换为字符串
    return arr.join("");
  });
  return reversedWords.join(" ");
};
