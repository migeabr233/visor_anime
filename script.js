		const videoIframe = document.getElementById('video-iframe');

		function toggleFullscreen() {
			if (videoIframe.requestFullscreen) {
				videoIframe.requestFullscreen();
			} else if (videoIframe.mozRequestFullScreen) {
				videoIframe.mozRequestFullScreen();
			} else if (videoIframe.webkitRequestFullscreen) {
				videoIframe.webkitRequestFullscreen();
			} else if (videoIframe.msRequestFullscreen) {
				videoIframe.msRequestFullscreen();
			}
}