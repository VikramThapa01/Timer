let sec_ele = document.getElementById("seconds");
let min_ele = document.getElementById("minutes");
let hr_ele = document.getElementById("hours");
let sec = 0;
let min = 0;
let hr = 0;
let stop_btn = document.getElementById("stop")
let start_btn = document.getElementById("start")
let pause_btn = document.getElementById("pause")


start_btn.addEventListener("click",()=>{
    const settimer = setInterval(function(){
        sec+=1;
        sec_ele.innerHTML=(sec<10)?"0"+sec:sec;
        if(sec==60){
            sec = 0;
            min += 1;
            min_ele.innerHTML = (min<10)?"0"+min+":":min+":";
        }
        if(min==60){
            min = 0;
            hr += 1;
            hr_ele.innerHTML = (hr<10)?"0"+hr:hr;
        }
    },1000)

    stop_btn.addEventListener("click",()=>{
        clearInterval(settimer)
        sec_ele.innerHTML="00";
        sec=0;
        
    })

    pause_btn.addEventListener("click",()=>{
        clearInterval(settimer)
    })

})



