<script>
  import ToDoItem from "./ToDoItem.svelte";


  let todo = "";
  let list = [
    { id: 1, text: "clean the house" },
    { id: 2, text: "buy milk" }
  ];



  const Logo = "../assets/logo.png";

  const createNewToDoItem = () => {
    //validate todo
    if (!todo) {
      alert("Please enter a todo!");
      return;
    }

    const newId = list.length
      ? Math.max.apply(null, list.map(t => t.id)) + 1
      : 1;
    list = [...list, { id: newId, text: todo }];
    todo = "";
  };

  const deleteItem = id => {
    list = list.filter(item => item.id !== id);
  };
</script>

<style>
  .Logo {
    width: 50px;
    position: relative;
    top: 50px;
  }

  .ToDo {
    text-align: center;
    border: 1px solid white;
    width: 80vw;
    height: auto;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
    background: #fdfdfd;
    padding-bottom: 60px;
    margin: 40px auto;
  }

  .ToDo-Header {
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 70px auto 30px;
  }

  .ToDo-Add {
    padding: 4px 12px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    font-size: 28px;
    display: block;
    background: #73ff73;
    box-shadow: 1px 1px 1px #47a947;
    margin: 10px auto 0;
  }

  .ToDo-Add:hover {
    box-shadow: none;
  }

  .ToDo-Container {
    width: 80%;
    margin: 0 auto;
  }
</style>

<div class="ToDo">
  <img class="Logo" src={Logo} alt="Svelte logo" />
  <h1 class="ToDo-Header">Svelte To Do</h1>
  <div class="ToDo-Container">
    <div class="ToDo-Content">
      {#each list as item, i (item.id)}
        <ToDoItem {item} on:deleteItem={deleteItem} />
      {/each}
    </div>
    <input type="text" bind:value={todo} />
    <button class="ToDo-Add" on:click={createNewToDoItem}>+</button>
  </div>
</div>
