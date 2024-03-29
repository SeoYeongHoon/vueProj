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
    },
};
