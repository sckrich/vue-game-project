<script>
</script>
<template>
    <div class="nav-head">
      <div class="logodiv">
        <img class = "logo" src="C:\Users\user\Desktop\PlayGround\PlayWeb\public\Logo.png" alt="Logo">
        <div class="DescriptionLogo">
        <h1>PLAYGROUND</h1>
        <p class = "UnderLogoText">The best way to play</p>
        </div>
      </div>
      <ul>
        <li><RouterLink to="/">Главная</RouterLink></li>
        <li><RouterLink to="/about">О нас</RouterLink></li>
        <li><RouterLink to="/information">Информация</RouterLink></li>
        <li><a href="#">Профиль<img class = "ProfileImage"src = "C:\Users\user\Desktop\PlayGround\PlayWeb\public\GameImages\profile-user.png"></a></li>
      </ul>
    </div>
</template>
<style scoped>
.UnderLogoText{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgb(255, 255, 255);
  font-size: 12px;
}
.DescriptionLogo{
  display: grid;
  grid-template-rows: 15px 35px;
  margin-left: 5px;
}
.logodiv{
  display: flex;
  align-items: center;
  height: 30px;
  background-color: rgb(205, 80, 80);
  padding: 5px;
  border-radius: 20px;
  margin-left: 20px;
}
h1{
  font-size: 16px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
}
ul{
  margin-right: 20px;
  display: flex;
  list-style: none;
}
.ProfileImage{
  width: 20px;
  margin-left: 10px;
}
li{
  display: flex;
  align-items: center;
  padding-left: 20px;
}
a{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 6px;
  border-radius: 20px;
}
a:active{
    color: rgb(255, 255, 255);
    background-color: rgb(205, 80, 80);
    padding: 6px;
    border-radius: 20px;

}
a:hover{
  color: rgb(255, 255, 255);
  background-color: rgb(205, 80, 80);
  padding: 6px;
  border-radius: 20px;
  transition: 0.1s ease;
}
.logo{
  
  width: 30px;
}
.nav-head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 90vw;
  background-color: rgb(61, 61, 61);
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px; 
  font-size: 16px;
}
</style>