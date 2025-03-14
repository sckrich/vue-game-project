<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
<template>
    
    <div class="app-wrapper">
        <Header/>
        <div class="content-wrapper">
            <div class="left-right">
                <div class="left-info">
                    <h1>Наша команда и наши проекты.</h1>
                    <p>Наша команда разработки состоит из высококвалифицированных специалистов, каждый из которых вносит свой уникальный вклад в создание качественного веб-продукта. Мы работаем слаженно и эффективно, чтобы обеспечить нашим клиентам наилучший результат.</p>
                    <p>Проектный менеджер отвечает за общее управление проектом, координацию работы команды и взаимодействие с клиентами. Он следит за выполнением сроков и качеством работы, а также решает возникающие проблемы.</p>
                    <p>Технический лидер руководит технической частью проекта, принимает ключевые архитектурные решения и обеспечивает соблюдение стандартов разработки. Он помогает команде справляться с сложными задачами и контролирует качество кода.</p>
                </div>
                <div class="right-info">
                    <img class = "commanding" src="PlayWeb/public/TeamLogo.png" alt="Logo">
                </div>
            </div>
        <Footer/>
        </div>
    </div>
</template>
<style scoped>
.right-info{
    margin-left: 50px;
}
p{
    color: rgb(180, 180, 180);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    text-align: center;
}
.commanding{
    margin-top: 50px;
    width: 70%;
    border-radius: 20px;
}
.left-right{
    margin-left: 70px;
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
}
h1{
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 28px;
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