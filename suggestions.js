function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    const searchInput = value.toLowerCase();
    const images = Array.from(document.getElementsByClassName('thumbnail'));
    const titles = images.map(image => image.querySelector('.thumbnail-data h4').innerText.toLowerCase());

    suggestions.innerHTML = '';

    if (searchInput) {
        const filteredTitles = titles.filter(title => title.includes(searchInput));
        
        if (filteredTitles.length > 0) {
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }

        filteredTitles.forEach(title => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.innerText = title;
            suggestionItem.onclick = () => {
                document.getElementById('searchInput').value = title;
                suggestions.innerHTML = '';
                suggestions.style.display = 'none';
                
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
    } else {
        suggestions.style.display = 'none';
    }
}
