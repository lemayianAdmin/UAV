<template>
    <div class="flex flex-col w-full h-full p-4 overflow-y-scroll text-white font-rajdhani">

        <div v-for="(update, index) in updates" class="flex flex-col items-center">
            <div class="h-24 w-[2px] my-2 bg-white"></div>

            <div class="flex flex-col border-y-2 border-white rounded backdrop-blur-sm px-1 py-2">
                <div class="text-xl font-semibold mb-1">{{ update.date }}</div>
                <ImageViewer class="cursor-pointer" v-if="update.media_type === 'image'" :src="update.media_url"></ImageViewer>
                <VideoViewer class="cursor-pointer" v-else="update.media_type === 'image'" :src="update.media_url"></VideoViewer>
                <p class="font-semibold text-lg mt-2">{{ update.title }}</p>
                <p>{{ update.text }}</p>
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
            "updates": [
                {
                    "date": "11/02/25",
                    "title": "In the beginning...",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/parts.webp",
                    "text": "I began construction with the airframe which is based on the FT Spear, a flying-wing drone design by Flitetest. They provide the plans and instructions for the build, which I used to make the 3D model. For the actual build, I used Elmer's 3/16 inch thick foamboard sheets. I printed out the plans, transferred designs to the foamboard sheets, and cut them out with a box cutter. Underestimated how long it would take to measure all the parts with precision."
                },
                {
                    "date": "12/02/25",
                    "title": "Coming together",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/assembling_parts.webp",
                    "text": "After making all the individual parts, I began assembling the airframe. The drone has a simple design, and Flitetest provides an instructional video for assembly. Lots of glue and patience were used to put the parts together."
                },
                {
                    "date": "13/02/25",
                    "title": "Airframe",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/drone_airframe.webp",
                    "text": "I completed most of the bodywork. First impression is that the drone looks cool, which is mainly why I chose this airframe. Almost looks stealthy—maybe it is. Fixing panel gaps, detailing, wrapping, and painting will follow later. I want to get started on avionics first."
                },
                {
                    "date": "15/02/25",
                    "title": "Flight controller",
                    "media_type": "video",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/pixhawk_blender.webm",
                    "text": "The fun part now begins: electronics and software. Started by getting familiar with the flight controller, a Pixhawk 2.4.8. It's a robust little thing and will handle the drone's flight and navigation."
                },
                {
                    "date": "23/02/25",
                    "title": "Raspberry and camera",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/raspberry_setup.webp",
                    "text": "I spent the day setting up a Raspberry Pi 4. I chose one with 4GB RAM, which is sufficient for the software stack running on the drone. Also set up a camera for the Pi."
                },
                {
                    "date": "24/03/25",
                    "title": "Core Avionics",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/drone_stream.webp",
                    "text": "The idea is to control the drone from my laptop. I considered using radio telemetry but ultimately chose to link to the drone via the internet. The Raspberry Pi 4 is connected via a 4G modem with a local SIM card. The Pi runs a Flask webserver exposed via ngrok, enabling two-way communication from any browser. This is convenient as a web developer, lowers cost, and increases range."
                },
                {
                    "date": "27/03/25",
                    "title": "Software",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/drone_ui.webp",
                    "text": "Since communication is over the internet, the frontend can be built with JavaScript. I used Vue.js for the frontend because of its fast prototyping capabilities. The backend is a Flask webserver that streams the video feed, flight data, and allows input to the drone."
                },
                {
                    "date": "4/03/25",
                    "title": "More software",
                    "media_type": "video",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/drone_ui.webm",
                    "text": "Most core software is now complete. I can stream full HD video from the camera. Flight telemetry like orientation, speed, and altitude can be transmitted online. I also added flight navigation basics, 3D terrain maps, and mission waypoint planning. Next, I’ll be adding flight control surfaces and propulsion."
                },
                {
                    "date": "11/03/25",
                    "title": "Power",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/flight_control.webp",
                    "text": "The drone is powered by an 11.1V 3S LiPo battery. The power system is structured for redundancy: Pixhawk is powered by a 5V 2.3A BEC, in series with a 30A motor speed controller that includes a 5V 2A BEC powering the servo rail. A separate 5V 3A UBEC powers the Raspberry Pi. This setup ensures power redundancy and prevents component damage."
                },
                {
                    "date": "25/03/25",
                    "title": "3D printing",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/3d_parts.webp",
                    "text": "Back to the airframe. I opted to 3D print some of the parts instead of making them out of plywood for a cleaner look. I did this for the motor mount and the control horns on the elevons. I went with black plastic to contrast the white airframe. Looks like a UFO."
                },
                {
                    "date": "30/03/25",
                    "title": "I really like software",
                    "media_type": "image",
                    "media_url": "https://mwalimuproductionstorage.blob.core.windows.net/uav/software_2.0.webp",
                    "text": "Spent the day coding the frontend. Cleaned it up by adding tabs and necessary UI to display flight data. Also added an AI tab for configuring the drone’s AI features like object recognition."
                }
            ]
        }
    },

    components: {
        ImageViewer,
        VideoViewer,
    }

};
</script>
