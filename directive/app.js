// Root Component
import RawComponent from './raw.js';

const { createApp } = Vue;

const template = `
    <div>
        <!-- 자식 Component 추가 -->
        <raw-component />
    </div>
`;

createApp({
    template,
    components: {
        RawComponent,   // 'raw-component' : RawComponent
    },
}).mount('#app');
