<template>
  <div class="chat-response">
    <div class="container">
      <perfect-scrollbar>
        <div class="chat-response__row" v-if="data?.question">
          <div class="chat-response__block">
            <img src="../assets/img/fry.png" class="chat-response__avatar" alt="Fry" />
            <span class="chat-response__text">{{ data?.question }}</span>
          </div>
        </div>

        <div class="chat-response__row" v-if="data?.answer || isLoading">
          <div class="chat-response__block chat-response__block--answer">
            <img src="../assets/img/bender.png" class="chat-response__avatar" alt="Bender" />
            <div class="chat-response__text">{{ data?.answer }}</div>

            <span v-if="isLoading" class="chat-response__caret"></span>
          </div>
        </div>
      </perfect-scrollbar>
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

.chat-response .ps {
  height: calc(100vh - 178px);
}

.chat-response__block {
  display: flex;
  align-items: flex-start;
  width: 100%;
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

.chat-response__row {
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  line-height: 26px;
}
.chat-response__row:last-child {
  margin-bottom: 0;
}

.chat-response__text {
  padding-top: 10px;
  white-space: pre-wrap;
}

.chat-response__caret {
  width: 3px;
  height: 17px;
  position: relative;
  top: 15px;
  display: inline-block;
  background-color: #7042f2;
  border-radius: 14px;
  animation: blink 1s step-start 0s infinite;
}
</style>
