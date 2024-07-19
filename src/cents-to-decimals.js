

// Converts a value from cents to a floating point number with 2 decimals
function centsToDecimals(amount){

    if(amount === undefined){
        return null;
    }

    if(typeof amount !== "number"){
        return null;
    }

    return amount / 100;
}

