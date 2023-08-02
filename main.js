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
    "Jumping Jacks":"",
    "Mountain Climbers":"",
    "Burpees":"",
    "High Knees":"",
    "Plank Jacks":"",
    "Squat Jumps":"",
    "Push-ups":"",
    "Bicycle Crunches":"",
    "Alternating Lunges":"",
    "Russian Twists":"",
    "Tuck Jumps":"",
    "Plank Hold":"",
    "Jump Squats":"",
    "Tricep Dips":"",
    "Sit-ups":"",
    "Alternating Side Lunges":"",
    "Plank Shoulder Taps":"",
    "Leg Raises":"",
    "High Plank Knee to Elbow":"",
    "Wall Sit":"",
    "Jumping Lunges":"",
    "Plank with Shoulder Taps":"",
    "Mountain Climber Twists":"",
    "Single-Leg Glute Bridges":"",
    "Side Plank with Hip Dips":"",
    "Alternating Reverse Lunges":"",
    "Spiderman Push-ups":"",
    "Skater Jumps":"",
    "V-Ups":"",
    "Superman Plank":""
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

secondary = [
    "Jumping Lunges",
    "Plank with Shoulder Taps",
    "Mountain Climber Twists",
    "Single-Leg Glute Bridges",
    "Side Plank with Hip Dips",
    "Alternating Reverse Lunges",
    "Spiderman Push-ups",
    "Skater Jumps",
    "V-Ups",
    "Superman Plank"
]

// random exercises order
shuffleArray(primary)
shuffleArray(secondary)

var exercises = [];
completed = 0;
var pexercise = 0
for (var sexercise=0; sexercise<10; sexercise++){
    for (let i=0; i<4; i++){
        exercises.push(primary[pexercise+i]);
    }
    pexercise += 4;
    pexercise %= 20;
    exercises.push(secondary[sexercise]);
}

var btn = document.querySelector("button");
btn.addEventListener("click", start);

function start(e){
    var div = document.querySelector("#workout-ui");
    div.style.display = "block";
    e.target.style.display = "none";
    nextExercise()
}
function nextExercise(){
    var workoutElms = document.querySelectorAll("#workout-ui, #workout-ui *");
    workoutElms.forEach((elm)=>{elm.style.backgroundColor = "lightblue"});
    var exerciseNameElm = document.querySelector("#name");
    exerciseNameElm.textContent = exercises[completed];
    var timerElm = document.querySelector("#timer");
    var duration = 45;
    timerElm.textContent = duration;
    var timer = setInterval(()=>{
        duration --;
        timerElm.textContent = duration;
        if (duration <= 0){
            clearInterval(timer);
            completed ++;
            var progressElm = document.querySelector("#progress");
            progressElm.textContent = completed;
            if (completed % 10){
                exerciseRest();
            } else{
                if (completed != 50){
                    roundRest()
                } else{
                    var reportElms = document.querySelectorAll("#progress-container, #progress-container *");
                    reportElms.forEach((elm)=>{
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
function exerciseRest(){
    var workoutElms = document.querySelectorAll("#workout-ui, #workout-ui *");
    workoutElms.forEach((elm)=>{elm.style.backgroundColor = "lightgreen"});
    var exerciseNameElm = document.querySelector("#name");
    exerciseNameElm.textContent = "REST";
    var timerElm = document.querySelector("#timer");
    var duration = 13;
    timerElm.textContent = duration;
    var timer = setInterval(()=>{
        duration --;
        timerElm.textContent = duration;
        if (duration <= 0){
            clearInterval(timer);
            nextExercise();
        }
    }, 1000);

}
function roundRest(){
    var workoutElms = document.querySelectorAll("#workout-ui, #workout-ui *");
    workoutElms.forEach((elm)=>{elm.style.backgroundColor = "yellow"});
    var exerciseNameElm = document.querySelector("#name");
    exerciseNameElm.textContent = "ROUND " + (Math.floor(completed/10)) + " REST";
    var timerElm = document.querySelector("#timer");
    var duration = 30;
    timerElm.textContent = duration;
    var timer = setInterval(()=>{
        duration --;
        timerElm.textContent = duration;
        if (duration <= 0){
            clearInterval(timer);
            nextExercise();
        }
    }, 1000);

}
