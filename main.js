const myForm = document.querySelector("form"),
      inputs = document.querySelectorAll("input"),
      errors = document.querySelectorAll(".error"),
      required = ["email", "password", "username"];

// event listener for submit/enter
myForm.addEventListener("submit", validation);

function validation(e){
    let data = {};
    console.log(e);
    e.preventDefault();

    inputs.forEach(function(el){
        let tempName = el.getAttribute("name");
        console.log(tempName);

        if(tempName != null){
            el.style.borderColor = "#ddd";
            
            if(el.value == 0 && required.includes(tempName)){
                addError(el, "Required Field", tempName);
            }

            data[tempName] = el.value;
        }
    })
 
    console.log(data);

};

function addError(el, message, fieldName){
    let spanEl = el.nextElementSibling;
    spanEl.classList.remove("hide");
    spanEl.textContent = fieldName.toUpperCase() + " " + message;
    el.style.borderColor = "red";
    el.focus();
}






