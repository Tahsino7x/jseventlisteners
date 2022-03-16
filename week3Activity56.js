// example 1
let btn1 = document.querySelector('.button1');
// calling an event handler using an anonymous function
// btn1.onclick = function(){
//   alert('You just clicked!');
// }
// calling an event handler using a named function
function named(){
  alert('You just clicked!');
}
btn1.onclick = named;
//
let btn2 = document.querySelector('.button2');
//  use named function
// btn2.addEventListener('click', clickAgain, false);
// function clickAgain(){
//   alert('Click using addEventListener!');
// }
// use anonymous function
btn2.addEventListener('click', function(){
  alert('Click using addEventListener, anonymous function!');
});

// EXAMPLE 3
let btn3 = document.querySelector('.button3');
btn3.addEventListener('click',function(){
  alert('1st click! 1st window');
});
btn3.addEventListener('click',function(){
  alert('1st click! 2nd window');
});

// EXAMPLE 4
let btn4 = document.querySelector('.button4');
let displaymsg = document.querySelector('.display1');
btn4.addEventListener('click', function(){
  alert('Button clicked!');
});
btn4.addEventListener('mouseover', function(){
  displaymsg.innerHTML += '<br>Mouse over';
});

// ACTIVITY 5
let count = 0;
let btn5 = document.querySelector('.button5');
let displaymsg2 = document.querySelector('.display2');
if(count == 0){
  displaymsg2.innerHTML += '<br> The mouseover is reset to 0'
  count +=1
}
btn5.addEventListener('mouseover', function(){
  if(count == 1){
    displaymsg2.innerHTML = `MESSAGE WILL ADD HERE <br>Mouse over ${count}`;
    count +=1
  }
  else{
    displaymsg2.innerHTML += `<br>Mouse over ${count}`;
    count +=1
  }
});

btn5.addEventListener('click', function(){
  alert(`The button was hovered ${count-1} times`);
});

// Example 6
let btn6 = document.querySelector('.button6');
btn6.addEventListener('click', function(event){
  event.target.style.backgroundColor = 'purple';
  alert('Button was clicked!');
});

// Example 7
let linkQCC = document.querySelector('.qccLink');
linkQCC.addEventListener('click', function(e){
  e.preventDefault();
  alert('QCC website is OFF!');
});

// Example 8
let myform = document.querySelector('.form1');
let pDisplay = document.querySelector('.display3');
myform.addEventListener('submit', function(e){
  e.preventDefault();
  let name = document.querySelector('.inputName').value;
  pDisplay.innerHTML = `Welcome to the program ${name}`;
});

// Activity 6
let myform2 = document.querySelector('.form2');
let pDisplay2 = document.querySelector('.display4');
myform2.addEventListener('submit', function(e2){
  e2.preventDefault();
  let name2 = document.querySelector('.inputName2').value;
  if(name2 == ''){
    alert(`You didn't enter a name. Please enter a name again`);
  }
  else if(isNaN(name2)==false){
    alert(`${name2} is not a name. Please enter a name again`);
  }
  else{
    pDisplay2.innerHTML = `Welcome to the program ${name2}`;
  }
});

// Example 9
let pageTop;
window.addEventListener('scroll', function(){
  pageTop = window.pageYOffset;
  console.log(`The window is scrolled ${pageTop} px from top`);
});

// example 10
let topIcon = document.querySelector('.toTop');
// window.addEventListener('load', function(){
//   topIcon.style.display = 'none';
// });
// window.addEventListener('scroll', function(){
//   if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
//     topIcon.style.display = 'block';
//   }
//   else{
//     topIcon.style.display = 'none'
//   }
// });
let pageTopLoc;
window.addEventListener('scroll', function(){
  pageTopLoc = window.pageYOffset;
  if(pageTopLoc>10){
    topIcon.style.display = 'block';
  }
  else{
    topIcon.style.display = 'none';
  }
});
