let ChildComponent = {
    template: `
        <div>
            <p> 숫자: {{ num }} </p>
            <p> 문자열: {{ str }} </p>
            <p> 짝수: {{ even }} </p>
            <p> 객체: {{ obj }} </p>
        </div>
    `,
    props: {
        num: {
            type: Number, // 데이터 타입 설정(교재 147p), 복수일 땐 [Number, String, ...] 배열로 나열
            required: true,
        },
        str: {
            type: String,
            default: "값이 없다면 이 문자열이 나옴",
        },
        even: {
            validator(value) {
                return value % 2 == 0;
            },
        },
        // obj: Object,
        obj: {
            type: Object,
            default: () => {
                return {
                    name: "Seo",
                    age: 20,
                };
            },
        },
    },
};

export default {
    template: `
        <div>
            <ChildComponent v-bind:num="myNumber" v-bind:str="sendMsg" :even="myNumber" :obj="newObj" />
        </div>   
    `,
    data() {
        return {
            myNumber: 55,
            sendMsg: "Hello, World!",
            newObj: null,
        };
    },
    components: { ChildComponent },
};
