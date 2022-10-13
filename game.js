$(function () {
	$("#selectMenu").selectmenu();
	//Execute when select menu changes selection.
	$('#selectMenu').on('selectmenuchange', function () {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'colors.json')
		xhr.onload = function () {
			var data = JSON.parse(xhr.responseText);
			changeCSS(data);
		}
		xhr.send();
	});
});

//Randomly change the CSS color and background-color from colors.json
function changeCSS(data) {
	//Generate 2 different random numbers
	var rand1 = Math.floor(Math.random() * 9)
	var rand2 = Math.floor(Math.random() * 9)
	$("body").css("color", data[rand1].color)
	$("body").css("background-color", data[rand2].color)
}

