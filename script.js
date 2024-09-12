// Good Luck 💪🏾
function getFirstNames(nestedArray) {
    let firstNames = [];
    for (let i = 0; i < nestedArray.length; i++) {
        firstNames.push(nestedArray[i][0]);
    }
    return firstNames;
}

// Test case
console.log(getFirstNames([["Ahmed", "Aisha", "Amina"], ["Jaamac", "Khadijah", "Layla"], ["Mohamed", "Ali"]]));
// ➞ ["Ahmed", "Jaamac", "Mohamed"]
