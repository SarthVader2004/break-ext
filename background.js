chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "mindfulnessReminder") {
      chrome.notifications.create('', {
        type: 'basic',
        iconUrl: 'icon.jpeg',
        title: 'Time to Take a Break!',
        message: 'Step away for a quick mindfulness break!',
        priority: 2
      });
    }
  });
  
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get("frequency", (data) => {
      if (!data.frequency) {
        chrome.storage.sync.set({ frequency: 30 });
      }
    });
  });
  