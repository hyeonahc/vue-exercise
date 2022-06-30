# to do list 만드는 법

### 1. 기본 골격과 데이터 만들기

1. App.vue 컴포넌트에 input, ul, li 태그 만들기
2. todos라는 배열 안에 title, id라는 값을 가진 객체 데이터 todo 만들기
3. todo의 title을 li로 출력해주기

### 2. 리스트 추가해주기 (addTodo 메서드)

1. v-model이라는 디렉티브를 사용해 input에 넣은 텍스트를 계속 추적한다
2. todos 배열에 push라는 메서드로 새로운 텍스트를 받아 넣어준다
3. 이때 trim()을 사용해 문자 앞뒤 빈공간을 삭제한 후 리스트를 넣어준다
4. 빈문자를 입력했을 경우에는 리스트가 생성되지 않게 한다

### 3. 리스트 삭제, 수정해주는 UI 생성하기 (editMode 데이터, changeEditMode 메서드)

1. li 태그 안에 수정 버튼, 삭제 버튼 만들어주기
2. 수정 버튼을 눌렀을때 editMode: true일때 => 새로운 input, 확인 button 생성 / 수정, 삭제 button 사라짐
3. 확인 버튼 눌렀을대 editMode: false일때 => 새로운 input, 확인 button 사라짐 / 수정, 삭제 button 생성
4. 삭제 버튼 눌렀을때 => 해당 리스트 사라짐

### 4. 리스트 삭제해주기 (deleteTodo 메서드)

1.  삭제 버튼 눌렀을때 해당 리스트의 정보를 가지고 있는 todo 객체 deleteTodo 메서드로 넘겨주기
2.  deleteTodo 메서드에서 todo 객체를 인자 todoToDelete 받아주기
3.  배열의 findIndex 메서드를 사용해 삭제버튼에 해당하는 리스트의 index 값 가져오기
    ````javascript
    // 해당 조건에 부합하는 index값을 리턴한다
    Array.findIndex(element => 조건);
    	```
    ````
4.  삭제할 데이터의 index값을 활용해 배열의 splice 메서드로 해당 객체 todo를 삭제해준다
    ```javascript
    Array.splice(index, 삭제할 데이터의 개수)
    ```

### 5. 리스트 수정해주기

1. li를 todoItem 컴포넌트로 만들어 캡슐화 작업해주기
