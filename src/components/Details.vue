<template>
    <div class="flex flex-col w-full h-full overflow-y-scroll text-white font-rajdhani py-2">
        <div class="text-2xl font-semibold mt-2">
            1. Introduction
        </div>

        <p>
            This page is a distillation of my senior year undergraduate project which I successfully defended in front
            of
            the examination panel on 19th May 2025.
        </p>


        <div class="text-2xl font-semibold mt-4">
            2. Abstact
        </div>

        <p>
            Kenya has a large and widespread power distribution network connecting 75% the country to
            the national grid. This vastness has brought about various challenges in maintenance of this network.
            Issues include irregular maintenance due to the labour required, complicated logistics due to challenging
            terrain and
            economic losses resulting from delay in diagnosing problems.
            These are challenges that I have encountered first-hand during my internships where I worked on the
            powergrids
            of three African countries.
            <br>
            This open-source project aims to develop a low-cost autonomous UAV to assist with power line inspections.
            The camera-enabled drone will fly autonomously along pre-set flight routes over the power line, using AI
            object detection to visually detect anomalies.
            Issues such as corroded cables will be identified, classified and marked for operators to
            further analyse.
        </p>

        <div class="text-2xl font-semibold mt-4">
            3. Methodology
        </div>

        <div class="flex flex-col">
            <div class="text-lg font-semibold">
                3.1 The Drone
            </div>

            <ImageViewer class="cursor-pointer w-full lg:w-8/12"
                src="https://mwalimuproductionstorage.blob.core.windows.net/uav/uav+stand.webp"></ImageViewer>

            <div class="flex flex-wrap gap-4 mt-2">
                <ImageViewer class="cursor-pointer h-24"
                    src="https://mwalimuproductionstorage.blob.core.windows.net/uav/parts.webp"></ImageViewer>
                <ImageViewer class="cursor-pointer h-24"
                    src="https://mwalimuproductionstorage.blob.core.windows.net/uav/assembling_parts.webp">
                </ImageViewer>
                <ImageViewer class="cursor-pointer h-24"
                    src="https://mwalimuproductionstorage.blob.core.windows.net/uav/3d_parts.webp"></ImageViewer>
            </div>

            <p class="mt-2">
                For the airframe, I went with the FT Spear, a free for non-commercial use flying wing design from
                <a href="https://www.flitetest.com/" class="underline" target="_blank"
                    rel="noopener noreferrer">Flitetest</a>.
                The FT Spear is also cost-effective and easy to construct, made from sheets of 3/16-inch foam board
                material. The materials are both lightweight and durable, ensuring that the UAV remains robust without
                adding unnecessary weight. The construction process is straightforward, aided by the readily available
                plans and detailed <a href="https://www.flitetest.com/articles/ft-spear-build" class="underline"
                    target="_blank" rel="noopener noreferrer">instructions</a> provided by FliteTest on their website.
                The motor mount, control horns and camera mount were 3d printed from black PLA plastic.
            </p>
        </div>

        <div class="flex flex-col mt-4">
            <div class="text-lg font-semibold">
                3.2 Electronics
            </div>

            <VideoViewer class="cursor-pointer w-full lg:w-8/12"
                src="https://mwalimuproductionstorage.blob.core.windows.net/uav/pixhawk_blender.webm"></VideoViewer>

            <p class="mt-2">
                I used the Pixhawk 2.4.8 as the flight controller for the UAV. It comes with built-in sensors such as
                the accelerometer, gyroscope, compass and barometer.
                Together with an Ublox M8N GPS module, the pixhawk is capable of autopilot for a range of flying
                vehicles. For the firmware I used
                Ardupilot, the flying wing version.
            </p>

            <ImageViewer class="cursor-pointer w-full lg:w-6/12 my-1"
                src="https://mwalimuproductionstorage.blob.core.windows.net/uav/raspberry_setup.webp">
            </ImageViewer>

            <p>
                I set up a Raspberry Pi 4 for the UAV. I chose the 4GB RAM model, which provides enough memory and
                processing power
                to run the software stack required for drone control, telemetry and video streaming. The Pi serves as
                the onboard
                computer, managing communication between the flight controller and the ground station.
                I also set up a camera for the Raspberry Pi to capture live video during flight. I used the 8MP
                wide-angle camera by Freenove, which has a 120-degree field of view. This camera connects directly to
                the Pi's CSI port and provides clear, wide-angle footage suitable for real-time monitoring and object
                detection tasks.
            </p>

            <ImageViewer class="cursor-pointer w-full lg:w-6/12 my-1"
                src="https://mwalimuproductionstorage.blob.core.windows.net/uav/flight_control.webp">
            </ImageViewer>

            <p>
                The drone is powered by a 2200 mAh 11.1V 3S battery. This battery provides enough capacity to
                supply all the onboard electronics and the motor for the planned 20-minute flight duration.
                To power the Raspberry Pi 4, I used an LM2696 step-down voltage regulator to convert the battery voltage
                down to a stable 5V supply.
                The Pixhawk flight controller is powered by a dedicated 5V 2.3A 3DR power module, which is connected in
                parallel with
                the 30A electronic speed controller. The ESC also includes a 5V 2A BEC that powers the servo rail,
                responsible for the elevons' control.
            </p>
        </div>

        <div class="flex flex-col mt-4">
            <div class="text-lg font-semibold">
                3.3 Software
            </div>

            <div class="font-semibold">
                3.3.1 Frontend
            </div>

            <VideoViewer class="cursor-pointer w-full lg:w-8/12"
                src="https://mwalimuproductionstorage.blob.core.windows.net/uav/uav+software.webm">
            </VideoViewer>

            <p class="mt-2">
                The UI is a web app made with Vue.js which I personally prefer and recommend over React. It allows
                for fast prototyping of complex software and it's easy to work with. The frontend communicates with the
                drone over websockets.
                It sends joystick inputs and flight controller commands to the UAV and receives real-time flight data
                such as GPS location and orientation.
                The controller used is a standard Dualshock 4. The code for the control software is available on <a
                    href="https://github.com/afroware-engineering/UAV-Frontend" class="underline" target="_blank"
                    rel="noopener noreferrer">Github</a>.
            </p>

            <div class="font-semibold mt-1">
                3.3.1 Backend
            </div>

            <p>
                The Pi runs a Flask server. Communication with the flight controller is over USB and Mavlink. I used the
                Python implementation of the library called pymavlink.
                This allows for fetching of flight data and sending of commands to the Pixhawk from a Python script.
                OpenCV and PiCamera2 libraries handle camera frame captures which are
                then streamed to the frontend via multipart http streaming. Everything else is send over with
                Flask-SOCKETIO.
                The backend code is also available on <a href="https://github.com/afroware-engineering/UAV-Backend"
                    class="underline" target="_blank" rel="noopener noreferrer">Github</a>. During flight, I add an
                ngrok layer on top of my server which
                exposes it to the internet.
            </p>

        </div>

        <div class="flex flex-col mt-4">
            <div class="text-lg font-semibold">
                3.4 Object detection
            </div>
            <div class="font-semibold mt-1">
                3.3.1 YOLACT and the TTPLA dataset
            </div>

            <VideoViewer class="cursor-pointer w-full lg:w-8/12"
                src="https://mwalimuproductionstorage.blob.core.windows.net/uav/computer_vision.webm"></VideoViewer>

            <p class="mt-2">
                For the Computer Vision part of the project I integrated a YOLACT model, which is able to do
                real-time instance segmentation on images. The dataset used was the TTPLA public dataset which is
                provided in this <a href="https://arxiv.org/pdf/2010.10032" class="underline" target="_blank"
                    rel="noopener noreferrer">paper</a>.
                It contains over 1000 images of transmission towers and powerlines annotated with detailed masks. Its
                primary focus is on segmenting key components in power line environments:
                transmission towers, poles and cables. This made it particularly well-suited for my project,
                which centers on identifying these features from UAV-captured video streams.
            </p>

            <div class="font-semibold mt-1">
                3.3.1 Deployment
            </div>

            <p>
                I made my own fork of the YOLACT library, customizing it to run inference on raw images stored in memory
                rather than its base form
                which is a command-line tool that reads images from disk.
                For deployment of the model I used Microsoft's Azure Machine Learning cloud service. For inference, I
                used the Standard_E4ds_v4
                compute module with 4 CPU cores, 32 GB of RAM, 150 GB of disk storage and an NVIDIA Tesla T4 GPU.
                To run the model on edge, I set up an inference endpoint on Azure ML that exposes the model through a
                RESTful URL.
                This endpoint accepts image data sent as web requests, processes the images using the deployed YOLACT
                model, and returns the segmented images in the response.
                The fork along with the scripts to run YOLACT on Azure is available <a
                    href="https://github.com/afroware-engineering/yolact" class="underline" target="_blank"
                    rel="noopener noreferrer">here</a>.
            </p>
        </div>

        <div class="text-2xl font-semibold mt-4">
            Challenges
        </div>

        <div class="flex flex-col pl-2">
            <p>
                1. The flying wing design proved difficult to fly, owing to the lack of vertical stabilization and sensitive Center of Gravity.
            </p>
            <p>
                2. Flying the UAV over the internet leads to inaccurate control due to latency.
            </p>
            <p>
                3. Running the model on edge via the Azure API results in slow object detection of 1-2 FPS.
            </p>
            <p>
                4. The model is only 15% accurate due to the small dataset.
            </p>
        </div>

        <div class="text-2xl font-semibold mt-4">
            Recommendations
        </div>

        <div class="flex flex-col pl-2">
            <p>
                1. Switching to a VTOL design will mitigate the issues faced while maintaining the long range inspection objectives of the project.
            </p>
            <p>
                2. Upgrading the onboard computer to a more powerful model to run models locally will improve the real-time object detection framerate.
            </p>
            <p>
                3. Collecting more and better training footage will improve the accuracy of the model.
            </p>
        </div>


        <div class="flex flex-col mb-20">
            <p class="mt-4 text-2xl font-semibold text-white">Author</p>

            <img class="h-16 w-16 rounded ring-1 ring-black"
                src="https://mwalimuproductionstorage.blob.core.windows.net/uav/profile_pic.webp" />

            <div class="text-white mt-1">
                Hi there! My name is Lemayian Brian and I am a 5th year student doing Electronic and Computer
                engineering.
            </div>

            <div class="flex items-center gap-2 mt-2">
                <button @click="openX"
                    class="group flex justify-center items-center h-8 w-8 bg-black ring-1 ring-white hover:ring-blue-500 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="h-4 w-4  fill-white group-hover:fill-blue-500" viewBox="0 0 16 16">
                        <path
                            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                </button>

                <button @click="openLn"
                    class="group flex justify-center items-center h-8 w-8 bg-black ring-1 ring-white hover:ring-blue-500 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="h-4 w-4 fill-white group-hover:fill-blue-500" viewBox="0 0 16 16">
                        <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                </button>

            </div>
        </div>


    </div>
</template>

<script>
import ImageViewer from './UI/ImageViewer.vue';
import VideoViewer from './UI/VideoViewer.vue';

export default {
    data() {
        return {

        }
    },

    components: {
        ImageViewer,
        VideoViewer,
    },

    methods: {
        openX() {
            const Link = 'https://twitter.com/l3mab/';
            window.open(Link, '_blank');
        },

        openLn() {
            const Link = 'https://www.linkedin.com/in/brian-lemayian/';
            window.open(Link, '_blank');
        },
    }

};
</script>
