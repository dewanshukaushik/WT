function validateCreditCard(cardNumber, expirationDate, cvvCode) {
    // Check the card type.
    var cardType = getCardType(cardNumber);
    if (cardType === null) {
      return false;
    }
  
    // Check the card length.
    if (cardNumber.length !== getCardLength(cardType)) {
      return false;
    }
  
    // Validate the card number using the Luhn algorithm.
    if (!validateCardNumber(cardNumber)) {
      return false;
    }
  
    // Check the expiration date.
    if (!validateExpirationDate(expirationDate)) {
      return false;
    }
  
    // Check the CVV code.
    if (!validateCvvCode(cvvCode, cardType)) {
      return false;
    }
  
    // All validations passed.
    return true;
  }
  
  // Get the card type based on the first few digits of the card number.
  function getCardType(cardNumber) {
    var firstTwoDigits = cardNumber.substring(0, 2);
    var firstFourDigits = cardNumber.substring(0, 4);
  
    if (firstTwoDigits === "34" || firstTwoDigits === "37") {
      return "American Express";
    } else if (firstFourDigits === "4012" || firstFourDigits === "4024" || firstFourDigits === "4042" || firstFourDigits === "4175") {
      return "Visa";
    } else if (firstTwoDigits === "51" || firstTwoDigits === "52" || firstTwoDigits === "53" || firstTwoDigits === "54" || firstTwoDigits === "55") {
      return "MasterCard";
    } else if (firstFourDigits === "6011" || firstFourDigits === "65") {
      return "Discover";
    } else {
      return null;
    }
  }
  
  // Get the card length based on the card type.
  function getCardLength(cardType) {
    switch (cardType) {
      case "American Express":
        return 15;
      case "Visa":
        return 16;
      case "MasterCard":
        return 16;
      case "Discover":
        return 16;
      default:
        return null;
    }
  }
  
  // Validate the card number using the Luhn algorithm.
  function validateCardNumber(cardNumber) {
    var sum = 0;
    var alternate = false;
  
    for (var i = cardNumber.length - 1; i >= 0; i--) {
      var digit = parseInt(cardNumber.charAt(i));
  
      if (alternate) {
        digit = digit * 2;
        if (digit > 9) {
          digit = digit - 9;
        }
      }
  
      sum = sum + digit;
      alternate = !alternate;
    }
  
    return (sum % 10 === 0);
  }
  
