function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
       // console.log(jsonObj);
		
		//Div to append child
		var articleWrap = document.getElementById('article-feed');
		
		//create a for loop for the data
		for (var key in jsonObj){
			console.log(jsonObj[key]);
			
			var articleSec = document.createElement('div');
			articleSec.setAttribute('class','articleSec');
			articleWrap.appendChild(articleSec);
			
			//get imageUrl in data.json		
			var imglink = document.createElement('a');
			imglink.setAttribute('href',jsonObj[key].url);
			
			//get imageUrl in data.json		
			var img = document.createElement('img');
			img.setAttribute('src',jsonObj[key].imageUrl);
			
			//get title from json
			var title = document.createElement('h2');
			title.innerHTML = jsonObj[key].title;
			
			//get caption from json
			var caption = document.createElement('h3');
			caption.innerHTML = jsonObj[key].caption;
			
			var credits = document.createElement('p');
			credits.innerHTML = jsonObj[key].credits;
			
			
			//create image in the div
			articleSec.appendChild(title);
			articleSec.appendChild(imglink);
			imglink.appendChild(img);
			articleSec.appendChild(caption);
			articleSec.appendChild(credits);
			
			}
		
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();