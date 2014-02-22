// use this logic to load an external html to the main file
$('#birdListPage').on("pageinit", function(event){
	$("#birdListPage").load("views/birdListPage.html", function () {
		$(this).trigger("create");
	});
})