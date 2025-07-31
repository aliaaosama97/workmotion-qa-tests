module.exports = {
    default: {
      require: [
        'features/step_definitions/*.js',
        'features/support/*.js', 
        'C:\Users\Aliaa osama\Desktop\workmotion-qa-tests\cypress\WorkMotion_Platform\features\stepDefenitions',
      ],
      format: ['pretty'], 
      paths: ['features/*.feature'], 
      publishQuiet: true,
    },
  };