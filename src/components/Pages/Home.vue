<template>
  <div class="home-page">
    <SearchingBar />
    <FilteringFeature />
    <h1>HomePage</h1>
    <PopularDocuments />
    <PopularMentor />
    <FooterPage />
  </div>
</template>

<script>
import PopularDocuments from "../Features/PopularDocuments.vue";
import PopularMentor from "../Features/PopularMentor.vue";
import SearchingBar from "../Features/SearchingBar.vue";
import FilteringFeature from "../Features/FilteringFeature.vue";
import FooterPage from "../Features/FooterPage.vue";

export default {
  name: "HomePage",
  components: {
    PopularDocuments,
    PopularMentor,
    SearchingBar,
    FilteringFeature,
    FooterPage,
  },
};
</script>
