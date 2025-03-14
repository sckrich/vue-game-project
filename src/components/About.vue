<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'

</script>
<template>
    <div class="app-wrapper">
        <Header/>
        <div class="content-wrapper">
            <span>Дополнительная информация</span>
            <div class="left-right">

                <div class="txt">
                <p class = "Text-of-info">На главной странице игрового сайта важно создать атмосферу, которая сразу погружает пользователя в мир игр. Основные элементы включают раздел с последними событиями, обновлениями и анонсами игр, а также список самых популярных игр с удобными фильтрами и актуальными обновлениями данных. Также стоит добавить графическую статистику игроков, пинга и отзывов о серверах для многопользовательских игр. В разделе новостей и обзоров можно разместить последние события в мире игр, обзоры новых релизов, трейлеров и игровых механик, а также актуальные акции и бонусы для игроков. </p>
                <p class="Text-of-info">Информация о популярных играх, таких как CS:GO, Dota 2, World of Warcraft и других, поможет пользователям лучше ориентироваться. Важно также предоставить возможность мониторинга серверов и покупки привилегий для игр. Раздел сообщества может включать форумы для общения игроков, раздел с пользовательскими отзывами и рекомендациями, а также Telegram-каналы и полезные ссылки для разработчиков и игроков. Магазин на сайте должен предлагать продажу внутриигровых предметов, привилегий и подписок, а также возможность покупки игр и аксессуаров. Удобный поиск по играм, жанрам и платформам, а также личный кабинет для регистрации и отслеживания прогресса пользователей сделают сайт более функциональным. </p>
                <p class="Text-of-info">Интеграция с соцсетями позволит быстро входить в систему и обмениваться достижениями. Дизайн сайта должен использовать яркие и динамичные элементы, чтобы передать дух игровой индустрии, с анимациями и интерактивными элементами для создания современного и привлекательного интерфейса. Цветовая палитра может включать темные тона с яркими акцентами, чтобы создать атмосферу, напоминающую игровые интерфейсы. Дополнительные функции, такие как система оценок и отзывов от пользователей, календарь событий с анонсами турниров и стримов, а также блог с полезными статьями и гайдами для игроков и разработчиков, сделают сайт более интересным и полезным для аудитории.</p>
                </div>
                <div class="img">
                <img class = "about-img"src="C:\Users\user\Desktop\PlayGround\PlayWeb\public\Nintendo.png" alt="">
                </div>
                
            </div>
        <Footer/>
        </div>
    </div>
</template>
<style scoped>
span{
    background-color: rgb(255, 80, 80);
    padding: 3px;
    padding-left: 10px;
    padding-bottom: 5px;
    padding-right: 10px;
    border-radius: 20px;
    margin-left: 33px;
    color: rgb(255, 255, 255);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    text-align: start;
}
.img{
    border-radius: 20px;;
    background-color: rgb(85, 85, 85);
    width: 90%;
    object-fit: cover;
    opacity: 80%;
    }
.about-img{
    width: 130%;
    border-radius: 20px;
    transform: rotate(90deg);
}
.left-right{
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
}
.Text-of-info{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    color: rgb(180, 180, 180);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    text-align: start;
}
.content-wrapper{
  padding: 10px;
  margin-top: 10px;
  border-radius: 20px;
  max-width: 90vw;
  gap:10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(61, 61, 61);
}
.app-wrapper{
  position: absolute;
  top:0;
  left: 0;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgb(44, 44, 44);
  align-items: center;
}
</style>