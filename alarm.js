//as am unable to get a music with javascript audio method 
//soo i uploaded a music with html audio tag then i disabled it
document.getElementById("music").style.display = "none";


//this is for creataing a current running time  of eacch second to display on screen
setInterval(() => {
        var now = new Date();
        var time = now.toLocaleTimeString();
        document.getElementById("currentshow").innerHTML = time;
});

//this function is for playing the ringtone
var alarmaudio = document.getElementById("music");//it will act as an global variable bcz in pass function i want to pass the audio
function alarmplay() {
        alarmaudio.play();// a play method will play the audio
}


function generatingindateformat() {
        now = new Date();
        var datevalue = now.toDateString(); //we are taking current date  
        const timetaken = document.getElementById("timeset").value; //a timeplugin value is insert in a variable


        var x = datevalue.concat(" " + timetaken); //this we both concat the date and time in one variable which is in string 
        const futurealarmsettime = new Date(x); //this will convert the string into date format


        return (futurealarmsettime);//we should return the this value bxz we need to use that value in main function


}


document.getElementById("setbutton").addEventListener("click", startalarm);
//when ever we click the start button the alarm should get set 

function startalarm() {
        var futurealarmsettime = generatingindateformat();
        const alarmdifference = futurealarmsettime - now;
        if (alarmdifference >= 0) {
              var y= setTimeout(alarmplay, alarmdifference)//settimeout will call the function when it reaches to alarmdifference value
                document.getElementById("timeset").disabled = true; //when it reaches the correct time the input block should not work 
                document.getElementById("smallalert").style.display="none";
                document.getElementById("smallruningalert").style.display="block";


        }
        else {
                alert("plsss  input the future time "); //if a user provides the wrong time it will show alert message

        }

        document.getElementById("stopbutton").onclick = function () {

                document.getElementById("timeset").disabled = false;
                clearTimeout(y);//if we stop the alarm before alarm time then it will not alarm when it reaches to that time
                alarmaudio.pause();
                alarmaudio.currentTime = 0; //we make audio again from start bcz again when a  new alarm is kept it should strat frm start
                document.getElementById("timeset").value="";
                document.getElementById("smallalert").style.display="block";
                document.getElementById("smallruningalert").style.display="none";


        }
}


