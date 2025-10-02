
// Q2_promises.js

function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved: This promise was successful after 500ms.");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected: This promise failed after 500ms.");
        }, 500);
    });
}

// Example usage
resolvedPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err));

rejectedPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
