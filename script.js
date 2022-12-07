
const textElement = ["I'm FrontEnd Developer"];
const tombol = document.getElementById("tombol-menu")
const sidebar = document.getElementById("sidebar")
const tombol2 = document.getElementById("tombol-closed")

const klik = () => {
    console.log(sidebar.style.left ="0")
}

const klik2 = () => {
    sidebar.style.left ="-70%"
}

let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

function ngetik() {
    if (count == textElement.length) {
        count = 0;
    }

    currentTxt = textElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector(".ketik").textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

}

ngetik();