<template>
    <div class="relative flex flex-col w-full text-white flex-1">
        <div class="flex gap-4 mt-2">

            <div class="absolute top-[50%] left-[10%] flex flex-col items-center">
                <div class="h-4 w-4 z-50 translate-x-20 translate-y-2.5 bg-white rounded-full ring-4 ring-black">
                </div>

                <div class="w-20 h-0.5 bg-white translate-x-1/2 translate-y-0.5">

                </div>

                <div class="w-0.5 h-10 bg-white">

                </div>

                <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                        <button v-bind="activatorProps"
                            class="flex flex-col w-28 ring-1 ring-white backdrop-blur  hover:bg-black p-2 rounded items-center">
                            <svg class="h-12 w-12 fill-white" version="1.1" viewBox="0 0 65 65" xml:space="preserve"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <circle cx="55.765" cy="12.384" r="1.081" />
                                <circle cx="9.237" cy="45.593" r="1.081" />
                                <path
                                    d="M63.129,8.764c-0.721-2.032-2.548-4.493-7.126-4.782c-0.005-0.001-0.01,0-0.015-0.001c-0.051-0.003-0.097-0.01-0.147-0.012  c-0.026-0.001-0.052,0.003-0.078,0.003c-0.025,0-0.049-0.004-0.074-0.003c-0.047,0.002-0.089,0.008-0.135,0.011  c-0.009,0.001-0.018,0.001-0.026,0.002c-4.58,0.288-6.407,2.751-7.128,4.783c-1.837,5.172,1.643,13.401,5.268,17.542  c-2.943,1.982-11.965,3.514-18.767,4.667c-12.511,2.12-19.039,3.398-19.039,7.091s5.97,4.893,16.522,6.693  c4.954,0.846,13.209,2.255,14,3.689c-1.175,1.717-11.853,3.463-18.27,4.511c-5.948,0.973-10.687,1.783-14.124,2.719  c2.395-4.297,3.979-9.851,2.612-13.704c-0.73-2.057-2.587-4.558-7.289-4.797c-0.026-0.001-0.051,0.004-0.077,0.004  c-0.025,0-0.05-0.005-0.075-0.004c-4.703,0.239-6.56,2.741-7.29,4.798c-2.02,5.693,2.398,15.106,6.363,18.675  c0.01,0.009,0.023,0.012,0.034,0.021c0.025,0.021,0.046,0.047,0.074,0.067c0.002,0.002,0.006,0.002,0.008,0.004  c0.105,0.078,0.219,0.138,0.338,0.185c0.018,0.007,0.035,0.012,0.053,0.019c0.028,0.01,0.056,0.017,0.084,0.024  c0.134,0.038,0.27,0.064,0.409,0.065c0,0,0.001,0,0.002,0c0,0,0,0,0,0h0h0c0,0,0.001,0,0.001,0c0.108,0,0.215-0.014,0.321-0.037  c0.034-0.008,0.066-0.021,0.1-0.032c0.019-0.005,0.038-0.011,0.057-0.018c0.024-0.008,0.048-0.014,0.071-0.022  c0.027-0.011,0.054-0.021,0.08-0.033c0.041-0.02,0.078-0.045,0.118-0.067c0.056-0.032,0.11-0.064,0.162-0.104  c0.024-0.019,0.049-0.037,0.072-0.059c0.006-0.005,0.014-0.006,0.02-0.012c0.192-0.173,0.385-0.37,0.578-0.569  c2.228-1.617,11.145-3.076,17.779-4.16c13.29-2.172,20.809-3.588,20.809-7.427c0-3.692-5.969-4.891-16.518-6.691  c-4.955-0.846-13.212-2.255-14.004-3.691c1.095-1.565,10.356-3.135,16.518-4.179c11.832-2.004,19.25-3.471,21.472-6.593  C60.81,23.699,65.133,14.406,63.129,8.764z M9.237,49.674c-2.251,0-4.082-1.831-4.082-4.082c0-2.25,1.831-4.08,4.082-4.08  c2.25,0,4.08,1.83,4.08,4.08C13.317,47.843,11.487,49.674,9.237,49.674z M55.765,16.465c-2.251,0-4.082-1.831-4.082-4.081  s1.831-4.081,4.082-4.081c2.25,0,4.08,1.831,4.08,4.081S58.015,16.465,55.765,16.465z" />
                            </svg>
                            <div class="font-semibold text-lg">Flight range</div>
                            20km
                        </button>
                    </template>

                    <template v-slot:default="{ isActive }">

                        <div class="flex h-full justify-center">
                            <div class="flex flex-col p-2 rounded w-[1/3] backdrop-blur ring-1 ring-white">
                                <button
                                    class="group flex items-center justify-center bg-black h-8 w-8 ring-1 ring-white rounded"
                                    @click="isActive.value = false">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="3.5" stroke="currentColor" class="h-4 w-4 group-hover:scale-125 duration-200 transition-transform">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </button>

                                <p class="text-white font-rajdhani mt-2">
                                    The drone is electric and is powered by a 2200 mAh Lipo battery giving it 20km of autonomous
                                    flight. This is extendable with a bigger battery.
                                </p>
                            </div>
                        </div>

                    </template>
                </v-dialog>
            </div>

            <div class="absolute top-[20%] left-[70%] flex flex-col-reverse items-center">
                <div class="h-4 w-4 -translate-x-10 -translate-y-2.5 bg-white rounded-full ring-4 z-50 ring-black">
                </div>

                <div class="w-10 h-0.5 bg-white -translate-x-1/2 -translate-y-0.5"></div>

                <div class="w-0.5 h-10 bg-white"></div>

                <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">

                        <button v-bind="activatorProps"
                            class="flex flex-col  w-28 hover:bg-black ring-1 ring-white p-2 rounded items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-white" viewBox="0 0 16 16">
                                <path
                                    d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                                <path fill-rule="evenodd"
                                    d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0" />
                            </svg>
                            <div class="font-semibold text-lg">Top speed</div>
                            80km/hr
                        </button>
                    </template>

                    <template v-slot:default="{ isActive }">

                        <div class="flex h-full justify-center">
                            <div class="flex flex-col p-2 rounded w-[1/3] backdrop-blur ring-1 ring-white">
                                <button
                                    class="group flex items-center justify-center bg-black h-8 w-8 ring-1 ring-white rounded"
                                    @click="isActive.value = false">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="3.5" stroke="currentColor" class="h-4 w-4 group-hover:scale-125 duration-200 transition-transform">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <p class="text-white font-rajdhani mt-2">
                                    The airframe is based on the flying wing design of the <a href="https://www.flitetest.com/articles/ft-spear-build" class="underline"  target="_blank" rel="noopener noreferrer">FT Spear</a> by Flitetest. It offers a low-drag design that cuts
                                    through air with ease. Also uses a single 1200KV high-torque motor with 9-inch carbon-fibre
                                    propeller for propulsion.
                                </p>
                            </div>
                        </div>

                    </template>
                </v-dialog>


            </div>

            <div class="absolute top-[15%] left-[0%] flex flex-col-reverse items-center">
                <div class="h-4 w-4 translate-x-20 -translate-y-2.5 bg-white rounded-full ring-4 ring-black z-50">
                </div>

                <div class="w-20 h-0.5 bg-white translate-x-1/2 -translate-y-0.5">

                </div>

                <div class="w-0.5 h-10 bg-white">

                </div>

                <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">

                        <button v-bind="activatorProps"
                            class="flex flex-col min-w-28 hover:bg-black ring-1  ring-white p-2 rounded items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-10 w-10 fill-white"
                                viewBox="0 0 16 16">
                                <path
                                    d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                                <path
                                    d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                            </svg>
                            <div class="font-semibold text-lg">Autopilot</div>
                            GPS navigation
                        </button>
                    </template>

                    <template v-slot:default="{ isActive }">

                        <div class="flex h-full justify-center">
                            <div class="flex flex-col p-2 rounded w-[1/3] backdrop-blur ring-1 ring-white">
                                <button
                                    class="group flex items-center justify-center bg-black h-8 w-8 ring-1 ring-white rounded"
                                    @click="isActive.value = false">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="3.5" stroke="currentColor" class="h-4 w-4 group-hover:scale-125 duration-200 transition-transform">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </button>

                                <p class="text-white font-rajdhani mt-2">
                                    The drone is equipped with GPS, allowing it to autonomously navigate preset flight
                                    paths along power transmission lines. Uses a Pixhawk 2.4.8 flight controller and an Ublox
                                    M8N GPS module.
                                </p>
                            </div>
                        </div>

                    </template>
                </v-dialog>
            </div>

            <div class="absolute top-[50%] left-[50%] flex flex-col items-center">
                <div class="h-4 w-4 translate-y-2.5 bg-white rounded-full ring-4 ring-black z-50"></div>

                <div class="w-0.5 h-10 bg-white"></div>

                <v-dialog>
                    <template v-slot:activator="{ props: activatorProps }">
                        <button v-bind="activatorProps"
                            class="flex flex-col min-w-28 hover:bg-black ring-1 ring-white p-2 rounded items-center">

                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path
                                    d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
                            </svg>

                            <div class="font-semibold text-lg">Object recognition</div>
                            AI Vision
                        </button>
                    </template>

                    <template v-slot:default="{ isActive }">

                        <div class="flex justify-center items-center w-[100%] lg:w-[50%] mx-auto">
                            <div class="group flex flex-col p-2 rounded-sm w-[1/3] backdrop-blur ring-1 ring-white">
                                <button
                                    class="flex items-center justify-center bg-black h-8 w-8 ring-1 ring-white rounded"
                                    @click="isActive.value = false">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="3.5" stroke="currentColor" class="h-4 w-4 group-hover:scale-125 duration-200 transition-transform">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </button>

                                <p class="text-white font-rajdhani mt-2">
                                    A Raspberry pi 4 with an 8MP camera module is used for visual input. The Pi runs Microsoft's Azure AI Custom Vision on edge for object recognition of powergrid infrastructure. 
                                </p>
                            </div>
                        </div>

                    </template>
                </v-dialog>
            </div>


            <div class="absolute top-[0%] left-[35%] flex flex-col-reverse items-center">
                <div class="h-4 w-4 bg-white rounded-full ring-4 ring-black z-50"></div>

                <div class="w-0.5 h-16 bg-white"></div>

                <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                        <button v-bind="activatorProps"
                            class="flex flex-col min-w-28 hover:bg-black ring-1 ring-white p-2 rounded items-center">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="h-8 w-8" viewBox="0 0 16 16">
                                <path
                                    d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <div class="font-semibold text-lg">4G</div>
                            Internet enabled
                        </button>
                    </template>

                    <template v-slot:default="{ isActive }">

                        <div class="flex h-full justify-center">
                            <div class="flex flex-col p-2 rounded w-[1/3] backdrop-blur ring-1 ring-white">
                                <button
                                    class="group flex items-center justify-center bg-black h-8 w-8 ring-1 ring-white rounded"
                                    @click="isActive.value = false">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="3.5" stroke="currentColor" class="h-4 w-4 group-hover:scale-125 duration-200 transition-transform">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </button>

                                <p class="text-white font-rajdhani mt-2">
                                    The drone uses a 4G connection to transmit and receive data, giving it good range and making it controllable via a browser.
                                </p>
                            </div>
                        </div>

                    </template>
                </v-dialog>
            </div>

        </div>

    </div>
</template>

<style>
.menu-enter-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-enter-from {
    opacity: 0;
    transform: scale(0.8);
}
</style>