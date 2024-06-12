function subsets(nums) {
    let result = [[]]; // Start with an empty subset
    for (let num of nums) {
        let len = result.length;
        for (let i = 0; i < len; i++) {
            let subset = result[i].slice(); // Create a copy of the current subset
            subset.push(num); // Add the current number to the subset
            result.push(subset); // Add the new subset to the result
        }
    }
    return result;
}

console.log(subsets([1,2,3,4]),"Answer")