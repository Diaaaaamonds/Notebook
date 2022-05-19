var test = function(nums){
    let left = 0;
    let n = nums.length - 1;
    let right = n;
    let max =  Math.min(nums[left],nums[right]) * (n-1);
    for(let i in nums){
        let x = 0;
        if(nums[left] < nums[right] && nums[i] > nums[left]){
            left = i;
            x = Math.min(nums[left],nums[right]) * (right-left)
        } else if(nums[left] > nums[right]){
            let j = right;
            while(nums[j]<=nums[right]) j--;
            right = j;
            x = Math.min(nums[left],nums[right]) * (right-left)
        }
        max = Math.max(max,x);
    }
    return max;

}