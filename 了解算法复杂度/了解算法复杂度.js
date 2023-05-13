// leetcode 1. 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// // 复杂度
//   数组长度是n: 算法大概执行了多少次，时间复杂度是O(n^2)
//   空间复杂度：i和j都是一个普通的数字O(1)

// 数组长度是n,时间复杂度On
// 空间复杂度 O(n)
var twoSum = function(nums, target) {
    // for(let i=0; i<nums.length; i++){ 
    //     console.log('i==' + i)
    //     for(let j=0; j<nums.length; j++){
    //         console.log('j==' + j)
    //         if(nums[i] + nums[j]===target && i!==j){
    //             return [i, j]
    //         }
    //     }
    // }
    let obj = {}
    for(let i=0; i<nums.length; i++){
        let num = nums[i]
        let n = target - num
        if(num in obj){
          return [i, obj[num]]
        }else{
            obj[n] = i
        }
    }

    // map方法】
    let map = new Map()
    for(let i =0; i< nums.length; i++){
        let n = target - nums[i]
        if(map.has(n)){
            return [i, map.get(n)]
        }
   
        map.set(nums[i], i)
   
    }

};