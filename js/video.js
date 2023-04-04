var video = document.getElementById('player1')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const slowerButton = document.getElementById('slower')
const fasterButton = document.getElementById('faster')
const skipButton = document.getElementById('skip')
const muteButton = document.getElementById('mute')
const slider = document.getElementById('slider')
const vintageButton = document.getElementById('vintage')
const origButton = document.getElementById('orig')
const volume = document.querySelector("#volume")

window.addEventListener("load", function () {
	video.autoplay = false
	video.loop = false
})

playButton.addEventListener("click", function () {
	console.log("Play Video")
	video.play()
	console.log("Current volume: " + video.volume)
	volume.textContent = video.volume * 100 + '%'
})

pauseButton.addEventListener("click", function () {
	console.log("Pause Video")
	video.pause()
})

slowerButton.addEventListener("click", function () {
	video.playbackRate *= 0.9
	console.log("New speed is " + video.playbackRate)
})

fasterButton.addEventListener("click", function () {
	video.playbackRate /= 0.9
	console.log("New speed is " + video.playbackRate)
})

skipButton.addEventListener("click", function () {
	console.log("Original location " + video.currentTime)
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
		console.log("Going back to beginning")
	}
	else {
		video.currentTime += 10
	}
	console.log("New location " + video.currentTime)
})

muteButton.addEventListener("click", function () {
	if (video.muted) {
		video.muted = false
		muteButton.textContent = "Mute"
	}
	else {
		video.muted = true
		muteButton.textContent = "Unmute"
	}
})

slider.addEventListener('input', function () {
	video.volume = slider.value / 100
	volume.textContent = video.volume * 100 + '%'
	console.log(video.volume)
})

vintageButton.addEventListener("click", function () {
	video.classList.add('oldSchool')
})

origButton.addEventListener("click", function () {
	video.classList.remove('oldSchool')
})

