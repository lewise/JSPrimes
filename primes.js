//returns true when given a prime number, returns false otherwise
function isPrime(num)
{
   //check if num is divisible by factor
   for (var factor = 2; factor * factor <= num; factor++)
   {
     if (num % factor == 0)
     {
       return false;
     }
   }
    return true;
}

//returns number of primes
function countPrimes(num)
{
  var primecount = 0;
  var primearray = new Array();
  
  for (var n = 2; n < num ; n++)
  {
    for (var i = 2*n; i < num; i = i + n)
    {
      primearray[i] = true;
    }
  }
  
  for (var index = 2; index<primearray.length; index++)
  {
    if (primearray[index] == false)
    {
    primecount ++;
    }
  }
  
  return primecount;
}

//prints all the primes less than num
function displayPrimes(num)
{
 for (var n = 2; n < num ; n++)
  {
    if (isPrime(n) == true)
    {
      console.log(n);
    }
  }
}

//displaying primes up to 100 and whether 4 is prime, and whether 7 is prime
displayPrimes(100);
console.log(isPrime(4));
console.log(isPrime(7));
