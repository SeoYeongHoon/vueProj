//exam01.js => ModelComponent

let template =`
<div>
    <h2>자기소개</h2>
    <label> 이름 : <input type="text" v-model.lazy="myName"></label><br>
    <label> 좋아하는 색은 : <br>
        <input type="radio" v-model="myColor" value="red"> 빨강 <br>
        <input type="radio" v-model="myColor" value="green"> 녹색 <br>
        <input type="radio" v-model="myColor" value="blue"> 파랑색 <br>
        <input type="radio" v-model="myColor" value="yellow"> 노란색 <br>
        <input type="radio" v-model="myColor" value="gray"> 회색 <br>
    </label>
    <p> 내 이름은 {{ myName }} 이고 <br>
        좋아하는 색은 {{ myColor }} 입니다. </p>
    <select v-model="mySelectColor"
            v-bind:disabled="myName.length == 0">
        <option value="red"> 빨강 </option>
        <option value="green"> 녹색 </option>
        <option value="blue"> 파랑색 </option>
        <option value="yellow"> 노란색 </option>
        <option value="gray"> 회색 </option>
    </select>
    <p> 내 이름은 {{ myName }} 이고 <br>
        좋아하는 색은 {{ mySelectColor }} 입니다. </p>
</div>
`;

export default{
    template,
    data(){
        return {
            myName : '',
            myColor : '',
            mySelectColor : ''
        }
    }
}