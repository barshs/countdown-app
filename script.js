const DaysE=document.getElementById('days');
const HoursE=document.getElementById('Hours');
const MinsE=document.getElementById('Mins');
const SecondsE=document.getElementById('Seconds');
function count()
{const currDate=new Date();
    const birthday = new Date(2021, 9, 21);
   const r=(birthday-currDate);
   const Day=Math.floor(r/(1000*3600*24));
   const Hour=Math.floor(r/(1000*3600)%24)
   const Min=Math.floor(r/(1000*60)%60);
   const sec=Math.floor(r/(1000)%60);
 DaysE.innerHTML=Day;
 HoursE.innerHTML=See(Hour);
 MinsE.innerHTML=See(Min);
 SecondsE.innerHTML=See(sec);
}
function See(time)
{
    if(time<10)
    {
        return(`0${time}`);
    }
    else{
        return(time);
    }
}

count();
setInterval(count,1000);
