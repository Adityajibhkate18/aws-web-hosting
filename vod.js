// Get the video element
var video = document.getElementById("videoPlayer");

// Play the video
function playVideo() {
    video.play();
}

// Pause the video
function pauseVideo() {
    video.pause();
}

// Mute the video
function muteVideo() {
    video.muted = true;
}

// Unmute the video
function unmuteVideo() {
    video.muted = false;
}

// Make the video go fullscreen
function fullscreenVideo() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}
