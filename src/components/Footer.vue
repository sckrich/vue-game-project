<script start>
</script>
<template>
    <div class="UpperFooterWrapper">
        <div class="information">
            <p class ="infoP">Были рады видеть вас здесь, будем рады видеть вас снова, у нас лучшие игры по лучшим ценам! Не забывайте проверять на какие игры действует скидка. Получайте промокоды на бесплатные подарки, учавствуя в конкурсах в группе ВКонтакте</p>
    </div>
    <div class="footer-wrapper">
        <p class = "Year">2025 г. SCKRICH</p>
        <div class="information-footer">
            <div class="Button-Footer">
            <p class = "info-about">
                <a class="AU" href="https://t.me/sckrich">Авторы</a>
            </p>
            </div>
            <div class="Button-Footer">

            <img class = "footer-icon" src="https://img.icons8.com/?size=96&id=13977&format=png" alt="VK">
            <p class = "info-about">
                <a class = "VK"href="https://vk.com/sckrrrich">Вконтакте</a>
            </p>
            </div>
            <div class="Button-Footer">
            <img class = "footer-iconTG" src="https://img.icons8.com/?size=96&id=63306&format=png" alt="TG">
            <p class = "info-about">
                <a class = "TG" href="https://t.me/sckrich">Telegramm</a>
            </p>
            </div>
        </div>
        <img class = "logo" src="C:\Users\user\Desktop\PlayGround\PlayWeb\public\Logo.png" alt="Logo">
    </div>
    
    </div>
</template>
<style scoped>
.infoP{
    z-index: 2;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.information{
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    display: flex;
    text-align: center;
    color: rgb(161, 161, 161);
    background-color: rgb(41, 41, 41);
    border-radius: 20px;
}
.logo{
    z-index: 1;
    margin-right: 20px;
  max-width: 30px;
  max-height: 30px;
}
.footer-icon{
    z-index: 1;
    max-width: 30px;
}
.footer-iconTG{
    z-index: 1;

    max-width: 28px;
}
.footer-wrapper{
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Button-Footer{
    z-index: 1;

    display: flex;
    align-items: center;
    padding: 10px;
}
.information-footer{
    z-index: 1;

    display: flex;
    gap: 10px;
    margin-right: 80px;
}
a{
    text-decoration: none;
    z-index: 1;

    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.VK:hover{
    z-index: 1;

    color: rgb(255, 255, 255);
  transition: 0.1s ease;
  padding: 3px;
  border-radius: 5px;
  background-color:rgb(25, 118, 210) ;
}
.TG:hover{
    z-index: 1;

    color: rgb(255, 255, 255);
  transition: 0.1s ease;
  padding: 3px;
  border-radius: 5px;
  background-color:rgb(42, 171, 238) ;
}
.AU:hover{
    z-index: 1;

    color: rgb(255, 255, 255);
    transition: 0.1s ease;
    padding: 3px;
    border-radius: 5px;
    background-color: rgb(205, 80, 80);
}
p{
    z-index: 1;

    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 3px;
}
.Year{
    z-index: 1;

    margin-left: 20px;
    color: rgb(255, 255, 255);
}
</style>