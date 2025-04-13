// Randomizer img + IllustrationPage    ------------------
document.addEventListener('DOMContentLoaded', function() {
    const illustrationGalleryItems = document.querySelectorAll('.gallery-item'); // Target gallery items on this page
    const illustrationImageUrls = [
        'images/illus/Cookbook-01_doneC.png',
        'images/illus/HoZaGnUEfC.jpg',
        'images/illus/ID6jjXnepK.jpg',
        'images/illus/ZaYxrAZZxT.png',
        'images/illus/hqtOufCC9s.jpg',
        // ... Add all your illustration image URLs here
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(illustrationImageUrls);

    illustrationGalleryItems.forEach((item, index) => {
        const imgElement = item.querySelector('img');
        const linkElement = item.querySelector('a');

        if (imgElement && linkElement && index < illustrationImageUrls.length) {
            const randomImageUrl = illustrationImageUrls[index];
            imgElement.src = randomImageUrl;
            linkElement.href = randomImageUrl;
        }
    });
});