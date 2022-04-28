window.addEventListener("keydown", function(ev) {
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
    if(!audio) return
    audio.play()
})