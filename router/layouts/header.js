let template = `
    <header>
        <router-link v-bind:to="{ path: '/postForm' }">등록</router-link>
    </header>
`;

export default {
    template,
    name: 'myHeader'
}