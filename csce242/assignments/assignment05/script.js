let count = 0;

// counter
function incrementCount() {
    count++;
    document.getElementById("countValue").innerHTML = count;
}

// random image
function refreshImage() {
    document.getElementById("randomImage").src = "https://picsum.photos/200?random=" + new Date().getTime();
}

// move the box with slider
function moveBox() {
    let sliderValue = document.getElementById("slider").value;
    let box = document.getElementById("box");
    box.style.left = sliderValue + "%";
}