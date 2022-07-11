import { publicRequest } from '../api/publicRequest'

export default {
  namespaced: true,
  state: () => ({
    user: {},
    // 현재 유저가 로그인한 상태인지 확인
    isLogIn: false
  }),
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
      console.log('this.state: ', this.state)
    }
  },
  actions: {
    async signUp({ commit }, payload = {}) {
      try {
        console.log('payload: ', payload)
        // payload는 SignUp 컴포넌트 3개의 input에서 받아온 display, email, password 값이 들어 있는 객체
        // {displayName: '아이유', email: 'hello@hello.com', password: 'helloworld'}
        const { user, accessToken } = await publicRequest({
          url: 'auth/signup',
          method: 'POST',
          body: {
            ...payload
          }
        })
        console.log('user: ', user)
        console.log('accessToken: ', accessToken)
        if(user) {
          window.localStorage.setItem('token', accessToken)
          commit('updateState', {
            user
          })
        } else {
          alert('이미 존재하는 사용자 정보입니다')
        }
      } catch (err) {
        alert(err)
      }
    }
  }
}
