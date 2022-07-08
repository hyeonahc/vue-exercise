<template>
  <header>
    <RouterLink to="/">
      MainPage
    </RouterLink>
    <RouterLink to="/signup">
      SignUp
    </RouterLink>
    <RouterLink to="/signin">
      SignIn
    </RouterLink>
    <RouterLink to="/mypage">
      MyPage
    </RouterLink>
    <RouterLink to="/">
      SignIn
    </RouterLink>
  </header>
</template>

<script>
export default {
  
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
