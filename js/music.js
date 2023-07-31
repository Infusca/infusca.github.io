let songList = document.querySelector('#music').getElementsByTagName('p');
// let songIDs = songList.querySelectorAll('p');
// let songIDs = songList.getElementsByTagName('p');
// let songLyrics = document.querySelectorAll('.song-title');

// console.log(songList);

const musicModal = document.querySelector('.modal-bg');
const lyricModal = document.querySelector('#lyric-modal');

musicModal.addEventListener('click', closeModal);

function closeModal(){
    musicModal.style.display = 'none';
}

let getSongID = e => {

    // Remove special chars from clicked song title in order to find target ID
    const createIDs = {
        ' ': '-',
        '(': '',
        ')': '',
        '\'': ''
    }

    targetID = e.target.innerText.replace(/[ ()\']/g, m => createIDs[m]).toLowerCase();
    musicModal.style.display = 'flex';

    console.log(targetID);

    // Grab song lyrics
    allLyrics = document.querySelector('#lyrics');
    targetSong = allLyrics.querySelector('#'+targetID);
    songTitle = targetSong.querySelector('h4').textContent;
    targetLyricsHtml = targetSong.querySelector('div').innerHTML;
    
    // Create node to append lyrics
    p = document.createElement('p');
    lyricNode = document.createTextNode(targetLyricsHtml);
    p.appendChild(lyricNode);
    // lyricNode.setAttribute('id', 'selectedLyrics');
    lyricModal.appendChild(lyricNode);
    lyricModal.setHTML(targetLyricsHtml);
    
    // Create node to append song title
    h = document.createElement('h4');
    titleNode = document.createTextNode(songTitle);
    h.appendChild(titleNode);
    lyricModal.appendChild(h);
    console.log(titleNode);
    
    // Set placement of title above lyrics
    lyricModal.querySelector('h4').setAttribute('class', 'modalSongTitle');
    lyricModal.querySelector('p').setAttribute('class', 'modalSongLyrics');
    let modalTitle = document.querySelector('.modalSongTitle');
    let modalSongLyrics = document.querySelector('.modalSongLyrics');
    let parent = modalTitle.parentNode;
    console.log(parent);
    parent.insertBefore(modalTitle, modalSongLyrics);

    // Style lyricModal
    lyricModal.style.padding = '10px';
    lyricModal.style.scrolling = 'auto';

    // modalSongLyrics.style.maxHeight = window.innerHeight - 50;
    

}



for (i=0; i<songList.length; i++){
    songList[i].addEventListener('click', getSongID);
}