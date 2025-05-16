
let progress = 0;
let progressBar = document.getElementById("progressBar");
let progressText = document.getElementById("progressText");

function simulateLoading() {
    if (progress < 100) {
        progress += 1;
        progressBar.style.width = progress + "%";
        progressText.innerText = progress + "%";
        setTimeout(simulateLoading, 100);
    }
}

simulateLoading();
