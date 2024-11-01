<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h3>Gửi lời chào đến {{ mentor.name }}</h3>
      <textarea v-model="greeting" :maxlength="maxGreetingLength * 5"
                placeholder="Nhập lời chào (tối đa 250 từ)..."></textarea>
      <p>{{ wordCount }} / {{ maxGreetingLength }} từ</p>
      <button class="btn btn-send" @click="sendGreeting">Gửi</button>
      <button class="btn btn-cancel" @click="close">Hủy</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    mentor: Object,
  },
  data() {
    return {
      greeting: '',
      maxGreetingLength: 250,
    };
  },
  computed: {
    wordCount() {
      return this.greeting.trim() ? this.greeting.trim().split(/\s+/).length : 0;
    },
  },
  methods: {
    close() {
      this.$emit("close");
      this.greeting = '';
    },
    sendGreeting() {
      if (this.greeting.trim().length > 0) {
        alert(`Lời chào đã được gửi đến ${this.mentor.name}`);
        this.close();
      } else {
        alert('Vui lòng nhập lời chào trước khi gửi.');
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
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
}
</style>
