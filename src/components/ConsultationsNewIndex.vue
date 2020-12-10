<template>
  <div>
    <div class="tabs">
      <a href='#' @click.prevent="setActive('parameters')">Параметры</a>
      <a href='#' @click.prevent="setActive('questions')">Вопросы</a>
      <a href='#' @click.prevent="setActive('logic')">Логика</a>
      <a href='#' @click.prevent="setActive('conditions')">Условия</a>
      <a href='#' @click.prevent="setActive('responders')">Респонденты</a>
    </div>

    <div class="tabs-content">
      <div v-show="isActive('parameters')">Параметры</div>
      <div v-show="isActive('questions')">Вопросы</div>
      <div v-show="isActive('logic')">Логика</div>
      <div v-show="isActive('conditions')">Условия</div>
      <div id="responders" v-show="isActive('responders')">
        <ConsultationsNewResponders/>
      </div>
    </div>
  </div>
</template>

<script>
  import ConsultationsNewResponders from "@/components/ConsultationsNewResponders"
  export default {
    components: { ConsultationsNewResponders },
    data: () => ({
      activeItem: 'responders'
    }),
    methods: {
      isActive (menuItem) { return this.activeItem === menuItem },
      setActive (menuItem) { this.activeItem = menuItem }
    }
  }
</script>

<style lang="sass">
  .tabs
    display: flex
    justify-content: space-between
    margin: 20px 5% 15px 5%
    a
      color: #58b158
      text-decoration: none

  .tabs-content
    border-top: 1px solid #58b158
    box-shadow: 0 6px 18px #d2d1d1
</style>
