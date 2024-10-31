<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="image-section">
          <img :src="mentor.image" alt="Mentor Image" />
        </div>
        <div class="text-content">
          <span class="name">{{ mentor.name }}</span>
          <br />
          <span class="position">{{ mentor.position }}</span>
        </div>
      </div>
      <div class="flip-card-back">
        <p>{{ mentor.description }}</p>
        <div class="button-container">
          <button class="btn btn-infor">Thông tin</button>
          <button class="btn btn-infor" @click="$emit('connect', mentor)">Kết nối</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MentorCard",
  props: {
    mentor: Object,
  },
};
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
  margin: 10px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border: 2px solid #ddd;
  border-radius: 10px;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.flip-card-front {
  background-color: white;
}

/* .image-section {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img {
  width: 80%;
  height: auto;
  border-radius: 50%;
  border: 2px solid #0cf;
} */

.image-section {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img {
  width: 80%;
  border-radius: 50%;
  background: #021a2f;
}

.text-content {
  margin-top: 10px;
  text-align: center;
  color: #333;
  font-weight: 500;
}

.flip-card-back {
  background-color: #222;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-back p {
  margin: 10px 0;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
}

.btn {
  padding: 10px 15px;
  font-size: 14px;
  color: #0cf;
  background-color: #333;
  border: 2px solid #0cf;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background-color: #0cf;
  color: #333;
  box-shadow: 0 0 10px #0cf;
}
</style>
