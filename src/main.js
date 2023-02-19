import App from "./App.svelte";
import list from "./components/ToDo.svelte";

const app = new App({
  target: document.body,
  props: {
    list,
    todo: "",
  },
});

export default app;
