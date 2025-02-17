<template>
    <div class="flex w-full h-full p-4 overflow-y-scroll text-white font-rajdhani">

            <v-timeline line-color="white" line-thickness="0.5">
                <v-timeline-item>
                    <div class="space-y-2">
                        <div class="text-xl font-semibold">11/02/25</div>
                        <img src="/build1.webp" class="rounded ring-1 ring-white">
                        <p class="">
                            I began construction with the airframe which is based on the <a href="https://www.flitetest.com/articles/ft-spear-build" class="underline"  target="_blank" rel="noopener noreferrer">FT Spear</a>, a flying-wing drone design by Flitetest.
                            They provide the plans and instructions for the build, which I used to make the 3d model. For the actual build,  I used Elmer's 3/16 inch thick foamboard sheets.
                            I printed out the plans, used the scale to transfer designs to the foamboard sheets and cut them out with a box cutter. Underestimated how long it would take to
                            measure out all the parts and scale them manually with precision and ended up crashing out a couple of times.
                        </p>
                    </div>
                </v-timeline-item>

                <v-timeline-item>
                    <div class="space-y-2">
                        <div class="text-xl font-semibold">12/02/25</div>
                        <img src="/build2.webp" class="rounded ring-1 ring-white">
                        <p class="">
                            After I was done making all the individual parts I got to assembling the airframe. The drone has a simple design and Flitetest provides
                            an instructional <a href="https://www.flitetest.com/articles/ft-spear-build" class="underline"  target="_blank" rel="noopener noreferrer">video</a> for assembling it. Lots of glue and patience were used to put the parts together.
                        </p>
                    </div>
                </v-timeline-item>

                <v-timeline-item>
                    <div class="space-y-2">
                        <div class="text-xl font-semibold">13/02/25</div>
                        <img src="/build3.webp" class="rounded ring-1 ring-white">
                        <p class="">
                            I completed most of the body work. First impression is that the drone looks cool, which is mainly why I chose this airframe. Almost looks stealthy, maybe it is. Fixing panels gaps, detailing, wrapping and painting will follow later. I want to get started on Avionics first.
                        </p>
                    </div>
                </v-timeline-item>

                <v-timeline-item>
                    <div class="space-y-2">
                        <div class="text-xl font-semibold">15/02/25</div>
                        <video controls="true" src="/pixhawk.mp4" class="rounded ring-1 ring-white"></video>
                        <p class="">
                            The fun part now begins; the electronics and software. Started by getting familiar with the flight controller, a Pixhawk 2.4.8. It's a robust little thing and will handle the drone's flight and navigation.
                        </p>
                    </div>
                </v-timeline-item>

            </v-timeline>
    
    </div>
</template>

