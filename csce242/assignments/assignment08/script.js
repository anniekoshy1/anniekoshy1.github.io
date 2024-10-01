// Array of images and their descriptions
const imagesArray = [
    {
        src: 'images/birthday.jpg', // Replace with the actual image name in your images folder
        title: 'party hat',
        description: 'Ready to celebrate with a fun party hat!'
    },
    {
        src: 'images/clown.jpg', // Replace with the actual image name in your images folder
        title: 'koala character',
        description: 'Look sharp with a dapper bowtie!'
    },
    {
        src: 'images/rain.jpg', // Replace with the actual image name in your images folder
        title: 'rain',
        description: 'I think it\'s time to bring your umbrella.'
    },
    {
        src: 'images/read.jpg', // Replace with the actual image name in your images folder
        title: 'document',
        description: 'Holding an important document.'
    },
    {
        src: 'images/shovel.jpg', // Replace with the actual image name in your images folder
        title: 'gardener',
        description: 'Ready to work in the garden with a shovel!'
    },
    {
        src: 'images/work.jpg', // Replace with the actual image name in your images folder
        title: 'laptop',
        description: 'Hard at work with a laptop.'
    }
];

// Function to load images into the container
function loadImages() {
    const container = document.getElementById('image-container');
    imagesArray.forEach((item, index) => {
        // Create a div for each image
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-item');

        // Create an image element
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;

        // Add an event listener to handle click on each image
        imageDiv.addEventListener('click', () => {
            showImageInfo(item.title, item.description);
        });

        // Append image to div and div to container
        imageDiv.appendChild(img);
        container.appendChild(imageDiv);
    });
}

// Function to display the title and description when an image is clicked
function showImageInfo(title, description) {
    document.getElementById('image-title').textContent = title;
    document.getElementById('image-description').textContent = description;
}

// Call the function to load images when the page loads
window.onload = loadImages;