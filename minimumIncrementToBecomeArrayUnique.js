function minIncrementForUnique(nums) {

    nums.sort((a, b) => a - b);

    let numberOfSteps = 0;
    let nextUnique = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nextUnique) {
            numberOfSteps += nextUnique - nums[i];
        }
        nextUnique = Math.max(nextUnique, nums[i]) + 1;
    }

    return numberOfSteps;
}

// console.log(minIncrementForUnique([1, 2, 2]));
console.log(minIncrementForUnique([3,2,1,2,1,7]))
