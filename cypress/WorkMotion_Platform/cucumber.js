module.exports = {
    default: {
      require: [
        'workmotion-qa-tests/cypress/WorkMotion_Platform/stepDefenitions/*.js',
        'features/support/*.js'
      ],
      format: ['pretty'], 
      paths: ['cypress/WorkMotion_Platform/features/*.feature'], 
      publishQuiet: true,
    },
  };