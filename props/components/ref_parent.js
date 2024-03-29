import ChildComponent from "./ref_child.js";

let template = `
    <div>
        <ChildComponent ref="child" />
        <button type="button" @click="changeChildData">Change Child Data</button>
        <button type="button" @click="clickChildEvent">Click Child Event</button>
        <button type="button" @click="executeChildFunc">Child Method Execute</button>
        <p> {{ msg }} </p>
    </div>
`;

export default {
    template,
    computed: {
        msg() {
            return this.$refs.child.msg;
        },
    },
    methods: {
        changeChildData() {
            console.log(this.$refs);
            console.log(this.$refs.child);
            this.$refs.child.msg = "Data Update";
        },
        clickChildEvent() {
            let childCom = this.$refs.child;
            let childBtn = childCom.$refs.btn;
            // console.log(childBtn);

            childBtn.click();
            // == this.$refs.child.$refs.btn.click();
        },
        executeChildFunc() {
            this.$refs.child.childFunc();
        },
    },
    components: {
        ChildComponent,
    },
};
