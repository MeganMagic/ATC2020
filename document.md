# ATC 2020 WEB 개발
<br/>


## 페이지 구성
### 1. 메인 Main
- 로고, 타이틀
- Link to: 전시보기
- Link to: 전시에 대하여
    - ATC2020에 대한 아주 짧은 소개 메인에서 보여주기

### 2. 전시 보기
- 작품 내용
    - 무한 스크롤, reference : 트위터

- 좌측 navigation
    - 전체 작품 리스트, reference : react 공식문서 https://ko.reactjs.org/docs/getting-started.html
    - 각 작품 이름 클릭시 해당 작품 위치로 스크롤 이동
    - 현재 위치 작품에 강조효과 bold or keyColor


- 검색 기능
    - refrence : https://brunch.co.kr/
    - 작품 이름 혹은 아티스트 이름 입력시 filter되어서 나옴.
    - 검색결과 클릭 시 해당 작품 위치로

    - _*페이지 무거워 지는거 아닌가요?_
        - : 구현해보고 오바면 바꾸기로 
    - _검색용 페이지를 따로 구성하면 어떨까요?_

### 3. 전시에 대하여
- ATC 2020 소개
- 

---
## 기능 별 개발 계획
### 0. react에서 jquery plugin 사용 방법
- 결론 : 가능하다.
- https://ko.reactjs.org/docs/integrating-with-other-libraries.html

### 1. 작품 로드하기
- data.json import 후 map하여 element 생성
- Component Mount 시점에서 전제 data import 할 경우 로딩 시간 발생 문제
    1. axios를 이용하여 로딩 화면 구현한다
    2. 상위 1개의 데이터 로드 완료 후, 나머지 데이터 로드
    3. 상위 3개의 데이터만 로드 후, 3번째 작품 도착시 데이터 3개 또 로드하기 (페이지 과부하 문제도 고려)

- _이전처럼 그냥 작품 상세페이지 입장하는 걸로 할까? ㅠ.ㅠ_

- _Idea 제안 : 작품을 1개씩만 로딩하면?_
    - scroll이 바닥에 닿았을 때 다음 작품을 로딩
    - prev 작품 component가 fade out 되고, next 작품 compomnent가 fade in 되어서 들어오는 걸로

### 2. Navigation으로 위치 이동
- _*1번 작품 감상 중 20번 작품 클릭 시, 어떻게 하죠?_
- 1부터 20번위치까지 후후후후루루루ㅜ루루루루루룩 이동하는거 개인적으로 너무 꼴보기 싫음.
- 위의 3번 방법 선택하는 경우, 20번부터 하위 3개의 데이터를 로드하는 것으로???

### 3. 작품 검색하기
- javascript filter 이룔
- reference : https://ndb796.tistory.com/254
---
## 할 것