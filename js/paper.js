// Randomizer img +    ------------------
document.addEventListener('DOMContentLoaded', function() {
const galleryItems = document.querySelectorAll('.gallery-item');
const imageUrls = [
    'images/gallery/IMG_1224.jpg',
    'images/gallery/IMG_0421.jpg',
    'images/gallery/IMG_0425.jpg',
    'images/gallery/IMG_1111.jpg',
    'images/gallery/IMG_1237.jpg',
    'images/gallery/IMG_1136.jpg',
    'images/gallery/IMG_1142.jpg',
    'images/gallery/IMG_1144.jpg',
    'images/gallery/IMG_1147.jpg',
    'images/gallery/IMG_1149.jpg',
    'images/gallery/IMG_1150.jpg',
    'images/gallery/IMG_1153.jpg',
    'images/gallery/IMG_1209.jpg',
    'images/gallery/IMG_0428.jpg',
    'images/gallery/IMG_0431.jpg',
    'images/gallery/IMG_1194.jpg',
    'images/gallery/IMG_1239.jpg',
    'images/gallery/IMG_1216.jpg',
    'images/gallery/IMG_1199.jpg',
    'images/gallery/IMG_1206.jpg',
      // ... more image URLs
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(imageUrls);

galleryItems.forEach((item, index) => {
    const imgElement = item.querySelector('img');
      const linkElement = item.querySelector('a'); // Get the <a> tag

    if (imgElement && linkElement && index < imageUrls.length) {
        const randomImageUrl = imageUrls[index];
        imgElement.src = randomImageUrl;
        linkElement.href = randomImageUrl; // Update the href to match the src
    }
});
});