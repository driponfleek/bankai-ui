// Naming Conventions - Variables
export const codeStrVariablesCorrectEx = `let myVariable = 10`;
export const codeStrVariablesIncorrectEx = `let my_variable = 10`;

// Naming Conventions - Functions
export const codeStrFunctionsCorrectEx = `function calculateTotal(price, quality) {
    ...
}`;
export const codeStrFunctionsIncorrectEx = `function calculate_total(price, quality) {
    ...
}`;

// Naming Conventions - Functions - Event Handlers
export const codeStrEvtHandlersCorrectEx = `function handleButtonClick() {
    ...
}`;
export const codeStrEvtHandlersIncorrectEx = `function buttonClickHandler() {
    ...
}`;

// Naming Conventions - Functions - API Fetchers
export const codeStrAPIFetchCorrectEx = `function fetchUserData() {
    ...
}

function fetchConfig() {
    ...
}`;
export const codeStrAPIFetchIncorrectEx = `function getUserData() {
    ...
}

function getConfigFromBackend() {
    ...
}`;

// Naming Conventions - Functions - Getter Functions
export const codeStrGetterFuncsCorrectEx = `function getValue() {
    ...
}`;
export const codeStrGetterFuncsIncorrectEx = `function retrieveValue() {
    ...
}`;

// Naming Conventions - Constants
export const codeStrConstCorrectEx = `const MAX_VALUE = 100;`;
export const codeStrConstIncorrectEx = `const maxValue = 100;`;

// Naming Conventions - Classes
export const codeStrClassCorrectEx = `class Car {
    ...
}`;
export const codeStrClassIncorrectEx = `class car {
    ...
}`;

// Naming Conventions - Booleans
export const codeStrBoolCorrectEx = `const isAvailable = true;`;
export const codeStrBoolIncorrectEx = `const available = true;`;

// Naming Conventions - Acronyms and Abbreviations
export const codeStrAcrAbbrCorrectEx = `let htmlElement = '';
let xmlHttpRequest = '';
let pdfGenerator = '';`;
export const codeStrAcrAbbrIncorrectEx = `let HTMLElement = '';
let XMLHTTPRequest = '';
let PDF_Generator = '';`;

// Naming Conventions - No using underscore prefix
export const codeStrNoUnderscoresCorrectEx = `function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      getCount: function() {
        return count;
      },
    };
  }`;

export const codeStrNoUnderscoresIncorrectEx = `let _privateVariable = '';
function _privateFunction() {}`;
