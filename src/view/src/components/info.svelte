<script>
  import axios from "axios";
  import { onMount } from "svelte";

  import { changeThemeInto } from "../interactive/index";

  let avatarPath = "";
  let canShowThemeValue = true;
  const getUserInfoHandle = async () => {
    const { data: resolve } = await axios.get("./user.json");
    avatarPath = resolve.avatarPath;
  };
  onMount(getUserInfoHandle);
</script>

<div class="left-box__option">
  <!-- svelte-ignore a11y-missing-attribute -->
  <img class="avatar-option" src={avatarPath} draggable="false" />
  <ul class="option-list">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- <li
      class="list-item theme-change-box"
      class:show-theme={canShowThemeValue}
      title="更换主题"
      on:click={changeThemeInto}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-sparkles"
        ><path
          d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
        /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path
          d="M17 19h4"
        /></svg
      >
    </li> -->
  </ul>
</div>

<style>
  .left-box__option {
    height: 52px;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    margin-bottom: 4px;
    border-radius: 4px;
    border: 1px solid #dededc;
    box-sizing: border-box;
    padding: 4px;
    display: flex;
    align-items: center;
  }
  .avatar-option {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #dededc;
  }
  .option-list {
    list-style: none;
    margin-left: 8px;
  }
  .list-item {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .list-item:hover {
    background-color: #ededeb;
  }
  .list-item svg {
    width: 16px;
    height: 16px;
    color: rgba(55, 53, 47, 0.35);
  }
</style>
