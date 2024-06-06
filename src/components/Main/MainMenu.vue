<template>
    <main class="main">
        <section class="category-swiper">
            <div class="swiper">
                <div
                    v-for="periphery in peripherys"
                    :key="periphery.id"
                    class="swiper-slider"
                >
                    <a
                        :href="periphery.link"
                        class="swiper-slider__link"
                    >
                        <img
                            :alt="periphery.image"
                            src="#"
                        >
                    </a>
                    <a
                        :href="periphery.link"
                        class="swiper-slider__content"
                    >
                        <h4 class="text-product">{{ periphery.name }}</h4>
                        <p class="product-description">{{ periphery.description }}</p>
                    </a>
                </div>
            </div>
            <div class="slidecontainer">
                <input
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                    id="myRange"
                >
            </div>
        </section>
        <section class="main-info">
            <div class="main-info__container">
                <div class="main-info__payment">
                    <svg
                        class="svg"
                        width="24"
                        height="24"
                    />
                    <h3 class="main-info__name">
                        Сплит оплата
                    </h3>
                    <p class="main-info__description">
                        Закажите сейчас - <br>оплатить можно потом
                    </p>
                </div>
                <div class="main-info__showroom">
                    <svg
                        class="svg"
                        width="24"
                        height="24"
                    />
                    <h3 class="main-info__name">
                        Все можно покликать в шоуруме
                    </h3>
                    <p class="main-info__description">
                        Все, что есть в наличии на сайте - есть в
                        шоуруме
                    </p>
                </div>
                <div class="main-info__delivery">
                    <svg
                        class="svg"
                        width="24"
                        height="24"
                    />
                    <h3 class="main-info__name">
                        Доставка по России и не <br>только
                    </h3>
                    <p class="main-info__description">
                        А еще по Беларуси, Казахстану,
                        Армении<br> и Кыргызстану
                    </p>
                </div>
                <div class="main-info__guarantee">
                    <svg
                        class="svg"
                        width="24"
                        height="24"
                    />
                    <h3 class="main-info__name">
                        Гарантия на все
                    </h3>
                    <p class="main-info__description">
                        Даже на услуги<br> и товары из Resale
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { peripheryData } from './peripheryData';

export default {
  data() {
    return {
      peripherys: peripheryData
    };
  }
};
</script>

<style>
.category-swiper {
    margin: 0 20px;
    padding: 20px;
    background-color: #B0C4DE;
    border-radius: 20px;
    /* height: 687px; */
}

.swiper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 100%;
}

.swiper-slider {
    padding-right: 20px;
    /* height: 580px;
    width: 500px; */
}

.swiper-slider__link {
    /* width: 432px;
    height: 432px; */
    text-decoration: none;
    color: #000000;
}

.swiper-slider__content {
    text-decoration: none;
    color: #000000;
    font-family: 'Franklin Gothic Medium', sans-serif;
    font-size: 18px;
}

.product-description {
    font-size: 14px;
}

.slidecontainer {
    width: 100%;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 5px;
    margin-top: 15px;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 55px;
    height: 5px;
    background: #696969;
    cursor: pointer;
    border-radius: 5px;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
}

.main-info__container {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    gap: 5px;
}

.main-info {
    padding: 50px 30px 0;
    font-family: 'Franklin Gothic Medium', sans-serif;
    font-size: 18px;
}

.main-info__name {
    margin: 16px 0 4px 0;
}
</style>
