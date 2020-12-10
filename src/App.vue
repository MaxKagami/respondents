<template>
  <div id="app">

    <Navigation/>

    <div id="content">
      <div id="top-bar">
        <input class="search" type="search" placeholder="Поиск по системе">

        <div class="user_tag">
          <v-icon name="user" scale="3" style="color: #a7a5a5"/>
          <div class="labels">
            <div class="name">{{ user.name }}</div>
            <div class="role">{{ user.role }}</div>
          </div>
        </div>
      </div>

      <div class="breadcrumb">
        <ul>
          <li
              v-for="(breadcrumb, idx) in breadcrumbList"
              :key="idx"
              @click="routeTo(idx)"
              :class="{ 'linked': !!breadcrumb.link }"
          >
            {{ breadcrumb.name }}
          </li>
        </ul>
      </div>

      <router-view/>
    </div>

  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  export default {
    name: 'App',
    components: { Navigation },
    data: () => ({
      breadcrumbList: ['Главная страница'],
      user: {
        name: "Alexander C.",
        role: "Администратор"
      }
    }),
    mounted () { this.updateList() },
    watch: { '$route' () { this.updateList() } },
    methods: {
      routeTo (pRouteTo) {
        if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
      },
      updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
    }
  }
</script>

<style lang="sass">
  body
    font-family: Helvetica, sans-serif
    font-size: 17px
    margin: 0

  button, input, select
    background-color: white
    border: 2px solid #e0dede
    border-radius: 8px
    font-size: 17px
    height: 40px
    padding: 0 10px
    svg
      margin: 0 7px

  .breadcrumb
    ul
      display: flex
      list-style-type: none
      margin: 0
      padding: 0
      > li
        display: flex
        float: left
        height: 30px
        width: auto
        font-weight: bold
        cursor: default
        align-items: center
        &:not(:last-child)::after
          content: '/'
          float: right
          font-size: .8em
          margin: 0 .5em
          cursor: default
    .linked
      cursor: pointer
      font-size: 1em
      font-weight: normal

  .button
    &-green
      background-color: #208120
      color: white
    &-white_green
      color: #208120
    &-white_red
      color: #e35353
      border-color: #ffd3d3
    &-white_lime
      color: #62a93b
      border-color: #cfe5bb
    &-big
      align-items: center
      color: #62a93b
      display: flex
      flex-direction: column
      height: auto
      justify-content: center
      padding: 20px
      width: -moz-available
      width: -webkit-fill-available

  #content
    margin: auto
    padding: 40px 0 40px 186px
    width: 50%

  #top-bar
    display: flex
    justify-content: space-between

  .search
    width: 60%

  .user_tag
    display: inline-flex
    .labels
      margin: auto 0 auto 10px
      .name
        font-weight: bold
      .role
        color: #a7a5a5
        font-size: 16px
</style>
