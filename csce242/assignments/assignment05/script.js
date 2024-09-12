let count = 0;

// Function to increment the count
function incrementCount() {
    count++;
    document.getElementById("countValue").innerHTML = count;
}

// Function to refresh the random image
function refreshImage() {
    document.getElementById("randomImage").src = "https://picsum.photos/200?random=" + new Date().getTime();
}

// Function to move the box with the slider
function moveBox() {
    let sliderValue = document.getElementById("slider").value;
    let box = document.getElementById("box");
    box.style.left = sliderValue + "%";
}