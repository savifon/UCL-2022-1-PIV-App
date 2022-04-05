<template>
  <Teleport v-if="modal.open" to="body">
    <div class="modal-container" @click.self="toggleModal">
      <div class="modal-content">
        <!-- <span class="btn-close" @click="toggleModal">&times;</span> -->
        <h2 v-if="modal.title" class="title">{{ modal.title }}</h2>
        <p v-if="modal.text" class="text">{{ modal.text }}</p>
        <img v-if="modal.image" :src="modal.image" alt="qr code" />
        <div class="buttons">
          <button
            v-if="modal.actionSecondary"
            class="btn-secondary"
            @click="$emit('actionSecondary')"
          >
            {{ modal.actionSecondary }}
          </button>
          <button
            v-if="modal.actionPrimary"
            class="btn-primary"
            @click="$emit('actionPrimary')"
          >
            {{ modal.actionPrimary }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
  import { ref } from "vue";

  defineEmits(["actionPrimary", "actionSecondary"]);

  const props = defineProps({
    modal: { type: Object }
  });

  const modal = ref(props.modal);

  const toggleModal = () => (modal.open = !modal.open);
</script>

<style scoped lang="scss">
  .modal-container {
    @apply fixed flex h-screen w-screen top-0 left-0 items-center justify-center bg-orange-900 backdrop-blur-sm bg-opacity-50 z-10;

    .modal-content {
      @apply relative min-w-min max-w-[90%] py-10 px-10 bg-white rounded-md flex flex-col gap-6 justify-center;

      // .btn-close {
      //   @apply absolute top-1 right-3 z-10 text-2xl p-1 cursor-pointer;
      // }

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
