// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) === 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(`Your numbers are ${n1}, ${n2}, ${n3}, ${n4} \n\
    The sum of 4 numbers is 50 - ${isSum50} \n\
    Two of the numbers are odd - ${isTwoOdd} \n\
    No number larger than 25 - ${isUnder25} \n\
    All are unique numbers - ${isUnique} \n\
    and the numbers are valid according to the provided criteria - ${isValid}`);

    //Check if all numbers are divisible by 5. Cache the result in a variable

    const isDivisibleby5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
    console.log(`All Numbers divisible by 5 - ${isDivisibleby5}`);

    //Check if the first number is larger than the last. Cache the result in a variable
    const isn1Largern4 = (n1 > n4);
    console.log(`${n1} larger than ${n4} - ${isn1Largern4}`);

    // Accomplish the following arithmetic chain:
    // Subtract the first number from the second number.
    let n2minusn1 = n2 - n1;
    console.log(`${n2}-${n1} = ${n2minusn1}`);

    // Multiply the result by the third number.
    let product = n2minusn1 * n3;
    console.log(`Multiplication of ${n2minusn1} * ${n3} = ${product}`);

    // Find the remainder of dividing the result by the fourth number.
    let remainder = product % n4;
    console.log(`Remainder of dividing ${product} / ${n4} = ${remainder}`);

    //The distance of the trip, in total, is 1,500 miles.
    // Your car’s fuel efficiency is as follows:  
    // You have a fuel budget of $175.
    // The average cost of fuel is $3 per gallon.

    // At 55 miles per hour, you get 30 miles per gallon.
    // How many gallons of fuel will you need for the entire trip?
    // Will your budget be enough to cover the fuel expense?
    // How long will the trip take, in hours?

    const distance = 1500;
    const budget = 175;
    const costFuel = 3;

    const speed55 = 55;
    const gallon55 = 30;
    
    let hour55 = distance/speed55;      //27.3 hr
    let fuel55 = distance / gallon55    //50 gallon
    let cost55 = fuel55 * costFuel;     // $150
    let isBudgetEnough55 = cost55 < budget;

    // console.log(`At 55 miles/hour and 38 miles/gallon with fuel cost $3/gallon,\n\
    //     Hour taken- ${hour55} hour\n\
    //     Fuel spent - ${fuel55} gallon\n\
    //     Total Fuelcost - \$${cost55} `);
    
    console.log("At 55 miles/hour");

    console.log(`How many gallons of fuel will you need for the entire trip? ${fuel55} gallon`);
    console.log(`Will your budget be enough to cover the fuel expense? ${isBudgetEnough55}`);
    console.log(`How long will the trip take, in hours? ${hour55} hour`);

    // At 60 miles per hour, you get 28 miles per gallon.

    const speed60 = 60;
    const gallon60 = 28;
        
    let hour60 = distance/speed60;      //25 hr
    let fuel60 = distance / gallon60    //53.57 gallon
    let cost60 = fuel60 * costFuel;     // $160.71
    let isBudgetEnough60 = cost60 < budget;

    // console.log(`At 60 miles/hour and 28 miles/gallon with fuel cost $3/gallon,\n\
    //     Hour taken- ${hour60} hour\n\
    //     Fuel spent - ${fuel60} gallon\n\
    //     Total Fuelcost - \$${cost60} `);

    console.log("At 60 miles/hour");

    console.log(`How many gallons of fuel will you need for the entire trip? ${fuel60} gallon`);
    console.log(`Will your budget be enough to cover the fuel expense? ${isBudgetEnough60}`);
    console.log(`How long will the trip take, in hours? ${hour60} hour`);
    
    // At 75 miles per hour, you get 23 miles per gallon.

    const speed75 = 75;
    const gallon75 = 23;
        
    let hour75 = distance/speed75;      //20 hr
    let fuel75 = distance / gallon75    //65-22 gallon
    let cost75 = fuel75 * costFuel;     // $195.66
    let isBudgetEnough75 = cost75 < budget;

    // console.log(`At 75 miles/hour and 23 miles/gallon with fuel cost $3/gallon,\n\
    //     Hour taken- ${hour75} hour\n\
    //     Fuel spent - ${fuel75} gallon\n\
    //     Total Fuelcost - \$${cost75} `);

    console.log("At 75 miles/hour");
    
    console.log(`How many gallons of fuel will you need for the entire trip? ${fuel75} gallon`);
    console.log(`Will your budget be enough to cover the fuel expense? ${isBudgetEnough75}`);
    console.log(`How long will the trip take, in hours? ${hour75} hour`);

    // Which makes the most sense for the trip?
    const isValid55 = isBudgetEnough55 && ((isBudgetEnough60 && hour55 < hour60)  || (isBudgetEnough75 && hour55 < hour60));
    const isValid60 = isBudgetEnough60 && ((isBudgetEnough55 && hour60 < hour55)  || (isBudgetEnough75 && hour60 < hour75));    
    const isValid75 = isBudgetEnough75 && ((isBudgetEnough55 && hour75 < hour55)  || (isBudgetEnough60 && hour75 < hour60));

    console.log(`55 miles/hour makes most sense for the trip - ${isValid55}`);
    console.log(`60 miles/hour makes most sense for the trip - ${isValid60}`);
    console.log(`75 miles/hour makes most sense for the trip - ${isValid75}`);


