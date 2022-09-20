<template>
    <animated-background/>
        <router-view v-slot="{ Component, route }">
      <transition appear :name="route.meta.transition as string || 'fade' " mode="out-in">
          <component :is="Component" :if="isLoaded" />
      </transition>
          </router-view>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AnimatedBackground from './components/AnimatedBackground.vue';
const isLoaded = ref(false);
onMounted(() => {
isLoaded.value = true;
})

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap&text=↑→↓←");
:root {
  --fw-normal: 600;
  --fw-light: 500;
  --bg-primary: #000;
  --color-primary: #fff;
  --bg-secondary: #fff;
  --fsz-normal: 1rem;
  --fsz-big: 2.125rem;
  --ff: 'Inter';
  --btn-hover: rgb(51,51,51);
  --color-secondary: #999;
  --border-color: #333;
  --transition-y: 8px;
}
@keyframes transition-in {
  from {
    opacity: 0;
    transform: translateY(var(--transition-y));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes transition-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(var(--transition-y));
  }
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--ff);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-primary);
}
body { 
    background: var(--bg-primary);
    font-weight: var(--fw-normal);
    font-size: var(--fsz-normal);
}
canvas {
  max-width: 100% !important;
  max-height: 100% !important;
}

.fade-enter-active {
  animation: transition-in ease 1s;
}

.fade-leave-active, .fade-enter-leave {
  animation: transition-out ease 0.3s;
}


</style>
