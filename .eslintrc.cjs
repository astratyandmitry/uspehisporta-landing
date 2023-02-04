require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "@vue/eslint-config-typescript",
        'plugin:tailwindcss/recommended'
    ],
    plugins: [
        'tailwindcss'
    ],
    rules: {
        "tailwindcss/no-custom-classname": "off",
        "tailwindcss/classnames-order": "warn",
        "tailwindcss/no-contradicting-classname": "error"
    },
};
