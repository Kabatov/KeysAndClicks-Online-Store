<template>
    <footer class="footer">
        <div class="footer__input">
            <h3 class="footer__name">Делимся полезным контентом. Присоединяйся!</h3>
            <form class="footer__mail"
                  @submit.prevent>
                <input class="footer__mail_subscribe"
                       v-model="subscribeEmail.email"
                       placeholder="Введите Email"
                       type="email"
                >
                <button class="footer__mail_button"
                        @click="addEmail"
                >
                    Подписаться
                </button>
            </form>
        </div>
        <div class="footer-info">
            <LinksList v-for="(block, index) in blocks"
                       :key="index"
                       :links="block.links"
                       :title="block.title"
            />
        </div>
    </footer>
</template>

<script>
import LinksList from './LinksList.vue';

export default {
  components: {
    LinksList
  },
  data() {
    return {
      subscribeEmail: {
        email: ''
      },
      blocks: [
        {
          title: 'Магазин',
          links: [
            { link: '#', text: 'Клавиатуры' },
            { link: '#', text: 'Клавиши' },
            { link: '#', text: 'Аксессуары' },
            { link: '#', text: 'Мышки' },
            { link: '#', text: 'Кастомные клавиатуры' },
            { link: '#', text: 'Инструменты и детали' },
            { link: '#', text: 'Предзаказ' },
            { link: '#', text: 'Услуги сервиса' }
          ]
        },
        {
          title: 'Покупателям',
          links: [
            { link: '#', text: 'Доставка и оплата' },
            { link: '#', text: 'Гарантия и возврат' },
            { link: '#', text: 'Вакансии' },
            { link: '#', text: 'Политика конфиденциальности' },
            { link: '#', text: 'Пользовательское соглашение' },
            { link: '#', text: 'Договор-оферта' }
          ]
        },
        {
          title: 'Полезное',
          links: [
            { link: '#', text: 'Блог' },
            { link: '#', text: 'WIKI' },
            { link: '#', text: 'Форум' }
          ]
        },
        {
          title: 'Шоурум',
          links: [
            { link: '#', text: 'Каждый день без выходных' },
            { link: '#', text: '11:00 - 20:00' },
            { link: '#', text: 'м. Курская' },
            { link: '#', text: 'Нижний Сусальный переулок, 5с4а, подъезд 8' }
          ]
        },
        {
          title: 'Поддержка',
          links: [
            { link: '#', text: 'Каждый день без выходных' },
            { link: '#', text: '11:00 - 20:00' },
            { link: '#', text: 'help@KeysAndClicks.ru' },
            { link: '#', text: '+7 (495) 123 45 67' },
            { link: '#', text: 'Whatsapp' },
            { link: '#', text: 'Telegram' },
            { link: '#', text: 'Контакты' }
          ]
        },
        {
          title: 'Соцсети',
          links: [
            { link: '#', text: 'Telegram' },
            { link: '#', text: 'ВКонтакте' },
            { link: '#', text: 'Instagram' },
            { link: '#', text: 'Youtube' }
          ]
        }
      ]
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

<style>
.footer {
    padding-top: 50px;
    background-color: black;
    color: white;
}

.footer__input {
    text-align: center;
    margin-bottom: 50px;
}

.footer__name {
    font-size: 26px;
}

.footer__mail {
    margin-top: 20px;
    position: relative;
}

.footer__mail_subscribe {
    width: 640px;
    height: 65px;
    border-radius: 30px;
    font-family: 'Franklin Gothic Medium', sans-serif;
    font-size: 20px;
    padding: 0 200px 0 20px;
}
.footer__mail_button {
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

.footer-info {
    display: flex;
    justify-content: space-around;
    font-family: 'Franklin Gothic Medium', sans-serif;
    font-size: 15px;
}
</style>
