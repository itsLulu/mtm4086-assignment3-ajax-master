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
            
                $('#gData').html(
				'<div class="gFeed"><div class="imgholder"><img src="' + data.avatar_url + '"></div><div class="contentholder"><h1>GitHub Name:<span>' + data.login + '</span></h1><h2>Public Repos:<span>' + data.public_repos + '</span></h2><p>Date created:<br><span>' + data.created_at + '</span></p></div><div class="gLink"><a href="' + data.url+ '">GitHub Link</a></div></div>'
				);           
        }
    });
});