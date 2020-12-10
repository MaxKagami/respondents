<template>
  <ul>
    <li>
      <a href="#">
        <span class="red_circle"/>
      </a>
    </li>

    <li>
      <router-link to="/">
        <v-icon name="file-alt" scale="3"/>
        Опросы
      </router-link>
    </li>

    <li>
      <router-link to="users">
        <v-icon name="user-friends" scale="3"/>
        Пользователи
      </router-link>
    </li>

    <li>
      <router-link to="blacklists">
        <v-icon name="flag" scale="3"/>
        Чёрные списки
      </router-link>
    </li>

    <li>
      <router-link to="callcenter">
        <v-icon name="phone-alt" scale="3"/>
        Колл-центр
      </router-link>
    </li>

    <li>
      <a href="#">
        <v-icon name="question-circle" scale="3"/>
      </a>
    </li>
  </ul>
</template>

<script>
  export default { name: 'Navigation' }
</script>

<style lang="sass" scoped>
  ul
    border-right: 2px solid #e3e3e3
    display: flex
    flex-flow: column
    height: 100%
    list-style-type: none
    margin: 0
    padding: 0
    position: fixed
    width: auto

  li
    &:last-child
      bottom: 0
      position: absolute
    a
      border: 2px solid transparent
      border-radius: 8px
      color: #a7a5a5
      display: block
      font-size: 14px
      height: 70px
      margin: 10px
      padding: 20px
      text-align: center
      text-decoration: none
      width: 100px
      .fa-icon
        display: block
        margin: 0 auto 15px auto
      &.router-link-exact-active
        color: #535252
        font-weight: bold
      &:hover
        border-color: #58b158
        color: #58b158

  .red_circle
    background-color: red
    border-radius: 50%
    display: inline-block
    height: 50px
    width: 50px
</style>
