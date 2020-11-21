var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*.9;
	console.log(video.playbackRate);
});
	

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log(video.currentTime)
});

