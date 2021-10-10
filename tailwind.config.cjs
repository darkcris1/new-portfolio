const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {}
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require("daisyui")
  ]
};

module.exports = config;