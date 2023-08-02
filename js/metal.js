targetImage = document.querySelectorAll('img');

moreInfo = document.querySelectorAll('sub');

console.log(moreInfo);

// Toggle image when clicked
function toggleImage(e){
    let state = e.target.classList.contains('active');
    let length = e.target.parentNode.children.length;
    hiddenImage = e.target.nextElementSibling;

    if (hiddenImage.localName != 'figcaption'){
        if (state == true && hiddenImage.classList.contains('inactive')){
            hiddenImage.classList.toggle('inactive');
            hiddenImage.classList.toggle('active');
            e.target.classList.toggle('inactive');
            e.target.classList.toggle('active');
        } else if (state == false && hiddenImage.classList.contains('active')){
            hiddenImage.classList.toggle('inactive');
            hiddenImage.classList.toggle('active');
            e.target.classList.toggle('inactive');
            e.target.classList.toggle('active');
        }
    } else if (hiddenImage.localName == 'figcaption' && e.target.previousElementSibling.localName == 'img'){
        e.target.classList.toggle('inactive');
        e.target.classList.toggle('active');
        e.target.previousElementSibling.classList.toggle('inactive');
        e.target.previousElementSibling.classList.toggle('active');
    }

}

function toggleInfo(e){
    let info = e.target.parentNode.querySelector('p');
    if (info.style.display == 'none'){
        info.style.display = 'block';
    } else {
        info.style.display = 'none'
    }
}

// Change image
for (i=0; i<targetImage.length; i++){
    targetImage[i].addEventListener('click', toggleImage);
    
}


// Display info
for (i=0; i<moreInfo.length; i++){
    moreInfo[i].addEventListener('click', toggleInfo);
    console.log(moreInfo[i]);
}

