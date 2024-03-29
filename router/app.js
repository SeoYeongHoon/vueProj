import router from "./router/router.js";

const { createApp } = Vue;

let template = `
    <div>
        <!-- <router-link to="/router/home">Home</router-link> -->
        <router-link v-bind:to="{ name: 'home' }">Home2</router-link>
        <router-link v-bind:to="{ path: '/' }">Home3</router-link>
        <router-link v-bind:to="{ name: 'test' }">Test</router-link>
        <router-link v-bind:to="{ path: '/test' }">Test</router-link>
        <br>
        <hr>
        <br>
        <router-link v-bind:to="{ name: 'postList' }">전체조회</router-link>
        <hr>
        <router-link v-bind:to="{ name: 'postInfo' }">단건조회</router-link>
        <router-view :key="$route.fullpath" />
    </div>
`;

createApp({
    template,
})
    .use(router)
    .mount("#app");
