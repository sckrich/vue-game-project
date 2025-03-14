<script setup>
</script>
<template>
<div class="Filters">
        <div class="filters-wrapper">
        <select name="CPU" id="cpu-selector">
          <option value="Процессор">R7 5700X 3D</option>
          <option value="Процессор">I5 7500</option>
          <option value="Процессор">I7 7600K</option>
          <option value="Процессор">I9 14600K</option>
          <option value="Процессор">R5 5600X</option>
        </select>
        <select name="RAM" id="ram-selector">
          <option value="Процессор">4 GB</option>
          <option value="Процессор">8 GB</option>
          <option value="Процессор">16 GB</option>
          <option value="Процессор">32 GB</option>
          <option value="Процессор">64 GB</option>
        </select>
        <select name="GPU" id="gpu-selector">
          <option value="Процессор">RTX 4060TI</option>
          <option value="Процессор">RTX 4070TI SUPER</option>
          <option value="Процессор">RX8700XT</option>
          <option value="Процессор">RTX 5060TI</option>
          <option value="Процессор">RX6700XT</option>
        </select>
        </div>
      </div>
</template>
<style scopes>
#ram-selector
{
  z-index: 1;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(82, 82, 82);
  color: white;
  border: none;
}
.filters-wrapper{
  z-index: 1;

  gap: 20px;
  display: flex;
}
#gpu-selector{
  z-index: 1;

  width: 150px;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(82, 82, 82);
  color: white;
  border: none;
}
#cpu-selector{
 
  z-index: 1;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(82, 82, 82);
  color: white;
  border: none;
}
option{
  z-index: 1;

  color: white;
  border: none;
}
</style>