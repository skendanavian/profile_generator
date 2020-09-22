const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInfo = {};

rl.question('What is your name? ', (answer) => {
  userInfo.name = answer;

  rl.question('What is an activity you like to do? ', (answer) => {
    userInfo.activity = answer;


    rl.question('What music do you listen to when doing that activity? ', (answer) => {
      userInfo.music = answer;


      rl.question('What is your favourite meal of the day? ', (answer) => {
        userInfo.mealTime = answer;


        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          userInfo.mealCourse = answer;


          rl.question('What is your favourite sport? ', (answer) => {
            userInfo.sport = answer;


            rl.question('What is your superpower? In a few words, what are you amazing at? ', (answer) => {
              userInfo.superPower = answer;
              const bio = `
                  ${userInfo.name} really loves eating ${userInfo.mealCourse} for ${userInfo.mealTime}. He pretty much has this everyday. 
              When not eating, ${userInfo.name} also likes to ${userInfo.activity} and especially listening to ${userInfo.music} while doing it. 
              ${userInfo.name}'s absolute favourite sport is ${userInfo.sport} and has the super power of ${userInfo.superPower}!
              `
              process.stdout.write(bio);
              rl.close();
            })
          })
        })
      })
    })
  })
});


