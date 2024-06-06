<template>
    <header class="container-header">
        <nav class="navigation">
            <ul class="navigation-items">
                <li class="navigation-item">
                    <a href="#"
                       class="navigation-link__logo"
                    >
                        <img src="/src/components/UI/Логотип.svg"
                             alt="Логотип"
                             width="100px"
                             height="30px"
                        >
                    </a>
                </li>
                <li class="navigation-item">
                    <a href="#"
                       class="navigation-link"
                    >
                        Что нового?
                    </a>
                </li>
                <li class="navigation-item">
                    <a href="#"
                       class="navigation-link"
                    >
                        Магазин
                    </a>
                </li>
                <li class="navigation-item">
                    <a href="#"
                       class="navigation-link"
                    >
                        Re-sale
                    </a>
                </li>
                <li class="navigation-item">
                    <a href="#"
                       class="navigation-link"
                    >
                        Предзаказ
                    </a>
                </li>
                <li class="navigation-item">
                    <a href="#"
                       class="navigation-link"
                    >
                        База знаний
                    </a>
                </li>
                <li class="navigation-item">
                    <a href="#"
                       class="navigation-link"
                    >
                        Дополнительная информация
                    </a>
                </li>
            </ul>
        </nav>
        <div class="search-basket">
            <a href="#"
               class="search"
            >
                Поиск
            </a>
            <button class="basket">
                Корзина
            </button>
        </div>
    </header>
</template>

<script>
export default {

};
</script>

<style>
.container-header {
    padding: 30px;
    display: flex;
    background-color: white;
}

.navigation .navigation-items {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navigation .navigation-item {
    margin-right: 20px;
    font-size: 18px;
    font-family: 'Franklin Gothic Medium', sans-serif;
}

.navigation .navigation-link {
    color: black;
    text-decoration: none;
}

.navigation .navigation-link:hover {
    text-decoration: underline;
}

.search-basket {
    justify-content: end;
}
</style>
