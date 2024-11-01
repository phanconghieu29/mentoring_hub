<template>
  <div class="mentor-list">
    <h1>Danh sách các Mentor</h1>
    <MentorFilter :selectedTag="selectedTag" @tagSelected="filterMentorsByTag"/>
    <div class="mentorcard-container">
      <div class="mentors-grid">
        <MentorCard
          v-for="(mentor, index) in paginatedMentors"
          :key="index"
          :mentor="mentor"
          @connect="connectMentor"
        />
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Trang trước</button>
      <span>Trang {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Trang sau</button>
    </div>

    <!-- Modal Component -->
    <!-- <PopupModal v-if="showPopup" :mentor="selectedMentor" @close="closePopup" /> -->
    <PopupModal v-if="showPopup" :show="showPopup" :mentor="selectedMentor" @close="closePopup" />
  </div>
</template>

<script>
import MentorCard from "../Features/MentorCard.vue";
import MentorFilter from "../Features/MentorFilter.vue";
import PopupModal from "../Features/PopupModal.vue";
import mentorData from "../../assets/data/mentor.json";

export default {
  name: "MentorList",
  components: {
    MentorCard,
    MentorFilter,
    PopupModal, // Register Modal component
  },
  data() {
    return {
      mentors: mentorData,
      currentPage: 1,
      mentorsPerPage: 16,
      selectedTag: null,
      showPopup: false, // Toggle for popup visibility
      selectedMentor: null, // Store mentor data for modal
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredMentors.length / this.mentorsPerPage);
    },
    filteredMentors() {
      if (this.selectedTag) {
        return this.mentors.filter(mentor => mentor.tags.includes(this.selectedTag));
      }
      return this.mentors;
    },
    paginatedMentors() {
      const start = (this.currentPage - 1) * this.mentorsPerPage;
      const end = start + this.mentorsPerPage;
      return this.filteredMentors.slice(start, end);
    },
  },
  methods: {
    filterMentorsByTag(tag) {
      this.selectedTag = tag;
      this.currentPage = 1;
    },
    connectMentor(mentor) {
      console.log("Đã nhấn Kết nối cho mentor:", mentor);
      this.selectedMentor = mentor;
      this.showPopup = true;
      console.log("showPopup:", this.showPopup);
    },
    closePopup() {
      this.showPopup = false;
      this.selectedMentor = null;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
  },
};
</script>


<style scoped>
.mentor-list {
  width: 100vw;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mentor-list h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

.mentorcard-container {
  width: 80vw;
}

.mentors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cột */
  gap: 20px; /* Khoảng cách giữa các mentor card */
  margin: 0 auto;
  max-width: 1200px; /* Chiều rộng tối đa của lưới */
}

@media (max-width: 1200px) {
  .mentors-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 cột khi màn hình nhỏ hơn 1200px */
  }
}

@media (max-width: 900px) {
  .mentors-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 cột khi màn hình nhỏ hơn 900px */
  }
}

@media (max-width: 600px) {
  .mentors-grid {
    grid-template-columns: 1fr; /* 1 cột khi màn hình nhỏ hơn 600px */
  }
}

.flip-card {
  width: 100%;
  height: 460px;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  background-color: #0cf;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  align-self: center;
  font-weight: bold;
}
</style>
