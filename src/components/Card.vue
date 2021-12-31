<template>
  <div class="item">
    <div class="name">{{ item.name }}</div>
    <img class="img" :src="item.img" />
    <ul class="description">
      <li class="desc-item" v-for="desc in item.description" :key="desc">
        {{ formatDesc(desc) }}
      </li>
    </ul>
    <div class="price" v-if="item.price">
      <span>price: </span>
      <span class="rub">{{ item.price.rub }} rub </span>
      <span class="eth">{{ item.price.eth }} eth</span>
    </div>
    <ul v-if="isAdmin && item.adminText && item.adminText.length" class="description">
      <li class="desc-item" v-for="step in item.adminText" :key="step">
        {{ step }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Cocktail } from './consts'

@Component
export default class Card extends Vue {
  @Prop({ required: true }) readonly item!: Cocktail;
  @Prop({ type: Boolean, default: false }) readonly isAdmin!: boolean;

  formatDesc (desc: string): string {
    const [words, count] = desc.split(' (')
    if (!count || !this.isAdmin) {
      return words
    }
    return `${words} (${count}`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
  padding: 5px;
  margin: 10px;
  width: 300px;
  opacity: 0.8;
  border: 16px solid;
  border-image: linear-gradient(325.83deg, #0C0D13 14.58%, #586695 114.3%);
  border-image-slice: 49%;
  border-image-outset: 3px;
  background: linear-gradient(325.83deg, #0C0D13 14.58%, #586695 114.3%);
  .name {
    font-size: 32px;
    font-weight: bold;
  }
  .description {
    text-align: justify;
    padding-inline-start: 24px;
  }
  .price {
    display: flex;
    justify-content: space-between;
    > :first-child {
      margin-left: 10px;
    }
    > :last-child {
      margin-right: 10px;
    }
    .rub {
      color: aquamarine;
    }
    .eth {
      color: cornflowerblue;
    }
  }
}
</style>
