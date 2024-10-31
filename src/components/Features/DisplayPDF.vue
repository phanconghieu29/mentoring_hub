<template>
  <div class="pdf-container">
    <h1 v-if="documentTitle">{{ documentTitle }}</h1>
    <h3 v-if="documentAuthor">Tác giả: {{ documentAuthor }}</h3>
    
    <div v-if="isLoading" class="loading">Đang tải PDF...</div>

    <object
      v-if="!isLoading && pdfPath"
      class="pdf"
      :data="pdfPath"
    ></object>
    

  </div>
</template>

<script>
import documents from "../../assets/data/documents.json";

export default {
  data() {
    return {
      pdfPath: "",
      documentTitle: "",
      documentAuthor: "",
      isLoading: true, // Loading state
      pdfScale: 1, // Scale for the PDF
    };
  },
  mounted() {
    // Get the path from the route parameters
    const pdfPathParam = this.$route.params.path;

    // Find the document in the JSON data that matches the path
    const document = documents.find((doc) => doc.path === pdfPathParam);

    // If the document is found, set the title, author, and path
    if (document) {
      this.pdfPath = document.path;
      this.documentTitle = document.title;
      this.documentAuthor = document.author;
      console.log("PDF Path:", this.pdfPath);

      // Simulating loading delay
      setTimeout(() => {
        this.isLoading = false; // Hide loading after fetching the document
      }, 1000); // 1 second delay
    } else {
      console.error("Document not found for path:", pdfPathParam);
    }
  },
  methods: {


  },
};
</script>

<style scoped>
.pdf-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100vh; /* Full viewport height */
}

.pdf {
  width: 100%; /* Full width of the container */
  height: 100%; /* Full height of the container */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners for PDF */
}

h1, h3 {
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.loading {
  font-size: 20px;
  color: #007bff; /* Blue color */
  text-align: center;
}

.controls {
  margin-top: 20px;
}
.btn-download {
  margin-right: 10px;
}
</style>
