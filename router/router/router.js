import HomeComponent from "../views/home.js";
import TestComponent from "../views/test.js";
import PostListComponent from "../views/postList.js";
import PostInfoComponent from "../views/postInfo.js";
import UserListComponent from "../views/userList.js";
import UserInfoComponent from "../views/userInfo.js";
import PostInsertComponent from "../views/postInsert.js";
import PostUpdateComponent from "../views/postUpdate.js";
import PostFormComponent from "../views/postForm.js";

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
    },
    {
        path: "/userList",
        name: "userList",
        component: UserListComponent,
    },
    {
        path: "/userInfo",
        name: "userInfo",
        component: UserInfoComponent,
    },
    {
        path: "/postInsert",
        name: "postInsert",
        component: PostInsertComponent,
    },
    {
        path: "/postUpdate",
        name: "postUpdate",
        component: PostUpdateComponent,
    },
    {
        path: "/postForm",
        name: "postForm",
        component: PostFormComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
