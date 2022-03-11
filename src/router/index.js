import { createRouter, createMemoryHistory } from "vue-router";
import edit from '@/views/Edit.vue'
import preview from '@/views/Preview.vue'

const routes = [
  { path: '/edit', component: edit, alias: '/' },
  { path: '/preview', component: preview },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
