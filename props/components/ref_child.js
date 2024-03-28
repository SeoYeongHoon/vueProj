let template = `
    <div>
        <button id="cBtn" type="button" @click="childCheck()" ref="btn">Click</button>
        <p> {{ msg }} </p>
    </div>
`;

export default {
    template,
    data() {
        return {
            msg: "",
        };
    },
    mounted() {
        this.$refs.btn.click();
    },
    methods: {
        childCheck() {
            console.log("click 이벤트 발생");
        },
        childFunc() {
            console.log("child method 실행");
        },
    },
};
