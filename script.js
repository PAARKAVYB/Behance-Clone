function sortImages() {
    const gallery = document.getElementById('images');
    const images = Array.from(gallery.getElementsByClassName('thumbnail'));
    const sortOption = document.getElementById('sortOptions').value;

    if (sortOption === 'recommended') {
        images.sort(() => Math.random() - 0.5); 
    } else {
        images.sort((a, b) => {
            const aValue = parseInt(a.getAttribute(`data-${sortOption}`));
            const bValue = parseInt(b.getAttribute(`data-${sortOption}`));
            return bValue - aValue; // Descending order
        });
    }

    images.forEach(image => gallery.appendChild(image));
}

function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    const searchInput = value.toLowerCase();
    const images = Array.from(document.getElementsByClassName('thumbnail'));
    const titles = images.map(image => image.querySelector('.thumbnail-data h4').innerText.toLowerCase());

    suggestions.innerHTML = '';

    if (searchInput) {
        const filteredTitles = titles.filter(title => title.includes(searchInput));

        filteredTitles.forEach(title => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.innerText = title;
            suggestionItem.onclick = () => {
                document.getElementById('searchInput').value = title;
                suggestions.innerHTML = '';
                
                images.forEach(image => {
                    const imageTitle = image.querySelector('.thumbnail-data h4').innerText.toLowerCase();
                    if (imageTitle === title) {
                        image.style.display = 'block';
                    } else {
                        image.style.display = 'none';
                    }
                });
            };
            suggestions.appendChild(suggestionItem);
        });
    }
}