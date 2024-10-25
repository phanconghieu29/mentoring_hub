<template>
  <div class="tabs">
    <div class="tab-2">
      <label for="tab2-1">Tài liệu</label>
      <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
      <div>
        <h4>Danh sách các chủ đề</h4>
        <br>
        <!-- <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          consequat id velit quis vestibulum. Nam id orci eu urna mollis
          porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui.
          Sed laoreet condimentum nisi a egestas.
          <a
            class="documentation"
            href="https://flkt.mx/pitaya/componentes.html#pestanias"
            >Documentación en español</a
          >.
        </p> -->
        <!-- <p>
          Donec interdum ante ut enim consequat, quis varius nulla dapibus.
          Vivamus mollis fermentum augue a varius. Vestibulum in sapien at
          lectus gravida lobortis vulputate sed metus. Duis scelerisque justo et
          maximus efficitur. Donec eu eleifend quam. Curabitur aliquet commodo
          sapien eget vestibulum. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Vestibulum vel aliquet nunc,
          finibus posuere lorem. Suspendisse consectetur volutpat est ut ornare.
        </p> -->
        <!-- Tags for Tab 1 -->
        <div class="tags">
          <span v-for="tag in tab1Tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
    <div class="tab-2">
      <label for="tab2-2">Mentor</label>
      <input id="tab2-2" name="tabs-two" type="radio" />
      <div>
        <h4>Danh sách các lĩnh vực mentoring</h4>
        <br>
        <!-- <p>
          Quisque sit amet turpis leo. Maecenas sed dolor mi. Pellentesque
          varius elit in neque ornare commodo ac non tellus. Mauris id iaculis
          quam. Donec eu felis quam. Morbi tristique lorem eget iaculis
          consectetur. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Aenean at tellus eget risus
          tempus ultrices. Nam condimentum nisi enim, scelerisque faucibus
          lectus sodales at.
        </p> -->
        <!-- Tags for Tab 2 -->
        <div class="tags">
          <span v-for="tag in tab2Tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "1", // Initialize the active tab to Tab 1
      tab1Tags: ["Học thuật", "Khoa học", "Nghiên cứu"], // Tags for Tab 1
      tab2Tags: ["Phát triển bản thân", "Tài chính", "Kỹ năng sống"], // Tags for Tab 2
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/Tabs.css";
.tags {
  margin-top: 10px;
}

.tag {
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
  display: inline-block;
}
</style>
