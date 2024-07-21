<template>
    <footer class="footer">
        <div class="footer__input">
            <h3 class="footer__name">
                Делимся полезным контентом. Присоединяйся!
            </h3>
            <form
                class="footer__mail"
                @submit.prevent
            >
                <input
                    class="footer__mail_subscribe"
                    v-model="subscribeEmail.email"
                    placeholder="Введите Email"
                    type="email"
                >
                <button
                    class="footer__mail_button"
                    @click="handleAddEmail"
                >
                    Подписаться
                </button>
            </form>
        </div>
        <div class="footer__info">
            <LinksList
                v-for="(block, index) in blocks"
                :key="index"
                :links="block.links"
                :title="block.title"
            />
        </div>
    </footer>
</template>

<script setup>
import { reactive, ref } from 'vue';
import LinksList from './LinksList.vue';
import { footerBlocksData } from './footerBlocksData';

const blocks = ref(footerBlocksData);

const subscribeEmail = reactive({
  email: '',
  id: null
});

const handleAddEmail = () => {
  subscribeEmail.id = Date.now();
  subscribeEmail.email = '';
};
</script>

<style lang="scss">
.footer {
    margin-top: 40px;
    padding-top: 50px;
    background-color: black;
    color: white;

    &__input {
      text-align: center;
      margin-bottom: 50px;
    }

    &__name {
      font-size: 26px;
    }

    &__mail {
      margin-top: 20px;
      position: relative;
    }

    &__mail_subscribe {
      width: 640px;
      height: 65px;
      border-radius: 30px;
      font-size: 20px;
      padding: 0 200px 0 20px;
    }

    &__mail_button {
      position: absolute;
      width: 175px;
      height: 55px;
      top: 5px;
      right: 325px;
      border-radius: 30px;
      border: 1px solid white;
      background-color: #6495ED;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }

    &__info {
      display: flex;
      justify-content: space-around;
      font-size: 15px;
    }
}
</style>
