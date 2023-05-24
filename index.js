// code your solution here

function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`;
}

saturdayFun('play golf');
saturdayFun();

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`;
};

mondayWork('play golf');
mondayWork();

function wrapAdjective(rap = "special") {


}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const encourage = wrapAdjective("!!!");
console.log(encourage());
console.log(encourage("amazing"));