<script>
  import { onMount } from "svelte";
  import { content } from "./store";

  export let renderData = [];
  export let curIndex = 0;
  let id = "";
  onMount(() => {
    renderData.map((item) => {
      return {
        ...item,
        canOpen: false,
      };
    });
  });
  content.subscribe((value) => {
    id = value.id;
  });
  const getArticleInfo = (data) => {
    content.update(() => {
      return data;
    });
  };
  const openSelect = (e) => {
    const index = Number(e.target.getAttribute("data-index"));
    renderData[index].canOpen = !renderData[index].canOpen;
    if (renderData[index].canOpen) {
      const selectBox = e.target.parentNode.querySelector(".select-box");
      selectBox.style.height = "auto";
      selectBox.style.opacity = 1;
    } else {
      const selectBox = e.target.parentNode.querySelector(".select-box");
      selectBox.style.height = 0;
      selectBox.style.opacity = 0;
    }
  };
</script>

<div id="top-box">
  {#each renderData as item, index}
    <div class="lits-box">
      <ul>
        <li class="list-box__col">
          {#if item.isDir}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              data-index={index}
              style={`padding-left:${curIndex * 5}px`}
              class:active-select={item.canOpen}
              class:hide-select={!item.canOpen}
              on:click={openSelect}
              class="list-box__select"
            >
              <div class="list-box__select-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="roxund"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right"
                  ><polyline points="9 18 15 12 9 6" /></svg
                >
              </div>
              <p>{item.name}</p>
            </div>
            <div class:hide={!item.canOpen} class="select-box">
              <svelte:self curIndex={curIndex + 1} renderData={item.children} />
            </div>
          {:else}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              style={`padding-left:${curIndex * 5}px`}
              on:click={getArticleInfo(item)}
              class="list-box__select only-name"
              class:active-name={item.id === id}
            >
              <div class="list-box__select-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-file"
                  ><path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  /><polyline points="14 2 14 8 20 8" /></svg
                >
              </div>
              <p>{item.name}</p>
            </div>
          {/if}
        </li>
      </ul>
    </div>
  {/each}
</div>

<style src="./RenderBox.css">
</style>
