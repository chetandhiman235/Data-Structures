function minDaysToBuildBookee(bloomDay, m, k){


    // find the maximum day from bloom days when all flowers are bloomed 
    let uniqueArray =[];
    for(let index=0; index< bloomDay.length; index++){
        if(!uniqueArray.includes(bloomDay[index])){
            uniqueArray.push(bloomDay[index]);
        }
    }

    uniqueArray.sort((a,b)=>a-b);

    // iterate till the maximum bloom day

    for(let index=0; index< uniqueArray.length; index++){
        let bouquets = 0; let flowers =0; let bloomDayNumber =uniqueArray[index];
        for(let bloomIndex =0; bloomIndex<bloomDay.length; bloomIndex++){
            if(bloomDay[bloomIndex]  <= bloomDayNumber){
                flowers +=1;
            }else{
                flowers = 0;
            }
            if(flowers == k){
                bouquets +=1;
                flowers = 0;
                if(bouquets == m){
                    return uniqueArray[index];
                }
            }
        }
    }
    return -1;

}

minDaysToBuildBookee([1,10,3,10,2],3,1)