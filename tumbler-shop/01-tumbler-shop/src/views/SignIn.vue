<template>
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
      placeholder="비밀번호를 입력해주세요"
      @keydown.enter="signIn" />
  </div>
  <button @click="signIn">
    로그인
  </button>
  <button>
    <RouterLink to="/signup">
      회원가입 페이지
    </RouterLink>
  </button>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState('user', [
      'user',
      'isLogIn'
    ])
  },
  methods: {
    ...mapActions('user', {
      useSignIn: 'signIn'
    }),
    async signIn() {
      if(!this.email.trim()) {
        alert('이메일을 입력해주세요')
        return
      } else if(!this.password.trim()) {
        alert('비밀번호를 입력해주세요')
        return
      }
      await this.useSignIn({
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
      // 로그인을 성공하면 홈페이지로 돌아간다
      if(this.isLogIn) {
        this.$router.push({
          name: 'mainpage'
        })
      }
    }
  }
}
</script>
