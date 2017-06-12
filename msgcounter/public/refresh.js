var counter = document.getElementById('counter');

setInterval(function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/message-count.txt');
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            counter.innerText = xhr.responseText;
        }
    };
    xhr.send(null);
}, 1000);
