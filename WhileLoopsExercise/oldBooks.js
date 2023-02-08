function findBook(input) {
  let bookSearched = input[0];
  let index = 1;
  let booksChecked = 0;
  let booksCount = input.length;

  while (index < booksCount) {
    let currentBook = input[index];

    if (currentBook === bookSearched) {
      console.log(`You checked ${booksChecked} books and found it.`);
      return;
    }

    if (currentBook === "No More Books") {
       console.log("The book you search is not here!");
       console.log(`You checked ${booksChecked} books.`);
      return;
    }

    index++;
    booksChecked++;
  }

  
}

findBook([
  "The Spot",

  "Hunger Games",

  "Harry Potter",

  "Torronto",

  "Spotify",

  "No More Books",
]);
