// 자식 컴포넌트
let ChildComponent = {
    template: `
        <div>
            <p> 내 이름은 {{ myName }}입니다. </p>
            <p> 변경될 이름 </p>
            <input type="text" v-model.lazy="updateName" @keyup.enter="updateMyName()">
        </div>
    `,
    props: ["myName"],
    data() {
        return {
            updateName: "",
        };
    },
    methods: {
        updateMyName() {
            this.$emit('update-name', this.updateName, '업데이트 진행');
        }
    }
};

// 부모 컴포넌트
export default {
    template: `
        <div>
            <ChildComponent v-bind:myName="first" v-on:update-name="getName" />
            <ChildComponent v-bind:myName="second" />
        </div>
    `,
    data() {
        return {
            first: "Seo",
            second: "YeongHoon",
        };
    },
    components: {
        ChildComponent,
    },
    methods: {
        getName(data, msg) {
            console.log(data, msg);
        }
    }
};
