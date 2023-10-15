  
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
completed = 0;
let pexercise = 0;
for (let specialExercise = 0; specialExercise < 5; specialExercise++) {
    for (let i = 0; i < 5; i++) {
        exercises.push(primary[pexercise + i]);
    }
    pexercise += 5;
    exercises.push(primary[specialExercise]);
}

var btn = document.querySelector("button");
btn.addEventListener("click", start);

console.log(exercises.length)

function start(e) {
    var div = document.querySelector("#workout-ui");
    div.style.display = "block";
    e.target.style.display = "none";
    nextExercise()
}
function nextExercise() {
    var workoutElm = document.querySelector("#workout-ui");
    workoutElm.className = "exercise";

    var exerciseNameElm = document.querySelector("#name");
    exerciseNameElm.textContent = exercises[completed];
    var timerElm = document.querySelector("#timer");
    var duration = 45;
    timerElm.textContent = duration;
    var timer = setInterval(() => {
        duration--;
        timerElm.textContent = duration;
        if (duration <= 0) {
            clearInterval(timer);
            completed++;
            var progressElm = document.querySelector("#progress");
            progressElm.textContent = completed;
            if (completed % 10) {
                exerciseRest();
            } else {
                if (completed != 50) {
                    roundRest()
                } else {
                    var reportElms = document.querySelectorAll("#progress-container, #progress-container *");
                    reportElms.forEach((elm) => {
                        elm.style.backgroundColor = "yellow";
                        elm.style.color = "black";
                    });

                    var workoutElm = document.querySelector("#workout-ui");
                    workoutElm.style.display = "none";
                }
            }
        }
    }, 1000);
}
function exerciseRest() {
    var workoutElm = document.querySelector("#workout-ui");
    workoutElm.className = "rest";

    var exerciseNameElm = document.querySelector("#name");
    exerciseNameElm.textContent = "REST, REST, REST, REST";
    var timerElm = document.querySelector("#timer");
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
    var workoutElm = document.querySelector("#workout-ui");
    workoutElm.className = "roundrest";

    var exerciseNameElm = document.querySelector("#name");
    exerciseNameElm.textContent = "*** ROUND " + (Math.floor(completed / 10)) + " REST ***";
    var timerElm = document.querySelector("#timer");
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
