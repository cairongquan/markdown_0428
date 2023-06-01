<script>
  import axios from "axios";

  import RenderBox from "./RenderBox.svelte";
  import Info from "./components/info.svelte";

  import { content } from "./store";

  import { styleList } from "../src/interactive/index";

  let renderData = [];
  let contentHTML = "";

  content.subscribe((value) => {
    contentHTML = value.content;
  });
  getDataHandle();
  async function getDataHandle() {
    const { data: resolve } = await axios.get("./export.json");
    renderData = resolve;
    if (renderData.find((item) => item.name === "index" && !item.isDir)) {
      content.update(() =>
        renderData.find((item) => item.name === "index" && !item.isDir)
      );
    }
  }
</script>

<ul class="out-ul">
  <li class="out-li">
    <div data-text="undefined" class="introduce-box">undefined</div>
    <div id="out-box">
      <div class="left-box">
        <Info />
        <RenderBox {renderData} />
      </div>
      <div class="right-box">
        {@html contentHTML}
      </div>
    </div>
  </li>
</ul>

<style>
  #out-box {
    background-color: #fff;
    height: 100vh;
    display: flex;
  }

  .left-box {
    width: 262px;
    height: 100vh;
    background-color: #f7f7f5;
    border-right: 1px solid #dededc;
    padding: 4px;
    box-sizing: border-box;
  }
  .right-box {
    width: calc(100% - 262px);
    max-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
  }
</style>
