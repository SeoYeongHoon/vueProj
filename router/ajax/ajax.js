/*
    라우팅(Routing)
    : 특정 엔드 포인트에 대한 클라이언트의 요청에,
    애플리케이션이 응답하는 방법을 결정하는 것.
    #엔드 포인트: 메소드(Method) + 경로(Path)

    REST방식 => Restful Server(데이터 포맷은 json 고정)
    메소드 종류: GET(조회), POST(등록), PUT(수정), DELETE(삭제)
    ex) (100은 empId)
    단건조회: GET + emps/100
    전체조회: GET + emps
    등록:     POST + emps
    수정:     PUT + emps/100
    삭제:     DELETE + emps/100
    (쿼리스트링 필요시 사용)
*/

// 전체조회
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((jsonData) => console.log(jsonData))
    .catch((err) => console.log(err));

// ajax버전
$.ajax("https://jsonplaceholder.typicode.com/posts")
    .done((jsonData) => {
        console.log(jsonData);
    })
    .fail((err) => console.log(err));

// 단건조회
fetch("https://jsonplaceholder.typicode.com/posts/" + 1 /* + postId 또는 posts?userId=1*/)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((jsonData) => console.log(jsonData))
    .catch((err) => console.log(err));

// 등록
// JSON: 하나일 땐 {객체}, 다수일 땐 [배열]
let post = {
    id: 101,
    title: "Hello~",
    userId: 1,
    body: "Today is Friday!",
};

fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
})
    .then((respons) => respons.json())
    .then((jsonData) => console.log(jsonData))
    .catch((err) => console.log(err));

// 수정
fetch("https://jsonplaceholder.typicode.com/posts/" + 1, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Welcome~",
        userId: 20,
        body: "Tomorrow is Saturday!",
    }),
})
    .then((respons) => respons.json())
    .then((jsonData) => console.log(jsonData))
    .catch((err) => console.log(err));

// 삭제
fetch("https://jsonplaceholder.typicode.com/posts/" + 1, {
    method: "DELETE",
})
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((jsonData) => console.log(jsonData))
    .catch((err) => console.log(err));
