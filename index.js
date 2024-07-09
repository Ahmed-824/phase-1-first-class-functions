function receivesAFunction(callback) {
    callback(); 
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function returned by returnsANamedFunction.");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function returned by returnsAnAnonymousFunction.");
    };
}

