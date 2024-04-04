// //Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences =
    `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
    ;

const startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", startTest)

const inputField = document.querySelector("#input")
const paraText = document.querySelector("#sentence")
const timeText = document.querySelector("#timer")
const resultBox = document.querySelector("#result")
const retryButton = document.querySelector("#retry-btn")
const wordsPerMin = document.querySelector("#speed")
const accuracyText = document.querySelector("#accuracy")
const timeGiven = 30
let timeLeft = timeGiven
let correctWordsTyped = 0
let typingSpeed = 0;
let correctCharacter = 0;
let totalCharInSentence = 0;

function startTest() {
    inputField.disabled = false
    paraText.textContent = sentences
    startButton.disabled = true
    enableTimer()
}

function enableTimer() {
    timeText.textContent = timeLeft;
    const timeingLeftGiven = setInterval(() => {
        timeLeft--;
        timeText.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeingLeftGiven)
            endTest()
        }
    }, 1000)
    // clearInterval(timeingLeftGiven)

}
function endTest() {

    resultBox.style.display = "block";
    inputField.disabled = true;
    calculateSpeedAndAccuracy();
    retryButton.addEventListener("click", restartTest)
}

function restartTest() {
    startButton.disabled = false
    resultBox.style.display = "none";
    resetTest();
    // startTest();
}
function resetTest() {
    inputField.value = ""
    timeLeft = timeGiven
    correctCharacter = 0
}

function calculateSpeedAndAccuracy() {
    let sentencesWordArray = sentences.trim().split(" ")
    let newSentencesWordArray = sentencesWordArray.filter((elem) => {
        if (!elem == " ") {
            return elem
        }
    })
    for (let i of newSentencesWordArray) {
        totalCharInSentence = totalCharInSentence + i.length
    }
    // console.log(totalCharInSentence)
    let typedWords = inputField.value.trim().split(" ")
    let newtypedWords = typedWords.filter((elem) => {
        if (!elem == " ") {
            return elem
        }
    })
    for (let i = 0; i < newtypedWords.length; i++) {
        if (newSentencesWordArray[i] == newtypedWords[i]) {
            correctWordsTyped++;
        }
    }
    for (let i = 0; i < newtypedWords.length; i++) {
        let minLength = Math.min(newSentencesWordArray[i].length, newtypedWords[i].length)
        for (let j = 0; j < minLength; j++) {
            if (newSentencesWordArray[i][j] == newtypedWords[i][j]) {
                correctCharacter++;
            }
        }
    }
    typingSpeed = (correctWordsTyped / timeGiven) * 60
    setTypingspeed(typingSpeed);
    let accuracyOfTest = ((correctCharacter / totalCharInSentence) * 100).toFixed(2)
    setAccuracy(accuracyOfTest);

}

function setTypingspeed(speed) {
    wordsPerMin.textContent = speed

}
function setAccuracy(acc) {
    accuracyText.textContent = acc
}

// the quic brown fox jump

// new  code

// const sentences =
//     `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`
//     ;

// let currentSentenceIndex = 0;
// let startTime, endTime;
// let timerInterval;

// const sentenceElement = document.getElementById("sentence");
// const inputElement = document.getElementById("input");
// const startButton = document.getElementById("start-btn");
// const timerElement = document.getElementById("timer");
// const speedElement = document.getElementById("speed");
// const accuracyElement = document.getElementById("accuracy");
// const resultElement = document.getElementById("result");
// const retryButton = document.getElementById("retry-btn");


// function startTest() {
//     sentenceElement.innerHTML = sentences;
//     inputElement.value = "";
//     inputElement.disabled = false;
//     inputElement.focus();
//     startButton.disabled = true;
//     startTime = new Date();
//     timerInterval = setInterval(updateTimer, 1000);
//     setTimeout(endTest, 30000); // End the test after 30 seconds
// }




// function updateTimer() {
//     const currentTime = new Date();
//     const elapsedTime = Math.floor((currentTime - startTime) / 1000);
//     const remainingTime = 30 - elapsedTime;
//     const minutes = Math.floor(remainingTime / 60);
//     const seconds = remainingTime % 60;
//     timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }




// function endTest() {
//     clearInterval(timerInterval);
//     endTime = new Date();
//     const elapsedTime = Math.floor((endTime - startTime) / 1000);
//     const typedSentence = inputElement.value.trim();
//     const correctSentence = sentenceElement.textContent.trim();

//     let speed = 0;
//     let typedWords = [];
//     if (typedSentence != "") {
//         typedWords = typedSentence.split(" ");
//     }

//     const correctWords = correctSentence.split(" ");
//     console.log(correctWords);
//     let correctCount = 0;
//     let ind = 0;
//     typedWords.forEach((word, index) => {
//         if (word === correctWords[index]) {
//             correctCount++;
//             ind = index;
//         }
//     });
//     if (typedSentence != "") {
//         speed = Math.floor(((correctCount) / 30) * 60);
//     }
//     const accuracy = (correctCount / correctWords.length) * 100;
//     speedElement.textContent = speed;
//     accuracyElement.textContent = accuracy.toFixed(2);
//     resultElement.style.display = "block";
//     retryButton.focus();
// }




// startButton.addEventListener("click", startTest);



// retryButton.addEventListener("click", () => {
//     resultElement.style.display = "none";
//     startButton.disabled = false;
//     inputElement.value = "";
// });