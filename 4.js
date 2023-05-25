<!DOCTYPE html>
<html>
<head>
	<title>Test App</title>
	<script>

		function makeRequest() {
			var width = document.getElementById("inputWidth").value;
			var height = document.getElementById("inputHeight").value;
			if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
				document.getElementById("result").innerHTML = "Одно из чисел вне диапазона от 100 до 300";
			} else {
				fetch('https://picsum.photos/' + width + '/' + height)
				  .then(function(response) {
				    console.log(response);
				    document.getElementById("result").innerHTML = "Запрос успешно выполнен";
				  })
				  .catch(function(error) {
				    console.log(error);
				  });
			}
		}

	</script>
</head>
<body>
	<label>
		Ширина: <input type="number" id="inputWidth">
	</label>
	<label>
		Высота: <input type="number" id="inputHeight">
	</label>
	<button onclick="makeRequest()">Отправить запрос</button>
	<p id="result"></p>
</body>
</html>

