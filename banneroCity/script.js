
function validateLengh(minLength, maxLength, inputField, helpText) {
    if ( inputField.value.length < minLength || inputField.value.length > maxLength ) {
        if ( helpText != null )
        helpText.innerHTML = "Please enter a value " + minLength + 
        " to " + maxLength + " characters in length";
        return false;
    } else {
        if ( helpText != null )
        helpText.innerHTML = "";
        return true;
    }
}

function validateNonEmpty (inputField, helpText) {
    if ( inputField.value.length == 0 ) {
        if ( helpText != null )
          helpText.innerHTML = "Please enter a value.";
          return false;
    } else {
        if ( helpText != null )
          helpText.innerHTML = "";
    return true;
    }
}

function validateZIPCode(inputField, helpText) {
    if ( inputField.value.length !=5 ) {
        if ( helpText != null )
        helpText.innerHTML = "Enter exactly five digit.";
        return false;
    } else if ( isNaN(inputField.value) ) {
        if ( helpText != null )
        helpText.innerHTML = "Please enter a number.";
        return false;
    } else {
        if ( helpText != null )
        helpText.innerHTML = "";
        return true;
    }
}

function validatePhone(inputField, helpText) {
    if ( isNaN( inputField.value ) || inputField.value.length < 1 )  {
      helpText.innerHTML = "Invalid format number";
      return false;
    } else {
        if ( helpText !=null )
        helpText.innerHTML = "";
        return true;
    }
}

var regex = /^\w+@\w+\.\w{2,4}$/;
function validateRegEx(regex, inputStr, helpText, helpMessage) {
    if ( !regex.test(inputStr) ) {
        if ( helpText != null )
          helpText.innerHTML = helpMessage;
          return false;
    } else {
        if (helpText != null) 
            helpText.innerHTML = "";
            return true;
    }
}

function validateEmail(inputField, helpText) {
    if ( !validateNonEmpty(inputField, helpText) )
      return false;
      return validateRegEx(/^\w+@\w+\.\w{2,4}$/, inputField.value, helpText, "Invalid @mail address");
}

function placeOrder(form) {
    if  ( validateLengh(1, 32, form["message"], form["message_help"]) &&
          validateZIPCode(form["zipcode"], form["zipcode_help"]) &&
          validateNonEmpty(form["dateshown"], form["dateshown_help"]) &&
          validateNonEmpty(form["yourname"], form["yourname_help"]) &&
          validateNonEmpty(form["phone"], form["phone_help"]) &&
          validateNonEmpty(form["email"], form["email_help"])) {
        form.submit();
        } else {
            alert("Sorry. You didn’t enter all the data");

        }        
}

