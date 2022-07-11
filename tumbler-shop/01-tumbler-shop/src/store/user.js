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
      console.log('this.state.user.user: ', this.state.user.user, 'this.state.user.isLogIn: ', this.state.user.isLogIn)
    }
  },
  actions: {
    // 1. 회원가입
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
    },
    // 2. 로그인
    async signIn({ commit }, payload = {} ) {
      try {
        const { user, accessToken } = await publicRequest({
          url: 'auth/login',
          method: 'POST',
          body: {
            ...payload
          }
        })
        // user와 accessToekn 값을 받아왔다는 것은 로그인이 된 상태를 의미한다
        if(user && accessToken) {
          console.log('user: ', user)
          console.log('accessToken: ', accessToken)
          window.localStorage.setItem('token', accessToken)
          // 로그인한 새로운 user 정보를 저장, isLogin: true로 설정
          commit('updateState', {
            user,
            isLogIn: true
          })
        }
      } catch(err) {
        alert(err)
      }
    },
    // 3. 로그아웃
    async signOut({ commit }) {
      await publicRequest({
        url: 'auth/logout',
        method: 'POST'
      }),
      commit('updateState', {
        user: {},
        isLogIn: false
      })
    },
    // 4. 상태 업데이트 요청
    requestUpdateState({ commit }, payload = {}) {
      commit('updateState', payload)
    }
  }
}
