<template>
    <div ref="container" id="container"></div>
</template>

<script setup>
import * as THREE from 'three'
import { fragmentShader, vertexShader } from '../shaders'
import { ref, watch } from 'vue'
const container = ref('');
      let camera, scene, renderer, uniforms, material, mesh, clock;

  watch(container, (newContainer) => {
      init(newContainer);
      clock = new THREE.Clock();
      animate();
  })

      function init(container) {
        container = document.getElementById("container");
        camera = new THREE.Camera();
        camera.position.z = 1;
        scene = new THREE.Scene();
        uniforms = {
          color1: { value: new THREE.Color(0xffffff) },
          color2: { value: new THREE.Color(0xffffff) },
          color3: { value: new THREE.Color(0xffffff) },
          iterations: { value: 1 },
          permutations: { value: 5 },
          brightness: { value: 0.1 },
          time: { value: 0 },
          speed: { value: 0.002 },
          uvScale: { value: new THREE.Vector2(0.2, 0.2) }
        };
        material = new THREE.RawShaderMaterial({
          uniforms: uniforms,
          vertexShader,
          fragmentShader
        });
        mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(mesh);
        renderer = new THREE.WebGLRenderer();
        container.appendChild(renderer.domElement);
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      function animate() {
        requestAnimationFrame(animate);
        render();
      }
      function render() {
        uniforms.time.value = clock.getElapsedTime() * 60;
        renderer.render(scene, camera);
      }
      window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

</script>

<style lang="scss">
#container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>