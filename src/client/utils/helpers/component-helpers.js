const generateComponentStyleConfig = (component, modifiers) => (
  modifiers.reduce((config, modifier) => (
    config + ((modifier) ? `${component}--${modifier} ` : '')
  ), '')
);

export default { generateComponentStyleConfig };
