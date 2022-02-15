# 항해 99 Node.js 1주차 블로그 제작.

> **_구현 API_**

> 1. 전체 게시글 목록 조회
>
> - 제목, 작성자명, 작성 날짜를 조회하기
> - 작성 날짜 기준으로 내림차순 정렬하기

> 2.  게시글 작성
>
> - 제목, 작성자명, 작성 내용을 입력하기
>
> 3. 게시글 조회
>
> - 제목, 작성자명, 작성 날짜, 작성 내용을 조회하기

> 4.게시글 수정
>
> - 제목, 작성자명, 작성 내용 중 원하는 내용을 수정하기

> 5.게시글 삭제
>
> - 원하는 게시물을 삭제하기

> 6.댓글 목록 조회
>
> - 조회하는 게시글에 작성된 모든 댓글을 목록 형식으로 볼 수 있도록 하기
> - 작성 날짜 기준으로 내림차순 정렬하기

> 7.댓글 작성
>
> - 댓글 내용을 비워둔 채 댓글 작성 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
> - 댓글 내용을 입력하고 댓글 작성 API를 호출한 경우 작성한 댓글을 추가하기

> 8.댓글 수정
>
> - 댓글 내용을 비워둔 채 댓글 수정 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
> - 댓글 내용을 입력하고 댓글 수정 API를 호출한 경우 작성한 댓글을 수정하기

> 9. 댓글 삭제
>
> - 원하는 댓글을 삭제하기

<br>
<b>

| 기능             |            URL             |  method  | 비고                                             |
| :--------------- | :------------------------: | :------: | :----------------------------------------------- |
| 게시글 목록 조회 |           /post            |  `GET`   |                                                  |
| 게시글 작성      |        /post/write         |  `POST`  |                                                  |
| 게시글 조회      |           /post            |  `GET`   | query를 통해 title, id, author, date와 정렬 구현 |
| 게시글 수정      |    /post/write/:postId     |  `PUT`   |
| 게시글 삭제      |    /post/delete/:postId    | `DELETE` | 해당 게시글 존재 여부 탐색 후 처리               |
| 댓글 목록 조회   |      /comment/:postId      |  `GET`   |
| 댓글 작성        |   /comment/write/:postId   |  `POST`  | 댓글 내용 미입력 시 오류 발생                    |
| 댓글 수정        | /comment/write/:commentId  |  `PUT`   | 댓글 내용 미입력 시 오류 발생                    |
| 댓글 삭제        | /comment/delete/:commentId | `DELETE` | 해당 댓글 존재 여부 탐색 후 처리                 |

</b>

> **_DB 구조_**

1. comments

|          | commentId | postId | commentAuthor | commentBody | commentDate |
| :------: | :-------: | :----: | :-----------: | :---------: | :---------: |
|   type   |  Number   | Number |    String     |   String    |   Number    |
|  unique  |   true    | false  |     false     |    false    |    false    |
| required |   true    |  true  |     true      |    true     |    true     |

2. posts

|          | postId | postAuthor | postTitle | postBody | postDate |
| :------: | :----: | :--------: | :-------: | :------: | :------: |
|   type   | Number |   String   |  String   |  String  |  Number  |
|  unique  |  true  |   false    |   false   |  false   |  false   |
| required |  true  |    true    |   true    |   true   |   true   |
