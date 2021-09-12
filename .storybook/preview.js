import "../src/index.css";

//👇 Configures Storybook to log the actions in the UI.
export const parameters = {
  /* 
    Automatically matching args
    use a parameter to match all argTypes 
    that match a certain pattern. The following configuration 
    automatically creates actions for each on argType (which 
    you can either specify manually or can be inferred 
    automatically). 
  */
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
