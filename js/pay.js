    window.onload=function(){
    var hourspan=document.getElementById('hour');
    var minspan=document.getElementById('min');
    var secspan=document.getElementById("sec");
    var payform=document.getElementById("payform");
    var newdate=new Date();
    var year=newdate.getFullYear();
    var month=newdate.getMonth();
    var date=newdate.getDate()+1;
    var hour=newdate.getHours();
    var min=newdate.getMinutes();
    var sec=newdate.getSeconds();
    var olddate=new Date(year,month,date,hour,min,sec);
    function day() {
        var newdate=new Date();
        var Time=olddate.getTime()-newdate.getTime();
        //console.log(Time);
        var hours=parseInt(Time/1000/60/60%24);
        var mins=parseInt(Time/1000/60%60);
        var secs=parseInt(Time/1000%60);
        hourspan.innerHTML=hours;
        minspan.innerHTML=mins;
        secspan.innerHTML=secs;

    }
    setInterval(day,1000);
    $(".paylist").click(function(){
        $(this).find($(".for")).slideToggle(100)
    })
}