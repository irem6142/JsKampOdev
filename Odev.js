function findPrime(...numbers) 
{
  for(let i=0;i<numbers.length;i++)
  {
    let q=0;
    for(let j=2;j<numbers[i];j++)
    {
     if(numbers[i] %i == 0)
      q++;
    }
    
      if(q==0)
      console.log("Asal : ",numbers[i]);
    
  }
}
 findPrime(2,5,21,13,8);
 findPrime(3,5);
 //ARKADAŞ SAYI BULMA
 function FriendNumber(a,b)
 {
   let toplam=0;
   let t=0;
   for(let i=0;i<a;i++)
   {
     if(a%i==0)
     {
      toplam=toplam+i;
     }
   }
   for(let i=0;i<b;i++)
   {
     if(b%i==0)
     {
      t=t+i;
     }
   }
   if(t==a&&toplam==b)
   console.log("Arkadaş sayıdır.")
   else
   console.log("Arkadaş sayı değildir .")
 }
 FriendNumber(220,284);
//1000 Mükemmel sayı bulma

for(let c=1;c<=1000;c++)
{
  let to=0;
  for (let n= 1;n<c; n++) {
   if(c%n==0)
   {
     to=to+n;
   }
  
  }
   if(to==c)
   {
     console.log(c);
   }
}
//Asal sayıları bulan program

for(let a=2;a<1000;a++)
{
  let total=0;
  for(let s=2;s<a;s++)
  {
    if(a%s==0)
    {
     total++; 
    }
  }
      if(total==0)
      
        console.log("Asal sayılar :",a);
      
    
  }
  
