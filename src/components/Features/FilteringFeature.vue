<template>
  <div class="tabs">
    <!-- Tab 1 - Tài liệu -->
    <div class="tab-2">
      <label for="tab2-1">Tài liệu</label>
      <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
      <div>
        <h4>Danh sách các chủ đề</h4>
        <br />
        <div class="tags">
          <span v-for="tag in tab1Tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <button @click="showTab1Popup" class="btn-view-more">
          Xem thêm chủ đề
        </button>
      </div>
    </div>

    <!-- Tab 2 - Mentor -->
    <div class="tab-2">
      <label for="tab2-2">Mentor</label>
      <input id="tab2-2" name="tabs-two" type="radio" />
      <div>
        <h4>Danh sách các lĩnh vực mentoring</h4>
        <br />
        <div class="tags">
          <span v-for="tag in tab2Tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <button @click="showTab2Popup" class="btn-view-more">
          Xem thêm lĩnh vực mentoring
        </button>
      </div>
    </div>

    <!-- Popup Modal for Tab 1 -->
    <div v-if="isTab1PopupVisible" class="modal-popup">
      <div class="modal-content-popup">
        <button @click="closeTab1Popup" class="close-btn">X</button>
        <h3>{{ tab1PopupTitle }}</h3>
        <div class="tags">
          <span v-for="tag in fullTab1Tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <h5 @click="navigateToListDocuments" style="cursor: pointer; color: blue">
        Xem thêm
      </h5>
    </div>

    <!-- Popup Modal for Tab 2 -->
    <div v-if="isTab2PopupVisible" class="modal-popup">
      <div class="modal-content-popup">
        <button @click="closeTab2Popup" class="close-btn">X</button>
        <h3>{{ tab2PopupTitle }}</h3>
        <div class="tags">
          <span v-for="tag in fullTab2Tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <h5 @click="navigateToMentorList" style="cursor: pointer; color: blue">
        Xem thêm danh sách mentors
      </h5>
    </div>
  </div>
</template>

<script>
import catalogies from "../../assets/data/catalogies.json";

export default {
  data() {
    return {
      activeTab: "1",
      tab1Tags: catalogies.tabs.find((tab) => tab.tabId === 1).tags.slice(0, 20),
      tab2Tags: catalogies.tabs.find((tab) => tab.tabId === 2).tags.slice(0, 20),
      isTab1PopupVisible: false,
      isTab2PopupVisible: false,
      fullTab1Tags: [],
      fullTab2Tags: [],
      tab1PopupTitle: "Tất cả chủ đề",
      tab2PopupTitle: "Tất cả lĩnh vực mentoring",
    };
  },
  methods: {
    showTab1Popup() {
      this.fullTab1Tags = catalogies.tabs.find((tab) => tab.tabId === 1).tags;
      this.isTab1PopupVisible = true;
      document.body.style.overflow = "hidden"; // Ngăn cuộn
    },
    closeTab1Popup() {
      this.isTab1PopupVisible = false;
      this.fullTab1Tags = [];
      document.body.style.overflow = ""; // Khôi phục cuộn
    },
    showTab2Popup() {
      this.fullTab2Tags = catalogies.tabs.find((tab) => tab.tabId === 2).tags;
      this.isTab2PopupVisible = true;
      document.body.style.overflow = "hidden"; // Ngăn cuộn
    },
    closeTab2Popup() {
      this.isTab2PopupVisible = false;
      this.fullTab2Tags = [];
      document.body.style.overflow = ""; // Khôi phục cuộn
    },
    navigateToListDocuments() {
      this.closeTab1Popup(); // Đóng popup trước khi điều hướng
      this.$router.push({ name: "ListDocuments" });
    },
    navigateToMentorList() {
      this.closeTab2Popup(); // Đóng popup trước khi điều hướng
      this.$router.push({ name: "Login" }); // Thay đổi route theo yêu cầu
    },
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
.modal-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 1000;
  backdrop-filter: blur(5px);
  transform: translateZ(0);
}

.modal-content-popup {
  background: transparent;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
  transform: scale(1);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
