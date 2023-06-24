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

function showStories(e){
    buffalocalzone.style.display = 'none';
    arbolChili.style.display = 'none';
    stories.style.display = 'block';
    targetID = e.target.href.split('#')[1];
    let blogTargetID = '#'+targetID;
    console.log(blogTargetID);
}

var attempt = 3;
function validate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == 'infusca' && password == 'admin84'){
        window.location = 'blog/stories.html'; // log into stories page
        return false;
    } else {
        attempt --;
        alert('Insuccessful Login Attempt. You will now be eliminated.');
        if (attempt == 0){
            $('#username').disabled = true;
            $('password').disabled = true;
            return false;
        }
    }
    console.log(attempt);
}