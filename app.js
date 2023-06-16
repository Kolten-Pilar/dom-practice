// // // // // // let img = document.getElementsByTagName('img');
// // // // // // console.log(img);



// // // // // // // most common ways below

// // // // // // let logo = document.getElementById('logo');
// // // // // // console.log(logo);

// // // // // // let item = document.getElementsByClassName('menu-item');
// // // // // // console.log(item);


// // // // // // // below uses CSS- class (.) or id (#)

// // // // // // let section1 = document.querySelector('.section-a');
// // // // // // console.log(section1);

// // // // // // let list = document.querySelectorAll('li');
// // // // // // console.log(list);

// // // // // let items = document.querySelectorAll('.menu-item');

// // // // // items[0].style.color = 'orange'

// // // // // let main = document.querySelector('main');

// // // // // main.style.backgroundColor = 'pink'


// // // // // let container = document.querySelector('.container')

// // // // // container.className += ' new class'

// // // // // console.log(container.className);




// // // // // // this makes all the bullets orange
// // // // // items.forEach((item) => {
// // // // // 	item.style.color = "orange";
// // // // // });


// // // // // method mostly used to add/remove class names====l======

// // // // let sectionB = document.querySelector('.section-b')

// // // // sectionB.classList.add('section')
// // // // console.log(sectionB.className);

// // // // let items = document.querySelectorAll(".menu-item");

// // // // sectionB.classList.remove('section')
// // // // console.log(sectionB.className);

// // // // sectionB.classList.replace('section-b', 'section');

// // // // console.log(sectionB.className);

// // // // let firstSection = document.querySelector('.section-a')

// // // // firstSection.classList.replace('section-a', 'first-section')

// // // let thirdSection = document.querySelector('.section-c')

// // // console.log(thirdSection.parentElement);

// // // let firstP = document.querySelector('p')
// // // console.log(firstP);

// // // console.log(firstP.closest('div'));

// // // let div = document.querySelector('div')
// // // console.log(div.children);

// // let newP = document.createElement('p')
// // newP.innerText = 'this is a new paragraph'

// // document.body.appendChild(newP)

// const section = document.querySelector('.section-a')

// let newP = document.createElement('p')
// newP.innerText = 'Hey we just added this'

// section.appendChild(newP)

// let div = document.createElement('div')
// div.innerHTML = '<p>I just created this</p>'

// document.body.appendChild(div)

// let section = document.querySelector('.section-a')

// console.log(section.textContent);
// section.textContent = 'New Section Paragraph'

// let btn = document.querySelector('button')
// if (btn) {
//   btn.setAttribute('name', 'send')
//   btn.removeAttribute('name')
// }


// btn.getAttribute('name')
// console.log(btn.hasAttribute('name'));

//1. a <p> with red text that says “Hey I’m red!”
let newParagraph = document.createElement('p')
newParagraph.innerText = `Hey I'm red!`
newParagraph.style.color = 'red'

const section = document.querySelector('.section-b')

section.append(newParagraph)

//2.an <h3> with blue text that says “I’m a blue h3!”
let newH3 = document.createElement('h3')
newH3.innerText = `I'm a blue H3`
newH3.style.color = 'blue'
const h3 = document.querySelector('.section-a')
h3.append(newH3)

//3.a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

let newDiv = document.createElement('div')
newDiv.style.backgroundColor = 'pink'
newDiv.style.border = 'solid 1px'

let newH1 = document.createElement('h1')
newH1.innerText = `I'm in a div`

let newP = document.createElement('p')
newP.innerText = `ME TOO!`

newDiv.append(newH1, newP)

document.body.append(newDiv)


// const div = document.querySelector('body')
// div.append(newDiv)

let items = document.querySelectorAll('.menu-item')
console.log(items);

for (let item of items) {
  console.log('This item is: ' + item.innerText);
}

let h2 = document.querySelector('h2').textContent
for (let letter of h2) {
  console.log(letter);
}

let sections = document.querySelectorAll('section')
console.log(sections);

// below is saying for each section of the variable 'sections'
for (let section of sections) {
  console.log(section);
}

// test 1