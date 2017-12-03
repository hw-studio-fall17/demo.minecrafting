jQuery(document).ready(function($) {
	
	$('img').click(function() {
		
		var image_href = $(this).attr("src");
		
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_href + '" />');
	
		}
	});
	
	$('#lightbox').on('click', function() {
		
	});

});
