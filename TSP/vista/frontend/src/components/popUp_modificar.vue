<template>
  <form class="popUp positionPopUP" @submit.prevent="guardar()">
    <span class="text-base md:text-lg encabezado">{{ titulo }}</span>
    <div class="mb-3">
      <p class="mb-2 text-left ml-2">{{ argumento }}</p>
      <slot :dato="props.dato.valor" :actualizar="event => props.dato.valor = event.target.value"></slot>
      <slot :dato="props.dato2.valor" name="secundario" :actualizar="event => props.dato2.valor = event.target.value"></slot>
    </div>
    <div style="display: flex; justify-content: center;">
      <table>
        <tbody>
          <tr>
            <td>
              <button @click="guardar()" class="boton mr-1">Guardar</button>
            </td>
            <td>
              <button @click="cancelar()" class="boton">Cancelar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue"

const props = defineProps({
  titulo: String,
  argumento: String,
  mousePos: Object,
  dato: Object,
  dato2: Object,
  altura: String
})

const height = ref("1rem")
const xPos = ref("0%")
const yPos = ref("0%")

const emit = defineEmits([
  "dato",
  "evento-cancelar"
])

function guardar() {
  emit("dato")
}

function cancelar() {
  emit("evento-cancelar")
  props.dato.valor = ""
}

onMounted(() => {
  const offset = 150
  const x = Math.trunc(props.mousePos.x) - offset
  const y = Math.trunc(props.mousePos.y) - offset + 40

  if (x < 0)
    xPos.value = 0
  else
    xPos.value = x + "px"

  if (y < 0)
    yPos.value = 0
  else
    yPos.value = y + "px"

  height.value = props.altura.value
})

</script>

<style scoped>
.positionPopUP {
  top: v-bind(yPos);
  left: v-bind(xPos);
  height: v-bind(height);
}
</style>