<template>
  <div class="chat-response">
    <div class="chat-response__text" v-if="data?.question">
      <div class="container">
        <div class="chat-response__block">
          <img src="../assets/img/fry.png" class="chat-response__avatar" alt="Fry" />
          {{ data?.question }}
        </div>
      </div>
    </div>

    <div class="chat-response__text" v-if="data?.answer || isLoading">
      <div class="container">
        <div class="chat-response__block chat-response__block--answer">
          <img src="../assets/img/bender.png" class="chat-response__avatar" alt="Bender" />
          {{ data?.answer }}

          <span v-if="isLoading" class="chat-response__caret"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResponseData } from '@/types/common'

defineProps<{
  data: ResponseData
  isLoading: boolean
}>()
</script>

<style>
.chat-response {
  width: 100%;
  padding-top: 48px;
}

.chat-response__block {
  display: flex;
  align-items: center;
  padding: 24px;
  background-color: #323244;
  border-radius: 10px;
}
.chat-response__block--answer {
  background-color: #2a2a35;
}

.chat-response__avatar {
  margin-right: 16px;
}

.chat-response__text {
  display: flex;
  margin-bottom: 16px;
  line-height: 26px;
}
.chat-response__text:last-child {
  margin-bottom: 0;
}

.chat-response__caret {
  width: 3px;
  height: 17px;
  display: inline-block;
  background-color: #7042f2;
  border-radius: 14px;
  animation: blink 1s step-start 0s infinite;
}
</style>
