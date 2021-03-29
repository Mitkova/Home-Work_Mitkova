$(document).ready(function () {//waits for the document to be loaded and after that the code runs

	$("#generate").click(function () {
		let text = $("#text").val();
		let color = $("#color").val();

		var colors = ['red', 'yellow', 'green', 'blue'];
		let error = [];
		if (text == "") {
			error.push('Enter text');
		}
		if (!colors.includes(color)) {
			error.push('Enter valid color');
		}
		else {
			$("h1").text(text).css('color', color);
		}

		$("h3").text(error);
	});
});

(function () { });