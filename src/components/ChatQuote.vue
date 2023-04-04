<template>
  <div class="chat-quote">
    <div class="container">{{ currentQuote }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const currentQuote = ref('')

onMounted((): void => {
  getRandomQuote()
})

// COMPUTED
const quoteList = computed((): string[] => [
  'Я люблю вас, мешки с мясом!',
  'Я Бендер. Пожалуйста, дайте мне прут',
  'Пиво рулит, не ты!',
  'Слава роботам! Убить всех человеков!',
  'Да! Я богат! Правда ты тоже, но это почему то не радует.',
  'Если бы я верил, что после смерти меня ждет другая жизнь, я бы убил себя прямо сейчас.',
  'Асталависта, мешок с костями!',
  'Позеры! Я ненавидел Зойдберга еще до того, как это стало модным.',
  'Спаси моих друзей… и Зойдберга!',
  '«Шантаж» звучит как-то вульгарно, мне больше нравится «вымогательство».'
])

// METHODS
const getRandomQuote = (): void => {
  const index: number = getRandomInt(0, quoteList.value.length)

  currentQuote.value = quoteList.value[index]
}

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min)
</script>

<style>
.chat-quote {
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 54px;
  text-align: center;
}
</style>
