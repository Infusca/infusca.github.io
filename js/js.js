

  let header = document.getElementsByTagName("header")[0];
  let headerHt = header.offsetHeight;

  function hideHeader(){
    header.style.opacity = "0.2";

    window.addEventListener('mousemove', (e) => {
      let xPos = e.clientX;
      let yPos = e.clientY; 
      if (yPos < 25){
          header.style.opacity = '1';
        };
      if (e.clientY < 15){
        header.style.opacity = '1';
      }
    });

    if (scrollY > 50){
      header.style.display = 'none';
    };

    if (scrollY < 50){
      header.style.display = 'block';
    }

    if (scrollY == 0){
      header.style.opacity = '1';
    }
  };

  /******** make height of container at so that footer is below bottom of viewport ********/
  function findHt(){
    let viewportHeight = window.innerHeight;
    let containerHeight = $('.container')[0].offsetHeight;
    let newHt = '(containerHeight + 10)px';
    console.log(`viewportHeight: ${viewportHeight}, containerHeight: ${containerHeight}`);
    document.getElementsByClassName('container')[0].style.height = newHt;
    console.log(`viewportHeight: ${viewportHeight}, containerHeight: ${containerHeight}`);
  }

  // allow user to access hidden nav on smaller screens
  let nav = $('.nav');

  function toggleNav(){
    if (nav[0].style.display == 'none'){
      nav[0].style.display = 'block';
    } else {
      nav[0].style.display = 'none';
    }
  }

  function expandArticle(){
    var target = $('sub')[0].innerHTML;
    console.log(target);
  }

  function modelLyrics(){
    let lyrics = $('#modelLyrics')[0];
    if (lyrics.style.display == 'none'){
      lyrics.style.display = 'block';
    } else {
      lyrics.style.display = 'none';
    }
  }

  function infinityLyrics(){
    let lyrics = $('#infinityLyrics')[0];
    if (lyrics.style.display == 'none'){
      lyrics.style.display = 'block';
    } else {
      lyrics.style.display = 'none';
    }
  }

  function stateImInLyrics(){
    let lyrics = $('#stateImInLyrics')[0];
    if (lyrics.style.display == 'none'){
      lyrics.style.display = 'block';
    } else {
      lyrics.style.display = 'none';
    }
  }

  function largerThanSunLyrics(){
    let lyrics = $('#largerThanSunLyrics')[0];
    if (lyrics.style.display == 'none'){
      lyrics.style.display = 'block';
    } else {
      lyrics.style.display = 'none';
    }
  }

  function runLyrics(){
    let lyrics = $('#runLyrics')[0];
    if (lyrics.style.display == 'none'){
      lyrics.style.display = 'block';
    } else {
      lyrics.style.display = 'none';
    }
  }

  function pathOfStoneLyrics(){
    let lyrics = $('#pathOfStoneLyrics')[0];
    if (lyrics.style.display == 'none'){
      lyrics.style.display = 'block';
    } else {
      lyrics.style.display = 'none';
    }
  }

  function journeyLyrics(){
    let lyrics = $('#journeyLyrics')[0];
    if (lyrics.style.display == 'none'){
      lyrics.style.display = 'block';
    } else {
      lyrics.style.display = 'none';
    }
  }

  function closeLyrics(){
    
    $('#modelLyrics')[0].style.display = 'none';
    $('#infinityLyrics')[0].style.display = 'none';
    $('#stateImInLyrics')[0].style.display = 'none';
    $('#largerThanSunLyrics')[0].style.display = 'none';
    $('#runLyrics')[0].style.display = 'none';
    $('#pathOfStoneLyrics')[0].style.display = 'none';
    $('#journeyLyrics')[0].style.display = 'none';
  }


console.log(window.innerWidth);

  function hide(){
    if (window.innerWidth <= 370){
      getTopicsMenu.firstChild.innerHTML = 'Other';
      console.log(window.innerWidth);
    }
  }

  hide();

  // INDEX PAGE ****

  // Select all the images on the index page
  let images = document.querySelector('.update').getElementsByTagName('img');
  
  // Get target clicked image
  let getTarget = e => {
    // load background for enlarged image
    let bg = document.querySelector('.enlarged-background');

    let targetId = e.target.id;
    let target = document.querySelector('#' + targetId);
    
    if (target.className == 'enlarged'){
      target.className = '';
      bg.style.display = 'none';
    } else{
      bg.style.display = 'block';
      target.className = 'enlarged';
    }
        
    console.log(target);
    
  }

  // On mouse click, enlarge image
  for (i=0; i<images.length; i++){
    // console.log(images[i]);
    images[i].addEventListener('click', getTarget);
  }
  