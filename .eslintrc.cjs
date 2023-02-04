require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    env: {
        node: true,
    },
    extends: [
        'prettier',
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier",
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
