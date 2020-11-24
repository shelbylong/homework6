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
	video.currentTime = video.currentTime() + 5;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	var vid = document.getElementById("myVideo");
	if (vid.muted){
		video.muted=false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
	else{
		video.muted=true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this.value);
	video.volume = this.value/100;
	let newVol = (this.value)*100 + "%";
	document.getElementById("volume").innerHTML = newVol;
});
