let template = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <td><input type="text" v-model="post.id" readonly></td>
            </tr>
            <tr>
                <th>title</th>
                <td><input type="text" v-model="post.title"></td>
            </tr>
            <tr>
                <th>userId</th>
                <td><input type="text" v-model="post.userId"></td>
            </tr>
            <tr>
                <th>body</th>
                <td><textarea type="text" v-model="post.body"></textarea></td>
            </tr>
            <tr>
                <button type="button" @click="updatePostInfo()">수정하기</button>
            </tr>
        </table>
    </div>
`;

export default {
    template,
    data() {
        return {
            post: {
                id: "",
                title: "",
                body: "",
                userId: "",
            },
        };
    },
    created() {
        // #주의) 보내는 쪽은 $router, 받는쪽은 $route
        let id = this.$route.query.id ? this.$route.query.id : 1;
        this.getPostInfo(id);
    },
    methods: {
        async getPostInfo(id) {
            this.post = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
                .then((res) => res.json())
                .catch((err) => console.log(err));
        },
        updatePostInfo() {
            let data = {
                id: this.post.id,
                title: this.post.title,
                body: this.post.body,
                userId: this.post.userId,
            };

            fetch("https://jsonplaceholder.typicode.com/posts/" + data.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data != null) {
                        alert("정상적으로 수정되었습니다.");
                        this.post.id = data.id;
                    } else {
                        alert("!! 수정 실패 !!");
                    }
                })
                .catch((err) => console.log(err));
        },
    },
};
