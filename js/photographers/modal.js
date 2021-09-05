class modal {
    
    launchform() {

        // DOM modal elements
        const modalBtn = document.querySelector('.modal-btn');
        const phForm = document.querySelector('.ph_form');
        const mainDiv = document.querySelector('.mainDiv');
        const closeBtn = document.querySelector('.form-close');

        const firstNameInput = document.getElementById("prenom");
        const lastNameInput = document.getElementById("nom");
        const emailInput = document.getElementById("email");
        
        // error messages
        
        const errorMessages = {
            firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
            lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
            email: "Veuillez entrer une adresse email valide.",
        }
    
        // launch modal event
    
        modalBtn.addEventListener('click', e => {
        // launch modal form
        phForm.style.display = 'flex';
        mainDiv.style.opacity = '15%';
        });
    
        closeBtn.addEventListener('click', e => {
        if (phForm.style.display = 'flex') {
            mainDiv.style.opacity = '100%';
            phForm.style.display = 'none';
        }
        })
    
        phForm.addEventListener('submit', e => {
        // launch modal form
        e.preventDefault()
        console.log('Submit')
        validate()
        });
    };
    
    
    
    // invalid alert
    
    isInvalid(element, message) {
        let target;
        if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
        else target = element.parentNode;
        target.setAttribute("data-error-visible", true);
        target.setAttribute("data-error", message);
    }
    
    // valid alert
    
    isValid() {
    
        console.log('Tout est Ok')
    
        // close modal confirm
    
        // function closeConfirmModal() {
        // 	modalConfirm.style.display = "none";
        // }
    
        // modalForm.style.display = "none";
        // modalConfirm.style.display = "block";
        // modalConfirmBtn.addEventListener("click", closeConfirmModal);
        // modalConfirmClose.addEventListener("click", closeConfirmModal);
        // heroSection.style.opacity = "1";
        // form.reset();
    }
    
    // delete previous alerts
    
    removeAlerts() {
        let invalidFields = document.querySelectorAll(
            '.formData[data-error-visible="true"]'
        );
        for (let field of invalidFields) {
            field.setAttribute("data-error-visible", false);
            field.setAttribute("data-error", "");
        }
    }
    
    // check first name
    
    firstValidation() {
        let inputValue = firstNameInput.value;
        console.log(inputValue);
        if (inputValue !== null && inputValue.length >= 2) return true;
        else return false;
    }
    
    // check last name
    
    lastValidation() {
        let inputValue = lastNameInput.value;
        if (inputValue !== null && inputValue.length >= 2) return true;
        else return false;
    }
    
    // check if email use valid formatting
    
    emailValidation() {
        let regex = /^\S+@\S+\.\S+$/;
        return regex.test(emailInput.value);
    }
    
    validate() {
        let isValidInput = true;
        removeAlerts();
        if (!firstValidation()) {
            isValidInput = false;
            isInvalid(firstNameInput, errorMessages.firstName);
        }
        if (!lastValidation()) {
            isValidInput = false;
            isInvalid(lastNameInput, errorMessages.lastName);
        }
        if (!emailValidation()) {
            isValidInput = false;
            isInvalid(emailInput, errorMessages.email);
        }
        if (isValidInput) {
            isValid();
        }
    
        const form = document.querySelector('.ph_form');
        form.setAttribute("action", "photographers.html?id=${photographersData.id}")
    }

}

export default modal