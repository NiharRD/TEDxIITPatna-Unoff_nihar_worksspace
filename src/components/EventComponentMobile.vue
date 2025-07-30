<template>
    <div class="event-container-individual">
        <div class="year-container">
            {{ year }}
        </div>

        <div class="image-container">
            <img :src="image" alt="Event Image" />
        </div>

        <div class="explore-container">
            Explore &gt;&gt;
        </div>
    </div>
</template>

<script setup>
// Props for the component. Note: 'image-title' becomes 'imageTitle' in JS/script.
defineProps({
    year: String,
    image: String,
});
</script>

<style scoped>
    /* Add the 'Righteous' font if you haven't already in your main CSS/index.html */
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

    .event-container-individual {
        position: relative; /* This is crucial for positioning the child elements */
        width: 150px;
        height: 196px;
        border: 2.5px solid white;
        margin: 2rem;
        background-color: #000; /* A background color is good practice */
        font-family: 'Righteous', sans-serif; /* Set default font */
        overflow: visible; /* Allows year badge to display outside the border */
    }

    .image-container {
        position: absolute;
        top: -20px; /* Pushes the image up to overlap the top border */
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* 'contain' fits the entire image; 'cover' would fill the space */
    }

    .year-container {
        position: absolute;
        top: -14px;  /* Position it above the top border */
        left: -12px; /* Position it past the left border */
        z-index: 10; /* Ensure it appears on top of the main image */
        padding: 2px 12px; /* Use padding for flexible sizing */
        color: white;
        font-size: 18px;
        background-color: #C62828; /* A nice shade of red */
        border-radius: 5px;
        transform: rotate(-8deg);
    }

    .explore-container {
        position: absolute;
        bottom: 15px; /* Position from the bottom */
        right: 15px;  /* Position from the right */
        font-size: 12px;
        color: white;
        cursor: pointer;
    }

    .image-title-container {
        position: absolute;
        bottom: 55px; /* Position from the bottom */
        left: 50%;    /* Center the container... */
        transform: translateX(-50%); /* ...with this transform trick */
        width: 75%; /* Control the width of the title image */
    }

    .image-title-container img {
        width: 100%; /* Make the image fill its container */
        display: block; /* Removes any extra space below the image */
    }
</style>