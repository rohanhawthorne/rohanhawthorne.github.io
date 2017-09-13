

    
    //questions and answers storage
  const myQuestions = [
    {
      question: "What can be found in the day but more often at night, whenever it forms it may be deep or light?",
      answers: {
        a: "Sleep",
        b: "Moonlight",
        c: "Black Hole",
        d: "I don't know"
      },
      correctAnswer: "a"
    },
    {
      question: "What has two hands, a round face, always runs, but stays in place?",
      answers: {
        a: "Moon",
        b: "Ants",
        c: "Clock",
        d: "I don't know"
      },
      correctAnswer: "c"
    },
    {
      question: "I'm infront of you, but you can hardly see me. Wherever I go thought follows close behind. What am I?",
      answers: {
        a: "Shadow",
        b: "Mind",
        c: "Nose",
        d: "I don't know"
      },
      correctAnswer: "b"
    },
      {
      question: "You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What did you eat?",
      answers: {
        a: "Egg",
        b: "Chicken",
        c: "Cabbage",
        d: "I don't know"
      },
      correctAnswer: "b"
    },
      {
      question: "I have so many problems that people do not understand, that's why some people hate me so much. What am I?",
      answers: {
        a: "Sun",
        b: "Bacteria",
        c: "HomeWork",
        d: "I don't know"
      },
      correctAnswer: "c"
    }
  ];
//answers storage
const myAnswers = [
    {
      question1: "What can be found in the day but more often at night, whenever it forms it may be deep or light?",
      answers1: {
        a: "Sleep"
       
      },
      correctAnswer: "a"
    },
    {
      question1: "What has two hands, a round face, always runs, but stays in place?",
      answers1: {
       
        c: "Clock"
        
      },
      correctAnswer: "c"
    },
    {
      question1: "I'm infront of you, but you can hardly see me. Wherever I go thought follows close behind. What am I?",
      answers1: {
      
        b: "Mind"
       
      },
      correctAnswer: "b"
    },
      {
      question1: "You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What did you eat?",
      answers1: {
        
        b: "Chicken"
        
      },
      correctAnswer: "b"
    },
      {
      question1: "I have so many problems that people do not understand, that's why some people hate me so much. What am I?",
      answers1: {
        c: "HomeWork"
      },
      correctAnswer: "c"
    }
  ];
//build the quiz page
  function buildQuiz() {  
    //html output
    const output = [];
 
    // for each question
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
      
     //collect their given choices
      for (letter in currentQuestion.answers) {
      
        answers.push(
            `<label id="radio" ><input type="radio" onclick="play();" name="question${questionNumber}" value="${letter}" data-mini="true">${letter} :
              ${currentQuestion.answers[letter]} </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
          `<div class="slide">
          <div class="riddleContent">${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")}</div>
         </div>`
      );
    });
   
// combine output into the quiz container
    quizContainer.innerHTML = output.join("");
//    
  }
//reset the radio buttons
function resetme(){
    window.location.reload();
    load();
}
//play sounds
function play(){
       var audioClick = document.getElementById("audioCLick");
       audioClick.play();
}

//countdown timer variables

var timeLeft = 40;
var elem = document.getElementById('timer');
var timerId; 
function startTimer(){
    timerId = setInterval(countdown, 1000);
}

function playTickTock(){
    var audioTick = document.getElementById("audioTickTock");
    audioTick.play();
}
//play game overfunction    
function playEnd(){
    var gameover = document.getElementById("gameover");
    gameover.play();
}
    //countdown timer
function countdown() {
    if(timeLeft == 7){
        playTickTock();
        timeLeft--;
    }
    if(timeLeft == 2){
        playEnd();
        timeLeft--;
    }
    if (timeLeft == 0) {
        timesUp();
    clearTimeout(timerId);
    window.location.href = "#third";
      showResults();
        
  } else {
    elem.innerHTML = "Time left = " + timeLeft;
    timeLeft--;
  }
}
    

    
function stopTimer(){
console.log("timercleared");
    clearInterval(timerId);
}

//add times up if use runs out of time
function timesUp(){
    console.log("timesup Called");
    const timesUp = document.getElementById("timesUp");
    timesUp.innerHTML = "Times Up!"; 
}
//build the answer screen
function buildAnswers(){
      const output1 = [];
     myAnswers.forEach((currentQuestion, questionNumber)=> {
        const answers = [];
        for (letter in currentQuestion.answers1){
            answers.push(
              `<label id="radio1" >${letter} :
              ${currentQuestion.answers1[letter]} </label>`
            
            );
        }
        output1.push(
            `<div class="slide1">
          <div class="riddleContent">${currentQuestion.question1} </div>
        <div class="answers"> ${answers.join("")}</div>
         </div>`
        );
    });
    quizContainer2.innerHTML = output1.join("");
}

//show results on the results page
  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      } 
    });
     sessionStorage.setItem("Game1", `${numCorrect}/${myQuestions.length}`);
      var saveGame = sessionStorage.getItem("Game1");
      resultsContainer.innerHTML = saveGame;
      
  }

//hide the reset button
const resetButton = document.getElementById("reset");
resetButton.style.display="none";

//reset session and previouse game
function history1(){
const restart = document.getElementById("homebtnstart");
const gethistory = document.getElementById("history");
const resetButton = document.getElementById("reset");
    if (sessionStorage['Game1']) {
        restart.style.display = "none";
        resetButton.style.display="inline-block";
 var saveGame = sessionStorage.getItem("Game1");
 gethistory.innerHTML = "Last Score : "+saveGame;
}else
    {
        restart.style.display = "inline-block";
        resetButton.style.display="none";
      console.log("no games");  
    }
    
}


//go shrow each slide when click next
  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
   
      submitButton.style.display = "inline-block";
      
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }
//answer screen slide
  function showSlide1(a) {
    slides1[currentSlide1].classList.remove("active-slide1");
    slides1[a].classList.add("active-slide1");
    currentSlide1 = a;
    
    if (currentSlide1 === slides1.length - 1) {
      
      nextButton1.style.display="none";    
    } else {
      nextButton1.style.display = "inline-block";
    }
  }
//slide functions
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showNextSlide1() {
    showSlide1(currentSlide1 + 1);
  }


  //mute the audio when switched on
  function muteAudio(){
      console.log("mute");
      const AudioTick = document.getElementById("audioTickTock");
       const AudioClick = document.getElementById("audioCLick");
       const AudioOver = document.getElementById("gameover");
         AudioTick.muted = true;
      AudioClick.muted = true;
      AudioOver.muted = true;
  } 

//unmute the audio when switched off
function unmuteAudio(){
      console.log("unmute");
      const AudioTick = document.getElementById("audioTickTock");
       const AudioClick = document.getElementById("audioCLick");
       const AudioOver = document.getElementById("gameover");
         AudioTick.muted = false;
      AudioClick.muted = false;
      AudioOver.muted = false;
  } 

document.getElementById("checkbox").onchange = function() {
  if(this.checked) {
   muteAudio();
  } else {
      unmuteAudio();
  }
}
//save the mute value to localStorage
  function save(){
    var checkbox = document.getElementById('checkbox');
    localStorage.setItem('checkbox', checkbox.checked);
}
//load the mute value from localStorage
  function load(){    
var checked = localStorage.getItem('checkbox');
      if(checked == "true"){
   document.getElementById("checkbox").checked = checked; 
}
  }
//localStorage.clear();
load();
//vairables
  const quizContainer2 = document.getElementById("quiz2");
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();
  buildAnswers();
  showResults();

  const nextButton = document.getElementById("next");
  const nextButton1 = document.getElementById("next1");
  const slides = document.querySelectorAll(".slide");
  const slides1 = document.querySelectorAll(".slide1");
  let currentSlide = 0;
  let currentSlide1 = 0;

  showSlide(0);
  showSlide1(0);

 
  nextButton.addEventListener("click", showNextSlide);
  nextButton1.addEventListener("click", showNextSlide1);


//localstorage check function
$(document).ready(function() {
  if (Modernizr.localstorage) { 
   console.log("Local storage is supported by this browser"); 
  }
  else {
       $('.message').text("Unfortunately your browser doesn't support local storage");
    $('.message').show();
  }
    
    //check if audio is supported
if (Modernizr.webaudio) {
  console.log("Audio is supported"); 
} else {
 $('.message').text("Unfortunately your browser doesn't support audio");
    $('.message').show();
}
});



//clear results
  function clearResults(){
      console.log("Session storage cleared");
     sessionStorage.clear();
  }


//adjust the text heading to fit the screen and curve it
$(document).ready(function() {
$('#demo5').circleType({fitText:true, radius: 384});
    $('#mark').fitText({fitText:true});
    $('.riddleContent').fitText({fitText:true});
});


//settings model window
$(document).ready(function () {
    $("#homebtnsettings").click(function () {
        $("#myModal").css("display", "block");
    });
    
   $(".close").click(function () {
        $("#myModal").css("display", "none");
    });
    
});





