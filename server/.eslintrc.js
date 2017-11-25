module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8 // or 2017
    },
    "rules": {
        "indent": 0,
        "quotes": 0,
        "semi": 0,
        "no-console": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
    }
};
