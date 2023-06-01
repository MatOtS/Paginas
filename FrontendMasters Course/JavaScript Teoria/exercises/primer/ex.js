// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books


function addFavoriteBook(string) {
    if (string.includes("Great" == false)) {
        favoriteBooks.push(string)
    }
}

function printFavoriteBooks() {
    for (i=0;i<favoriteBooks.length;) {
        console.log("Favorites Bookes: ",i+1,".",favoriteBooks[i])
    }
}

printFavoriteBooks()