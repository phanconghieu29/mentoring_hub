<template>
  <div class="namecard">
    <h5 class="text-primary text-uppercase mb-3" style="letter-spacing: 5px">
      Mentors
    </h5>
    <h1>Danh sách mentors được quan tâm nhiều nhất</h1>
    <div class="slider-container">
      <div class="slider-wrapper">
        <div class="slider-content" :style="{ transform: `translateX(${currentIndex * -100}%)` }">
          <div class="slide" v-for="(slide, index) in groupedMentors" :key="index">
            <MentorCard v-for="mentor in slide" :key="mentor.id" :mentor="mentor" @connect="connectMentor" />
          </div>
        </div>
      </div>
    </div>
    <router-link to="/mentors">Xem thêm</router-link>
    <PopupModal :show="showPopup" :mentor="selectedMentor" @close="closePopup" />
  </div>

  <!-- Popup Modal -->
  <!-- <div v-if="showPopup" class="modal-overlay">
    <div class="modal-content">
      <h3>Gửi lời chào đến {{ selectedMentor.name }}</h3>
      <textarea v-model="greeting" :maxlength="maxGreetingLength * 5"
        placeholder="Nhập lời chào (tối đa 250 từ)..."></textarea>
      <p>{{ wordCount }} / {{ maxGreetingLength }} từ</p>
      <button class="btn btn-send" @click="sendGreeting">Gửi</button>
      <button class="btn btn-cancel" @click="closePopup">Hủy</button>
    </div>
  </div> -->

</template>

<script>
import MentorCard from "./MentorCard.vue";
import mentorData from '../../assets/data/mentor.json';
import PopupModal from "./PopupModal.vue";

export default {
  name: "PopularMentor",
  components: {MentorCard, PopupModal},
  data() {
    return {
      currentIndex: 0,
      mentors: mentorData,
      interval: null,
      showPopup: false,
      selectedMentor: null,
      greeting: '',
      maxGreetingLength: 250,
    };
  },
  computed: {
    groupedMentors() {
    const maxMentors = 10;
    const limitedMentors = this.mentors.slice(0, maxMentors); 
    const groups = [];
    for (let i = 0; i < limitedMentors.length; i += 5) {
      groups.push(limitedMentors.slice(i, i + 4));
    }
    return groups;
  },
  wordCount() {
    return this.greeting.trim() ? this.greeting.trim().split(/\s+/).length : 0;
  },
  },
  methods: {
    slideToNext() {
      const maxIndex = this.groupedMentors.length - 1;
      this.currentIndex = (this.currentIndex + 1) % (maxIndex + 1);
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.slideToNext();
      }, 5000);
    },
    stopAutoSlide() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    connectMentor(mentor) {
      // Stop the slider
      this.stopAutoSlide();

      // Set the selected mentor and open the popup
      this.selectedMentor = mentor;
      this.showPopup = true;
    },
    closePopup() {
      // Close the modal and reset greeting
      this.showPopup = false;
      this.greeting = '';

      // Optionally restart the slider
      this.startAutoSlide();
    },
    sendGreeting() {
      if (this.greeting.trim().length > 0) {
        // Process sending the greeting (e.g., API call or other logic)
        alert(`Lời chào đã được gửi đến ${this.selectedMentor.name}`);

        // Close the popup after sending
        this.closePopup();
      } else {
        alert('Vui lòng nhập lời chào trước khi gửi.');
      }
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
@import "../../assets/css/Home.css";

.namecard {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider-container {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.slider-wrapper {
  width: 80%;
  overflow: hidden;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease;
  width: calc(100% * (groupedMentors.length));
}

.slide {
  display: flex;
  flex: 0 0 100%;
}

.flip-card {
  background-color: transparent;
  width: calc(25% - 20px);
  height: 470px;
  perspective: 1000px;
  margin: 10px;
}

/* .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 20px;
  width: 400px;
  border-radius: 10px;
  text-align: center;
}

textarea {
  width: 100%;
  height: 100px;
  margin: 10px 0;
}

.btn-send {
  background: #0cf;
  color: white;
  margin-bottom: 10px;
}

.btn-cancel {
  background: red;
  color: white;
} */
</style>
