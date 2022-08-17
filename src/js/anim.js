$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.stat').each(function() {
			var self = $(this),
			height;
			if (self.height() >= windowHeight) {
				height = self.offset().top + windowHeight - 100;
			} else {
				height = self.offset().top + self.height();
			}
		});
	});
});