const filter = require("profane-words");

// Create the class
class Profanity {
    // Function to identify profanity within a string
    identify(text) {
        const substring = text.split(" "); // Split the string into an array, separated by spaces

        let matchedWords = [];
        
        substring.forEach(element => {
            let wordMatches = [];

            filter.forEach(word => {
                const regex = new RegExp(word, "ig");
                let matches = element.match(regex);
                if(matches) {
                    wordMatches.push(matches[0]);
                }
            });

            if(wordMatches.length) {
                matchedWords.push({
                    word: element,
                    profanity_matches: wordMatches
                });
            }
        });
        
        let data = {
            identified_profanity: matchedWords,
            isProfanic: matchedWords.length ? true : false,
            percentage: matchedWords.length ? `${Math.round((matchedWords.length / substring.length) * 100)}%` : "0%"
        }

        return data
    }

    censor(text) {
        let substring = text.split(" ");    
        let outputString = "";
        let outputWord = "";

        substring.forEach(element => {
            let wordMatches = [];
            let isProfanic = false;
            filter.forEach(word => {
                const regex = new RegExp(word, "ig");
                let matches = element.match(regex);
                if(matches) {
                    wordMatches.push(matches[0]);
                    isProfanic = true
                }
            });
            
            if(!isProfanic) {
                outputString += `${element} `;
            } else {
                outputWord = "";
                for(let i = 0; i <= element.length - 1; i++) {
                    if(i == 0 || i == element.length - 1) {
                        outputWord += element[i];
                    } else {
                        outputWord += "*"
                    }
                }
                outputString += `${outputWord} `;
            }
        });
        
        return outputString;
    }

    hasProfanity(text) {
        const data = this.identify(text);
        return data.isProfanic ? true : false;
    }
}

module.exports = {
    hasProfanity: new Profanity().hasProfanity,
    identify: new Profanity().identify,
    censor: new Profanity().censor
}