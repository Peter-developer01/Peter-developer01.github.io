(() => {
	(() => {
		const emailSpan = document.querySelector(".email");
		const emailImg = emailSpan.querySelector("img");
	
		emailImg.remove();
		const emailString = atob("cGV0ZXIua29sb3Nvdi5kZXZlbG9wZXI=") + atob("QA==") + atob("eWFuZGV4LmNvbQ==");
		const emailAnchor = document.createElement("a");
		emailAnchor.href = "mailto:" + emailString;
		emailAnchor.textContent = emailString;
		emailSpan.appendChild(emailAnchor);
	})();
})();