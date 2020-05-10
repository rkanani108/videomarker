//Gujrati typing







//speech recognisation

 // var speech = {
      // start : function () {
      // // speech.start() : start speech recognition
        // var txt=document.querySelector('#description').value;
        // const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        // speech.recognition = new SpeechRecognition();
        // speech.recognition.continuous = true;
        // speech.recognition.interimResults = false;
        // speech.recognition.lang = "gu";
        // speech.recognition.onerror = function (evt) {
          // console.log(evt);
        // };
        // speech.recognition.onresult = function (evt) {
			
          // document.querySelector('#description').value = txt + " "+evt.results[0][0].transcript;
          // speech.stop();
        // };
        // speech.recognition.start();
        // document.getElementById('search-on').disabled = true;
        // document.getElementById('search-off').disabled = false;
      // },

      // stop : function () {
      // // speech.stop() : end speech recognition

        // if (speech.recognition != null) {
          // speech.recognition.stop();
          // speech.recognition = null;
          // document.getElementById('search-on').disabled = false;
          // document.getElementById('search-off').disabled = true;
        // }
      // }
    // };

    // window.addEventListener("load", function () {
      // // [1] CHECK IF BROWSER SUPPORTS SPEECH RECOGNITION
      // if (window.hasOwnProperty('SpeechRecognition') || window.hasOwnProperty('webkitSpeechRecognition')) {
        // document.getElementById("search-speech").style.display = "block";
        // document.getElementById("search-on").disabled = false;

        // // [2] ASK FOR USER PERMISSION TO ACCESS MICROPHONE
        // // WILL ALSO FAIL IF NO MICROPHONE IS ATTACHED TO COMPUTER
         // navigator.mediaDevices.getUserMedia({ audio: true })
        // .then(function(stream) {
         // document.getElementById("search-on").disabled = false;
         // })
         // .catch(function(err) {
          // document.getElementById("search-speech").innerHTML = "Please enable access and attach a microphone";
         // });
      // }
    // });

  debugger;
	var fileName=localStorage.getItem('filename');


	var tag = document.createElement('script');
	tag.src = "http://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	

	if(isEmpty(fileName))
	{
		fileName="tQVMK307h9E"
	}
	document.querySelector('#youtubeid').value=fileName;
	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
	var player;
	function onYouTubePlayerAPIReady() {
		player = new YT.Player('player', {
			height: '315',
			width: '560',
			videoId: fileName,
			events: {
				'onReady': onPlayerReady,
			} 
			
		});
	    
	}
	function onPlayerReady(event) {
		var lastTime=localStorage.getItem('lastTime');
		if(!isEmpty(lastTime))
		{
			player.seekTo(lastTime);
			player.pauseVideo();
		}
    }
	


$( document ).ready(function() {
		 refreshGrid();
		
});

var isPause=true;
function playStartEnd()
{
		    var from=document.querySelector('#fromTimeSecond').value;
			var to=document.querySelector('#toTimeSecond').value;
			var delaySec = to - from;
			var delayMillis = delaySec * 1000;
            player.seekTo(from); 
			if(isPause)
			{
			  player.playVideo();
			  isPause=false;
			  playIconUpdate(true);
			}
			else
			{
				player.pauseVideo();
				isPause=true;
				playIconUpdate(false);
				return;
			}
			
			
			
            setTimeout(function () {
                player.pauseVideo();
				isPause=true;
				playIconUpdate(false);
               
            }, delayMillis);
	
}
function onFromClick()
{
	 //var audioPlayer = document.querySelector("#audioPlayer");
	 var currentTime= player.getCurrentTime();   //audioPlayer.currentTime;
	 var timeString= convertSecondstoTime(currentTime);
	 document.querySelector('#fromTimeSecond').value  = currentTime; 
	 document.querySelector('#fromTime').value  = timeString;
	 
	 isPlaySlotVisible();
	 

}

function onToClick()
{
	//var audioPlayer = document.querySelector("#audioPlayer");
	var currentTime= player.getCurrentTime(); //audioPlayer.currentTime;
	var timeString= convertSecondstoTime(currentTime);
	document.querySelector('#toTimeSecond').value  = currentTime; 
	document.querySelector('#toTime').value  = timeString;
	 
	isPlaySlotVisible();
	player.pauseVideo();
	isPause=true;
	playIconUpdate(false);
}

		function fromGoToTime()
		{
			var from=document.querySelector('#fromTimeSecond').value;
			if(!isEmpty(from))
			{
				//var audioPlayer = document.querySelector("#audioPlayer");
				//audioPlayer.currentTime = from;
				player.seekTo(from);
				player.pauseVideo();
				isPause=true;
				playIconUpdate(false);
			}
			
		}
		function toGoToTime()
		{
			var to=document.querySelector('#toTimeSecond').value;
			if(!isEmpty(to))
			{
				//var audioPlayer = document.querySelector("#audioPlayer");
				//audioPlayer.currentTime = to;
				player.seekTo(to);
				player.pauseVideo();
				//audioPlayer.pause();
				isPause=true;
				playIconUpdate(false);
			}
		}

		function playIconUpdate(val)
		{
			if(val)
			{
					document.querySelector('#playSlot i').classList.remove("fa-play-circle");
					document.querySelector('#playSlot i').classList.add("fa-pause-circle");
					document.querySelector("#play").classList.remove('fa-play');
					document.querySelector("#play").classList.add('fa-pause');
			}
			else
			{
					document.querySelector('#playSlot i').classList.add("fa-play-circle");
					document.querySelector('#playSlot i').classList.remove("fa-pause-circle");
					document.querySelector("#play").classList.add('fa-play');
					document.querySelector("#play").classList.remove('fa-pause');
			}
			
		}

       var isPlay=false;
       function setLocalAudio()
       {
		   debugger;
	        var yid = document.querySelector("#youtubeid").value;
			if(!isEmpty(yid))
			{
				player.loadVideoById(yid);
			}
			
			var lastTime=localStorage.getItem('lastTime');
			var oldFileName=localStorage.getItem("filename");
			if(!isEmpty(lastTime))
			{
				if(!isEmpty(yid) && (yid === oldFileName))
				{
					player.seekTo(lastTime);
				}
		    }
			localStorage.setItem("filename", yid);
       }
	   
	   function speed(rate)
	   {
		  
		   player.setPlaybackRate(rate); 
	   }
	   
	   function playAudio()
	   {
		
		  if(!isPlay)
		  {
			  player.playVideo();
			  document.querySelector("#play").classList.remove('fa-play');
		      document.querySelector("#play").classList.add('fa-pause');
			  isPlay=true;
		  }
		  else
		  {
			  player.pauseVideo();
			  isPlay=false;
			  document.querySelector("#play").classList.add('fa-play');
		      document.querySelector("#play").classList.remove('fa-pause');
		  }
	   }
	   
	   function backward()
	   { 
	       
		   var value = parseInt(document.querySelector("#forwardValue").value);
		   if(!isEmpty(value))
		   {
			var newTime=player.getCurrentTime()-value;
			player.seekTo(newTime);
		   }
		   
	   }
	   function forward()
	   {
	
		   var value = parseInt(document.querySelector("#forwardValue").value);
		   if(!isEmpty(value))
		   {
			var newTime=player.getCurrentTime()+value;
			player.seekTo(newTime);
		 
		   }
	   }
	   
	 
	    
		function isPlaySlotVisible()
		{
			 var from=document.querySelector('#fromTime').value;
			 var to=document.querySelector('#toTime').value;
			 if(!isEmpty(from) && !isEmpty(to))
			 {
				 document.querySelector('#playSlot').classList.remove("d-none");
			 }
		}
		
		function isEmpty(val)
		{
		  return (val === undefined || val == null || val.length <= 0) ? true : false;
		}
	     function convertSecondstoTime(given_seconds) { 
          
  
            dateObj = new Date(given_seconds * 1000); 
            hours = dateObj.getUTCHours(); 
            minutes = dateObj.getUTCMinutes(); 
            seconds = dateObj.getSeconds(); 
  
            timeString = hours.toString().padStart(2, '0') 
                + ':' + minutes.toString().padStart(2, '0') 
                + ':' + seconds.toString().padStart(2, '0'); 
            return timeString;
           
        } 
		
		
		function deleteNote(ele)
		{
			var dialog = confirm("Are you want to sure to Delete this note?");
			if (dialog == false) {
			 return;
			} 
		
			var id = ele.dataset.uniqueid;
			
			if(isEmpty(id))
			{	
				return;
			}
			//id=document.querySelector('#uniqueId').value
			

			
			var arr = [];
			var storageData=localStorage.getItem('audioData');
			arr=JSON.parse(storageData);
			var indexValue=arr.findIndex(function(item){ return item.id == id});
			if(isEmpty(indexValue))
			{
				return;
			}
			
			
			arr.splice(indexValue,1);
			var str=JSON.stringify(arr)
			localStorage.setItem('audioData', str);
			refreshGrid();
		}
		function editNote(ele)
		{
			var id = ele.dataset.uniqueid;
			
			if(isEmpty(id))
			{
				return;
			}
			var arr = [];
			var storageData=localStorage.getItem('audioData');
			arr=JSON.parse(storageData);
			var indexValue=arr.findIndex(function(item){ return item.id == id});
		    var audioObject = arr[indexValue];
			
			document.querySelector('#uniqueId').value =GetPropertyValue(audioObject, "id");
			document.querySelector('#fromTime').value=GetPropertyValue(audioObject, "fromTime");
			document.querySelector('#toTime').value=GetPropertyValue(audioObject, "toTime");;
			document.querySelector('#description').value=GetPropertyValue(audioObject, "description");
			document.querySelector('#fromTimeSecond').value=GetPropertyValue(audioObject, "fromTimeSecond");
			document.querySelector('#toTimeSecond').value=GetPropertyValue(audioObject, "toTimeSecond");
			
			document.querySelector('#playSlot').classList.remove('d-none');
			
		}
		function GetPropertyValue(obj1, dataToRetrieve) {
		  return dataToRetrieve
			.split('.') // split string based on `.`
			.reduce(function(o, k) {
			  return o && o[k]; // get inner property if `o` is defined else get `o` and return
			}, obj1) // set initial value as object
		}




		function saveNote()
		{
		
			var fromTime=document.querySelector('#fromTime').value;
			var toTime=document.querySelector('#toTime').value;
			var description= document.querySelector('#description').value;
			var fromTimeSecond=document.querySelector('#fromTimeSecond').value;
			var toTimeSecond=document.querySelector('#toTimeSecond').value;
		    if(isEmpty(fromTime) || isEmpty(toTime) || isEmpty(description) )
			{
				 if(isEmpty(fromTime))
				 {
				  document.querySelector('#fromTime').classList.add('is-invalid');
				 }
				 else
				 {
					 document.querySelector('#fromTime').classList.remove('is-invalid');
				 }
				 if(isEmpty(toTime))
				 {
				  document.querySelector('#toTime').classList.add('is-invalid');
				 }
				 else{
				  document.querySelector('#toTime').classList.remove('is-invalid');
				 }
				  if(isEmpty(description))
				 {
				  document.querySelector('#description').classList.add('is-invalid');
				 }
				  else{
				  document.querySelector('#description').classList.remove('is-invalid');
				 }
				 return;
			}
			else{
				
				document.querySelector('#fromTime').classList.remove('is-invalid');
				document.querySelector('#toTime').classList.remove('is-invalid');
				document.querySelector('#description').classList.remove('is-invalid');
			}
			
			
			
		    var uniqueId=document.querySelector('#uniqueId').value;
			
		    var arr = [];
			var storageData=localStorage.getItem('audioData');
			if(!isEmpty(storageData))
			{
				arr=JSON.parse(storageData);
			}
			if(isEmpty(uniqueId))
			{
				//add new object
				
			
				var audioObject = {
							'id':uuidv4(),
							'fromTime': fromTime,
							'toTime': toTime,
							'description': description,
							'fromTimeSecond': fromTimeSecond,
							'toTimeSecond': toTimeSecond
						};
				//arr.push(audioObject);
				arr.splice(0, 0, audioObject);
				var str=JSON.stringify(arr)
				
				localStorage.setItem('audioData', str);
				clearValue();
			
				
			}
			else
			{
				var indexValue=arr.findIndex(function(item){ return item.id == uniqueId})
				var audioObject = {
							'id':uniqueId,
							'fromTime': fromTime,
							'toTime': toTime,
							'description': description,
							'fromTimeSecond': fromTimeSecond,
							'toTimeSecond': toTimeSecond
						};
				arr[indexValue]=audioObject;
				var str=JSON.stringify(arr)
				localStorage.setItem('audioData', str);
				clearValue();
			}
				refreshGrid();
		
		}
		
		function clearValue()
		{
			document.querySelector('#fromTime').value="";
			document.querySelector('#toTime').value="";
			document.querySelector('#description').value="";
			document.querySelector('#fromTimeSecond').value="";
			document.querySelector('#toTimeSecond').value="";
			document.querySelector('#uniqueId').value ="";
			document.querySelector('#playSlot').classList.add("d-none");
		}
		function uuidv4() {
		  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		  });
		}
		
		function clearNotes()
		{
			var dialog = confirm("Are you want to sure delete all notes?");
			if (dialog == false) {
			 return;
			} 
			localStorage.clear();
			refreshGrid();
		}
		function refreshGrid()
		{
				
				   var list=[];
				   var storageData=localStorage.getItem('audioData');
				   var selector=document.querySelector('table tbody');
				   if(!isEmpty(storageData))
				   {
					   
					   list=JSON.parse(storageData);
					   
					   
					   
					   var rows="";
					   for (i = 0; i < list.length; i++) {
						   var row="<tr>"
						   //row += "<td>"+list[i].id + "</td>";
						   row += "<td>"+list[i].fromTime + "</td>";
						   row += "<td>"+list[i].toTime + "</td>";
						   row += "<td>"+list[i].description + "</td>";
						   row += "<td class='text-center'> <i class='fa fa-pencil' data-uniqueId='"+list[i].id+"'  onclick='editNote(this)'></i></td>";
						   row += "<td class='text-center'> <i class='fa fa-trash' data-uniqueId='"+list[i].id+"'  onclick='deleteNote(this)'></i></td>";
						   //row += "<td>"+list[i].fromTimeSecond + "</td>";
						   //row += "<td>"+list[i].toTimeSecond + "</td>";
						   row += "</tr>"
						   rows+=row;
					   }
					   selector.innerHTML=rows;
					   
				   }
				   else
				   {
					   selector.innerHTML="";
				   }
		}
		   
	//Detect Browser or Tab Close Events
$(window).on('beforeunload',function(e) {
  e = e || window.event; 
  
   
     var rate=player.getCurrentTime();
     localStorage.setItem('lastTime',rate);
});	

document.getElementById('export').addEventListener('click', function() {
	var timestamp = new Date().getUTCMilliseconds();
	var now = new Date();

	  timestamp = now.getFullYear().toString(); // 2011
	  timestamp += (now.getMonth < 9 ? '0' : '') + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
	  timestamp += ((now.getDate < 10) ? '0' : '') + now.getDate().toString(); // pad with a 0
	  timestamp += ((now.getHours < 10) ? '0' : '') + now.getHours().toString();
	  timestamp += ((now.getSeconds < 10) ? '0' : '') + now.getSeconds().toString();
	  timestamp += ((now.getSeconds < 10) ? '0' : '') + now.getSeconds().toString();

   let data=document.querySelector('#AudioNoteBookTable');
   TableToExcel.convert(data, { // html code may contain multiple tables so here we are refering to 1st table tag
	  name: timestamp+ `_AudioNote.xlsx`, // fileName you could use any name
	  sheet: {
		  name: 'Audio Note' // sheetName
	  }
  });
});

