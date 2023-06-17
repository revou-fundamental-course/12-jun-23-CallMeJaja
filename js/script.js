window.addEventListener("DOMContentLoaded", function () {
  let inputFields = document.querySelectorAll(".input-group input");
  let submitBtn = document.getElementById("submit");
  let resetBtn = document.getElementById("reset");

  inputFields.forEach(function (input) {
    input.addEventListener("input", function () {
      clearInput(this);
    });
  });

  resetBtn.addEventListener("click", function () {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("reamur").value = "";
  });

  submitBtn.addEventListener("click", function () {
    let celcius = parseFloat(document.getElementById("celcius").value);
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    let reamur = parseFloat(document.getElementById("reamur").value);

    if (!isNaN(celcius)) {
      let far = celcius * 1.8 + 32;
      let kel = celcius + 273.15;
      let rea = celcius + 0.8;

      // Menampilkan Nilai Hasil Konversinya ke Input
      document.getElementById("fahrenheit").value = far.toFixed(2);
      document.getElementById("kelvin").value = kel.toFixed(2);
      document.getElementById("reamur").value = rea.toFixed(2);
    } else if (!isNaN(fahrenheit)) {
      let cel = (fahrenheit - 32) / 1.8;
      let kel = (fahrenheit + 459.67) * (5 / 9);
      let rea = (fahrenheit - 32) * (4 / 9);

      document.getElementById("celcius").value = cel.toFixed(2);
      document.getElementById("kelvin").value = kel.toFixed(2);
      document.getElementById("reamur").value = rea.toFixed(2);
    } else if (!isNaN(kelvin)) {
      let cel = kelvin - 273.15;
      let far = kelvin * 1.8 - 459.67;
      let rea = (kelvin - 273.15) * 0.8;

      document.getElementById("celcius").value = cel.toFixed(2);
      document.getElementById("fahrenheit").value = far.toFixed(2);
      document.getElementById("reamur").value = rea.toFixed(2);
    } else if (!isNaN(reamur)) {
      let cel = reamur * 1.25;
      let far = reamur * 2.25 + 32;
      let kel = reamur * 1.25 + 273.15;

      document.getElementById("celcius").value = cel.toFixed(2);
      document.getElementById("fahrenheit").value = far.toFixed(2);
      document.getElementById("kelvin").value = kel.toFixed(2);
    }
  });

  function clearInput(input) {
    let otherInputs = document.querySelectorAll(
      ".input-group input:not(#" + input.id + ")"
    );
    otherInputs.forEach(function (otherInput) {
      otherInput.value = "";
    });
  }
});
