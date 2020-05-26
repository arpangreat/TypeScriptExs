"use strict";
var userInput;
var userName;
userInput = 89;
userInput = 'SWASTIK';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error Occured!!!', 500);
