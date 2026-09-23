chrome.action.onClicked.addListener(async () => {
  const { on = true } = await chrome.storage.local.get('on');
  await chrome.storage.local.set({ on: !on });
  chrome.action.setBadgeText({ text: on ? 'OFF' : '' });
});
