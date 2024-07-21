<template>
    <div class="catalog-filter">
        <h3 class="catalog-filter__title">
            Фильтры
        </h3>

        <div class="catalog-filter__category">
            <h4 class="catalog-filter__title-category">
                Категория
            </h4>
            <label class="catalog-filter__list">
                <input
                    type="checkbox"
                    name="category"
                    value="keyboards"
                > Клавиатура
            </label>
            <label class="catalog-filter__list">
                <input
                    type="checkbox"
                    name="category"
                    value="mice"
                > Мышки и периферия
            </label>
            <label class="catalog-filter__list">
                <input
                    type="checkbox"
                    name="category"
                    value="upgrade"
                > Апргейд клавиатур
            </label>
            <label class="catalog-filter__list">
                <input
                    type="checkbox"
                    name="category"
                    value="tools"
                > Инструменты и детали
            </label>
        </div>

        <div class="catalog-filter__price">
            <h4 class="catalog-filter__title-price">
                Цена
            </h4>
            <input
                class="catalog-filter__input"
                type="range"
                min="0"
                max="1000"
                id="priceRange"
            >
            <p>Максимальная цена: <span id="priceValue">60000</span> руб.</p>
        </div>

        <div class="catalog-filter__brand">
            <h4 class="catalog-filter__title-brand">
                Бренд
            </h4>
            <select class="catalog-filter__brand-list">
                <option value="all">
                    Все товары
                </option>
                <option value="Varmilo">
                    Varmilo
                </option>
                <option value="Leopold">
                    Leopold
                </option>
                <option value="Keychron">
                    Keychron
                </option>
                <option value="Logitech">
                    Logitech
                </option>
                <option value="Vortex">
                    Vortex
                </option>
                <option value="Wuzen">
                    Wuzen
                </option>
            </select>
        </div>

        <button
            type="button"
            class="catalog-filter__button"
        >
            Применить фильтр
        </button>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.catalog-filter {
    padding: 20px;
    width: 300px;
    font-family: Arial, sans-serif;

    &__title {
        margin-top: 0;
        font-size: 26px;
    }

    &__title-category {
        padding-top: 20px;
    }

    &__category {
        margin-bottom: 15px;
    }

    &__price {
        margin-bottom: 15px;
    }

    &__brand {
        margin-bottom: 15px;
    }

    &__list {
        padding-top: 10px;
        display: block;
    }

    &__title-price {
        padding-top: 15px;
    }

    &__input {
        margin-top: 10px;
        width: 100%;
    }

    &__title-brand {
        padding-bottom: 10px;
    }

    &__brand-list {
        width: 100px;
        height: 30px;
    }

    &__button {
        background-color: #6495ED;
        color: white;
        border-radius: 15px;
        border: none;
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: #6495ED;
        }
    }
}
</style>
