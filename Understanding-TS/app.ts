let userInput: unknown;
let userName: string;

userInput = 89;
userInput = 'SWASTIK';
if (typeof userInput === 'string') {
        userName = userInput;
}

function generateError(message: string, code: number): never {
   throw {message: message, errorCode: code};
}

generateError('An error Occured!!!', 500);
