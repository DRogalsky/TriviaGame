let startButton = document.getElementById('startButton');
let restartButton = document.getElementById('restart');

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
    
    timer: 100,

    timerHolder: "",

    timerCounter: function() {
        game.timer--
        document.getElementById('timer').textContent = game.timer + ' seconds';
    },

    questionPrinter: function() {
        document.getElementById('question').textContent = this.questions[this.questionsAnswered].question;
        for (let i = 0; i < 4; i++) {
            let grabber = i+1;
            document.getElementById('question'+ grabber).textContent = this.questions[this.questionsAnswered]['ans'+ grabber];
        }
    },

    quizStarter: function() {
        game.questionPrinter(); //look up bind later?
        game.timerHolder = setInterval(game.timerCounter, 1000);
        if (game.timer === 0) {
            game.quizFinish();
        }
        startButton.style.display = 'none';
    },

    quizFinish: function() {
        clearInterval(game.timerHolder)
        document.getElementById('question').textContent = 'Quiz Finished!';
        for (let i = 0; i < 4; i++) {
            let grabber = i+1;
            document.getElementById('question'+ grabber).textContent = "";
        }
        document.getElementById('question1').textContent = 'Correct: ' + game.questionsCorrect;
        document.getElementById('question3').textContent = 'Time Left: ' + game.timer; + ' seconds';
        restartButton.style.display = 'inline-block';
        
    },

    quizChecker: function(answer) {
        if (answer === game.questions[game.questionsAnswered].correct) { //put game here cause im unsure how it will interact with the this from the click event
            game.questionsCorrect++
        }
        game.questionsAnswered++
        if(game.questions[game.questionsAnswered] !== undefined) {
            this.questionPrinter();
        } else {
            game.quizFinish();
        }
    },

    restart: function(){
        document.getElementById('question').textContent = "";
        for (let i = 0; i < 4; i++) {
            let grabber = i+1;
            document.getElementById('question'+ grabber).textContent = "";
        }
        game.timer = 100;
        game.questionsAnswered = 0;
        game.questionsCorrect = 0;
        startButton.style.display = 'inline-block';
        restartButton.style.display = 'none';
        document.getElementById('timer').textContent = "";
    }
}

window.onload = function() {
    document.getElementById('startButton').onclick = game.quizStarter;

    let className = document.getElementsByClassName('questions');
    for(i = 0; i < className.length; i++) {
        className[i].addEventListener('click', function(event) {
            let answer = event.path[0].childNodes[0].data;
            game.quizChecker(answer);
        })
    }

    document.getElementById('restart').onclick = game.restart;
}