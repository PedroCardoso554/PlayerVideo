function changeVideo() {
    var videoPlayer = document.getElementById('video-player');
    var videoSelect = document.getElementById('video-select');
    var selectedVideo = videoSelect.value;
  
    if (selectedVideo) {
      videoPlayer.src = selectedVideo;
      videoPlayer.play();
    } else {
      videoPlayer.src = '';
    }
  }
  