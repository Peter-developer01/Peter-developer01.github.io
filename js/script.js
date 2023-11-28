(() => {
	(() => {
		// prevent spammers
		const emailSpan = document.querySelector(".email");
		const emailImg = emailSpan.querySelector("img");
	
		emailImg.remove();
		const emailString = atob("cGV0ZXIua29sb3Nvdi5kZXZlbG9wZXI=") + atob("QA==") + atob("eWFuZGV4LmNvbQ==");
		const emailAnchor = document.createElement("a");
		emailAnchor.href = "mailto:" + emailString;
		emailAnchor.textContent = emailString;
		emailSpan.appendChild(emailAnchor);
	})();

	(() => {
		window[atob("d2luZG93")][atob("b25hZnRlcnByaW50")] = () => {
			window[atob("YWxlcnQ=")](atob("SE9X") + atob("IA==") + atob("REFSRQ==") + atob("IA==") + atob("WU9V") + atob("IA==") + atob("VE8=") + atob("IA==") + atob("UFJJTlQ=") + atob("IA==") + atob("TUU=") + atob("IA==") + atob("TE9M"));
		};
	})();
})();