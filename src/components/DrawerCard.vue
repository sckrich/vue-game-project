<script setup>

defineProps({
    ImgUrl: String,
    GameName: String,
    Price: String,
    Description: String,
    isOpen: {
        type: Boolean,
        required: true,
    },
})
const emit = defineEmits(['close']);

function closeDrawer() {
  emit('close');
  console.log('closed')
}


</script>
<template>
    <div v-if="isOpen" class="drawer-overlay" @click="closeDrawer">
    <div class="drawer-content" @click.stop>
      <slot></slot>
      <button class = "close" @click="closeDrawer">Закрыть</button>
      <button class = "Buy">Купить</button>
    </div>
  </div>
</template>
<style scoped>
.drawer-overlay {
  display: flex;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
}
button{
  padding: 5px;
  width: 160px;
  border-radius: 10px;
  border: none;
  color: rgb(39, 39, 39);
  background-color: rgb(255, 255, 255);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.Buy:hover{
    color: white;
    cursor: pointer;
    background-color: rgb(91, 188, 91);
  transition: 0.1s ease;

}
.close:hover{
    cursor: pointer;
  background-color:rgb(255, 80, 80) ;
  transition: 0.1s ease;
  color: white;
}
.drawer-content {
  display: flex;
  align-items: center;
    justify-content: flex-start;
    gap: 20px;
    border-radius: 20px;
margin-top: 20px;
z-index: 10;
  width: 70vw;
  background: rgb(71, 71, 71);
  height: 100%;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0);
}
</style>