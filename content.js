const apply = (on) => document.documentElement.classList.toggle('docs-nite', on);

chrome.storage.local.get({ on: true }, (v) => apply(v.on));
chrome.storage.onChanged.addListener((c) => c.on && apply(c.on.newValue));
