// Write a js program to print out the console the integer numbers from 30 to 300 , but if that number that is multiples of 7 then print out 'abc', if that number is multiples of 13 then print out 'xyz'. For those numbers those are multiple of both 7 and 13 then print out 'a-z' . 
                                                                                                                                 
for(n = 30; n <= 300 ; n++){
   // multiple of 7
   if(n % 7 === 0){
      console.log("abc")
   }
   // multiple of 13
   if(n % 13 === 0){
      console.log("xyz")
   }
   // multiple of both 7 and 13 
   if(n % (13*7) === 0){
      console.log("a-z")
   }
}