function klok() {
    var today = new Date();
    var seconds = today.getSeconds();
    var minutes = today.getMinutes();
    var hours= today.getHours();
    if (seconds < 10) {
               seconds = '0' + seconds;
         }
     if (minutes < 10) {
               minutes = '0' + minutes;
         }
     if (hours < 10) {
               hours = '0' + hours;
         }

    if (hours >= 9 && hours < 21){
        document.getElementById('box1').classList.remove('night');
        document.getElementById('box1').classList.add('day');
        document.body.style.backgroundColor = "#ffffff";
    } else {
        document.getElementById('box1').classList.remove('day');
        document.getElementById('box1').classList.add('night');
        document.body.style.backgroundColor = "#001233";
    }
    document.getElementById('clock').innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + seconds;
}

klok();
setInterval(klok, 1000);


var today = new Date();

document.getElementById('date').innerHTML = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();

function melding() {
    var today = new Date();
    var seconds = today.getSeconds();
    var minutes = today.getMinutes();
    var hours= today.getHours();
    var hours= today.getFullYear();

    if (hours >= 9 && hours < 23){
        alert("Het is tijd om op te staan");
    } else {
       alert("Het is tijd om te slapen");
    }
}

melding();