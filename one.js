function mindGame(positiveNumber){
    if(typeof positiveNumber !== 'number' || positiveNumber < 0 )
    {
        
        return 'Input should be positive number.';
    }
    else{
        let total_1 = (positiveNumber*3);
        let total_2 = (total_1+10);
        let total_3 = (total_2/2);
        let total_4 = (total_3-5);
        let total = total_4;
         return total;
    }
}

let positiveNumber = '';
console.log(mindGame(positiveNumber));