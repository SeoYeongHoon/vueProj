import ChildComponent from "./slot_child.js";

let template = `
    <div>
        <ChildComponent>

            <template v-slot:title >
                <h1>팝업 타이틀</h1>
            </template>

            <template v-slot:content >
                <p>팝업 컨텐츠1</p>
                <p>팝업 컨텐츠2</p>
            </template>

            <template v-slot:default >  <!-- default: 이름이 없는 슬롯 -->
                <button type="button">닫기</button>
            </template>

        </ChildComponent>

        <hr>

        <ChildComponent>
            <template v-slot:title >
                <h1>Info</h1>
            </template>

            <template v-slot:content >
                <p>Service</p>
                <input type="radio" v-model="select" value="A">A유형
                <br>
                <input type="radio" v-model="select" value="B">B유형
            </template>

            <template v-slot:default >  <!-- default: 이름이 없는 슬롯 -->
                <button type="button">완료</button>
            </template>
        </ChildComponent>

    </div>
`;

export default {
    template,
    data() {
        return {
            select: "",
        }
    },
    components: {
        ChildComponent,
    },
};
