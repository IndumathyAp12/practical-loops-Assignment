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
let y = n+ 1 ;
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

// Feeling Loopy 

let inputStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let strArray = inputStr.split('\n');
let cell = "";
for(i =0; i<= strArray.length; i++ )
{
    if(strArray[i] != null )
    {
        cell = strArray[i].split(',');
        console.log( cell[0],cell[1],cell[2],cell[3] );
    }
}
let inputStr1 ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let strArray1 = inputStr1.split('\n');
let cells = "";
for(i =0; i<= strArray1.length; i++ )
{
    if(strArray1[i] != null )
    {
        cells = strArray1[i].split(',');
        console.log( cells[0],cells[1],cells[2],cells[3] );
    }
}