for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    // loop ('i' starts at 0; keep going while 'i' < the length of the array which has all the buttons with the .drum class, i.e. the number of drum buttons; and after each iteration, iterate 'i' by 1)
        document.querySelectorAll("button.drum")[i].addEventListener("click", function() {
        // for each iteration of the loop, i.e. for each drum buttom in turn, listen for a mouse click and if detected, run the following function, i.e. the commands below
            var key = this.innerHTML;
            // 'this' refers to the object that has detected the click event, i.e. the BUTTON that was clicked.
            // that line declares a variable, 'drumChar', setting it to the letter INSIDE the button element that was clicked.
            beat(key);
            // NOTE: I COULD HAVE JUST RETURNED THE this.innerHTML RATHER THAN SETTING UP A POINTLESS var, i.e.
            // beat(this.innerHTML);
        })
    }

document.addEventListener("keydown", function(event) {
    // an event listendr added to the entire page that listens for keyboard events - NOTE that keypress is deprecated. In this instance the function has the 'event' input that returns(?) the keyboard event. console.log(event.key) returns the key value.
    var key = event.key; // declares 'key' variable to be event.key
    beat(key); //inputs the 'key' value into the 'beat' function. This allows the variable 'key' which has been declared inside THIS function to be used in another EXTERNAL function called beat().
    // **** LIKE LINE 9, THERE WAS NO NEED FOR THE VARIABLE, I COULD HAVE JUST RETURNED event.key, i.e.
    // beat(event.key);
})

function beat(key) {
// sets up the playing sound as an external function so that it can be used by both 'click' and 'keyboard' events alike.   
    switch (key) {
    // 'switch' appears to be another way of performing 'if else'.
    // This is like saying, if the value of 'drumChar' is... and then it goes through the possible options.
        case "w": // if it is 'w'
            var sound = "tom-1"; // declares 'sound' variable to be played shortly
            break; // stop the switch cycle if the match has been found, otherwise, carries on to the next 'case'.
        case "a":
            var sound = "tom-2";
            break;
        case "s":
            var sound = "tom-3";
            break;
        case "d":
            var sound = "tom-4";
            break;
        case "j":
            var sound = "snare";
            break;
        case "k":
            var sound = "crash";
            break;
        case "l":
            var sound = "kick-bass";
            break;
        default:
            break;
    }
    var audio = new Audio("sounds/" + sound + ".mp3"); //uses the Audio constructor function as explained in WebDev 2022 Angela Yu section 13, lecture 168
    audio.play(); // again, utilising the play function, a method from the Audio constructor function
}




//*********************************************** */
// *** COMPLETE SET OF ORIGINAL CODE USING IF ELSE BELOW

// for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {

// *** loop ('i' starts at 0; keep going while 'i' < the length of the array which has all the buttons with the .drum class, i.e. the number of drum buttons; and after each iteration, iterate 'i' by 1)

    // document.querySelectorAll("button.drum")[i].addEventListener("click", function() {

    // *** for each iteration of the loop, i.e. for each drum buttom in turn, listen for a mouse click and if detected, run the following function, i.e. the commands below

        // console.log(this.innerHTML);
        // this.style.color = "#fff";

        // if (i === 0) {
        //     var sound = "tom-1";
        // } else if (i === 1) {
        //     var sound = "tom-2";
        // } else if (i === 2) {
        //     var sound = "tom-3";
        // } else if (i === 3) {
        //     var sound = "tom-4";
        // } else if (i === 4) {
        //     var sound = "snare";
        // } else if (i === 5) {
        //     var sound = "crash";
        // } else if (i === 6) {
        //     var sound = "kick-bass";
        // }

        // *** 'if else' declares a new 'sound' variable depending on the value of 'i'. NOTE that the project suggestion was to extract the LETTER assigned to each drum and assign a sound according to each letter but this doesn't seem a very sensible way to do it.
        // in that case the 1st condition would be...
        // if (document.querySelectorAll("button.drum")[i].innerHTML === "w")

//         var audio = new Audio("sounds/" + sound + ".mp3");
//             audio.play();
//     });
// }

// OLD CODE EXPLORING HOW TO PLAY AUDIO IN JS found at https://stackoverflow.com/questions/9419263/how-to-play-audio
// function play() {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//   }
