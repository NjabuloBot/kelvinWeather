//constant kelvin variable that has the value of 293
const kelvin = 293;

/*Code below converts kelvins to celcius by subtracting 273 
and assigning to a variable named celcius*/
let celsius = kelvin - 273;

/*Code below converts celcius to fahrenhei and the value
attained to a variable called fahrenheit*/
let fahrenheit = Math.floor(celsius *(9/5) + 32);//Math.floor rounds off the attained value.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);