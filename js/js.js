$(document).ready(function(){

// obtain file name of target image
// function getImg(src){
//   var targetImg;
//   targetImg = src.split();
//   fileName = targetImg[0].split('/')[5];
//   return fileName;
// }


// close modal
// $('.close').click(function(){
//   myModal.style.display = 'none';
// })



// function showTemplate(){
//   var temp = document.getElementsByTagName('template')[0];
//   var temp2 = $('.template')[0];
//   var clon = temp2.content.clondeNode(true);
//   document.body.appendChild(clon);
//   console.log(clon);
// }


// });





  /*********** NEW LAYOUT ************/
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
    console.log('hi');

  }

  function expandArticle(){
    var target = $('sub')[0].innerHTML;
    console.log(target);
  }

  function foodBlog(){
    let blog = $('.hidden')[0];
    if (blog.style.display == 'none'){
      blog.style.display = 'block';
    } else {
      blog.style.display = 'none';
    }
  }
});