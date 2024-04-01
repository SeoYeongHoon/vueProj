import router from "./router/router.js";

import HeaderComponent from "./layouts/header.js";
import FooterComponent from "./layouts/footer.js";

const { createApp } = Vue;

let template = `
    <div>
        <HeaderComponent />
        <!-- <router-link v-bind:to="{ name: 'home' }">Home2</router-link>
        <router-link v-bind:to="{ path: '/' }">Home3</router-link>
        <router-link v-bind:to="{ name: 'test' }">Test</router-link>
        <router-link v-bind:to="{ path: '/test' }">Test</router-link>
        <br>
        <hr>
        <br> 
        <router-link v-bind:to="{ name: 'postInsert' }">등록</router-link>
        <hr> -->

        <router-link v-bind:to="{ name: 'postList' }">전체조회</router-link>
        <hr>
        <router-view :key="$route.fullpath" />
        <FooterComponent />
    </div>
`;

createApp({
    template,
    components: {
        HeaderComponent,
        FooterComponent,
    },
})
    .use(router)
    .mount("#app");
