import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:"/",
        component: ()=> import("../components/HelloWorld.vue")
    },
    {
        path: "/login",
        component: ()=> import("../components/LoginView.vue")
    },
    {
        path: "/reg",
        component: ()=> import("../components/RegView.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router