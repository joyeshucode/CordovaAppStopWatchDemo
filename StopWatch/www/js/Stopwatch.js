/**********************************************/
//@author: Tapas Tripathi
//#decription: StopWatch App JS
/*********************************************/

/********declaring global variables starts here*******/
var milis;
var LapCount=1;
var displayMS='00';
var displayS='00';
var displayM='00';
var displayH='00';
/********declaring global variable stops here ***********/

$("document").ready(function () {//ready function which will be triggered when page load will be completed.
	//function of Start Button	, will start and resume the timing
	$("#strtBtn").click(function () {
		startStopWatch();
		$(this).prop('disabled',true);
	});
	//Function of Stop Button, will pause the time
	$("#stpBtn").click(function () {
		stopStopWatch();
		$("#strtBtn").text("Resume");
		$("#strtBtn").prop('disabled',false);
	});
	//Function of Reset Button, will reset the timing.
	$("#rstBtn").click(function () {
		resetStopwatch();
		$("#strtBtn").text("Start");
		$("#strtBtn").prop('disabled',false);
	});
	//Function of Lap Button, will take snapshot of the current time.
	$("#lapBtn").click(function () {
		takeLapSnapShot();
	});
	
	
});

//Takes snapshots od the current time
function takeLapSnapShot(){
	if(LapCount<=5){
		 var str="Lap#"+LapCount+" "+$("#displayHours").text()+" : "+displayM+" : "+displayS+" : "+displayMS;
		 console.log(str);
		 $("#LapP"+LapCount).text(str)	;
		 console.log("LapP"+LapCount);
	}
	if(LapCount==5){
		LapCount=1;	
	}
	else{
		LapCount++;	
	}
}

//Starts and resume the time...
function startStopWatch(){
	//sets the interval
	milis=setInterval(function(){
			if(parseInt($("#displayMS").text())<99){
				if(parseInt($("#displayMS").text())<9){
					displayMS="0"+(parseInt($("#displayMS").text())+1);
					$("#displayMS").text(displayMS);
				}
				else{
					displayMS=(parseInt($("#displayMS").text())+1);
					$("#displayMS").text(displayMS);
				}
			}
			else{
				$("#displayMS").text('00');
				displayMS='00';
				
				if(parseInt($("#displaySecond").text())<59){
					if(parseInt($("#displaySecond").text())<9){
						displayS="0"+(parseInt($("#displaySecond").text())+1);
						$("#displaySecond").text(displayS);						
					}
					else{
						displayS=(parseInt($("#displaySecond").text())+1);
						$("#displaySecond").text(displayS);
					}
				}
				else{
					displayS='00';
					$("#displaySecond").text('00');
					if(parseInt($("#displayMinutes").text())<59){
						if(parseInt($("#displayMinutes").text())<9){
							displayM="0"+(parseInt($("#displayMinutes").text())+1);
							$("#displayMinutes").text(displayM);
						}
						else{
							displayM=(parseInt($("#displayMinutes").text())+1);
							$("#displayMinutes").text(displayM);
						}
					}
					else{
						dsiplayM='00';
						$("#displayMinutes").text('00');
						if(parseInt($("#displayHours").text())<9){
							displayH="0"+(parseInt($("#displayHours").text())+1);
							$("#displayHours").text(displayH);
						}
						else{
							displayM=(parseInt($("#displayHours").text())+1);
							$("#displayHours").text(displayM);
						}
						
					}
				}
			}
						
		},1);
}

//Will stop the time will clear the interval
function stopStopWatch(){
	clearInterval(milis);
}

//will reset the timer
function resetStopwatch(){
	//clearing existing interval
	clearInterval(milis);
	//resetting the timer attributes..
	$("#displayMS").text('00');
	$("#displaySecond").text('00');
	$("#displayMinutes").text('00');
	$("#displayHours").text('00');
	
}
