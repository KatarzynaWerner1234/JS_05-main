let searchPhrase = '';
let sortDirection = 'down';
let books = [];

fetch('https://openlibrary.org/subjects/javascript.json')
    // dostajemy obiekt typu Response i zamieniamy na obiekt w JS
    .then((response) => response.json())
    // Dane z serwera
    .then(data => {
        const apiBooks = Object.values(data);

        books = apiBooks[4].map(apiBook => ({
            name: apiBook.title,
            author: apiBook.authors.map(author => author.name).join(', ')
        }));
        renderBookList(books); //dlaczego to działa, skoro renderBooks jest zdefiniowane niżej?
    })
    .catch(error => console.error(error));


const renderBookList = (booksToRender, searchPhrase, sortDirection) => {

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

const $searchForm = document.getElementById('search-form');
$searchForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    searchPhrase = formData.get('phrase');

    if (!searchPhrase) {
        // alert('Fraza nie moze byc pusta!');
        renderBookList(books);
        return;
    }

    const foundBooks = books.filter(book => book.name.toLowerCase().includes(searchPhrase.toLowerCase()));

    renderBookList(foundBooks);

});
const $titleErrorMessage = document.getElementById('title-error');
const $titleInput = document.getElementById('title');

const $authorErrorMessage = document.getElementById('author-error');
const $authorInput = document.getElementById('author');

const validateTitleField = (titleValue) => {
    if (!$titleErrorMessage) {
        $titleInput.classList.add('error-border');
        // Early return <- wyjscie z funkcji 
        return false;
    }

    if (!titleValue) {
        $titleErrorMessage.innerText = 'Pole wymagane!';
        $titleInput.classList.add('error-border');
        return false;
    }

    // Jeśli dane poprawne, usuń stan błędu 
    $titleInput.classList.remove('error-border');
    $titleErrorMessage.innerText = '';

    return true;
}

const validateAuthorField = (authorValue) => {
    if (!$authorErrorMessage) {
        $authorInput.classList.add('error-border');
        // Early return <- wyjscie z funkcji 
        return false;
    }
    // Jeśli authorValue jest falsy dodaj odpowiedni tekst i klasę kolorującą ramkę 
    if (!authorValue) {
        $authorErrorMessage.innerText = 'Pole wymagane!';
        $authorInput.classList.add('error-border');
        return false;
    }

    // Jeśli dane poprawne, usuń stan błędu 
    $authorInput.classList.remove('error-border');
    $authorErrorMessage.innerText = '';

    return true;
}
const booksLocal = localStorage.getItem('books') || '[]';
const booksArray = JSON.parse(booksLocal);

const $addForm = document.getElementById('add-form');
$addForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get('title');
    const author = formData.get('author');

    const isTitleValid = validateTitleField(title);
    const isAuthorValid = validateAuthorField(author)

    if (!isTitleValid) {
        $titleInput.focus();
    }
    if (!isTitleValid) return;

    if (!isAuthorValid) {
        $authorInput.focus();
    }
    if (!isAuthorValid) return;

    const saveData = () => {
        localStorage.setItem('books', JSON.stringify(booksArray))
    }

    class NewBook {
        constructor(name, author) {
            this.name = name;
            this.author = author;
        }
    }

    const newBook = new NewBook(title, author);

    booksArray.push(newBook);
    saveData();
    books.push(...booksArray);
    renderBookList(books);

});

const $sortForm = document.getElementById('sort-form')
$sortForm.addEventListener('change', e => {
    e.preventDefault();

    const $selectElement = document.querySelector('#sorting-options');
    sortDirection = $selectElement.value;



    if (sortDirection === 'up') {
        books.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
        renderBookList(books);
    }

    if (sortDirection === 'down') {
        books.sort((b, a) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
        renderBookList(books);
    }

});
books.push(...booksArray);
renderBookList(books);
