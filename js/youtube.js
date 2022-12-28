// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  //html 에 작성하 id 가 player 인 것 
 new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상  ID
    playerVars: {
      autoplay: true,
      loop: true,
      playList: 'An6LvWQuj_8'
    },
    events: { //객체 데이터 내부에 함수 데이터가 생성되어 있는 것이 메소드임, onready 가 메소드임
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
    
  });
}
