function capitalizeWords(str) {
    // Split the input string into words using whitespace as a delimiter
    const words = str.split(' ');
  
    // Create an array to store the capitalized words
    const capitalizedWords = [];
  
    // Iterate through each word
    for (const word of words) {
      // Capitalize the first letter of the word and make the rest lowercase
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      
      // Add the capitalized word to the array
      capitalizedWords.push(capitalizedWord);
    }
  
    // Join the capitalized words back together with a space between them
    const result = capitalizedWords.join(' ');
  
    return result;
  }
  
  // Example usage:
  const inputString = "hello world";
  const capitalizedString = capitalizeWords(inputString);
  console.log(capitalizedString); // Output: "Hello World"
  