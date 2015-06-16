$(document).ready(function () {
	console.log($('#nav-bar').length);
	$('#nav-bar').hover(function(){
		console.log('hover');
		$(this).addClass('active');
	});

});