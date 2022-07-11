<template>
  <header>
    <!-- <RouterLink :to="{name: 'mainpage'}" -->
    <RouterLink to="/">
      MainPage
    </RouterLink>
    <span v-if="!isLogIn">
      <RouterLink to="/signup">
        SignUp
      </RouterLink>
      <RouterLink to="/signin">
        SignIn
      </RouterLink>
    </span>
    <span v-else>
      <RouterLink to="/mypage">
        MyPage
      </RouterLink>
      <RouterLink
        to="/"
        @click="signOut">
        SignOut
      </RouterLink>
    </span>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// mapState: store에 저장된 state를 배열로 등록해주는 함수
// mapState('스토어이름', [state에 등록한 데이터이름...])
// mapActions: store에 저장된 actions를 배열로 등록해주는 함수

export default {
  // 스토어에 등록한 state는 컴포넌트에서 사용시 computed로 액세스한다
  computed: {
    ...mapState('user', ['isLogIn'])
  },
  methods: {
    ...mapActions('user', {
      useSignOut: 'signOut'
    }),
    signOut() {
      this.useSignOut()
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 20px 20px;
  border-bottom: 1px solid $color-primary;
  a {
    margin-right: 10px;
    line-height: 1;
  }
}
</style>
