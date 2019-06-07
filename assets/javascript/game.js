//TODO:when start button pressed bring up first question and start timer
//TODO:make the questions appear on screen and then go away
//TODO:when the question is answered bring up either a right or wrong screen for a sec then move one
//TODO:after 10 questions give them a final score and put up a restart button

var game = {
    questions: [
        {
            question: 'The beaver is the national emblem of which country?' ,
            'ans1': 'Sweden',
            'ans2': 'Canada',
            'ans3': 'Norway',
            'ans4': 'Finland',
            correct:'Canada'
        },
        {
            question: 'How many players are there in a baseball team?',
            'ans1': 'eight',
            'ans2': 'twelve',
            'ans3': 'nine',
            'ans4': 'fourteen',
            correct: 'nine'
        },
        {
            question: 'Which TV character said, “Live long and prosper”?',
            'ans1': 'Spock',
            'ans2': 'Luke Skywalker',
            'ans3': 'Angel',
            'ans4': 'Buffy',
            correct: 'Spock'
        },
        {
            question: 'What is the name of Batman’s butler?',
            'ans1': 'Jeeves',
            'ans2': 'Cato',
            'ans3': 'Charles',
            'ans4': 'Alfred',
            correct: 'Alfred'
        },
        {
            question: 'The average human body contains how many pints of blood?',
            'ans1': '5',
            'ans2': '2',
            'ans3': '12',
            'ans4': '9',
            correct: '9'
        },
        {
            question: 'Hg is the chemical symbol of which element?',
            'ans1': 'Mercury',
            'ans2': 'Halogen',
            'ans3': 'Neon',
            'ans4': 'Hulkhogen',
            correct: 'Mercury'
        },
        {
            question:  'In Fahrenheit, at what temperature does water freeze?',
            'ans1': '32 degrees',
            'ans2': '0 degrees',
            'ans3': '-32 degrees',
            'ans4': 'fish degrees',
            correct: '32 degrees'
        },
        {
            question: 'Which is the highest waterfall in the world?',
            'ans1': 'Niagra Falls',
            'ans2': 'Really Tall Falls',
            'ans3': 'Angel Falls',
            'ans4': 'Sealand',
            correct:'Angel Falls'
        },
        {
            question: 'The Statue of Liberty was given to the US by which country?',
            'ans1': 'France',
            'ans2': 'Sealand',
            'ans3': 'The UK',
            'ans4': 'Germany',
            correct: 'France'
        },
        {
            question: 'Which of the planets is closest to the sun?',
            'ans1': 'Mercury',
            'ans2': 'Venus',
            'ans3': 'Pluto',
            'ans4': 'Zeus',
            correct:'Mercury'
        }
    ],

    questionsAnswered: 0,

    questionsCorrect: 0,

    questionPrinter: function() {
        document.getElementById('question').textContent = this.questions[this.questionsAnswered].question;
        for (let i = 0; i < 4; i++) {
            let grabber = i+1;
            document.getElementById('question'+ grabber).textContent = this.questions[this.questionsAnswered]['ans'+ grabber];
        }
    },

    quizStarter: function() {
        game.questionPrinter(); //look up bind later?
        console.log('hello?')
    },

    restart: function(){
        document.getElementById('question').textContent = "";
        for (let i = 0; i < 4; i++) {
            let grabber = i+1;
            document.getElementById('question'+ grabber).textContent = "";
        }

    }
}

window.onload = function() {
    document.getElementById('startButton').onclick = game.quizStarter;

    document.getElementsByClassName('questions').onclick = console.log('ive been clicked');

}