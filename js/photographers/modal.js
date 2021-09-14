class modal {

    constructor(){
        
        this.firstNameInput = document.getElementById("prenom");
        this.lastNameInput = document.getElementById("nom");
        this.emailInput = document.getElementById("email");
        
        // error messages
        this.errorMessages = {
            firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
            lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
            email: "Veuillez entrer une adresse email valide.",
        }

        this.launchform();
    }
    
    launchform() {

        // DOM modal elements
        const modalBtn = document.querySelector('.modal-btn');
        const phForm = document.querySelector('.ph_form');
        const mainDiv = document.querySelector('.mainDiv');
        const closeBtn = document.querySelector('.form-close');
        
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
        this.validate()
        });
    };
    
    
    
    // invalid alert
    
    isInvalid(element, message) {
        let target;
        if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
        else target = element.parentNode;
        target.setAttribute("data-error-visible", true);
        target.setAttribute("data-error", message);
        console.log( target , element, message)
    }
    
    // valid alert
    
    isValid() {
    
        console.log('Tout est Ok')
        const phForm = document.querySelector('.ph_form');
        const mainDiv = document.querySelector('.mainDiv');
        const modalConfirm = document.querySelector('.modalConfirm');
        const modalConfirmClose = document.querySelector('.modalConfirmClose');
    
        // close modal confirm
    
        function closeConfirmModal() {
        	modalConfirm.style.display = "none";
        }
    
        phForm.style.display = "none";
        modalConfirm.style.display = "flex";
        // modalConfirmBtn.addEventListener("click", closeConfirmModal);
        modalConfirmClose.addEventListener("click", closeConfirmModal);
        mainDiv.style.opacity = "1";
        // phForm.reset();
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
        let inputValue = this.firstNameInput.value;
        console.log(inputValue);
        if (inputValue !== null && inputValue.length >= 2) return true;
        else return false;
    }
    
    // check last name
    
    lastValidation() {
        let inputValue = this.lastNameInput.value;
        if (inputValue !== null && inputValue.length >= 2) return true;
        else return false;
    }
    
    // check if email use valid formatting
    
    emailValidation() {
        let regex = /^\S+@\S+\.\S+$/;
        return regex.test(this.emailInput.value);
    }
    
    validate() {
        let isValidInput = true;
        this.removeAlerts();
        if (!this.firstValidation()) {
            isValidInput = false;
            this.isInvalid(this.firstNameInput, this.errorMessages.firstName);
        }
        if (!this.lastValidation()) {
            isValidInput = false;
            this.isInvalid(this.lastNameInput, this.errorMessages.lastName);
        }
        if (!this.emailValidation()) {
            isValidInput = false;
            this.isInvalid(this.emailInput, this.errorMessages.email);
        }
        if (isValidInput) {
            this.isValid();
        }
    
        const form = document.querySelector('.ph_form');
        form.setAttribute("action", "photographers.html?id=${photographersData.id}")
    }

}

export default modal