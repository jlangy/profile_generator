const readline = require('readline');

const questions = ['What is your name? ', 
  "What's an activity you like doing'? ", 
  'What do you listen to while doing that? ',
  'Which meal is your favourite (eg: dinner, brunch, etc.) ',
  "What's your favourite thing to eat for that meal? ",
  'Which sport is your absolute favourite? ',
  'What is your superpower? In a few words, tell us what you are amazing at! ',
]

const answers = [];
let i = 0;

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = answer => {
  answers.push(answer);  
  if(i === questions.length - 1){
    console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
    r1.close();
  } else {
    i++;
    r1.question(questions[i], askQuestion);
  }
}

r1.question('What is your name? ', askQuestion); 