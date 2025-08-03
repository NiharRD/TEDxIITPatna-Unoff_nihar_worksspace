<template>
    <div class="main-container">
        <div class="description-warning">
            <div class="description">
                Submission {{ keyword }}
            </div>
            <div class="warning">
                {{ description }}
            </div>
        </div>
        <div class="button" @click="$emit('close')">
            {{ buttonText }}
        </div>
    </div>
</template>

<script setup>
defineProps(['keyword', 'description', 'buttonText'])
defineEmits(['close'])
</script>

<style scoped>
.main-container{
    width: 90%; /* Use percentage for width to allow shrinking */
    max-width: 500px; /* Keep a max-width for larger screens */
    border: 1.5px solid rgba(255, 255, 255, 1);
    background-color: rgba(30, 5, 5, 0.97);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem; 
    padding: 2rem;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%; /* Changed from 75% for proper horizontal centering */
    transform: translate(-50%, -50%); /* Adjusted for true centering */
    z-index: 10;
}
.description-warning{
    font-family: 'EB Garamond', serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 2%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 1);
}
.description {
    font-weight: bold;
    font-size: 24px;
}
.button{
    max-width: 150px;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 2%;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(137, 17, 17, 1);
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.button:hover {
    background-color: #A61414; 
}

/* Media query for smaller screens */
@media (max-width: 600px) {
    .main-container {
        padding: 1.5rem; /* Reduce padding on small screens */
    }
    .description {
        font-size: 20px; /* Adjust font size */
    }
    .description-warning {
        font-size: 16px; /* Adjust font size */
    }
}
</style>