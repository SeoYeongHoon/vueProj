let template = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <td>{{ userInfo.id }}</td>
            </tr>
            <tr>
                <th>name</th>
                <td>{{ userInfo.name }}</td>
            </tr>
            <tr>
                <th>username</th>
                <td>{{ userInfo.username }}</td>
            </tr>
            <tr>
                <th>email</th>
                <td>{{ userInfo.email }}</td>
            </tr>
        </table>
    </div>
`;

export default {
    template,
    data() {
        return {
            userInfo: {},
        };
    },
    created() {
        // #주의) 보내는 쪽은 $router, 받는쪽은 $route
        let id = this.$route.query.id ? this.$route.query.id : 1;
        this.getPostInfo(id);
    },
    methods: {
        async getPostInfo(id) {
            this.userInfo = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then((res) => res.json())
                .catch((err) => console.log(err));
        },
    },
};
