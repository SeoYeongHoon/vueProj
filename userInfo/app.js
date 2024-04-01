import router from "./router/router.js";

const { createApp } = Vue;

let template = `
    <div>
        <router-link v-bind:to="{ name: 'userList' }">유저 전체조회</router-link>
        <hr>
        <router-link v-bind:to="{ name: 'userInfo' }">유저조회</router-link>
        <hr>
        <router-view :key="$route.fullpath" />
    </div>
`;

createApp({
    template,
})
    .use(router)
    .mount("#app");
