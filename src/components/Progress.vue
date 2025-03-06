<template>
    <div class="flex w-full h-full p-4 overflow-y-scroll text-white font-rajdhani">

        <v-timeline line-color="white" line-thickness="0.5">
            <v-timeline-item>
                <template v-slot:opposite>
                    <div>
                        <div class="text-xl font-semibold">11/02/25</div>
                        <p class="font-semibold text-lg">In the beginning</p>
                        <p>
                            I began construction with the airframe which is based on the <a
                                href="https://www.flitetest.com/articles/ft-spear-build" class="underline"
                                target="_blank" rel="noopener noreferrer">FT Spear</a>, a flying-wing drone design by
                            Flitetest.
                            They provide the plans and instructions for the build, which I used to make the 3d model.
                            For
                            the actual build,
                            I used Elmer's 3/16 inch thick foamboard sheets.
                            I printed out the plans, used the scale to transfer designs to the foamboard sheets and cut
                            them
                            out with a box
                            cutter. Underestimated how long it would take to
                            measure out all the parts and scale them manually with precision and ended up crashing out a
                            couple of times.
                        </p>
                    </div>
                </template>

                <div class="">
                    <img src="https://mwalimuproductionstorage.blob.core.windows.net/uav/parts.webp" class="rounded ring-1 ring-white">
                </div>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    <div>
                        <div class="text-xl font-semibold">12/02/25</div>
                        <p class="font-semibold text-lg">Coming together</p>
                        <p class="">
                            After I was done making all the individual parts I got to assembling the airframe. The drone
                            has
                            a simple
                            design and Flitetest provides
                            an instructional <a href="https://www.flitetest.com/articles/ft-spear-build"
                                class="underline" target="_blank" rel="noopener noreferrer">video</a> for assembling it.
                            Lots of glue and
                            patience were
                            used to put the parts together.
                        </p>
                    </div>
                </template>

                <div class="mt-20">
                    <img src="https://mwalimuproductionstorage.blob.core.windows.net/uav/assembling_parts.webp" class="rounded ring-1 ring-white">
                </div>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    <div>
                        <div class="text-xl font-semibold">13/02/25</div>
                        <p class="font-semibold text-lg">Airframe</p>
                        <p class="">
                            I completed most of the body work. First impression is that the drone looks cool, which is
                            mainly why I
                            chose this airframe. Almost looks stealthy, maybe it is. Fixing panels gaps, detailing,
                            wrapping
                            and
                            painting will follow later. I want to get started on Avionics first.
                        </p>
                    </div>
                </template>

                <div class="mt-20">
                    <img src="https://mwalimuproductionstorage.blob.core.windows.net/uav/drone_airframe.webp" class="rounded ring-1 ring-white">
                </div>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    <div>
                        <div class="text-xl font-semibold">15/02/25</div>
                        <p class="font-semibold text-lg">Flight controller</p>
                        <p class="">
                            The fun part now begins; the electronics and software. Started by getting familiar with the
                            flight
                            controller, a Pixhawk 2.4.8. It's a robust little thing and will handle the drone's flight
                            and
                            navigation.
                        </p>
                    </div>
                </template>

                <div class="mt-20">
                    <video controls="true" src="https://mwalimuproductionstorage.blob.core.windows.net/uav/pixhawk_blender.webm" class="rounded ring-1 ring-white"></video>
                </div>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    <div>
                        <div class="text-xl font-semibold">23/02/25</div>
                        <p class="font-semibold text-lg">Raspberry and camera</p>
                        <p>
                            I spent the day setting up a Raspberry Pi 4. I chose one with 4GB RAM which is sufficient for the software 
                            stack that will running in the drone. Also set up a camera for the Pi.
                        </p>
                    </div>
                </template>

                <div class="mt-20">
                    <img src="https://mwalimuproductionstorage.blob.core.windows.net/uav/raspberry_setup.webp" class="rounded ring-1 ring-white">
                </div>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    <div>
                        <div class="text-xl font-semibold">24/03/25</div>
                        <p class="font-semibold text-lg">Core Avionics</p>
                        <p>
                            The idea is to control the drone from my laptop. When I was planning this part out, I considered
                            using radio telemetry but ultimately chose to link to the drone via the intenet. The Raspberry Pi 4
                            is connected to the internet via a 4G modem with a local simcard. The Pi runs a python Flask webserver which 
                            is exposed to the intenet via the tunneler ngrok. This allows for two communication with the Pi from any device
                            with a browser and this is very convinient as a web developer, lowers the build cost and increases the communication range.
                        </p>
                    </div>
                </template>

                <div class="mt-20">
                    <img src="https://mwalimuproductionstorage.blob.core.windows.net/uav/drone_stream.webp" class="rounded ring-1 ring-white">
                </div>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    <div>
                        <div class="text-xl font-semibold">27/03/25</div>
                        <p class="font-semibold text-lg">Software</p>
                        <p>
                            Since communication is over the internet, the frontend can be made with (sigh) Javascript. I used Vue.js for 
                            the frontend because the framework allows for very fast and easy prototyping. The backend is a python Flask webserver 
                            that streams the video feed, flight data and also allows for input to the drone.
                        </p>
                    </div>
                </template>

                <div class="mt-20">
                    <img src="https://mwalimuproductionstorage.blob.core.windows.net/uav/drone_ui.webp" class="rounded ring-1 ring-white">
                </div>
            </v-timeline-item>

            <v-timeline-item>
                <template v-slot:opposite>
                    <div>
                        <div class="text-xl font-semibold">4/03/25</div>
                        <p class="font-semibold text-lg">More software</p>
                        <p>
                            Most of the core software is now complete. I can stream full HD video from the camera. Flight telemetry like drone orientation,
                            speed and altitude can be transmitted over the internet. I also added flight navigation basics, 3D terrain maps and flight planning.
                            This will allow for mission waypoints to be set for the autopilot. Also added flight mode selectors for both autonomuous and manual flight.
                            Next I'll be adding the flight control surfaces and propulsion.
                        </p>
                    </div>
                </template>

                <div class="mt-20">
                    <video controls="true" src="https://mwalimuproductionstorage.blob.core.windows.net/uav/drone_ui.webm" class="rounded ring-1 ring-white"></video>
                </div>
            </v-timeline-item>

        </v-timeline>

    </div>
</template>
