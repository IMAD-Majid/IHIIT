var workoutElm = document.getElementById("workout-ui");
var exerciseNameElm = document.getElementById("name");
var exerciseGifElm = document.getElementById("workout-gif");
var timerElm = document.getElementById("timer");
var progressElm = document.getElementById("progress");
var reportElms = document.querySelectorAll("#progress-container, #progress-container *");
var supportLink = document.querySelector("a");

function randRange(minV, maxV) {
    return parseInt(minV + (Math.random() * (maxV - minV)));
}
function shuffleArray(targetArr) {
    let arrSize = targetArr.length;
    let a, b, t, shuffles = randRange(arrSize / 2, arrSize * 10);
    for (let i = 0; i < shuffles; i++) {
        a = randRange(0, arrSize)
        b = randRange(0, arrSize)

        t = targetArr[a]
        targetArr[a] = targetArr[b]
        targetArr[b] = t
    }
}

primary = [
    "Jumping Jacks",
    "Mountain Climbers",
    "Burpees",
    "High Knees",
    "Plank Jacks",
    "Side Plank",
    "Jump Squat",
    "Push-ups",
    "Bicycle Crunches",
    "Jumping Lunges",
    "Russian Twists",
    "Explosive Push-ups",
    "Plank Hold",
    "Jumping Squats",
    "Diamond Push-ups",
    "Sit-ups",
    "Shoulder Taps",
    "Leg Raises",
    "Superman Plank",
    "Wall Sit"
]
shuffleArray(primary);

var exercises = [];
const maxExercises = 30;

completed = 0;
for (let selectedExercise = 0; selectedExercise < maxExercises; selectedExercise++) {
	exercises.push(primary[selectedExercise % primary.length]);
}

var btn = document.querySelector("button");
btn.addEventListener("click", start);

function start() {
    workoutElm.classList.toggle("hidden");
    progressElm.textContent = maxExercises;
    btn.style.display = "none";
    nextExercise()
}
function nextExercise() {
    let exerciseName = exercises[completed];

    workoutElm.className = "exercise";
    exerciseNameElm.textContent = exerciseName;
    exerciseGifElm.src = "gifs/" + exerciseName + ".gif";
    exerciseGifElm.classList.toggle("hidden");

    var duration = 45;
    timerElm.textContent = duration;
    var timer = setInterval(() => {
        duration--;
        timerElm.textContent = duration;
        if (duration <= 0) {
            clearInterval(timer);
            completed++;
            progressElm.textContent = maxExercises - completed;
            if (completed % 10) {
                exerciseRest();
            } else {
                if (completed < maxExercises) {
                    roundRest()
                } else {
                    reportElms.forEach((elm) => {
                        elm.style.backgroundColor = "yellow";
                        elm.style.color = "black";
                    });

                    workoutElm.classList.toggle("hidden");
                    exerciseGifElm.classList.toggle("hidden");
                    supportLink.style.display = "flex";
                }
            }
        }
    }, 1000);
}
function exerciseRest() {
    workoutElm.className = "rest";
    exerciseGifElm.classList.toggle("hidden");

    exerciseNameElm.textContent = "REST, REST, REST, REST";
    var duration = 13;
    timerElm.textContent = duration;
    var timer = setInterval(() => {
        duration--;
        timerElm.textContent = duration;
        if (duration <= 0) {
            clearInterval(timer);
            nextExercise();
        }
    }, 1000);

}
function roundRest() {
    workoutElm.className = "roundrest";
    exerciseGifElm.classList.toggle("hidden");

    exerciseNameElm.textContent = "*** ROUND " + (Math.floor(completed / 10)) + " REST ***";
    var duration = 30;
    timerElm.textContent = duration;
    var timer = setInterval(() => {
        duration--;
        timerElm.textContent = duration;
        if (duration <= 0) {
            clearInterval(timer);
            nextExercise();
        }
    }, 1000);

}
