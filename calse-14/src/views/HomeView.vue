<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="100">
    
    <h1 class="bg-green">SETUP</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <h1 class="bg-green">TELEPORT</h1>
    <TeleportComponent />

    <h1 class="bg-green">SUSPENSE</h1>
    <SuspenseComponent />

    <h1 class="bg-green">MÚLTIPLES ELEMENTOS ROOT</h1>
    <RootElements />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TeleportComponent from '@/components/teleport.vue'
import SuspenseComponent from '@/components/Suspense.vue'
import RootElements from '@/components/RootElements.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,TeleportComponent,SuspenseComponent,RootElements
  }
}
</script>
