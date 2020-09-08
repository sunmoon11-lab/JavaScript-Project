function calculateBMI() {
  let unit = document.getElementById("bmi-metric").checked,
    weight = document.getElementById("input-weight"),
    weightu = document.getElementById("bmi-weight-unit"),
    height = document.getElementById("input-height"),
    heightu = document.getElementById("bmi-height-unit");

  if (unit) {
    weightu.innerHTML = "KG";
    weight.min = 1;
    weight.max = 635;
    heightu.innerHTML = "CM";
    height.min = 54;
    height.max = 272;
  } else {
    weightu.innerHTML = "LBS";
    weight.min = 2;
    weight.max = 1400;
    heightu.innerHTML = "IN";
    height.min = 21;
    height.max = 107;
  }
}

function calcBMI() {
  let bmi = null,
    unit = document.getElementById("bmi-metric").checked,
    weight = parseInt(document.getElementById("input-weight").value),
    height = parseInt(document.getElementById("input-height").value),
    output = document.getElementById("output");

  if (unit) {
    height = height / 100;
    bmi = weight / (height * height);
  } else {
    bmi = 703 * (weight / (height * height));
  }
  bmi = Math.round(bmi * 100) / 100;

  if (bmi < 18.5) {
    output.innerHTML = bmi + " - น้ำหนักน้อย";
  } else if (bmi < 25) {
    output.innerHTML = bmi + " - น้ำหนักปกติ";
  } else if (bmi < 30) {
    output.innerHTML = bmi + " - เริ่มอ้วน";
  } else if (bmi < 35) {
    output.innerHTML = bmi + " - อ้วนขั้นที่ 1";
  } else if (bmi < 40) {
    output.innerHTML = bmi + " - อ้วนขั้นที่ 2";
  } else {
    output.innerHTML = bmi + " - อ้วนขั้นที่ 3";
  }
  return false;
}
