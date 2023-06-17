window.addEventListener("DOMContentLoaded", function () {
  let convertBtn = this.document.getElementById("convert");
  convertBtn.addEventListener("click", function () {
    KonversiSuhu();
  });

  function KonversiSuhu() {
    let celcius = parseFloat(document.getElementById("inputCel").value);
    let farenheit = celcius * 1.8 + 32;
    document.getElementById("hasilFar").innerHTML = farenheit + "(&deg;F)";
  }
});
