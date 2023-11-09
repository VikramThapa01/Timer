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
    stop_btn.removeAttribute("disabled");
    stop_btn.style.cursor = "pointer";
    stop_btn.style.setProperty('--clr', '#0FF0FC');

    sec_ele.style.color = '#39FF14';
    min_ele.style.color = '#39FF14';
    hr_ele.style.color = '#39FF14';
    
    pause_btn.removeAttribute("disabled");
    pause_btn.style.cursor = "pointer";
    pause_btn.style.setProperty('--clr', '#FF0000');

    start_btn.setAttribute('disabled', ''); 
    start_btn.style.cursor = "not-allowed"; 
    start_btn.style.setProperty('--clr', '#525252');

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
            hr_ele.innerHTML = (hr<10)?"0"+hr+":":hr+":";
        }
    },1000)

    stop_btn.addEventListener("click",()=>{
        clearInterval(settimer)
        sec_ele.innerHTML="00";
        sec=0;

        start_btn.removeAttribute('disabled'); 
        start_btn.style.cursor = "pointer";
        start_btn.style.setProperty('--clr', '#39FF14');

        pause_btn.setAttribute("disabled",'');
        pause_btn.style.cursor = "not-allowed";
        pause_btn.style.setProperty('--clr', '#525252');

        stop_btn.setAttribute("disabled",'');
        stop_btn.style.cursor = "not-allowed";
        stop_btn.style.setProperty('--clr', '#525252');

        sec_ele.style.color = '#0FF0FC';
        min_ele.style.color = '#0FF0FC';
        hr_ele.style.color = '#0FF0FC';
    })

    pause_btn.addEventListener("click",()=>{
        clearInterval(settimer)

        pause_btn.setAttribute("disabled",'');
        pause_btn.style.cursor = "not-allowed";
        pause_btn.style.setProperty('--clr', '#525252');

        start_btn.removeAttribute('disabled'); 
        start_btn.style.cursor = "pointer";
        start_btn.style.setProperty('--clr', '#39FF14');

        sec_ele.style.color = '#FF0000';
        min_ele.style.color = '#FF0000';
        hr_ele.style.color = '#FF0000';
    })

})



