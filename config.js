module.exports = {
  defaultConfig: {
    globTemplateCopy: ['src/**/*.soy', 'build/**/*.soy', 'jspm_packages/github/alloyui/core@master/soy/SoyComponent.soy'],
    templateData: {
      renderChildComponents: true
    }
  }
};
