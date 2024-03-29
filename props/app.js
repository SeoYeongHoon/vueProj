import MyNameComponent from "./components/myName.js";
import CheckComponent from "./components/check.js";
import RefComponent from "./components/ref_parent.js";
import SlotComponent from "./components/slot_parent.js";

const { createApp } = Vue;

const template = `
<div>
    <!-- 자식 컴포넌트 추가 -->
    <!-- <MyNameComponent /> -->
    <!-- <CheckComponent /> -->
    <!-- <RefComponent /> -->
    <SlotComponent />
</div>
`;

createApp({
    template,
    components: {
        MyNameComponent,
        CheckComponent,
        RefComponent,
        SlotComponent,
    },
}).mount("#app");
