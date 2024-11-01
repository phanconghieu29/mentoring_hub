<template>
  <div class="mentor-filter">
    <!-- Tags for Mentor -->
    <div class="tags">
      <span v-for="tag in mentorTags" :key="tag" class="tag" :class="{ active: tag === selectedTag }"
        @click="selectTag(tag)">
        {{ tag }}
      </span>
    </div>
    <button @click="showPopup" class="btn-view-more">
      Xem thêm lĩnh vực mentoring
    </button>

    <!-- Popup Modal -->
    <div v-if="isPopupVisible" class="modal-popup">
      <div class="modal-content-popup">
        <button @click="closePopup" class="close-btn">X</button>
        <h3>{{ popupTitle }}</h3>
        <div class="tags">
          <span v-for="tag in fullMentorTags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <h5 @click="navigateToMentorList" style="cursor: pointer; color: blue">
        Xem thêm
      </h5>
    </div>
  </div>
</template>

<script>
import catalogies from "../../assets/data/catalogies.json";
import mentors from "../../assets/data/mentor.json"; // Đảm bảo bạn đã nhập file mentor.json

export default {
  props: {
    selectedTag: String,
  },
  data() {
    return {
      // Lọc ra các tag có trong danh sách mentor
      mentorTags: this.getUniqueMentorTags(),
      isPopupVisible: false,
      fullMentorTags: [],
      popupTitle: "Tất cả lĩnh vực mentoring",
    };
  },
  methods: {
    getUniqueMentorTags() {
      const tagsSet = new Set();
      mentors.forEach(mentor => {
        mentor.tags.forEach(tag => tagsSet.add(tag));
      });
      return Array.from(tagsSet).slice(0, 20); // Chỉ lấy 20 tag đầu tiên
    },
    selectTag(tag) {
      this.$emit('tagSelected', tag); // Phát ra sự kiện với tag đã chọn
    },
    showPopup() {
      this.fullMentorTags = catalogies.tabs.find((tab) => tab.tabId === 2).tags;
      this.isPopupVisible = true;
      document.body.style.overflow = "hidden";
    },
    closePopup() {
      this.isPopupVisible = false;
      this.fullMentorTags = [];
      document.body.style.overflow = "";
    },
    navigateToMentorList() {
      this.closePopup(); // Đóng popup trước khi điều hướng
      this.$router.push({ name: "MentorList" }); // Điều hướng tới trang danh sách mentor
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/Tabs.css";

.mentor-filter {
  margin-bottom: 2rem;
}

.tags {
  margin-top: 10px;
  width: 75vw;
  margin-bottom: 15px;
}

.tag {
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
}

.tag.active {
  background-color: #007BFF;
  color: #fff;
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

.btn-view-more {
  color: blue;
}
</style>
