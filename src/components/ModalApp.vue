<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { Modal } from "@/types/types";
import { io } from "@/assets/js/socket.io.esm.min"
import axios from "axios"
import { useRouter } from "vue-router";

const router = useRouter()
const heroku = "https://pivpix.herokuapp.com"
const local = "http://localhost:5587/liberaRacao"
const socket = io(heroku)

defineEmits(["actionPrimary", "actionSecondary"]);

const props = defineProps<{
  modal: Modal;
}>();

const modal = reactive(props.modal);

const toggleModal = () => (modal.open = !modal.open);

onMounted(() => {
  const transacao = window.sessionStorage.getItem("pixid")

    socket.on("connect", () => {
      console.log('Conectado. Aguardando pagamento...')
    })

    socket.on("pagamento", (data) => {
      // console.log("Recebendo dados da Gerencianet");
      // console.log(data);
      // console.log();
      // console.log("Log da Minha Transacao Original: ");
      // console.log(transacao);
      // console.log();

      const meupagamento =  data.pix.find( item => item.txid === transacao )

      if(meupagamento){
        console.log("Pagamento recebido. Redirecionando...");

        axios.post(local, {
          liberaRacao: true,
        })
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (error) {
            // console.log(error);
          });
      }

      router.push('/produtos')
    })
})
</script>

<template>
  <Teleport v-if="modal.open" to="body">
    <div class="modal-container" @click.self="toggleModal">
      <div class="modal-content">
        <template v-if="modal.loading">
          <svg
            class="animate-spin w-20 h-20 border-4 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </template>
        <template v-else>
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
        </template>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-container {
  @apply fixed flex h-screen w-screen top-0 left-0 items-center justify-center bg-orange-900 backdrop-blur-sm bg-opacity-50 z-10;

  .modal-content {
    @apply relative min-w-min max-w-[90%] py-10 px-10 bg-white rounded-md flex flex-col gap-6 justify-center;

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
