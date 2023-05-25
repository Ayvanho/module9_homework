<!DOCTYPE html>
<html>
<head>
	<title>Запрос картинок</title>
</head>
<body>
	<h1>Запрос картинок</h1>
	<label for="page-input">Номер страницы:</label>
	<input type="text" id="page-input"><br><br>
	<label for="limit-input">Лимит:</label>
	<input type="text" id="limit-input"><br><br>
	<button onclick="makeRequest()">Запрос</button>
	<p id="output"></p>
Код

<script>
	function makeRequest() {
		var pageInput = document.getElementById("page-input").value;
		var limitInput = document.getElementById("limit-input").value;

		if (isNaN(pageInput) || pageInput < 1 || pageInput > 10) {
			document.getElementById("output").innerHTML = "Номер страницы вне диапазона от 1 до 10";
		} else if (isNaN(limitInput) || limitInput < 1 || limitInput > 10) {
			document.getElementById("output").innerHTML = "Лимит вне диапазона от 1 до 10";
		} else {
			var url = "https://picsum.photos/v2/list?page=" + pageInput + "&limit=" + limitInput;
			window.location.href = url;
		}
	}
</script>

</body>
</html>