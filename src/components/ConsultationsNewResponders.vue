<template>
  <form @submit.prevent="createResponder">
    <div class="box label">Добавить опрос</div>

    <!---------------------------------- ПЕРВОЕ УСЛОВИЕ ----------------------------------->
    <div class="condition condition-1">
      <div class="grid">

        <div class="box label">Условие 1</div>

        <div class="box">
          <select class="select-1">
            <option>Возратс респодента</option>
          </select>
        </div>

        <div class="box">Диапозон 1</div>

        <div class="box">
          от <input class="input-range" v-model="form.age.range1.from">
          до <input class="input-range" v-model="form.age.range1.to">
        </div>

        <div class="box">
          <div class="flattened">или</div>Диапозон 2
        </div>

        <div class="box">
          от <input class="input-range" v-model="form.age.range2.from">
          до <input class="input-range" v-model="form.age.range2.to">
        </div>

        <div class="box buttons">
          <button class="button-white_lime"><v-icon name="plus"/>Добавить диапозон</button>
          <button class="button-white_red"><v-icon name="trash"/>Удалить уловие</button>
        </div>

      </div>
    </div>
    <!------------------------------------------------------------------------------------>

    <!--------------------------------- ВТОРОЕ УСЛОВИЕ ----------------------------------->
    <div class="condition condition-2">
      <div class="flattened on_border">И</div>
      <div class="grid">

        <div class="box label">Условие 2</div>

        <div class="box">
          <select class="select-1">
            <option>Тип карты лояльности</option>
          </select>
        </div>

        <div class="box">Тип 1</div>

        <div class="box">
          <select class="select-2" v-model="form.card_type.type1">
            <option>Gold</option>
          </select>
        </div>

        <div class="box buttons">
          <button class="button-white_lime"><v-icon name="plus"/>Добавить тип</button>
          <button class="button-white_red"><v-icon name="trash"/>Удалить условие</button>
        </div>

      </div>
    </div>
    <!------------------------------------------------------------------------------------>

    <!---------------------------------- ТРЕТЬЕ УСЛОВИЕ ---------------------------------->
    <div class="condition condition-3">
      <div class="flattened on_border">И</div>
      <div class="grid">

        <div class="box label">Условие 3</div>

        <div class="box">
          <select class="select-1">
            <option>Статус карты лояльности</option>
          </select>
        </div>

        <div class="box">
          Статус 1
        </div>

        <div class="box">
          <select class="select-2" v-model="form.card_status.status1">
            <option>Активна</option>
          </select>
        </div>

        <div class="box buttons">
          <button class="button-white_lime"><v-icon name="plus"/>Добавить статус</button>
          <button class="button-white_red"><v-icon name="trash"/>Удалить условие</button>
        </div>

      </div>
    </div>
    <!------------------------------------------------------------------------------------>

    <!-------------------------------- ЧЕТВЁРТОЕ УСЛОВИЕ --------------------------------->
    <div class="condition condition-4">
      <div class="grid">

        <div class="box label">Условие 3</div>

        <div class="box">
          <select class="select-1">
            <option>Выберите условие</option>
          </select>
        </div>

        <div class="box buttons">
          <button class="button-white_red"><v-icon name="trash"/>Удалить условие</button>
        </div>

      </div>
    </div>
    <!----------------------------------------------------------------------------------->

    <div class="box">
      <button class="button-big">
        <v-icon name="plus" scale="2"/>
        <label>Нажмите, чтобы добавить новое условие выборки.</label>
        <label>Все условия связываются между собой логическим "И"</label>
      </button>
    </div>

    <div class="buttons box">
      <button class="button-white_green">Протестировать опрос</button>
      <button class="button-green">Далее<v-icon name="arrow-right"/></button>
    </div>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      API_URL: "...",
      form: {
        age: {
          range1: { from: null, to: null },
          range2: { from: null, to: null }
        },
        card_type: { type1: null },
        card_status: { status1: null }
      }
    }),
    methods: {
      createResponder() {
        axios.post(this.API_URL, this.form)
      }
    }
  }
</script>

<style lang="sass">
  .box
    padding: 15px 30px

  .buttons
    grid-column-start: 2
    display: flex
    justify-content: space-between

  .condition
    border-top: 1px solid #e3e3e3
    .grid
      display: grid
      grid-template-columns: 1fr 3fr
      padding-bottom: 20px
    &-1
      background-color: #fffbf4
      .label
        color: #b36500
      .flattened
        background-color: #fce4cd
    &-2
      background-color: #f9f6fd
      .label
        color: #5a12b1
      .flattened
        background-color: #e6d4ff
    &-3
      background-color: #f6fff6
      .label
        color: #208120
      .flattened
        background-color: #d7ffd7
    &-4
      background-color: #faf9f9

  .flattened
    border-radius: 5px
    display: inline-block
    margin-right: 5px
    padding: 10px

  .input
    &-range
      margin-right: 15px
      width: 80px

  .label
      font-weight: bold

  .on_border
    position: relative
    bottom: 20px
    height: fit-content
    left: 30px
    width: fit-content

  .select
    &-1
      width: 100%
    &-2
      width: 80%

</style>
