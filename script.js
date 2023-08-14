// Select an 'audio' element that has a 'data-key'
window.addEventListener("keydown", playSound);

function playSound(e) {
    console.log("Test");
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if (!audio) return;
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    // Rewind audio so you can play it multiple times in a row
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

// Many properties transition but only care about transform coz it's longest
// "this" is what was called aka "key" ; see keys.forEach etc.

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
    console.log("Class removed");
}

// Add event listener to remove transition, instead of setting delay
// Setting delay may cause problems coz already of transition delay in CSS

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));