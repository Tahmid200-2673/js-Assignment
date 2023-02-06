function findingBadData(data)
{
  if(Array.isArray(data)!== true ){
    return 'Provide valid input';
  }

  let badDataCount=0;
  for(let i=0;i<data.length;i++)
  {
    if(data[i]<0)
    {
        badDataCount++;
    }
  }
  return badDataCount;

}

let arr = [ 2, -5, -7, -13 ];

 
console.log(findingBadData(arr));
