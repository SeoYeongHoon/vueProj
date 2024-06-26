let template = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <td>{{ postInfo.id }}</td>
            </tr>
            <tr>
                <th>title</th>
                <td>{{ postInfo.title }}</td>
            </tr>
            <tr>
                <th>userId</th>
                <td>{{ postInfo.userId }}</td>
            </tr>
            <tr>
                <th>body</th>
                <!-- <td><textarea readonly>{{ postInfo.body }}</textarea></td> -->
                <td><textarea v-text="postInfo.body" readonly></textarea></td>
            </tr>
            <tr>
                <button type="button" @click="goToUpdateForm()">수정</button>
                <button type="button" @click="delPostInfo()">삭제</button>
            </tr>
        </table>
    </div>
`;

export default {
    template,
    data() {
        return {
            postInfo: {},
        };
    },
    created() {
        // #주의) 보내는 쪽은 $router, 받는쪽은 $route
        let id = this.$route.query.id ? this.$route.query.id : 1;
        this.getPostInfo(id);
    },
    methods: {
        async getPostInfo(id) {
            this.postInfo = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
                .then((res) => res.json())
                .catch((err) => console.log(err));
        },
        goToUpdateForm() {
            this.$router.push({ name: "postUpdate", query: { id: this.postInfo.id } });
        },
        delPostInfo() {
            fetch("https://jsonplaceholder.typicode.com/posts/" + this.postInfo.id, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    let result = Object.keys(data).length;

                    if (result == 0) {
                        alert("정상적으로 삭제되었습니다.");
                    } else {
                        alert("!! 삭제실패 !!");
                    }
                })
                .catch((err) => console.log(err));
        },
    },
};
