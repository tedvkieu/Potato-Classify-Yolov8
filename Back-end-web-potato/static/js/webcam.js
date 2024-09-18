//// File: webcam.js
//
function startWebcam() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (navigator.getUserMedia) {
      navigator.getUserMedia({ video: true }, function (stream) {
        var video = document.getElementById('webcam');

        // GÃ¡n luá»“ng webcam cho tháº» video
        video.srcObject = stream;
        video.style.display = 'block';  // Hiá»ƒn thá»‹ tháº» video khi webcam Ä‘Ã£ Ä‘Æ°á»£c báº­t
      }, function (error) {
        console.log("KhÃ´ng thá»ƒ truy cáº­p webcam: ", error);
      });
    } else {
      console.log("TrÃ¬nh duyá»‡t khÃ´ng há»— trá»£ getUserMedia.");
    }
  }
