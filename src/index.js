module.exports = function check(str, bracketsConfig) {
    // your solution
    let stack = [];
    const getLastBracket = (stack) => stack[stack.length - 1];

    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);

        for (let j = 0; j < bracketsConfig.length; j++) {
            if (letter === bracketsConfig[j][0]) {
                if (
                    (letter === "|" && getLastBracket(stack) === "|") ||
                    (letter === "7" && getLastBracket(stack) === "7") ||
                    (letter === "8" && getLastBracket(stack) === "8")
                ) {
                    stack.pop();
                } else {
                    stack.push(letter);
                }
            } else if (letter === bracketsConfig[j][1]) {
                if (
                    getLastBracket(stack) === bracketsConfig[j][0] ||
                    getLastBracket(stack) === "|"
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};
