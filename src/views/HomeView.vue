<template>
  <div class="home__top">
    <ChatResponse v-if="isLoading || data.answer" :data="data" :isLoading="isLoading" />
    <ChatQuote v-else />
  </div>

  <ChatForm @onResponse="getResponse" @onLoading="getLoading" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ResponseData } from '@/types/common'
import ChatForm from '@/components/ChatForm.vue'
import ChatQuote from '@/components/ChatQuote.vue'
import ChatResponse from '@/components/ChatResponse.vue'

const data = ref({
  question: '',
  answer: ''
} as ResponseData)
const isLoading = ref(false)

// METHODS
const getResponse = (responseData: ResponseData): void => {
  data.value = responseData
}

const getLoading = (value: boolean): void => {
  isLoading.value = value
}
</script>

<style>
.home__top {
  display: flex;
  height: 100%;
}
</style>
