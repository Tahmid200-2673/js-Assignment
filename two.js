function evenOdd(word){

    if(typeof word !== 'string'|| word.length == 0){
        return 'Please give a string';
    }

    if(word.length % 2 === 0){
        return 'even';
    }
    else{
        return 'odd';
    }

}
const myString = 'chatgpt';
console.log(evenOdd(myString));