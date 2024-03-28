//app.js
// => Root Component
import RawComponent from './raw.js';
import InputComponent from './input.js';
import ModelComponent from './exam01.js';
import ListComponent from './list.js';
import ForComponent from './exam02.js';
import IfComponent from './if.js';

const { createApp } = Vue

const template =`
<div>
    <!-- 자식 컴포넌트 추가 -->
    <IfComponent/>
</div>
`;

createApp({
    template,
    components : {
        RawComponent, 
        InputComponent,
        ModelComponent,
        ListComponent,
        ForComponent,
        IfComponent
    }
})
.mount('#app');