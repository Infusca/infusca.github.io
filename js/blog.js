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



// function showStories(e){
//     buffalocalzone.style.display = 'none';
//     arbolChili.style.display = 'none';
//     stories.style.display = 'block';
//     targetID = e.target.href.split('#')[1];
//     let blogTargetID = '#'+targetID;
//     console.log(blogTargetID);
// }

// var attempt = 3;
// function validate(){
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     if (username == 'infusca' && password == 'admin84'){
//         window.location = 'blog/stories.html'; // log into stories page
//         return false;
//     } else {
//         attempt --;
//         alert('Insuccessful Login Attempt. You will now be eliminated.');
//         if (attempt == 0){
//             $('#username').disabled = true;
//             $('password').disabled = true;
//             return false;
//         }
//     }
//     console.log(attempt);
// }