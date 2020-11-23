/*
* The EnergyFormula program implements an application that
* determines the energy released from a mass which the user
* inputs.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-11-23 
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require, process*/

// Constant variable.
const speedOfLight = 299800000;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// input
rl.question('Enter the mass(kg) of the object: ', (mass) => {
  // process
  var energy = (mass * Math.pow(speedOfLight, 2));
 
  // output
  console.log();
  console.log();
  console.log(`The object would release ${energy} joules of energy.`);

  rl.close();
});
