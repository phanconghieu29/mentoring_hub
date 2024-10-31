import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Pages/Home.vue";
import LoginForm from "../components/Login.vue";
import RegisterForm from "../components/Register.vue";
import ProfileMentee from "../components/Pages/ProfileMentee.vue";
import Mentors from "../components/Pages/Mentors.vue";
import ListDocuments from "@/components/Pages/ListDocuments.vue";
import DisplayPDF from "@/components/Features/DisplayPDF.vue";
// Định nghĩa các routes của bạn
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterForm,
  },
  {
    path: "/profile-mentee",
    name: "Profile-mentee",
    component: ProfileMentee,
  },
  {
    path: "/mentors",
    name: "MentorList",
    component: Mentors,
  },
  {
    path: "/list-documents",
    name: "ListDocuments",
    component: ListDocuments,
  },
  {
    path: "/display-pdf/:path",
    name: "DisplayPDF",
    component: DisplayPDF,
  },
];

// Tạo router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Xuất router để sử dụng trong app
export default router;
