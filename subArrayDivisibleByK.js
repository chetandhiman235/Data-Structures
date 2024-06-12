// nums -> nums is array 
// k ->  k is number 

function subarraysDivByK(nums, k){

    let subArrayDivByK = [];
    // generate sub array 
    let subArray = generateSubArray(nums);
    // console.log(subArray)
    if(subArray.length>0){
        for(let index=0; index<subArray.length; index++){
            let sum =0;
            let subArrayItem = subArray[index];
            for(let subArrayIndex=0; subArrayIndex< subArrayItem.length; subArrayIndex++){
                sum += subArrayItem[subArrayIndex];
            }
            if(sum  %k ==0){
                subArrayDivByK.push(subArrayItem);
            }
        }
    }
    return subArrayDivByK;

}

function generateSubArray(nums) {
    let subArrays = [];
    for (let start = 0; start < nums.length; start++) {
        for (let end = start; end < nums.length; end++) {
            subArrays.push(nums.slice(start, end + 1));
        }
    }
    return subArrays;
}

console.log(subarraysDivByK([4,5,0,-2,-3,1],5))