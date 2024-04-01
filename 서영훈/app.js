import router from "./router/router.js";
import HeaderComponent from "./layouts/header.js";
import FooterComponent from "./layouts/footer.js";

const { createApp } = Vue;

let template = `
    <div>
        <HeaderComponent />
        <router-link v-bind:to="{ name: 'userList' }">유저 전체조회</router-link>
        <hr>
        <router-link v-bind:to="{ name: 'userInfo' }">유저조회</router-link>
        <hr>
        <router-link v-bind:to="{ name: 'userInsert' }">유저등록</router-link>
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
