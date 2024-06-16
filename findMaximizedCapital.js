// IPO leetcode question (502)

// k = no of projects 
// w = wealth of the user


function findCapitalIndex(wealth,capital){
    let profitCanBook =[];
    for(let index =0; index< capital.length; index++){
        if(capital[index] ==  wealth){
            profitCanBook.push(index);
        }
    }
    return profitCanBook;
}

function findMaximumProfit(profitCanBook,profits){
    let maximumProfit = 0;
    for(let index=0; index<profitCanBook.length; index++){
        if(maximumProfit < profits[profitCanBook[index]]){
            maximumProfit = profits[profitCanBook[index]];
        }
    }
    return maximumProfit;
}

function getTotalProfit(profits){
    let sum =0;
    for (let index=0; index<profits.length; index++){
        sum += profits[index];
    }
    return sum;
}

function findMaximizedCapital(k, w, profits, capital){

    // no of projects user can participate 
    let noOfProjects = k;
    let wealth = w;
    let totalProfit = 0;

    let maximizeProfit = getTotalProfit(profits);


    while(noOfProjects > 0 && totalProfit < maximizeProfit){

        // find what user can buy 
        let profitCanBook = findCapitalIndex(wealth,capital);

        // maximum profit user can book
        let maxiumProfit  = findMaximumProfit(profitCanBook,profits);

        // reduce numbe of investement user can do or projects
        noOfProjects -= 1;
        wealth = maxiumProfit;
        totalProfit += maxiumProfit;
    }

    return totalProfit;
}

console.log(findMaximizedCapital(10,0,[1,2,3],[0,1,2]))