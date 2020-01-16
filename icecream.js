var card1 = document.querySelector('.one');
var card2 = document.querySelector('.two');
var card3 = document.querySelector('.three');
var subheading = document.querySelector('.subheading');
var details = document.querySelector('.details');
var subheading1 = document.querySelector('.org');
var details1 = document.querySelector('.org1');
var subheading2 = document.querySelector('.straw');
var details2 = document.querySelector('.straw1');

const path = document.querySelectorAll('#yourScoop path');
for(let i=0; i<path.length; i++){
  console.log(path[i].getTotalLength());
}

card1.addEventListener('mouseover', () => {
  subheading.style.color = '#fff';
  details.style.color = '#fff';
})

card2.addEventListener('mouseover', () => {
  subheading1.style.color = '#fff';
  details1.style.color = '#fff';
})

card3.addEventListener('mouseover', () => {
  subheading2.style.color = '#fff';
  details2.style.color = '#fff';
})

card1.addEventListener('mouseout', () => {
  subheading.style.color = '#393b41';
  details.style.color = '#afafb3';
})

card2.addEventListener('mouseout', () => {
  subheading1.style.color = '#393b41';
  details1.style.color = '#afafb3';
})

card3.addEventListener('mouseout', () => {
  subheading2.style.color = '#393b41';
  details2.style.color = '#afafb3';
})
