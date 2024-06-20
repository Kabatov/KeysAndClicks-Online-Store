<template>
    <footer class="site-footer">
        <div class="site-footer__input">
            <h3 class="site-footer__name">
                Делимся полезным контентом. Присоединяйся!
            </h3>
            <form
                class="site-footer__mail"
                @submit.prevent
            >
                <input
                    class="site-footer__mail_subscribe"
                    v-model="subscribeEmail.email"
                    placeholder="Введите Email"
                    type="email"
                >
                <button
                    class="site-footer__mail_button"
                    @click="addEmail"
                >
                    Подписаться
                </button>
            </form>
        </div>
        <div class="site-footer__info">
            <LinksList
                v-for="(block, index) in blocks"
                :key="index"
                :links="block.links"
                :title="block.title"
            />
        </div>
    </footer>
</template>

<script>
import LinksList from './LinksList.vue';
import { footerBlocksData } from './footerBlocksData';

export default {
  components: {
    LinksList
  },
  data() {
    return {
      subscribeEmail: {
        email: ''
      },
      blocks: footerBlocksData
    };
  },
  methods: {
    addEmail() {
      this.subscribeEmail.id = Date.now();
      this.subscribeEmail = {
        email: ''
      };
      console.log('Добавлена новая почта');
    }
  }
};
</script>

<style lang="scss">
.site-footer {
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
      font-family: 'Franklin Gothic Medium', sans-serif;
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
      font-family: 'Franklin Gothic Medium', sans-serif;
      font-size: 20px;
      cursor: pointer;
    }

    &__info {
      display: flex;
      justify-content: space-around;
      font-family: 'Franklin Gothic Medium', sans-serif;
      font-size: 15px;
    }
}
</style>
