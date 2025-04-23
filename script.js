function updateClock() {
    let now = new Date();

    // Get date components
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    let day = String(now.getDate()).padStart(2, "0");
    let weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][now.getDay()];

    // Get time components
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    // Display the date
    document.getElementById("date").textContent = `${year}-${month}-${day} ${weekday}.`;

    // Display the main time
    document.getElementById("time").textContent = `${hours}:${minutes}`;

    // Display seconds in the corner
    document.getElementById("seconds").textContent = seconds;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
