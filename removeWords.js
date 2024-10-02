function removeWords(original, wordsToRemove) {
    let neworiginal = original.split(" ");
    for (let index = 0; index < neworiginal.length; index++) {
        const element = neworiginal[index];
        if (element.includes(wordsToRemove)) {
            return 
        }
    }
}
console.log(removeWords("Hello ceci est un test", ["ceci","un"])); //Hello est test
