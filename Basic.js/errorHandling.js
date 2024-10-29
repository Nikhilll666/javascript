//todo: error handling like pro - try catch

function divide(a,b){
    try{
        if(b == 0){
            throw Error("Error Dedected");
        }
        console.log(a/b)
    }
    catch(err){
        console.error(err);
    }
}

divide(12,0)