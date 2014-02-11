$('#save').click(function () {
    // add loading image to div
    
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/itsLulu",
        success: function (data) {
            // replace div's content with returned data
            // setTimeout added to show loading
            console.log(data);
            
                $('#gPic').html(
				'<div class="gPic"><img src="' + data.avatar_url + '"> <span>test</span></div>'
				);
				//+ data.login + '<br>' + data.public_repos + '<a href="' + data.html_url + '"> GitHub account</a>' + data.created_at);
	
				//$('.gLink').html(data.html_url);
				
				
           
        }
    });
});