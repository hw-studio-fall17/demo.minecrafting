jQuery(document).ready(function($) {
	
	$('img').click(function(e) {
		
		e.preventDefault();
		
		var image_href = $(this).attr("src");
		
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_href + '" />');
			$('#lightbox').show();
		}
	});
	
	$('#lightbox').on('click', function() {
		$('#lightbox').hide();
	});
});

$('#lightbox').hide();