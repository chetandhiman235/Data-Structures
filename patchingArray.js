// function generateSubSet(nums){
//     let subsetArray=[[]];
//     for(let index=0; index<nums.length; index++){
//         const len = subsetArray.length;
//         for(let subSetIndex=0; subSetIndex<len ; subSetIndex++){
//             subsetArray.push([...subsetArray[subSetIndex],nums[index]]);
//         }
//     }
//     return subsetArray;
// }

// function checkIfAllValuesArePresent(arrayAfterPatch,nums,numberOfPatches){

//     let subSetArray = generateSubSet(nums);

//     for(let index=0; index<subSetArray.length; index++){
//         let item = subSetArray[index];
//         let sum  = 0;
//         for(let sumIndex=0; sumIndex<item.length; sumIndex++){
//             sum +=item[sumIndex];
//         }
//         if(sum!=0){

//             arrayAfterPatch[sum-1] = true;
//         }
//     }

//     let result = arrayAfterPatch.every(element => element === true);
//     if(!result){
//         let patchingIndex = arrayAfterPatch.findIndex((item)=> item == false);
//         numberOfPatches += 1;
//         nums.splice(patchingIndex+1,0,patchingIndex+1)
//         return checkIfAllValuesArePresent(arrayAfterPatch,nums,numberOfPatches)
//     }
//     return numberOfPatches
// }

function minPatches (nums, n) {
    let patches = 0, sum = 0, i = 0;
    while (sum < n) {
        if (i < nums.length && nums[i] <= sum + 1) {
            sum += nums[i];
            i++;
        } else {
            sum += sum + 1;
            patches++;
        }
    }
    return patches;
};

minPatches([1,3],6)