<template>
  <nav class="sticky-nav">
    <div class="underline"></div>
    <router-link to="/" @click="ul(0)">Home</router-link>
    <router-link to="/login" @click="ul(1)">Login</router-link>
    <router-link to="/register" @click="ul(2)">Register</router-link>
    <router-link to="/profile-mentee" @click="ul(3)">ProfileMentee</router-link>
  </nav>
</template>

<style scoped>
:root {
  --underline-height: 0.5em;
  --transition-duration: 0.5s;
}


nav.sticky-nav {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0; /* Sticks the navbar to the top of the page */
  z-index: 1000; /* Ensure it stays above other content */
  white-space: nowrap;
  background: white;
  padding: var(--underline-height) 0 20px; /* Add padding-bottom here */
  /* margin: 2em 0; */
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.05); /* Adjust shadow */
  transition: background-color 0.3s ease; /* Optional: smooth background transition on scroll */
}

.underline {
  display: block;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  height: var(--underline-height);
  width: 20%; /* Adjust as needed */
  background: black;
  pointer-events: none;
  transition: transform var(--transition-duration) ease-in-out;
}

a {
  display: inline-block;
  z-index: 10;
  width: 20%; /* Equal spacing for nav items */
  padding: 1em 0;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit; /* Inherit color for better styling */
}

a.router-link-exact-active {
  font-weight: bold; /* Optional: highlight active link */
}
</style>

<script>
export default {
  methods: {
    ul(index) {
      const underline = document.querySelector(".underline");
      underline.style.transform = "translateX(" + (index * 100) + "%)";
    },
  },
};
</script>
