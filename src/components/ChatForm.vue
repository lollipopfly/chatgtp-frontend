<template>
  <form @submit.prevent="submit" class="chat-form">
    <div class="container">
      <div class="chat-form__wrapper">
        <input
          v-model="question"
          class="chat-form__input"
          :disabled="isLoading"
          placeholder="Задайте вопрос"
          required
        />

        <button type="submit" :class="['chat-form__submit', submitClass]" :disabled="isLoading">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4658 7.15791C15.1781 7.5172 15.1781 8.4828 14.4658 8.84209L2.48384 14.8864C1.81173 15.2254 1 14.7648 1 14.0443V10.5549C1 10.1646 1.25119 9.8137 1.63427 9.66876L4.87399 8.44305C5.29684 8.28307 5.29684 7.71693 4.87399 7.55695L1.63427 6.33124C1.25119 6.1863 1 5.83538 1 5.44513L1 1.95568C1 1.23521 1.81173 0.774552 2.48384 1.1136L14.4658 7.15791Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ResponseData } from '@/types/common'

const emit = defineEmits(['onResponse', 'onLoading'])

const question = ref('')
const isLoading = ref(false)

// COMPUTED
const submitClass = computed((): string => {
  return question.value.length > 0 ? 'chat-form__submit--active' : ''
})
console.log(import.meta.env.VITE_BACKEND_URL)

// METHODS
const submit = async (): Promise<void> => {
  try {
    isLoading.value = true
    emitResponse({
      question: '',
      answer: ''
    })
    emitLoading()

    const res = await fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        question: question.value
      })
    })
    const data = await res.json()
    const responseData: ResponseData = {
      question: question.value,
      answer: data.bot.trim()
    }

    emitResponse(responseData)

    question.value = ''
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
    emitLoading()
  }
}

const emitResponse = (value: ResponseData): void => {
  emit('onResponse', value)
}

const emitLoading = (): void => {
  emit('onLoading', isLoading.value)
}
</script>

<style>
.chat-form {
  margin-top: auto;
  width: 100%;
  margin-bottom: 48px;
}

.chat-form__wrapper,
.chat-form__input {
  height: 60px;
}

.chat-form__wrapper {
  position: relative;
}

.chat-form__input {
  width: 100%;
  padding: 0 40px 0 24px;
  border: 0;
  outline: none;
  border-radius: 10px;
  background-color: #31313e;
  font-size: 14px;
  color: #dedee4;
}
.chat-form__input::-webkit-input-placeholder {
  color: #727272;
}
.chat-form__input::-moz-placeholder {
  color: #727272;
}
.chat-form__input:-ms-input-placeholder {
  color: #727272;
}
.chat-form__input:-moz-placeholder {
  color: #727272;
}

.chat-form__submit {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: #727272;
}

.chat-form__input:disabled,
.chat-form__submit:disabled {
  cursor: not-allowed;
}
.chat-form__submit--active,
.chat-form__submit:not(:disabled):hover {
  color: #dedee4;
}
</style>
