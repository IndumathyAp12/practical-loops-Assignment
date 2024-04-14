console.log("Practical Loops-Assignment")

//Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else console.log(i)
}

//Part 2: Prime Time
let n = 350;
let y = n+ 1
for (i = 2; i < y  ; i++)
{
    if(y % i == 0 && i != y)
    {
        y = y + 1;
    }
    else
    {
        console.log("Result :", y);
        break;
    }
}