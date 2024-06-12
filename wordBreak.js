var wordBreak = function(s, wordDict) {
    
    let count=0;
    let indexToBreak =0;
    for(let index=0; index<s.length; index++){
        let subString = s.substr(indexToBreak,index-indexToBreak);
        if(wordDict.includes(subString)){
            count+=1;
            indexToBreak = index;
            if(count== wordDict.length){ return true}
        }
    }

    return false
    
    };
console.log(wordBreak("leetcode",["leet","code"]));