<script setup>
import { ref, defineEmits, defineProps} from 'vue';
defineProps({
    gameYear: Number,
    gameName: String,
    imgUrl: String,
    GPU: String,
    CPU: String,
    RAM: String,
    Description: String,
    Mark: Number,
    Price: String,
})
function ColorCount(Mark){
  if(Mark >= 8 && Mark <= 9)
    {
      return 'rgb(78, 189, 98)'
    }
  else if(Mark == 10)
  {
    const gsg = document.getElementById('mark')
    return 'rgb(78, 189, 98)'
    
  }
  else if(Mark >= 4 && Mark < 8)
    {
      return 'rgb(176, 155, 32)'
    }
  else
    {
      return 'rgb(205, 80, 80)'
    }
}
const PriceStr = ref('Купить');
function ChangeColor(){
  if (document.getElementById('Price').style.backgroundColor != 'red')
    return document.getElementById('Price').style.backgroundColor = 'red'
  else{
    return document.getElementById('Price').style.backgroundColor = 'red'
  }
}
const emit = defineEmits(['open']);

function openDrawer() {
  emit('open');
}
</script>
<template>
<div class="card" @click="openDrawer">
  <div class="PriceWithPctr">
          <img class = "game-image" :src="imgUrl" alt="Game Image">
          <div :style="{backgroundColor:ColorCount(Mark)}" id="mark"><span>{{ Mark }}</span></div>

          </div>
          <div class="game-info">
            <p class = "game-name">{{gameName}}</p>
            
            <button id="Buy" class = "BuyGame" type="button" @mouseleave="PriceStr = 'Купить'"  @mouseover="PriceStr=Price">{{ PriceStr }}</button>
          </div>
          
        </div>
</template>
<style scoped>

.PriceWithPctr{
  display: flex;
}
.Price{
  visibility: visible;
  position: absolute;
  padding: 4px;
  border-radius: 20px;
  margin-left: 110px;
  margin-top: 90px;
  color: rgb(39, 39, 39);
  background-color: rgb(255, 255, 255);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 12px;
}
.legendary{
  height: 15px;
  width: 15px;
  background-color: blueviolet;
  position: absolute;
}
.BuyGame:hover{
  cursor: pointer;
  background-color:rgb(141, 59, 59) ;
  transition: 0.1s ease;
  color: white;
}
.BuyGame{
  padding: 5px;
  width: 160px;
  border-radius: 10px;
  border: none;
  color: rgb(39, 39, 39);
  background-color: rgb(255, 255, 255);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#mark{
  height: 13px;
  width: 13px;
  position: absolute;
  margin-left: 132px;
  color: white; 
  margin-top: 5px;
  text-align: center;
  padding: 5px;
  border-radius: 20px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 12px;
}
.game-info{
  display: grid;
  grid-template-rows: 60px 30px;
  border-radius: 15px;
}
.game-year{
  color: white;
  font-size: 12px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  max-width: 140px;
  margin-left: auto;
  margin-right: auto;
}
.game-name{
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  max-width: 140px;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
}
.game-image{
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  
}
.card:hover{
  cursor: pointer;
  background-color:rgb(205, 80, 80);
  transition: 0.2s ease;
  transform: scale(1.02);
}
.card{
  max-width: 160px;
  max-height: 220px;
  background-color: rgb(61, 61, 61);
  padding: 5px;
  border-radius: 12px;
}
</style>