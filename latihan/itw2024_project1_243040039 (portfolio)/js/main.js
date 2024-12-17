let words = document.querySelectorAll(".hobi");
words.forEach((hobi) => {
  let letters = hobi.textContent.split("");
  hobi.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    hobi.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let text = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80); // Waktu jeda per huruf
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80); // Waktu jeda per huruf
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

text();
setInterval(text, 3000);

// untuk bagia aktive menu
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menulis[len].classlist.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// untuk bagian sticky menu
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("lengket", window.scrollY > 50);
});
