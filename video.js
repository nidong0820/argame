//(function(){
//    var 
//    video = document.getElementById('video')
//    vendorUrl = window.URL || window.webkitURL;
//    
//    //navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//    window.addEventListener('load', () => {
//        navigator.mediaDevices.getUserMedia({
//            video: { facingMode: { exact: 'environment'}} //true 
//        }).then(function(stream){
//            video.srcObject=stream;
//            video.play();
//        }).catch(function(error){
//            // An error occured
//            // error.code
//        });
//    }, false);
//    
//    
//})();

let video = document.getElementById('video');
        window.addEventListener("load", () => {
        
            navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment'}}})
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                alert("An error occurred! " + err);
            });
            video.addEventListener('canplay', function(ev){
                
            }, false);
        }, false);