function controlVideo(action) {
  const video = document.querySelector("video");
  if (!video) return;

  if (action === "play") {
    video.play();
  } else if (action === "pause") {
    video.pause();
  }
}

chrome.runtime.onMessage.addListener((response, sender, sendResponse) => {
  if (response.action === "play") {
    controlVideo("play");
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    controlVideo("pause");
  } else {
    controlVideo("play");
  }
});
