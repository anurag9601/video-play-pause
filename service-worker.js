chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url.includes("www.youtube.com")) {
    chrome.tabs.sendMessage(tab.id, { action: "play" });
  }
});
