function isLGSeven(inputNumber){
    if(typeof  inputNumber  !== 'number' )
    {
        return 'Input should be a number.';
    }
    let difference = inputNumber-7;
    if(difference < 7)
    {
        return difference;
    }
    else{
        return inputNumber*2;
    }

}
let inputNumber = 6;
console.log(isLGSeven(inputNumber));