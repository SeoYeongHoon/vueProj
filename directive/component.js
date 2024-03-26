// component.js

let component = {
    name: "", // 컴포넌트 이름. 굳이 사용 안해도됨
    template: ``, // 뷰(html 태그 등으로 구성)
    data() {}, // 데이터: CRUD 가능
    computed: {}, // 데이터: Read만 가능
    methods: {}, // 코드: 기능(함수 등)정의
                 // methods 안에서 선언된 함수만 component에서 사용가능
    watch: {}, // 데이터를 감시 -> methods에서 정의한 함수들을 여기서 사용
};
