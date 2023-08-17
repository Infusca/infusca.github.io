// HEADER

let yum = document.getElementById('yum');
console.log(yum.offsetHeight);

function onScrollHeader(){
    window.addEventListener('scroll', (e) => {
        console.log('scrolling');
        yum.style.height = '50px';
    });
  };

// BLOG POSTS

let arbolChili = $('#arbolchilihotsauce')[0];
let buffalocalzone = $('#buffalochickencalzone')[0];
let picklesNsauce = $('#picklesNsauce')[0];

arbolChili.style.display = 'block';

// buffalocalzone.addEventListener('click', (e) => showBuffaloChicken(e));
// arbolChili.addEventListener('click', (e) => showArbolChili(e));



function showBuffaloChicken(e){
    buffalocalzone.style.display = 'block';
    arbolChili.style.display = 'none';
    picklesNsauce.style.display = 'none';
    targetID = e.target.href.split('#')[1];
    let blogTargetID = '#'+targetID;
    console.log(blogTargetID);
}

function showArbolChili(e){
    arbolChili.style.display = 'block';
    buffalocalzone.style.display = 'none';
    picklesNsauce.style.display = 'none';    
    targetID = e.target.href.split('#')[1];
    let blogTargetID = '#'+targetID;
    console.log(blogTargetID);
}

function showPicklesNSauce(e){
    picklesNsauce.style.display = 'block';
    arbolChili.style.display = 'none';
    buffalocalzone.style.display = 'none';
    targetID = e.target.href.split('#')[1];
    let blogTargetID = '#'+targetID;
    console.log(blogTargetID);
}

