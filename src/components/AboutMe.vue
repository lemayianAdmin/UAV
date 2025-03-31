<template>
    <div class="flex flex-col items-start px-2 text-white text-start overflow-auto pb-20">
        <p class="text-lg font-semibold text-white">Project abstract</p>
        <p class="">
            Kenya has a large and widespread power distribution network connecting almost all corners of the country to
            the national grid. This vastness has brought various challenges in maintenance of this network. Issues
            include irregular maintenance due to the labour required, complicated logistics due to terrain and economic
            losses resulting from delay in diagnosing problems.
        </p>

        <p class="mt-2">
            This project aims to develop a low-cost autonomous drone to assist with power line inspections. The
            camera-enabled drone will fly autonomously along pre-set flight routes over the power line, using AI object
            detection to visually detect anomalies. Issues such as missing or collapsed cables will be identified,
            classified and marked for operators to further analyse.
        </p>

        <p class="mt-2">
            By enabling rapid detection of issues in the power grid, this system could tackle issues such as cost and
            labour reductions, reduce repair delays and prolonged outages. This proactive approach would also be
            efficient and reduce the need for current usage of specialized gas vehicles and helicopters, directly
            supporting Kenya Sustainable Development Goals.
        </p>

        <p class="mt-4 text-lg font-semibold text-white">Author</p>
        
        <img class="h-16 w-16 rounded ring-1 ring-black"
            src="https://mwalimuproductionstorage.blob.core.windows.net/uav/profile_pic.webp" />

        <div class="text-white mt-1">
            Hi there! My name is Brian Lemayian and I am a 5th year student doing Electronic and Computer
            engineering. This website documents my senior year project.
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
</template>

<script>
export default {
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