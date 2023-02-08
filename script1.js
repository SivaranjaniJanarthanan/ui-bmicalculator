var bmi = 0;
var progress_div = document.getElementById("progress-div");


function calculate_bmi(event) {
  event.preventDefault();
  progress_div.style.display = "block";
  var height = parseInt(document.getElementById("height").value) / 100;
  var weight = parseFloat(document.getElementById("weight").value);
  var progress = document.getElementById("progress-bar");

  bmi = parseInt(weight / height ** 2);

  var progresswidth = (bmi / 40) * 100;
  progress.style.width = progresswidth + "%";
  progress.innerText = bmi.toFixed(1);
  }



