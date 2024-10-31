<template>
  <div class="home-page">
    <SearchingBar />
    <!-- <FilteringFeature /> -->
    <h1>Danh sách tài liệu </h1>
    
    <PopularDocuments />
    <h1>Danh sách tất cả tài liệu</h1>
    <Documents/>
    <!-- <PopularMentor /> -->
    <FooterPage />
  </div>
</template>

<script>
import PopularDocuments from "../Features/PopularDocuments.vue";
// import PopularMentor from "../Features/PopularMentor.vue";
import Documents from "../Features/Documents.vue";
import SearchingBar from "../Features/SearchingBar.vue";
// import FilteringFeature from "../Features/FilteringFeature.vue";
import FooterPage from "../Features/FooterPage.vue";

export default {
  name: "HomePage",
  components: {
    PopularDocuments,
    Documents,
    SearchingBar,
    // FilteringFeature,
    FooterPage,
  },
};
</script>
