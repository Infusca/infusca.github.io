const windowHeight = window.innerHeight;

let photoImages = document.querySelector('#photo').getElementsByTagName('img');
  
// Get target clicked image
let getTarget = e => {
  
  // load background for enlarged image
  let bg = document.querySelector('.enlarged-background');
  //load image description
  let desc = document.querySelector('.img-desc');
  let descContainer = document.querySelector('.enlarged-image-description');
  
  let targetId = e.target.id;
  let target = document.querySelector('#' + targetId);
  let alt = e.target.alt;

  // Reselect all images (now includes enlarged target image)
  let imgs = document.querySelectorAll('img');
  // Insert description of image
  desc.innerHTML = '<p>' + alt + '</p>';
  
  if (target.className == 'enlarged' || target.className == 'enlarged maxHeight'){
    target.className = '';
    bg.style.display = 'none';
    desc.style.display = 'none';
    descContainer.display = 'none';
  } else{
    bg.style.display = 'block';
    target.className = 'enlarged';
    desc.style.display = 'block';
    descContainer.style.display = "block";
    // Set max size of image, based on dimensions
    let w = target.offsetWidth;
    let h = target.offsetHeight;

    console.log(windowHeight/2);
    // descContainer.style.top = windowHeight/2 + clientHt/2 + 20 + 'px';

    if (h > 750){
      target.classList.add('maxHeight');
      // descContainer.style.top = String(h/2) + 'px';
      // console.log(descContainer.style.top);
    }
    if (h > w){
      let image = document.querySelector('.enlarged');
      // image.style.width = 'auto';
    }
    if (h == w){
      let image = document.querySelector('.enlarged');
      target.classList.add('maxHeight');
      target.style.width = '750px';
    }
    // Place image description 30px below image, if ht is less than 750px
    // if (h < 750){
    //   descContainer.style.top = String(windowHeight/2 + h/2) + 'px';
    
    // }
  }
  
}

function getIndex(e){
  // console.log(Array.prototype.indexOf.call(e.target));
  console.log(photoImages);
}

  // On mouse click, enlarge image
  for (i=0; i<photoImages.length; i++){
    photoImages[i].addEventListener('click', getTarget);
    // photoImages[i].addEventListener('click', getIndex);
  }

  