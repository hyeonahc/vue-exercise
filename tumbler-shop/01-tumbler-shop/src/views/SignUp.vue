<template>
  <div>
    <input
      :value="displayName"
      placeholder="이름을 입력해주세요" 
      type="text"
      @input="displayName = $event.target.value"
      @keydown.enter="signUp" />
  </div>
  <div>
    <input
      v-model="email"
      type="text" 
      placeholder="이메일을 입력해주세요" />
  </div>
  <div>
    <input
      v-model="password"
      type="text"
      placeholder="비밀번호를 입력해주세요" />
  </div>
  <button @click="signUp">
    회원가입
  </button>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      displayName: '',
      email: '',
      password: ''
    }
  },
  computed: {
    // user 스토어에 있는 state 값 user: {} 접근하기
    ...mapState('user', [
      'user'
    ])
  },
  methods: {
    // user 스토어에 있는 actions 값 signUp() 접근하기 
    ...mapActions('user', {
      useSignUp: 'signUp'
    }),
    // 회원가입 버튼이 눌리면 실행되는 메서드
    async signUp() {
      // 케이스마다 실행될 에러메세지
      if(!this.displayName.trim()) {
        alert('이름을 입력해주세요')
        return
      } else if (!this.email.trim()) {
        alert('이메일을 입력해주세요')
        return
      } else if(!this.password.trim()) {
        alert('비밀번호를 입력해주세요')
        return
      } else if(!this.email.includes('@') && !this.email.includes('.')) {
        alert('올바른 이메일 형식이 아닙니다')
        return
      } else if(this.password.trim().length <= 7 ) {
        alert('비밀번호는 8자리 이상으로 설정하세요')
        return
      }
      // input에 받은 데이터를 스토어에 등록된 메서드에 전달해주기
      // user 스토어 actions에 있는 signUp 함수가 해당객체를 payload라는 파라미터로 받는다
      this.useSignUp({
        displayName: this.displayName,
        email: this.email,
        password: this.password
      })
      this.displayName = ''
      this.email = ''
      this.password = ''
    }
  }
}
</script>
