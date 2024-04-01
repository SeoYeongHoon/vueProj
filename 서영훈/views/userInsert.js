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
                <button type="button" @click="createUserInfo()">유저등록</button>
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
                name: "",
                username: "",
                email: "",
            },
        };
    },
    methods: {
        createUserInfo() {
            let data = {
                title: this.userInfo.name,
                body: this.userInfo.username,
                userId: this.userInfo.email,
            };

            fetch("https://jsonplaceholder.typicode.com/users", {
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
                        this.userInfo.id = data.id;
                    } else {
                        alert("!! 등록 실패 !!");
                    }
                })
                .catch((err) => console.log(err));
        },
    },
};