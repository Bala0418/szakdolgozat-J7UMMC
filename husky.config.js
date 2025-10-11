module.exports = {
  hooks: {
    'pre-commit': 'tsc && tsd --build --clean && lint-staged',
  },
};
