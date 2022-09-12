function listSorting(needle, haystack) {
    let chainIndex = null;
    let rankIndex = null;
    let solutionArrIndex = null;
    let arrowIndex = null;
    if(Array.isArray(haystack[0])){
        for(let i = 0; i < haystack.length; i++){
            if(Array.isArray(haystack[i])){
                for(let k = 0; k < haystack[i].length; k++){
                    if(haystack[i].lastIndexOf(needle)!== -1){
                        chainIndex = haystack.indexOf(haystack[i]);
                        rankIndex = haystack[i].lastIndexOf(needle);
                    }
                }
            }
        }
    }
    else {
        arrowIndex = haystack.lastIndexOf(needle);
    }
    if((chainIndex && arrowIndex !== -1) || (arrowIndex == 0)){
        solutionArrIndex = [chainIndex, rankIndex]
    }
    else if((arrowIndex && arrowIndex != -1) || (arrowIndex == 0)){
        solutionArrIndex
    }else{
        solutionArrIndex = -1
    }
    return solutionArrIndex;
}

module.exports = listSorting;
