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
                <button type="button" @click="createPostInfo()">등록하기</button>
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
    methods: {
        createPostInfo() {
            let data = {
                title: this.post.title,
                body: this.post.body,
                userId: this.post.userId,
            };

            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data != null) {
                        alert("정상적으로 등록되었습니다.");
                        this.post.id = data.id;
                    } else {
                        alert("!! 등록 실패 !!");
                    }
                })
                .catch((err) => console.log(err));
        },
    },
};
