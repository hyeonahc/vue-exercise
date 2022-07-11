<template>
  <h1>Main Page</h1>
  <h1>email: {{ user.email }}</h1>
  <h1>isLogIn: {{ isLogIn }}</h1>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { validateTokenUser } from '~/core'

export default {
  computed: {
    ...mapState('user', [
      'user',
      'isLogIn'
    ])
  },
  created() {
    this.autoLogin()
  },
  methods: {
    ...mapActions('user', [
      'requestUpdateState'
    ]),
    async autoLogin() {
      const user = await validateTokenUser()
      if(user && user.email) {
        this.requestUpdateState({
          user,
          isLogIn: true
        })
      }
    }
  }
}
</script>
