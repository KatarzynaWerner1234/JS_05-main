
fetch('https://openlibrary.org/subjects/javascript.json')
    // dostajemy obiekt typu Response i zamieniamy na obiekt w JS
    .then((response) => response.json())
    // Dane z serwera
    .then(data => {
        const apiBooks = Object.values(data);
        
        const books = apiBooks[4].map(apiBook => ({
            name: apiBook.title,
            author: apiBook.authors.map(author => author.name).join(', ')
        }));
        console.log(books);
   
const renderBookList = (booksToRender) => {
    const $booksList = document.getElementById('books-list');

    $booksList.innerHTML = '';

    booksToRender.forEach(book => {
        $booksList.innerHTML += `
            <li>
                <h3>${book.name}</h3>
                <h5>${book.author}</h5>
            </li>
        `;
    });
}

document.getElementById('search-form').addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const phrase = formData.get('phrase');

    if (!phrase) {
        // alert('Fraza nie moze byc pusta!');
        renderBookList(books);
        return;
    }

    const foundBooks = books.filter(book => book.name.toLowerCase().includes(phrase.toLowerCase()));

    renderBookList(foundBooks);
});

renderBookList(books); 

})