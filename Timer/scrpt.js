var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById('Hours');
var m = document.getElementById('Minutes');
var s = document.getElementById('Seconds');

var startTimer = null;

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if (m.value != 0 && s.value == 0){
        m.value--;
        s.value = 59;
    } else if(h.value != 0 && m.value == 0){
        h.value--;
        m.value = 59;
        s.value = 59;
    }
    return;
}

    
function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000);
    }
    startInterval()
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer()
})
