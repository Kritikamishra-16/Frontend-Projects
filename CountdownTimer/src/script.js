 console.log("Welcome to the count down timer");
 document.getElementById("submit").onclick= function execute(){
    document.getElementById("display").style.backgroundColor= "dodgerblue";
    document.getElementById("submit").disabled=true;
    const target= document.getElementById("datetime").value;
    let intervalId=setInterval(function updateTimer(){
        let current= new Date();
        //A number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date.
        //number of milisec left

        let diff=new Date(target).getTime()- current.getTime();

        //Days
        document.getElementById("days").innerText= Math.floor(diff/(1000*60*60*24));
        document.getElementById("hours").innerText=Math.floor((diff%(1000*60*60*24))/(1000*60*60)); // remainder/(1000*60*60) => converted into hours
        document.getElementById("minutes").innerText= Math.floor( (diff%(1000*60*60))/(1000*60) );
        document.getElementById("seconds").innerText= Math.floor( (diff%(1000*60))/ (1000) );

        if(diff<=0){
            //closure
            clearInterval(intervalId);
            document.getElementById("display").style.backgroundColor= "yellow";
            document.getElementById("submit").disabled=false;
            document.getElementById("days").innerText="0";
            document.getElementById("hours").innerText="0"; 
            document.getElementById("minutes").innerText= "0";
            document.getElementById("seconds").innerText="0";
            alert("Timeout Alert");
        }

    }, 1000);
 }