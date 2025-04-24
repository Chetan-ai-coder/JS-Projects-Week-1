document.getElementById("btn").addEventListener("click", (e) =>{
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    let new_height = height/100;

    let bmi = weight/(new_height * new_height);

    if (bmi < 18.5) {
        document.getElementById("bmi_output").textContent = `Your BMI is ${bmi.toFixed(2)} and your category is Underweight`;
    }

    else if (bmi <= 24.9){
        document.getElementById("bmi_output").textContent = `Your BMI is ${bmi.toFixed(2)} and your category is Normal`;
    }

    else if (bmi <= 29.9){
        document.getElementById("bmi_output").textContent = `Your BMI is ${bmi.toFixed(2)} and your category is Overweight`;
    }
    else{
        document.getElementById("bmi_output").textContent = `Your BMI is ${bmi.toFixed(2)} and your category is Obese`;
    }
});
