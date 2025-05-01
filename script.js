const video = document.querySelector('.bg-video');

video.addEventListener('loadedmetadata', () => {
  const startTime = 6;
  const endTime = video.duration - 3;

  video.currentTime = startTime;

  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= endTime) {
      video.pause(); // Atau ganti ke video.currentTime = startTime; untuk loop manual
    }
  });
});
