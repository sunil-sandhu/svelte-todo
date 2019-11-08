import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    list: [{ id: 1, text: "clean the house" }, { id: 2, text: "buy milk" }],
    todo: ""
  }
});

export default app;
