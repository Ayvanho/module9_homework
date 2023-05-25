<!DOCTYPE html>
<html>
<head>
	<title>Test App</title>
	<script>

		function makeRequest() {
			var number = document.getElementById("inputNumber").value;
			if (number < 1 || number > 10) {
				document.getElementById("result").innerHTML = "Число вне диапазона от 1 до 10";
			} else {
				var xhttp = new XMLHttpRequest();
			    xhttp.onreadystatechange = function() {
			        if (this.readyState == 4 && this.status == 200) {
			        	console.log(JSON.parse(this.responseText));
			        	document.getElementById("result").innerHTML = "Запрос успешно выполнен";
			        }
			    };
			    xhttp.open("GET", "https://picsum.photos/v2/list?limit=" + number, true);
			    xhttp.send();
			}
		}

	</script>
</head>
<body>
	<input type="number" id="inputNumber">
	<button onclick="makeRequest()">Отправить запрос</button>
	<p id="result"></p>
</body>
</html>