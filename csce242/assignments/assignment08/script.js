
const imagesArray = [
    {
        src: 'images/birthday.jpg',
        title: 'party hat',
        description: 'Ready to celebrate with a fun party hat!'
    },
    {
        src: 'images/clown.jpg', 
        title: 'koala character',
        description: 'Look sharp with a dapper bowtie!'
    },
    {
        src: 'images/rain.jpg', 
        title: 'rain',
        description: 'I think it\'s time to bring your umbrella.'
    },
    {
        src: 'images/read.jpg', 
        title: 'document',
        description: 'Holding an important document.'
    },
    {
        src: 'images/shovel.jpg', 
        title: 'gardener',
        description: 'Ready to work in the garden with a shovel!'
    },
    {
        src: 'images/work.jpg', 
        title: 'laptop',
        description: 'Hard at work with a laptop.'
    }
];

function loadImages() {
    const container = document.getElementById('image-container');
    imagesArray.forEach((item, index) => {
        
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-item');

        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;

        
        imageDiv.addEventListener('click', () => {
            showImageInfo(item.title, item.description);
        });

     
        imageDiv.appendChild(img);
        container.appendChild(imageDiv);
    });
}


function showImageInfo(title, description) {
    document.getElementById('image-title').textContent = title;
    document.getElementById('image-description').textContent = description;
}


window.onload = loadImages;