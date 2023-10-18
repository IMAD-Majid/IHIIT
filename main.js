var workoutElm = document.getElementById("workout-ui");
var exerciseNameElm = document.getElementById("name");
var timerElm = document.getElementById("timer");
var progressElm = document.getElementById("progress");
var maxprogressElm = document.getElementById("max-progress");
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
descriptions = {
    "Jumping Jacks": "",
    "Mountain Climbers": "",
    "Burpees": "",
    "High Knees": "",
    "Plank Jacks": "",
    "Squat Jumps": "",
    "Push-ups": "",
    "Bicycle Crunches": "",
    "Alternating Lunges": "",
    "Russian Twists": "",
    "Tuck Jumps": "",
    "Plank Hold": "",
    "Jump Squats": "",
    "Tricep Dips": "",
    "Sit-ups": "",
    "Alternating Side Lunges": "",
    "Plank Shoulder Taps": "",
    "Leg Raises": "",
    "High Plank Knee to Elbow": "",
    "Wall Sit": "",
    "Jumping Lunges": "",
    "Plank with Shoulder Taps": "",
    "Mountain Climber Twists": "",
    "Single-Leg Glute Bridges": "",
    "Side Plank with Hip Dips": "",
    "Alternating Reverse Lunges": "",
    "Spiderman Push-ups": "",
    "Skater Jumps": "",
    "V-Ups": "",
    "Superman Plank": ""
}

primary = [
    "Jumping Jacks",
    "Mountain Climbers",
    "Burpees",
    "High Knees",
    "Plank Jacks",
    "Squat Jumps",
    "Push-ups",
    "Bicycle Crunches",
    "Alternating Lunges",
    "Russian Twists",
    "Tuck Jumps",
    "Plank Hold",
    "Jump Squats",
    "Tricep Dips",
    "Sit-ups",
    "Alternating Side Lunges",
    "Plank Shoulder Taps",
    "Leg Raises",
    "High Plank Knee to Elbow",
    "Wall Sit"
]
shuffleArray(primary);

var exercises = [];
const maxExercises = 30;
maxprogressElm.textContent = maxExercises;

completed = 0;
for (let selectedExercise = 0; selectedExercise < maxExercises; selectedExercise++) {
	exercises.push(primary[selectedExercise % 20]);
}

var btn = document.querySelector("button");
btn.addEventListener("click", start);

function start() {
    workoutElm.style.display = "block";
    btn.style.display = "none";
    nextExercise()
}
function nextExercise() {
    workoutElm.className = "exercise";

    exerciseNameElm.textContent = exercises[completed];
    var duration = 45;
    timerElm.textContent = duration;
    var timer = setInterval(() => {
        duration--;
        timerElm.textContent = duration;
        if (duration <= 0) {
            clearInterval(timer);
            completed++;
            progressElm.textContent = completed;
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

                    workoutElm.style.display = "none";
                    supportLink.style.display = "block";
                }
            }
        }
    }, 1000);
}
function exerciseRest() {
    workoutElm.className = "rest";

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
