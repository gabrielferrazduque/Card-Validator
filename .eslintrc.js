module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
        ],
        'id-length':  [
            "error"
        ],
        'camelcase': [
            'error'
        ],
        'keyword-spacing': [
            'error', {
            'after': true
        }],
        'space-infix-ops': [
            'error', {
            'int32Hint': false
        }], 
        'comma-spacing': [
            'error', {
            'before': false,
            'after': true
        }],
        'space-before-blocks': 2,
        'spaced-comment': [
        "error", "always",
        {
        "block": {
        "balanced": true }
        }],
        'key-spacing': [
            'error', {
            'beforeColon': true
        }],
        'no-multi-spaces': [
            "error",{ "ignoreEOLComments": true }
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'no-multiple-empty-lines': [
            'error', {
            'max': 0,
            'maxBOF': 1
        }], 
        'padded-blocks': [
            'error',
            'never'
        ], 
        'quotes': [
            'error',
            'single'
        ], 
        'no-floating-decimal': 2,
        'object-property-newline': 2,
        'brace-style': 2,
        'eqeqeq': [
            'error',
            'always'
        ],
        'no-array-constructor': 2,
    }
};