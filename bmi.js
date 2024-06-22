const form=  document.querySelector('form');
form.addEventListener('submit' , function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    const final_result = document.querySelector('#final-result');
    if( height==='' || height < 0 || isNaN(height)){
        results.innerHTML = "please give a valid height";
    }
    else if( weight==='' || weight < 0 || isNaN(weight)){
        results.innerHTML = "please give a valid weight";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //showing result
        results.innerHTML =` <span>${bmi}</span> `;
        if (bmi < 18.6) {
            final_result.innerHTML = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            final_result.innerHTML = "Normal Weight";
        } else {
            final_result.innerHTML = "Overweight";
        }

        
    }
})