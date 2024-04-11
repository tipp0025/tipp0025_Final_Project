function calculateBMI(weight, height) {
  let heightCm = height * 1000;
  return heightCm / weight;
}

console.log(calculateBMI(90, 1.91));

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal Weight");
  } else if (bmi >= 25 && bmi <= 30) {
    console.log("Overweight");
  } else if (bmi > 30) {
    console.log("Obese");
  }
}

console.log(interpretBMI(24.67));
