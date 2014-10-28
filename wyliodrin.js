"use strict";

(function ( $ ) {
 
 	var WYLIO_ADDRESS = "https://www.wyliodrin.com/";

 	var jsonRequestGet = function (url, done)
	{
	  $.ajax ({
	    url: WYLIO_ADDRESS+url,
	    type: 'get',
	    success: function (data, status, jqXHR)
	    {
	      done (null, data);
	    },
	    error: function (jqXHR, status, err)
	    {
	      if (!err) err = new Error ();
	      done (err);
	    }
	  });
	};

	var jsonRequest = function (url, data, done)
	{
	  $.ajax ({
	    url: WYLIO_ADDRESS+url,
	    data: JSON.stringify (data),
	    type: 'post',
	    dataType: 'json',
	    contentType: 'application/json; charset=UTF-8',
	    success: function (data, status, jqXHR)
	    {
	      done (null, data);
	    },
	    error: function (jqXHR, status, err)
	    {
	      if (!err) err = new Error ();
	      done (err);
	    }
	  });
	};

    $.wyliodrin = {


        sendOpenMessage: function (communication_token, label, message)
        {
        	jsonRequest ("message", {
        		communication_token: communication_token,
        		label: label,
        		message: message
        	}, function (err, result)
        	{
        		if (err) console.log (err);
        	});
        },

        sendMessage: function (communication_token, boardid, label, message)
        {
        	jsonRequest ("message", {
        		communication_token: communication_token,
        		gadgetid: boardid,
        		label: label,
        		message: message
        	}, function (err, result)
        	{
        		if (err) console.log (err);
        	});
        }
    };
 
}( jQuery ));
