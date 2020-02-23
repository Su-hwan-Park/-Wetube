module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": "off",
    "spaced-comment": "off",
    "import/no-unresolved": "[2, {commonjs: true, amd: true}]",
    "import/named": "2",
    "import/namespace": "2",
    "import/default": "2",
    "import/export": "2",
    "import/no-cycle": "error"
  }
};
