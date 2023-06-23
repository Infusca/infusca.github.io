let arbolChili = $('#arbolchilihotsauce')[0];
let buffalocalzone = $('#buffalochickencalzone')[0];

arbolChili.style.display = 'block';

// buffalocalzone.addEventListener('click', (e) => showBuffaloChicken(e));
// arbolChili.addEventListener('click', (e) => showArbolChili(e));



function showBuffaloChicken(e){
    arbolChili.style.display = 'none';
    buffalocalzone.style.display = 'block';
    targetID = e.target.href.split('#')[1];
    let blogTargetID = '#'+targetID;
    console.log(blogTargetID);
}

function showArbolChili(e){
    buffalocalzone.style.display = 'none';
    arbolChili.style.display = 'block';
    targetID = e.target.href.split('#')[1];
    let blogTargetID = '#'+targetID;
    console.log(blogTargetID);
}
