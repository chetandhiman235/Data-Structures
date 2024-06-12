function maximumScore(words, letters, score){

    // generate sub arrays of words 
    let subsetArray = generateSubArray(words);

    let lettersObj = calculateNumberOfLetters(letters);

    let scoreWithAplhabet = getScoreWithAlphabet(score);

    let subSetWithCount=[];
    for(let index=0; index<subsetArray.length; index++){
        let tempString = subsetArray[index].join("");
        let obj={};
        let isValid = true;
        for(let stringIndex=0; stringIndex<tempString.length; stringIndex++){
            if(obj[tempString[stringIndex]]){
                obj[tempString[stringIndex]].count +=1;
            }else{
                obj[tempString[stringIndex]]={count : 1};
            }
            if(obj[tempString[stringIndex]].count > lettersObj[tempString[stringIndex]]?.count || lettersObj[tempString[stringIndex]]?.count == undefined){
                isValid = false;
                break;
            }
        }
       if(isValid){
        let sum =0;
        for(let key in obj){
            sum += obj[key].count* scoreWithAplhabet[key];
        }
        subSetWithCount.push({subSet : subsetArray[index],count: sum });
       }
        
    }

    let maxCount=0;
    for(let maxCountIndex=0; maxCountIndex< subSetWithCount.length ; maxCountIndex++){
        if(maxCountIndex==0){
            maxCount = subSetWithCount[maxCountIndex].count;
        }else{
            if(maxCount< subSetWithCount[maxCountIndex].count){
                maxCount = subSetWithCount[maxCountIndex].count;
            }
        }
    }
    return maxCount;
    

}


function getScoreWithAlphabet(score){
    let result = {};
    for (let i = 0; i < score.length; i++) {
        let letter = String.fromCharCode(97 + i).toLowerCase();
        result[letter] = score[i];
    }
    return result;
}


function calculateNumberOfLetters(letters){
    let lettersObj={};
    for(let index=0; index<letters.length ;index++){
        if(lettersObj[letters[index]]){
            lettersObj[letters[index]].count +=1;
        }else{
            lettersObj[letters[index]]={count:1};
        }
    }
    return lettersObj;
}

function generateSubArray(words){
    const subsetArray =[[]];
    for(let index=0; index<words.length; index++){
        const len = subsetArray.length;
        for(let subSetIndex=0; subSetIndex<len ; subSetIndex++){
            subsetArray.push([...subsetArray[subSetIndex],words[index]]);
        }
    }

    return subsetArray;
}


maximumScore(["xxxz","ax","bx","cx"],["z","a","b","c","x","x","x"],[4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10])