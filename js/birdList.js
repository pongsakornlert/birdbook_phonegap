function initialBirdListPage () {
	loadBirdList();
}

function loadBirdList () {
	// TODO: connect DB to get data list here

	// add bird to the list
	for (var i = 0; i < 10; i++) {
		var row = document.createElement("li");
		var bird = document.createElement("a");
		bird.innerText = 'bird'+(i+1);
		row.appendChild(bird);
		$('ul#birdList').append(row);
	}
	$('ul#birdList').listview('refresh');
}

initialBirdListPage();