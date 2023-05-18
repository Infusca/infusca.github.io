// grab first link element
var extern = document.getElementsByTagName('link')[0];

let tp1 = document.getElementById('testpage1')[0];

console.log(tp1);
// var clone = tp1.content.cloneNode(true);

// let content = document.getElementById('main')[0];
// content.appendChild(clone);

// document.body.appendChild(clone);


// var head = document.createElement('header');
// document.body.appendChild(head);


// $(function(){
//     $('#main').load('testpage.html');
// });

function gotoTP(){
    $('#main').load('testpage2.html');
}