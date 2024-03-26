let template = `
    <div>
        <!-- text 속성 -->
        <p v-text="'Hello, ' + title">테스트</p>
        <p>Hello, {{ title }} </p>

        <!-- bind 디렉티브 -->
        <p v-bind:id="postId" name="temp" text="Testing" />
        <img v-bind:src="fileName">
        <div>
            <a v-bind:href="url">link</a>
        </div>

        <!-- bind 디렉티브(style) -->
        <p style="color: blue;">문자색 직접 지정</p>
        <p v-bind:style="{ color: myColor }">vue 방식</p>

        <p style="color: blue; font-size: 200%;">두 가지 속성을 직접 지정</p>
        <p v-bind:style="{ color: myColor, fontSize: myFont }">vue 방식</p>

        <p v-bind:style="myStyle">vue 방식</p>
    </div>
`;

export default {
    template,
    data() {
        return {
            title: "Vue.js",
            postId: "raw",
            fileName: "dog.jpg",
            url: "https://www.youtube.com",
            myColor: "blue",
            myFont: "200%",
            myStyle: {
                color: "blue",
                fontSize: "200%",
            },
        };
    },
};
