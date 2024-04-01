let template = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <td><input type="text" v-model="userInfo.id" readonly></td>
            </tr>
            <tr>
                <th>title</th>
                <td><input type="text" v-model="userInfo.name"></td>
            </tr>
            <tr>
                <th>userId</th>
                <td><input type="text" v-model="userInfo.username"></td>
            </tr>
            <tr>
                <th>body</th>
                <td><textarea type="text" v-model="userInfo.email"></textarea></td>
            </tr>
            <tr>
                <button type="button" @click="updateUserInfo()">수정하기</button>
            </tr>
        </table>
    </div>
`;

export default {
    template,
    data() {
        return {
            userInfo: {
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
        this.getUserInfo(id);
    },
    methods: {
        async getUserInfo(id) {
            this.userInfo = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then((res) => res.json())
                .catch((err) => console.log(err));
        },
        updateUserInfo() {
            let data = {
                id: this.userInfo.id,
                title: this.userInfo.name,
                body: this.userInfo.username,
                userId: this.userInfo.email,
            };

            fetch("https://jsonplaceholder.typicode.com/users/" + data.id, {
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
                        this.userInfo.id = data.id;
                    } else {
                        alert("!! 수정 실패 !!");
                    }
                })
                .catch((err) => console.log(err));
        },
    },
};
