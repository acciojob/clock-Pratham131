//your JS code here. If required.
function updateClock() {
	let timeElement = document.getElementById("timer")

	// let currentTimeDate = new Data();
	
	// // const hour = currentTimeDate.getHours();
	// const hours = String(now.getHours()).padStart(2, '0');
	
	// timeElement.innerText = `${hours}`;

	const now = new Date();
            const hours = String(now.getHours());
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const date = now.toDateString();

            // const currentTime = `${hours}:${minutes}:${seconds}`;
            // timeElement.innerText = `${currentTime} (${date})`;
			timeElement.innerText = `${hours}`;
}

setInterval(updateClock, 1000)
updateClock();
