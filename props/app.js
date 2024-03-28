import MyNameComponent from "./components/myName.js";
import CheckComponent from "./components/check.js";
import RefComponent from "./components/ref_parent.js";

const { createApp } = Vue;

const template = `
<div>
    <!-- 자식 컴포넌트 추가 -->
    <!-- <MyNameComponent /> -->
    <!-- <CheckComponent /> -->
    <RefComponent />
</div>
`;

createApp({
    template,
    components: {
        MyNameComponent,
        CheckComponent,
        RefComponent,
    },
}).mount("#app");
