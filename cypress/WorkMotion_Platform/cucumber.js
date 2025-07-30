module.exports = {
    default: {
      require: [
        'features/step_definitions/*.js',
        'features/support/*.js', 
      ],
      format: ['pretty'], 
      paths: ['features/*.feature'], 
      publishQuiet: true,
    },
  };