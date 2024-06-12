function heightChecker(heights) {

    // clone of students height
    let studentsHeightClone = [...heights];

    // sort height array
    let sortedArray = studentsHeightClone.sort((a, b) => a - b);

    // counter of students who are not in correct postion
    let counter =0;

    // iterate over sorted array 
    for(let index=0; index< sortedArray.length; index++){
        if(sortedArray[index] != heights[index]){
            counter +=1;
        }
    }
    
    return counter;
};

heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]);