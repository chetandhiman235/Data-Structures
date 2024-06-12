function sortColors(nums) {
    let sortedObj ={};
  for(let index=0; index<nums.length; index++){
    let item = nums[index];
    if(sortedObj[item]){
        sortedObj[item].count += 1;
    }else{
        sortedObj[item]={
            count : 1,
        }
    }
  }
  console.log(sortedObj)
  let sortedArray =[];
  Object.keys(sortedObj).forEach(key=>{
    const count = sortedObj[key].count;
    for(let index=0; index<count; index++){
        sortedArray.push(Number(key));
    }
  })  
  console.log(sortedArray);
};

sortColors([2,0,2,1,1,0])