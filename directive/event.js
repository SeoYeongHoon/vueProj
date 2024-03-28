let template = `
    <div>
        <button type="button" v-on:click="upCounter($event)">Plus 1</button>
        <button type="button" v-on:click="downCounter()">Minus 1</button>
        <p> The counter is: {{ counter }} </p>
        <hr>
        <input type="number" v-model="num">
        <button type="button" v-on:click="increaseCounter(num)">Plus {{ num }}</button>
        <p> The counter is: {{ sum }} </p>
    </div>
    <hr>
    <form v-on:click="showAlert('form')" style="border: 1px solid black">
        <div v-on:click.self="showAlert('div')" style="border: 1px solid red">
            <p v-on:click.once="showAlert('p')" style="border: 1px solid blue">
                <a v-on:click.prevent.stop href="https://google.com" target="_blank" style="border: 1px solid green">구글</a>
            </p>
            Click Div Tag
        </div>
    </form>
    <hr>
    <!-- <input type="text" v-model="keyword" v-on:keyup.enter="alert(keyword)"> -->
    <input type="text" v-model="keyword" @keyup.enter="alert(keyword)">
`;

export default {
    template,
    data() {
        return {
            counter: 0,
            num: 0,
            sum: 0,
            keyword: '',
        };
    },
    methods: {
        upCounter(data) {
            // == upCounter = function() {}
            console.log("이벤트 객체: ", data);
            this.counter++;
        },
        downCounter(data) {
            console.log("이벤트 객체: ", data);
            this.counter--;
        },
        increaseCounter(data) {
            console.log("이벤트 객체: ", data);
            this.sum += data;
        },
        showAlert(tag) {
            console.log("이벤트 객체: ", tag);
            alert("click" + tag);
        },
        alert(data) {
            console.log("이벤트 객체: ", data);
            alert(data);
        }
    },
};
