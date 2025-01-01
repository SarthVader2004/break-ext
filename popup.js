document.getElementById("save").addEventListener("click", () => {
    const frequency = parseInt(document.getElementById("frequency").value);
    if (frequency >= 5 && frequency <= 120) {
      chrome.storage.sync.set({ frequency }, () => {
        alert("Reminder frequency updated!");
        chrome.alarms.create("mindfulnessReminder", { periodInMinutes: frequency });
      });
    } else {
      alert("Please enter a valid frequency between 5 and 120 minutes.");
    }
  });
  