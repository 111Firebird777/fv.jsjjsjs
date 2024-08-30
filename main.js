// if(colors.length == 1) {
//   console.log("у меня один элемент");
// } else if (colors.length == 2) {
//   console.log("у меня два элемента");
// } else if (colors.length == 3) {
//   console.log("у меня три элемента");
// } else if (colors.length == 4) {
//   console.log("у меня четеры элемента");
// } else if (colors.length == 5) {
//   console.log("у меня пять элемента");
// }

const colors = ["red", "green", "blue", "pink", "black"];

colors.forEach(element => {
    console.log(element);
})

console.log(colors.length);

const fruits = ['apple', 'banana', 'orange', 'mango']

const list = document.querySelector('.list')

// list.append()

fruits.forEach((el, index) => {
    const text = document.querySelector('p')
    text.innerText = el
    text.classList.add(`color${index}`)
    list.append(text)
})


fruits.onclick = () => {

 }


