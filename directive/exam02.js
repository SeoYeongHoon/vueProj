//exam02.js => ForComponent

let template =`
<div>
    <div>
        <p v-for="line in 5" :key="line">
            <span v-for="num in line" :key="num">
             {{'*'}}
            </span>
        </p>
        <p v-for="star in stars" :key="star">
            {{star}}
        </p>
    </div>
    <div>
        <div v-for="dan in 9" :key="dan">
            <p v-for="num in 9" :key="num">
                {{ dan }} X {{ num }} = {{ dan * num}}
            </p>
        </div>
        <hr>
        <div v-for="num in 9" :key="num">
        	<span v-for="dan in 9" :key="dam">
        		{{ dan }} X {{ num }} = {{ dan * num}}&nbsp;&nbsp;
        	</span>
        	<br>
        </div>
    </div>
</div>
`;
export default{
    template,
    data(){
        return {
            stars : ['*', '**', '***', '****', '*****']
        }
    }
}