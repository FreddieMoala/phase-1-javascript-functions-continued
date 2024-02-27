function saturdayFun(saturdayFun = "roller-skate"){
    return `This Saturday, I want to ${saturdayFun}!`;
}

function mondayWork(mondayWork = "go to the office"){
    return `This Monday, I will ${mondayWork}.`

}

function wrapAdjective(flare = "*"){
    return function(adjective = "special") {
        return `You are ${flare}${adjective}${flare}!`;
    }

}