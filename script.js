'use strict';

var highScore = Number(document.querySelector('.highscore').textContent);
let number = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click',
    () => {
        const guessNo = Number(document.querySelector
            ('.guess').value);


        if (!guessNo) {
            document.querySelector('.message')
                .textContent = "No Number";
        }
        else {
            if (score > 1) {
                if (guessNo === number) {
                    highScore < score ? highScore = score : highScore = highScore;
                    document.querySelector('.highscore').textContent = highScore;
                    document.querySelector('.message').textContent = "Hurray!! correct number";
                    document.querySelector('.number').textContent = number;
                    document.querySelector('body').style.backgroundColor = "#60b347";
                    document.querySelector('.number').style.width = "30rem";
                }
                else if (guessNo > number) {
                    score--;
                    document.querySelector('.score').textContent = score;
                    document.querySelector('.message').textContent = "Too High!!";
                }
                else {
                    score--;
                    document.querySelector('.score').textContent = score;
                    document.querySelector('.message').textContent = "Too Low!!";
                }
            }
            else {
                document.querySelector('.score').textContent = 0;
                document.querySelector('.message').textContent = "You lost this Easy game! Shame on you!";
            }
        }

    });

document.querySelector('.again').addEventListener
    ('click', () => {
        number = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').textContent = "?";
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector
            ('.guess').value = null;
        document.querySelector('body').style.backgroundColor = "#222";
        document.querySelector('.number').style.width = "15rem";
        document.querySelector('.message').textContent = "Start guessing...";
    });