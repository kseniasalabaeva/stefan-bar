<template>
  <div id="app">
    <div class="logo">Stefan's Pub</div>
    <img class="background background-1" alt="Background 1" src="/background-1.png">
    <img class="background background-2" alt="Background 2" src="/background-2.png">
    <div class="title">Шоты</div>
    <div class="container shorts">
      <Card v-for="short in Shorts" :item="short" :is-admin="isAdmin" :key="short.name" />
    </div>
    <div class="title">Лонги</div>
    <div class="container shorts">
      <Card v-for="long in Longs" :item="long" :is-admin="isAdmin" :key="long.name" />
    </div>
    <div class="admin">
      <input v-model="password" />
      <button @click="checkAdmin">OK</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from './components/Card.vue'
import { ShortCocktails, LongCocktails } from './components/consts'

@Component({
  components: {
    Card
  }
})
export default class App extends Vue {
  readonly Shorts = ShortCocktails
  readonly Longs = LongCocktails
  readonly adminPassword = 'New year'

  password = ''
  isAdmin = false

  checkAdmin (): void {
    this.isAdmin = this.password === this.adminPassword
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background: linear-gradient(325.83deg, #0C0D13 14.58%, #586695 114.3%);
}
#app {
  font-family: 'Marck Script', cursive;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 24px 0;
  position: relative;
}
</style>

<style lang="scss" scoped>
button, input {
  background: linear-gradient(325.83deg, #0C0D13 14.58%, #586695 114.3%);
  color: white;
  outline: none;
}
.logo {
  font-size: 48px;
}
.title {
  font-size: 40px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.admin {
  position: absolute;
  right: 1px;
  bottom: -24px;
}
.background {
  position: fixed;
  z-index: -10;
  pointer-events: none;
  &-1 {
    -webkit-animation: cloud 20s linear 0s infinite forwards;
    animation: cloud 20s linear 0s infinite forwards;
    left: -240px;
    top: -70px;
  }
  &-2 {
    -webkit-animation: cloud 20s ease-out 0s infinite alternate;
    animation: cloud 20s ease-out 0s infinite alternate;
    right: -30px;
    top: 50px;
  }
}

@-webkit-keyframes cloud {
  0% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
    -webkit-transform: translate(0%, 0%) scale(1);
            transform: translate(0%, 0%) scale(1);
  }
  25% {
    -webkit-filter: blur(10px);
            filter: blur(10px);
    opacity: 0.7;
    -webkit-transform: translate(-2%, -2%) scale(1.02);
            transform: translate(-2%, -2%) scale(1.02);
  }
  50% {
    -webkit-filter: blur(5px);
            filter: blur(5px);
    opacity: 1;
    -webkit-transform: translate(0%, 0%) scale(1);
            transform: translate(0%, 0%) scale(1);
  }
  75% {
    -webkit-filter: blur(20px);
            filter: blur(20px);
    opacity: 0.7;
    -webkit-transform: translate(2%, 2%) scale(1.02);
            transform: translate(2%, 2%) scale(1.02);
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
    -webkit-transform: translate(0%, 0%) scale(1);
            transform: translate(0%, 0%) scale(1);
  }
}

@keyframes cloud {
  0% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
    -webkit-transform: translate(0%, 0%) scale(1);
            transform: translate(0%, 0%) scale(1);
  }
  25% {
    -webkit-filter: blur(10px);
            filter: blur(10px);
    opacity: 0.7;
    -webkit-transform: translate(-2%, -2%) scale(1.02);
            transform: translate(-2%, -2%) scale(1.02);
  }
  50% {
    -webkit-filter: blur(5px);
            filter: blur(5px);
    opacity: 1;
    -webkit-transform: translate(0%, 0%) scale(1);
            transform: translate(0%, 0%) scale(1);
  }
  75% {
    -webkit-filter: blur(20px);
            filter: blur(20px);
    opacity: 0.7;
    -webkit-transform: translate(2%, 2%) scale(1.02);
            transform: translate(2%, 2%) scale(1.02);
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
    -webkit-transform: translate(0%, 0%) scale(1);
            transform: translate(0%, 0%) scale(1);
  }
}
</style>
