<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import "@/assets/base.css"
import "@/assets/components.css"

</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex flex-row list-none">
      <header class="ml-0 md:ml-4 p-8 mb-0">
        <nav>
          <RouterLink to="/" class="navegacion">Inicio</RouterLink>
          <RouterLink to="/grafos" class="navegacion">Grafos</RouterLink>
        </nav>
      </header>
    </div>
    <main>
      <RouterView />
    </main>
  </div>
</template>