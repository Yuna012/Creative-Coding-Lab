let h = document.getElementById('Hours');
let m = document.getElementById('Minutes');
let s = document.getElementById('Seconds');

let startTimer = null;

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
/* reset 버튼 여러번 누르면 시간 빨라지는 문제*/
document.getElementById('start').addEventListener('click',function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000);
    }
    startInterval()
})

function stopTimer(){
    clearInterval(startTimer);
}

document.getElementById('reset').addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer()
})
