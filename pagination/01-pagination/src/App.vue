<template>
  <TransactionsPaginated
    :data="trans"
    :total-pages="Math.ceil(trans.length / 4)"
    :total="trans.length"
    :per-page="4"
    :current-page="currentPage"
    @pagechanged="onPageChange"
  />
</template>

<script>
import TransactionsPaginated from './TransactionsPaginated.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  mounted(){
    this.loadTrans()
  },
  data(){
    return {
			currentPage: 1,
    }
  },
  methods: {
		...mapActions(['loadTrans']),
    onPageChange(page) {
      this.currentPage = page;
		},
  },
  computed: {
    ...mapGetters(['trans'])
  },
  components: {
    TransactionsPaginated
  }
}
</script>

<style lang="sass">
body
  font-family: "Roboto"
  font-size: 16px
  color: #505050

#app
  background-color: #fafafa
  width: 500px
  height: 21rem
  margin: 0 auto
  margin-top: 3rem
  border-radius: 1rem
  padding: 1rem
  hr
    border: 1px solid silver
    width: 100%
  h2
    font-size: 1.5rem
    text-align: center
    margin-top: 0
  .transactions
    display: flex
    height: calc(100% - 1.25rem)
    flex-direction: column
    .row
      display: flex
      align-items: center
      padding: 0
      margin: .75rem 0
      .col
        justify-content: center
        flex-basis: 25%
        display: inline-flex
    .pagination
      display: flex
      justify-content: center
      padding: 0
      margin: auto 0 0 0
      list-style-type: none
      .pagination-item
        button
          margin: 0!important
          padding: .25rem .5rem
          font-size: 1.1rem
          border: none
          border-radius: .25rem
          background: none
          &:hover
            cursor: pointer
            background-color: silver
          &[disabled="disabled"]
            color: silver
            cursor: default
            &:hover
              cursor: default
              background-color: transparent
          &.active
            color: red
</style>
