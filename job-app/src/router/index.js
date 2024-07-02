import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "@/views/AboutView.vue";
import TheJobs from '../views/jobs/TheJobs.vue'
import jobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue';  


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: About,
  },
  {
    path: "/jobs",
    name: "jobs",

    component: TheJobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: jobDetails,
    props: true
  },
  //redirect
  {
    path : '/all-jobs',
    redirect : '/jobs'
  },
  //catchall 404
  {
    path: '/:catchAll(.*)',  // Tüm geçersiz rotalar için yakalama rotası
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
