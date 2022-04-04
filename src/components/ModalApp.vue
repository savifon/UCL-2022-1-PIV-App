<template>
  <Teleport v-if="open" to="body">
    <div class="modal-container">
      <div class="modal-content">
        <h2 v-if="props.title" class="title">{{ props.title }}</h2>
        <p v-if="props.text" class="text">{{ props.text }}</p>
        <img v-if="image" :src="image" alt="qr code" />
        <div class="buttons">
          <button v-if="action" class="btn-secondary" @click="action">
            Cancelar
          </button>
          <button v-if="action" class="btn-primary" @click="action">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
  import { computed } from "vue";

  const props = defineProps({
    open: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    },
    text: { type: String },
    image: { type: String },
    action: { type: Function }
  });

  const open = computed(() => props.open);
  const image = computed(() => props.image);
</script>

<style scoped lang="scss">
  .modal-container {
    @apply fixed flex h-screen w-screen top-0 left-0 items-center justify-center bg-orange-900 bg-opacity-50 z-10;

    .modal-content {
      @apply w-96 max-w-[95%] p-4 bg-white rounded-md flex flex-col gap-2;

      .title {
        @apply text-3xl;
      }

      img {
        @apply w-56 mx-auto;
      }

      .buttons {
        @apply flex gap-4 justify-between;

        button {
          @apply w-full;
        }
      }
    }
  }
</style>
