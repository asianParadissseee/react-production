module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/src/**/*.test.{ts,tsx}"
            ],
            rules: {
                "i18next/no-literal-string": "off"
            },
            "parserOptions": {
                "sourceType": "script"
            }
        },

    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [
            2, 4
        ],
        "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", "tsx"]}],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "indent": [
            2, 4
        ],
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-indent-props": [2, 4],
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "i18next/no-literal-string": ["error", {
            markupOnly: true,
            ignoreAttribute: ["data-testid"]
        }],
        "max-len": ["error", {
            ignoreComments: true,
            code: 100
        }]
    },
    globals: {
        "__IS_DEV__": true
    },


}
