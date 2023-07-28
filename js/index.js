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
  