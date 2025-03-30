<!-- <template>
    <div ref="vantaRef" class="clouds-background"></div>
  </template>
  
  <script setup>
  import { onMounted, ref, onBeforeUnmount } from 'vue'
  import CLOUDS from 'vanta/dist/vanta.clouds.min'
  import * as THREE from 'three'
  
  const vantaRef = ref(null)
  let vantaEffect = null
  
  onMounted(() => {
    vantaEffect = CLOUDS({
      el: vantaRef.value,
      THREE: THREE, // required dependency
      mouseControls: false,
      touchControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      speed: 0.5  // Adjust for slow movement
    })
  })
  
  onBeforeUnmount(() => {
    if (vantaEffect) vantaEffect.destroy()
  })
  </script> -->
