<template>
    <popUp_modificar v-if="popUpNodo.mostrar" @evento-cancelar="cancelarEdicion" @dato="guardarNodo"
        :titulo="popUpNodo.titulo" :argumento="popUpNodo.argumento" :dato="popUpNodo.dato" :dato2="popUpNodo.dato"
        :mouse-pos="{
        x: mousePosX,
        y: mousePosY
    }"
        :altura="ref('13rem')"
    >
        <template #default="{ dato, actualizar }">
            <input @input="actualizar" :value="dato" autocomplete="on" type="text" />
        </template>
    </popUp_modificar>

    <popUp_modificar v-if="popUpArista.mostrar" @evento-cancelar="cancelarEdicionArista" @dato="guardarArista"
        :titulo="popUpArista.titulo" :argumento="popUpArista.argumento" :dato="popUpArista.peso"
        :dato2="popUpArista.tipo" :mouse-pos="{
            x: mousePosX,
            y: mousePosY
        }"
        :altura="ref('18rem')"
    >
        <template #default="{ dato, actualizar }">
            <input @input="actualizar" :value="dato" type="text"/>
        </template>
        <template #secundario="{ dato, actualizar }">
            <p class="mb-2 text-left ml-2">Tipo</p>
            <select required @input="actualizar" :value="dato" class="mb-2 w-full">
                <option value="to" selected>Dirigida</option>
                <option value="">No dirigida</option>
            </select>
        </template>
    </popUp_modificar>
    <div @mousemove="moverMouse" class="mx-0 md:mx-2">
        <div ref="mynetwork" class="w-full" style="height: 40rem"></div>
    </div>
</template>

<script lang="ts" setup>
import popUp_modificar from "../components/popUp_modificar.vue"
import { verificarNombre } from "@/utils/visjs";
import { options } from "../config/visjs"
import { ref, onMounted } from "vue";
import { Network } from "vis-network/standalone";

const nombres: Array<String> = []

const popUpNodo = ref({
    mostrar: false,
    titulo: "",
    argumento: "",
    dato: ref({
        valor: ""
    })
})

const popUpArista = ref({
    mostrar: false,
    titulo: "",
    argumento: "",
    peso: ref({
        valor: ""
    }),
    tipo: ref({
        valor: ""
    })
})

const mousePosX = ref(0)
const mousePosY = ref(0)
var _data: any
var _callback: Function

function moverMouse(event: any) {
    mousePosX.value = event.clientX;
    mousePosY.value = event.clientY;
}

function guardarNodo() {
    if (verificarNombre(popUpNodo.value.dato.valor, nombres)) {
        nombres.push(popUpNodo.value.dato.valor)
        _data.label = popUpNodo.value.dato.valor
        _callback(_data)
        popUpNodo.value.dato.valor = ""
        popUpNodo.value.mostrar = false
    }
}

function guardarArista() {
    _data.arrows = popUpArista.value.tipo.valor
    _data.label = String(popUpArista.value.peso.valor)
    _callback(_data)
    popUpArista.value.peso.valor = ""
    popUpArista.value.mostrar = false
}

function cancelarEdicion() {
    _callback(null)
    _data = null
    popUpNodo.value.mostrar = false
}

function cancelarEdicionArista() {
    _callback(null)
    _data = null
    popUpArista.value.mostrar = false
}

const mynetwork = ref<HTMLElement | null>(null);
onMounted(() => {
    if (mynetwork.value) {
        options.manipulation = {
            enabled: true,
            initiallyActive: true,
            editNode: function(data: any, callback: Function) {
                popUpNodo.value.dato.valor = data.label
                popUpNodo.value.mostrar = true;
                popUpNodo.value.titulo = "Editar Nodo"
                popUpNodo.value.argumento = "Nuevo nombre"
                _callback = callback
                _data = data
            },
            addNode: function(data: any, callback: Function) {
                popUpNodo.value.mostrar = true;
                popUpNodo.value.titulo = "Agregar Nodo"
                popUpNodo.value.argumento = "Nombre"
                _callback = callback
                _data = data
            },
            addEdge(data: any, callback: Function) {
                popUpArista.value.mostrar = true;
                popUpArista.value.titulo = "Agregar Arista"
                popUpArista.value.argumento = "Valor"
                _callback = callback
                _data = data
            },
            // deleteNode(data: any, callback: Function) {
            //     data.array.forEach(element => {
            //         nombres.pop(element.label)
            //     });
            //     callback(data)
            // }
        }

        const net = new Network(mynetwork.value, {}, options);
        net.once("stabilized", function () {
            var scaleOption = { scale: 2 };
            net.moveTo(scaleOption);
        })
    }
})
</script>