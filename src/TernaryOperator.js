// ternary operator (?) is a simplified conditional operator like if/else
// condition ? <expression if true> : <expression if false>

// example:
if (authenticated) {
    renderApp();
} else {
    renderLogin();
}

// ternary version
authenticated ? renderApp() : renderLogin();