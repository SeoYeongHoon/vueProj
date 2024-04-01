import UserListComponent from "../views/userList.js";
import UserInfoComponent from "../views/userInfo.js";

const { createRouter, createWebHistory } = VueRouter;

let routes = [
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;