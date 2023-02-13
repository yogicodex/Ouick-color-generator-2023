

const hex = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let randomNumHex;


document.querySelector(".btn-hax").addEventListener("click", () => {

    let newHex = "#";

    for (let i = 0; i < 6; i++) {
        randomNumHex = Math.floor(Math.random() * hex.length);
        newHex += hex[randomNumHex];
    };

    console.log(newHex);

    document.querySelector("body").style.backgroundColor = newHex;
    document.querySelector(".btn-hax").style.backgroundColor = newHex;
    document.querySelector(".color-span").textContent = newHex;




})

document.querySelector(".btn-rgb").addEventListener("click", () => {

    let a;
    let b;
    let c;
    let rgb;

    for (let i = 0; i < 3; i++) {
        let newA = Math.floor(Math.random() * 256);
        let newB = Math.floor(Math.random() * 256);
        let newC = Math.floor(Math.random() * 256);

        rgb = `rgb(${[newA, newB, newC]})`

    };

    console.log(rgb);

    document.querySelector("body").style.backgroundColor = rgb;
    document.querySelector(".btn-rgb").style.backgroundColor = rgb;
    document.querySelector(".color-span").textContent = rgb;





})


document.querySelector(".change").addEventListener("click", () => {
    if (document.querySelector(".switch").textContent == "Hex") {
        document.querySelector(".switch").textContent = "RGB"
        document.querySelector(".btn-rgb").classList.toggle("active");

        document.querySelector(".btn-hax").classList.remove("active");

    } else {
        document.querySelector(".switch").textContent = "Hex";

        document.querySelector(".btn-hax").classList.toggle("active");

        document.querySelector(".btn-rgb").classList.remove("active");


    }
})













