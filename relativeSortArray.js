function relativeSortArray(arr1, arr2){
    let countOfNumbers={};
    for(let index=0; index<arr1.length; index++){
        if(countOfNumbers[arr1[index]]){
            countOfNumbers[arr1[index]].count += 1;
        }else{
            countOfNumbers[arr1[index]]={
                count : 1,
            }
        }
    }
    let arrayToReturn=[];
    for(let arr2Index=0; arr2Index< arr2.length; arr2Index++){
        let loopIndex= countOfNumbers[arr2[arr2Index]].count;
        for(let loop=0; loop< loopIndex; loop++){
            arrayToReturn.push(arr2[arr2Index])
        }
        delete countOfNumbers[arr2[arr2Index]]
    }
    
    Object.keys(countOfNumbers).forEach(key => {
        const count = countOfNumbers[key].count;
        for (let i = 0; i < count; i++) {
            arrayToReturn.push(Number(key));
        }
      });

    console.log(arrayToReturn,countOfNumbers);
}
relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6])