const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is your favourite food? ', (food) => {
    rl.question('What is your favourite activity? ', (activity) => {
      rl.question('What is your favourite meal of the day? ', (meal) => {
        rl.question('What is your favourite sport? ', (sport) => {
          rl.question('What is your favourite superpower? ', (superpower) => {
            rl.question('What is your favourite colour? ', (color) => {
              console.log(`${name} loves ${food} and would eat them for ${meal}. He likes ${activity} 
              and would make ${superpower} his superpower if he could. His favourite sport is ${sport} and he does it
              in a ${color} uniform.`)
              rl.close();
            });
          });
        });
      });  
    }); 
  });
});

