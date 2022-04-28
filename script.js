function playSound(ev) {
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.toggle("playing")
}

window.addEventListener("keydown", playSound)

function removeTransition(ev) {
    if(ev.propertyName !== "transform") return
    this.classList.remove("playing")
}

const keys = Array.from(document.querySelectorAll(".key"))
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition)
})

