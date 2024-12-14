<template>
  <div class="w-screen h-screen flex relative">
    <div ref="threeContainer" class="w-full h-full" :class="{ 'blur-sm brightness-50': showDetails }"></div>

    <Transition name="menu">
      <div v-if="!showDetails && showHero" class="absolute bottom-[10%] flex w-full justify-center">
        <div class="flex flex-col items-center w-full lg:w-8/12  text-center px-2">
          <div class="text-5xl font-bold">
            Inspecting Power Grids with AI
            <span class="inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8 fill-blue-500"
                viewBox="0 0 16 16" stroke-width="1.0" stroke="white">
                <path
                  d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
            </span>
          </div>

          <div class="mt-2">This open-source project aims to create a low-cost AI-powered autonomous UAV for precise
            and safe power grid inspections.</div>

          <div class="flex items-center gap-2 mt-4">
            <button @click="showDetails = true"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold ring-2 ring-white text-sm">
              See Details
            </button>
          </div>

          <div class="mt-4 text-xs  flex items-center gap-1">
            *This website is 3D and interactive
            <span class="inline-flex">
              <svg class="h-4 w-4 fill-blue-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <title />
                <polygon points="48 170 48 366.92 240 480 240 284 48 170" />
                <path d="M272,480,464,366.92V170L272,284ZM448,357.64h0Z" />
                <polygon points="448 144 256 32 64 144 256 256 448 144" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Transition>


    <div v-if="showDetails" id="details-container" class="absolute flex justify-center w-full h-full">
      <div class="p-4 pt-8 w-full lg:w-1/2">
        <div>
          <button @click="showDetails = false"
            class="group flex justify-center items-center bg-black h-8 w-8 rounded-full ring-2 ring-white hover:ring-blue-500">
            <svg class="h-4 w-4 stroke-white group-hover:stroke-blue-500" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>

        <div class="font-bold mt-4 text-lg">
          Abstract
        </div>

        <div>
          This website tracks progress on my senior year project which focuses on developing an AI-driven UAV to inspect
          power lines for theft and damage. The drone
          will automatically patrol power lines, using object detection to detect issues such as missing cables or
          damaged components.
          It aims to enhance the efficiency of power line monitoring and reduce manual labour.
        </div>

        <div class="font-bold mt-4 text-lg">
          UAV Specs
        </div>

        <div>
          Based on design details and choice of components.
        </div>

        <div class="flex flex-wrap gap-4 mt-2">
          <div class="flex items-center text-sm font-semibold">
            Top speed
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 mr-2 fill-blue-500" viewBox="0 0 16 16">
              <path
                d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
              <path fill-rule="evenodd"
                d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0" />
            </svg>
            - 70km/hr
          </div>

          <div class="flex items-center text-sm font-semibold">
            Range
            <svg class="h-4 w-4 fill-blue-500 ml-1 mr-2" version="1.1" viewBox="0 0 65 65" xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="55.765" cy="12.384" r="1.081" />
              <circle cx="9.237" cy="45.593" r="1.081" />
              <path
                d="M63.129,8.764c-0.721-2.032-2.548-4.493-7.126-4.782c-0.005-0.001-0.01,0-0.015-0.001c-0.051-0.003-0.097-0.01-0.147-0.012  c-0.026-0.001-0.052,0.003-0.078,0.003c-0.025,0-0.049-0.004-0.074-0.003c-0.047,0.002-0.089,0.008-0.135,0.011  c-0.009,0.001-0.018,0.001-0.026,0.002c-4.58,0.288-6.407,2.751-7.128,4.783c-1.837,5.172,1.643,13.401,5.268,17.542  c-2.943,1.982-11.965,3.514-18.767,4.667c-12.511,2.12-19.039,3.398-19.039,7.091s5.97,4.893,16.522,6.693  c4.954,0.846,13.209,2.255,14,3.689c-1.175,1.717-11.853,3.463-18.27,4.511c-5.948,0.973-10.687,1.783-14.124,2.719  c2.395-4.297,3.979-9.851,2.612-13.704c-0.73-2.057-2.587-4.558-7.289-4.797c-0.026-0.001-0.051,0.004-0.077,0.004  c-0.025,0-0.05-0.005-0.075-0.004c-4.703,0.239-6.56,2.741-7.29,4.798c-2.02,5.693,2.398,15.106,6.363,18.675  c0.01,0.009,0.023,0.012,0.034,0.021c0.025,0.021,0.046,0.047,0.074,0.067c0.002,0.002,0.006,0.002,0.008,0.004  c0.105,0.078,0.219,0.138,0.338,0.185c0.018,0.007,0.035,0.012,0.053,0.019c0.028,0.01,0.056,0.017,0.084,0.024  c0.134,0.038,0.27,0.064,0.409,0.065c0,0,0.001,0,0.002,0c0,0,0,0,0,0h0h0c0,0,0.001,0,0.001,0c0.108,0,0.215-0.014,0.321-0.037  c0.034-0.008,0.066-0.021,0.1-0.032c0.019-0.005,0.038-0.011,0.057-0.018c0.024-0.008,0.048-0.014,0.071-0.022  c0.027-0.011,0.054-0.021,0.08-0.033c0.041-0.02,0.078-0.045,0.118-0.067c0.056-0.032,0.11-0.064,0.162-0.104  c0.024-0.019,0.049-0.037,0.072-0.059c0.006-0.005,0.014-0.006,0.02-0.012c0.192-0.173,0.385-0.37,0.578-0.569  c2.228-1.617,11.145-3.076,17.779-4.16c13.29-2.172,20.809-3.588,20.809-7.427c0-3.692-5.969-4.891-16.518-6.691  c-4.955-0.846-13.212-2.255-14.004-3.691c1.095-1.565,10.356-3.135,16.518-4.179c11.832-2.004,19.25-3.471,21.472-6.593  C60.81,23.699,65.133,14.406,63.129,8.764z M9.237,49.674c-2.251,0-4.082-1.831-4.082-4.082c0-2.25,1.831-4.08,4.082-4.08  c2.25,0,4.08,1.83,4.08,4.08C13.317,47.843,11.487,49.674,9.237,49.674z M55.765,16.465c-2.251,0-4.082-1.831-4.082-4.081  s1.831-4.081,4.082-4.081c2.25,0,4.08,1.831,4.08,4.081S58.015,16.465,55.765,16.465z" />
            </svg>
            - 30km
          </div>

          <div class="flex items-center text-sm font-semibold">
            Max altitude
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-4 w-4 fill-blue-500 mx-1"
              viewBox="0 0 16 16">
              <path d="M13.405 7.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 .405-5.973" />
            </svg>
            - 2000 feet
          </div>

          <div class="flex items-center text-sm font-semibold">
            Connectivity
            <svg class="h-4 w-4 fill-blue-500 ml-1 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="Line">
                <path d="M19.69,1.28a1,1,0,0,0-1.4,1.44,9,9,0,0,1,0,12.84A1,1,0,0,0,19.69,17a11,11,0,0,0,0-15.72Z" />
                <path
                  d="M16.88,4.14A1,1,0,0,0,15.5,5.58a5,5,0,0,1,0,7.12,1,1,0,0,0,0,1.41,1,1,0,0,0,.72.31,1,1,0,0,0,.69-.28,7,7,0,0,0,0-10Z" />
                <path
                  d="M3,9.14A8.88,8.88,0,0,1,5.71,2.72a1,1,0,1,0-1.4-1.44A11,11,0,0,0,4.31,17a1,1,0,1,0,1.4-1.44A8.88,8.88,0,0,1,3,9.14Z" />
                <path
                  d="M8.53,4.17a1,1,0,0,0-1.41,0,7,7,0,0,0,0,10,1,1,0,0,0,.69.28,1,1,0,0,0,.72-.31,1,1,0,0,0,0-1.41,5,5,0,0,1,0-7.12A1,1,0,0,0,8.53,4.17Z" />
                <path
                  d="M12,6.14A3,3,0,0,0,11,12V22a1,1,0,0,0,2,0V12a3,3,0,0,0-1-5.82Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,10.14Z" />
              </g>
            </svg>
            - 4G
          </div>

        </div>


        <div class="flex flex-col items-center text-center gap-2 mt-16 text-sm">
          <img class="h-16 w-16 rounded-full ring-2 ring-blue-500" src="/profile_pic.jpg" />

          <div>
            Hi👋 My name is Brian Lemayian and I am a 5th year student doing Electronic and Computer
            engineering.
            I like coding and building stuff. Get in touch here.
          </div>

          <div class="flex items-center gap-4">
            <button @click="openX"
              class="flex justify-center items-center h-8 w-8 bg-blue-500 hover:bg-blue-600 ring-2 ring-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-4 w-4 fill-white"
                viewBox="0 0 16 16">
                <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </button>

            <button @click="openLn"
              class="flex justify-center items-center h-8 w-8 bg-blue-500 hover:bg-blue-600 ring-2 ring-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-4 w-4 fill-white"
                viewBox="0 0 16 16">
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

export default {
  name: 'ThreeScene',
  data() {
    return {
      initialCameraPosition: { x: 0, y: 7, z: 0 },
      finalCameraPosition: { x: -0.8, y: 0.7, z: -1.6 },
      mixer: null,
      animations: [],

      showDetails: false,
      showHero: false,
    }
  },
  beforeCreate() {
    this.three = {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      uavModel: null,
      time: 0,
      clock: new THREE.Clock(),
    };
  },
  mounted() {
    this.initScene();
  },
  methods: {
    initScene() {
      const container = this.$refs.threeContainer;
      const width = container.clientWidth;
      const height = container.clientHeight;

      this.three.scene = new THREE.Scene();
      this.three.camera = new THREE.PerspectiveCamera(60, width / height, 0.01, 20);
      this.three.renderer = new THREE.WebGLRenderer({ antialias: true });

      // Enable shadow mapping
      this.three.renderer.shadowMap.enabled = true;
      this.three.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.three.renderer.physicallyCorrectLights = true;
      this.three.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.three.renderer.toneMappingExposure = 1.0;

      this.three.renderer.setSize(width, height);
      container.appendChild(this.three.renderer.domElement);

      this.three.camera.position.set(
        this.initialCameraPosition.x,
        this.initialCameraPosition.y,
        this.initialCameraPosition.z
      );
      this.three.camera.lookAt(new THREE.Vector3(0, 0, 0));

      // Softer sky color
      this.three.scene.background = new THREE.Color(0xB0C4DE);
      this.three.scene.fog = new THREE.FogExp2(0xB0C4DE, 0.1);

      this.three.controls = new OrbitControls(this.three.camera, this.three.renderer.domElement);
      this.three.controls.enableDamping = true;
      this.three.controls.dampingFactor = 0.25;
      this.three.controls.screenSpacePanning = false;
      this.three.controls.enabled = false;

      // Enhanced lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      this.three.scene.add(ambientLight);

      // Main directional light (sun)
      const sunLight = new THREE.DirectionalLight(0xfffaf0, 1.5);
      sunLight.position.set(5, 8, 4);
      sunLight.castShadow = true;
      sunLight.shadow.mapSize.width = 2048;
      sunLight.shadow.mapSize.height = 2048;
      sunLight.shadow.camera.near = 0.1;
      sunLight.shadow.camera.far = 20;
      sunLight.shadow.camera.left = -10;
      sunLight.shadow.camera.right = 10;
      sunLight.shadow.camera.top = 10;
      sunLight.shadow.camera.bottom = -10;
      sunLight.shadow.bias = -0.0001;
      this.three.scene.add(sunLight);

      // Fill light
      const fillLight = new THREE.DirectionalLight(0x8eb1e8, 0.8);
      fillLight.position.set(-5, 3, -4);
      this.three.scene.add(fillLight);

      this.addTerrain();

      const loader = new GLTFLoader();
      loader.load(
        '/ft_spear.glb',
        (gltf) => {
          this.three.uavModel = gltf.scene;



          this.three.scene.add(this.three.uavModel);
          this.startCameraAnimation();

          this.three.uavModel.userData.initialY = this.three.uavModel.position.y;
          this.three.uavModel.userData.initialRotationX = this.three.uavModel.rotation.x;

          if (gltf.animations && gltf.animations.length) {
            this.mixer = new THREE.AnimationMixer(this.three.uavModel);
            this.animations = gltf.animations;

            this.animations.forEach(clip => {
              const action = this.mixer.clipAction(clip);
              action.play();
            });
          }
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );

      const animate = () => {
        requestAnimationFrame(animate);
        const delta = this.three.clock.getDelta();
        this.three.time += 0.01;

        if (this.mixer) {
          this.mixer.update(delta);
        }

        if (this.three.uavModel) {
          const verticalOffset = Math.sin(this.three.time * 1.5) * 0.05;
          this.three.uavModel.position.y = this.three.uavModel.userData.initialY + verticalOffset;

          const sideRockAngle = Math.sin(this.three.time * 2) * 0.03;
          this.three.uavModel.rotation.z = sideRockAngle;
        }

        this.three.controls.update();
        this.three.renderer.render(this.three.scene, this.three.camera);
      };
      animate();

      window.addEventListener('resize', this.handleResize);
    },

    startCameraAnimation() {
      gsap.to(this.three.camera.position, {
        x: this.finalCameraPosition.x,
        y: this.finalCameraPosition.y,
        z: this.finalCameraPosition.z,
        duration: 3,
        ease: "power2.inOut",
        onComplete: () => {
          this.three.controls.enabled = true;
          this.showHero = true;
        }
      });
    },

    playAnimation(index) {
      if (this.mixer && this.animations[index]) {
        const action = this.mixer.clipAction(this.animations[index]);
        action.play();
      }
    },

    stopAnimation(index) {
      if (this.mixer && this.animations[index]) {
        const action = this.mixer.clipAction(this.animations[index]);
        action.stop();
      }
    },

    addTerrain() {
      const radius = 15;
      const segments = 256;
      const planeGeometry = new THREE.CircleGeometry(radius, segments);
      const textureLoader = new THREE.TextureLoader();
      const heightMapLoader = new THREE.TextureLoader();

      const texture = textureLoader.load('/texture_map.png');
      const heightMap = heightMapLoader.load('/height_map.png');

      // Enhance texture settings
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1); // Increase texture repeat for more detail
    

      heightMap.onLoad = () => {
        const canvas = document.createElement('canvas');
        canvas.width = heightMap.image.width;
        canvas.height = heightMap.image.height;

        const context = canvas.getContext('2d');
        context.drawImage(heightMap.image, 0, 0);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const positions = planeGeometry.attributes.position;

        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i) + radius;
          const z = positions.getZ(i) + radius;

          const u = Math.floor((x / (radius * 2)) * canvas.width);
          const v = Math.floor((z / (radius * 2)) * canvas.height);

          const pixelIndex = (v * canvas.width + u) * 4;
          const heightValue = imageData.data[pixelIndex];

          positions.setY(i, (heightValue / 255) * 12); // Increased height variation
        }

        positions.needsUpdate = true;
        planeGeometry.computeVertexNormals();
      };

      // Enhanced terrain material
      const planeMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        displacementMap: heightMap,
        displacementScale: 0.15,
        roughness: 0.85,
        metalness: 0.05,
        normalScale: new THREE.Vector2(1, 1),
        side: THREE.DoubleSide,
      });

      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = -4;
      plane.receiveShadow = true;
      this.three.scene.add(plane);
    },

    handleResize() {
      const container = this.$refs.threeContainer;
      const width = container.clientWidth;
      const height = container.clientHeight;

      this.three.renderer.setSize(width, height);
      this.three.camera.aspect = width / height;
      this.three.camera.updateProjectionMatrix();
    },

    openX() {
      const Link = 'https://twitter.com/l3mab/';
      window.open(Link, '_blank');
    },

    openLn() {
      const Link = 'https://www.linkedin.com/in/brian-lemayian/';
      window.open(Link, '_blank');
    },

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);

    // Cleanup Three.js resources
    if (this.three.renderer) {
      this.three.renderer.dispose();
    }
    if (this.three.scene) {
      this.three.scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    }
  },

};
</script>

<style>
.menu-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
</style>