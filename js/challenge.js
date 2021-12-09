const h1 = document.querySelector("#counter");
let num = parseInt(h1.innerText);
const pause = document.querySelector("#pause");

function startCounting() {
  let counter = parseInt(num);
  let startCounter = setInterval(() => {
    counter++;
    h1.innerText = counter;
  }, 1000);
  console.log("counter");
  pause.addEventListener("click", function () {
    clearInterval(startCounter), (pause.textContent = "resume");
  });
}

startCounting();
// document.addEventListener('DOMContentLoaded', () => {
//     const h1 = document.querySelector('#counter');
//     let num = parseInt(h1.innerText);

//     function startCounting() {
//         let counter = parseInt(num);
//         setInterval(() => {
//             counter++
//             h1.innerText = counter
//         }, 1000);
//     }

//     startCounting();
// })
