function pauseVideo() {
	// pause video

	let videos = document.getElementsByTagName("video"),
	fraction = 0;

	function checkScroll() {

		for (let i = 0; i < videos.length; i++) {

			let video = videos[i];
			let x = video.offsetLeft,
				y = video.offsetTop,
				w = video.offsetWidth,
				h = video.offsetHeight,
				r = x + w, //right
				b = y + h, //bottom
				visibleX, visibleY, visible;

			visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
			visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

			visible = visibleX * visibleY / (w * h);

			if (visible > fraction) {
				video.play();
			} else {
				video.pause();
			};
		};
	};

	window.addEventListener('scroll', checkScroll, false);
	window.addEventListener('resize', checkScroll, false);
}