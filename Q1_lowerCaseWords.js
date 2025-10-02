
// Q1_lowerCaseWords.js

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            if (!Array.isArray(mixedArray)) {
                throw new Error("Input must be an array");
            }

            const filtered = mixedArray
                .filter(item => typeof item === "string")
                .map(word => word.toLowerCase());

            resolve(filtered);
        } catch (err) {
            reject(err);
        }
    });
}

// Example usage
const input = ["PIZZA", 10, true, "JavaScript", "NODEjs", 25];
lowerCaseWords(input)
    .then(result => console.log("Lowercased words:", result))
    .catch(err => console.error(err));
