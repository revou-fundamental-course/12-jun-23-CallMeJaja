window.addEventListener("DOMContentLoaded", function () {
  let inputFields = document.querySelectorAll(".input-group input");
  let submitBtn = document.getElementById("submit");
  let resetBtn = document.getElementById("reset");
  let container = document.getElementById("container");

  submitBtn.addEventListener("click", function () {
    Convert();
  });

  resetBtn.addEventListener("click", function () {
    Reset();
  });

  inputFields.forEach(function (input) {
    input.addEventListener("input", function () {
      clearInput(this);
    });
  });

  container.addEventListener("keydown", function (event) {
    eventEnter(event);
  });

  /**
   * Fungsi Konversi Nilai Suhu
   * @name function Convert()
   */

  function Convert() {
    let celcius = parseFloat(document.getElementById("celcius").value);
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    let reamur = parseFloat(document.getElementById("reamur").value);
    let formulaText = "";

    if (isNaN(celcius) && isNaN(fahrenheit) && isNaN(kelvin) && isNaN(reamur)) {
      alert("Input Kosong, mohon di isi.");
      return;
    }

    if (!isNaN(celcius)) {
      let far = celcius * 1.8 + 32;
      let kel = celcius + 273.15;
      let rea = celcius + 0.8;

      // Menampilkan Nilai Hasil Konversinya ke Input

      document.getElementById("fahrenheit").value = far.toFixed(2);
      document.getElementById("kelvin").value = kel.toFixed(2);
      document.getElementById("reamur").value = rea.toFixed(2);

      // Menampilkan Formula

      formulaText =
        "Celcius ke Fahrenheit : " +
        celcius +
        " * 1.8 + 32 = " +
        far.toFixed(2) +
        " \u00B0F" +
        "<br>" +
        "Celcius ke Kelvin : " +
        celcius +
        " + 273.15 = " +
        kel.toFixed(2) +
        " \u00B0K" +
        "<br>" +
        "Celcius ke Kelvin : " +
        celcius +
        " + 0.8 = " +
        rea.toFixed(2) +
        " \u00B0Ré";
    } else if (!isNaN(fahrenheit)) {
      let cel = (fahrenheit - 32) / 1.8;
      let kel = (fahrenheit + 459.67) * (5 / 9);
      let rea = (fahrenheit - 32) * (4 / 9);

      document.getElementById("celcius").value = cel.toFixed(2);
      document.getElementById("kelvin").value = kel.toFixed(2);
      document.getElementById("reamur").value = rea.toFixed(2);

      // Menampilkan Formula

      formulaText =
        "Fahrenheit ke Celcius : " +
        "(" +
        fahrenheit +
        " - 32) / 1.8 = " +
        cel.toFixed(2) +
        " \u00B0C" +
        "<br>" +
        "Fahrenheit ke Kelvin : " +
        "(" +
        fahrenheit +
        " + 459.67) * (5 / 9) = " +
        kel.toFixed(2) +
        " \u00B0K" +
        "<br>" +
        "Fahrenheit ke Reamur : " +
        "(" +
        fahrenheit +
        " - 32) * (4 / 9) = " +
        rea.toFixed(2) +
        " \u00B0Ré";
    } else if (!isNaN(kelvin)) {
      let cel = kelvin - 273.15;
      let far = kelvin * 1.8 - 459.67;
      let rea = (kelvin - 273.15) * 0.8;

      document.getElementById("celcius").value = cel.toFixed(2);
      document.getElementById("fahrenheit").value = far.toFixed(2);
      document.getElementById("reamur").value = rea.toFixed(2);

      // Menampilkan Formula

      formulaText =
        "Kelvin ke Celcius : " +
        kelvin +
        " - 273.15 = " +
        cel.toFixed(2) +
        " \u00B0C" +
        "<br>" +
        "Kelvin ke Fahrenheit : " +
        kelvin +
        " * 1.8 - 459.67 = " +
        far.toFixed(2) +
        " \u00B0F" +
        "<br>" +
        "Kelvin ke Reamur : " +
        "(" +
        kelvin +
        " - 273.15) * 0.8 = " +
        rea.toFixed(2) +
        " \u00B0Ré";
    } else if (!isNaN(reamur)) {
      let cel = reamur * 1.25;
      let far = reamur * 2.25 + 32;
      let kel = reamur * 1.25 + 273.15;

      document.getElementById("celcius").value = cel.toFixed(2);
      document.getElementById("fahrenheit").value = far.toFixed(2);
      document.getElementById("kelvin").value = kel.toFixed(2);

      // Menampilkan Formula

      formulaText =
        "Reamur ke Celcius : " +
        reamur +
        " * 1.25 = " +
        cel.toFixed(2) +
        " \u00B0C" +
        "<br>" +
        "Reamur ke Fahrenheit : " +
        reamur +
        " * 2.25 + 32 = " +
        far.toFixed(2) +
        " \u00B0F" +
        "<br>" +
        "Reamur ke Kelvin : " +
        reamur +
        " * 1.25 + 273.15 = " +
        kel.toFixed(2) +
        " \u00B0Ré";
    }
    document.getElementById("showFormula").innerHTML = formulaText;
  }

  /**
   * Fungsi Perubahan Nilai Input
   * @name function clearInput()
   */
  function clearInput(input) {
    let otherInputs = document.querySelectorAll(
      ".input-group input:not(#" + input.id + ")"
    );
    otherInputs.forEach(function (otherInput) {
      otherInput.value = "";
    });
  }

  /**
   * Fungsi Untuk Clear All Input
   * @name function Reset()
   */
  function Reset() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("reamur").value = "";
    document.getElementById("showFormula").innerHTML = "";
  }

  /**
   * Fungsi Ketika Tombol Enter di Klik
   * @name function eventEnter()
   */
  function eventEnter(event) {
    if (event.key === "Enter") {
      if (event.target.tagName === "INPUT") {
        document.getElementById("submit").click();
      }
    }
  }
});
