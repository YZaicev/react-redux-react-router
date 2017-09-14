module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "standard",
        "standard-react",
        "react-app"
    ],
    "plugins": [
        "babel",
        "react",
        "promise",
        "extra-rules"
    ],
    "rules": {
        "indent": ["error", 4],
        "no-unused-expressions": 0,
        "consistent-return": 0,
        "import/first": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": "error",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "no-nested-ternary": 0,
        "space-before-function-paren": 0,
        "jsx-quotes": 0,
        "semi": 0,
        "comma-dangle": 0,
        "arrow-parens": 2,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
