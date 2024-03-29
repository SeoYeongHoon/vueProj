import HomeComponent from "../views/home.js";
import TestComponent from "../views/test.js";
import PostListComponent from "../views/postList.js";
import PostInfoComponent from "../views/postInfo.js";

const { createRouter, createWebHistory } = VueRouter;

let routes = [
    {
        path: "/index.html",
        redirect: "/",
    },
    {
        path: "/",
        name: "home",
        component: HomeComponent,
    },
    {
        path: "/test",
        name: "test",
        component: TestComponent,
    },
    {
        path: "/postList",
        name: "postList",
        component: PostListComponent,
    },
    {
        path: "/postInfo",
        name: "postInfo",
        component: PostInfoComponent,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
