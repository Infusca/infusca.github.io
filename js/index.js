// INDEX PAGE ****

  // Select all the indexImages on the index page
  let indexImages = document.querySelector('.update').getElementsByTagName('img');

  // Get target clicked image
  let getTarget = e => {
    // load background for enlarged image
    let bg = document.querySelector('.enlarged-background');

    let targetId = e.target.id;
    let target = document.querySelector('#' + targetId);
    
    if (target.className == 'enlarged' || target.className == 'enlarged maxHeight'){
      target.className = '';
      bg.style.display = 'none';
    } else{
      bg.style.display = 'block';
      target.className = 'enlarged';
      // Set max size of image, based on dimensions
      let w = target.offsetWidth;
      let h = target.offsetHeight;
      if (h > 750){
        target.classList.add('maxHeight');
      }
      if (h > w){
        let image = document.querySelector('.enlarged');
        image.style.width = auto;
        console.log(image);
      }
    }
        
    console.log(target);
    
  }

  // On mouse click, enlarge image
  for (i=0; i<indexImages.length; i++){
    indexImages[i].addEventListener('click', getTarget);
  }
  


// controls clickable pop ups for main page posts
let popUpPost = document.getElementsByClassName('main-page-post')[0];
let popUpBg = document.getElementsByClassName('main-post-bg')[0];
let showPics = document.getElementById('amythest').parentElement.getElementsByTagName('span')[0];
let x = document.getElementById('main-popup-x');
let hiddenPosts = document.getElementsByClassName('hidden-post');

// open pop up post
showPics.addEventListener('click', (e)=> {
  popUpBg.style.display = 'block';
  popUpPost.style.display = 'block';
  x.style.display = 'block';
  console.log(x);
})

// close pop up post
x.addEventListener('click', (e)=> {
  x.style.display = 'none';
  popUpBg.style.display = 'none';
  popUpPost.style.display = 'none';
  for (i=0; i<hiddenPosts.length; i++) {
    hiddenPosts[i].style.display = 'none';
  }
})

// rock gem show post
let rockgem = document.getElementById('rockgem-show');
let rockGemLink = document.getElementById('rockgem-post');

rockGemLink.addEventListener('click', (e)=> {
  rockgem.style.display = 'block';
})
