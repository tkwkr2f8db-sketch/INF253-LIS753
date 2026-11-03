const button = document.getElementById("book-button");
const message = document.getElementById("book-message");

const books = [
  "The Screwtape Letters by  C.S. Lewis",
  "The Lion, the Witch and the Wardrobe by C. S. Lewis",
  "Brideshead Revisited by Evelyn Waugh",
  "A Canticle for Leibowitz by Walter M. Miller Jr.",
  "The Hobbit by J. R. R. Tolkien",
  "The End of the Affair by Graham Greene",
  "The Divine Comedy: Inferno by Dante Alighieri",
  "The Name of the Rose by Umberto Eco",
  "	The Great Divorce by C. S. Lewis",
  "The Lord of the Rings by J. R. R. Tolkien",
];

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * books.length);

  message.textContent = "Your book recommendation: " + books[randomIndex];

  message.hidden = false;
});