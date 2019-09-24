
function setTime(){
    document.addEventListener('DOMContentLoaded', function () {
        var _years = document.querySelector('.year');
        var _months = document.querySelector('.month');
        var _days = document.querySelector('.day');
        var _week = document.querySelector('.currentDay-week');
        var _hours = document.querySelector('.hour');
        var _minutes = document.querySelector('.minute');
        var _seconds = document.querySelector('.second');
        function setText(){
            var date = new Date();
            var years = date.getFullYear(),
                months =date.getMonth() + 1,
                days = date.getDate();
                weeks = date.getDay();
            var hours = date.getHours(),
                minutes = date.getMinutes();
               seconds = date.getSeconds();
            _years.innerHTML = years;
            if(months < 10){
                _months.innerHTML =String(0) + String(months);
            }else{
                _months.innerHTML =  months;
            };
            if(days < 10){
                _days.innerHTML =String(0) + String(days);
            }else{
                _days.innerHTML = days;
            };
            // if(weeks == 1){
            //     _week.innerHTML = '星期一';
            // }else if(weeks == 2){
            //     _week.innerHTML = '星期二';
            // }else if(weeks == 3){
            //     _week.innerHTML = '星期三';
            // }else if(weeks == 4){
            //     _week.innerHTML = '星期四';
            // }else if(weeks == 5){
            //     _week.innerHTML = '星期五';
            // }else if(weeks == 6){
            //     _week.innerHTML = '星期六';
            // }else{
            //     _week.innerHTML = '星期日';
            // };
            
            if(hours < 10){
                _hours.innerHTML =String(0) + String(hours);
            }else{
                _hours.innerHTML = hours;
            };
            
            if(minutes < 10){
                _minutes.innerHTML =String(0) + String(minutes);
            }else{
                _minutes.innerHTML = minutes;
            };
            // if(seconds < 10){
            //     _seconds.innerHTML =String(0) + String(seconds);
            // }else{
            //     _seconds.innerHTML = seconds;
            // };
        }
        setText();
//定时器
        setInterval(function () {
            setText();
        }, 1000);
    });
}