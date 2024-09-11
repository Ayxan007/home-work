const people = [
    {ad: 'Alice', yaş: 25},
    {ad: 'Bob', yaş: 30},
    {ad: 'Charlie', yaş: 25},
    {ad: 'David', yaş: 30}
   ];

   people.sort((a,b)=>{
    if(a.yaş!==b.yaş){
        return a.yaş - b.yaş;
    }
    return a.ad.localeCompare(b.ad);
   });
   console.log(people);
   