<template>
    <div class="w-screen h-screen flex relative font-rajdhani">
        <div ref="threeContainer" class="w-full h-full brightness-75 grayscale">
        </div>

        <div v-if="!showHero" class="absolute bottom-[50%] flex w-full justify-center">
            <div class="flex items-center gap-1 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-white" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>

                <Typewriter class="text-xl text-white font-semibold" :text="'JKUAT University, Kenya'"></Typewriter>
            </div>
        </div>

        <Transition name="menu">
            <div v-if="activeComponent === 'hero' && showHero"
                class="absolute bottom-0 pb-8 flex w-full justify-center">
                <div class="flex flex-col items-center w-full lg:w-8/12  text-center px-2">
                    <div class="text-5xl font-bold text-white">
                        Inspecting Power Grids with AI
                        <span class="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 w-8 "
                                viewBox="0 0 16 16" stroke-width="1.0" stroke="white">
                                <path
                                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                            </svg>
                        </span>
                    </div>
                    <div class="mt-2 text-white">
                        This open-source project aims to create an AI-powered Unmanned Aerial Vehicle (UAV) for
                        autonomous power grid inspections.
                    </div>

                    <div class="flex items-center mt-4">
                        <button @click="activeComponent = 'details'"
                            class="group flex items-center gap-1 bg-black text-white px-4 py-1 rounded font-semibold ring-1 ring-white">
                            Project Details
                            <svg class="w-3 h-3 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex items-center mt-4">
                        <div class="text-white text-sm">
                            Backed by
                        </div>

                        <a href="https://merge.club/" target="_blank" rel="noopener noreferrer">
                            <button class="group flex items-center gap-1 p-1 rounded">
                                <img class="h-6 w-6"
                                    src="https://mwalimuproductionstorage.blob.core.windows.net/uav/merge.club.webp">
                                <div class="text-white text-sm group-hover:underline font-semibold">Merge Club</div>
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </Transition>


        <Transition name="details">
            <div v-if="activeComponent === 'details'" id="details-container"
                class="absolute flex justify-center w-full h-full">
                <div class="flex flex-col p-4 pt-8 w-full lg:w-1/2 backdrop-blur-sm">
                    <div class="flex items-center gap-4">
                        <button @click="activeComponent = 'hero'"
                            class="group flex justify-center items-center bg-black h-8 w-8 rounded ring-1 ring-white">
                            <svg class="h-3 w-3 stroke-white group-hover:scale-125 duration-200 transition-transform"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="3.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                    </div>

                    <Details class="mt-2"></Details>

                </div>
            </div>
        </Transition>

    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import Typewriter from '@/components/Typewriter.vue';
import Details from '@/components/Details.vue';


export default {
    name: 'ThreeScene',

    components: {
        Typewriter,
        Details,
    },

    data() {
        return {
            initialCameraPosition: { x: 0, y: 7, z: 0 },
            finalCameraPosition: { x: -0.8, y: 0.7, z: -1.6 },
            mixer: null,
            animations: [],

            //Component toggles
            showDetails: false,
            showHero: false,

            activeComponent: 'hero',
        }
    },

    watch: {
        activeComponent(newValue) {
            if (newValue === 'details') {
                this.moveCameraTo({ x: 1.8, y: 1.7, z: 1.2 })

            } else if (newValue === 'hero') {
                this.moveCameraTo({ x: -0.8, y: 0.7, z: -1.6 })
            }
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
        moveCameraTo(position, duration = 2, onComplete = null) {
            // Ensure position has all required coordinates
            const targetPosition = {
                x: position.x ?? this.three.camera.position.x,
                y: position.y ?? this.three.camera.position.y,
                z: position.z ?? this.three.camera.position.z
            };

            // Animate camera movement
            gsap.to(this.three.camera.position, {
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                duration: duration,
                ease: "power2.inOut",
                onUpdate: () => {
                    // Ensure controls are updated if they're enabled
                    if (this.three.controls && this.three.controls.enabled) {
                        this.three.controls.update();
                    }
                },
                onComplete: () => {
                    // Call the optional completion callback
                    if (onComplete && typeof onComplete === 'function') {
                        onComplete();
                    }
                }
            });
        },


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
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.menu-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.details-enter-active {
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.details-enter-from {
    opacity: 0;
    transform: scale(0.8);
}
</style>