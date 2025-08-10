<template>
    <div class="main-image-header-container">
        <img :src="image"/>
    </div>
    <div class="main-container">
        <div class="description-container">
            <p>Every year, the TEDxIITPatna journey kicks off with the much-awaited Funfair — a spirited, student-run tradition. The campus comes alive with interactive play stops, creative games, and vibrant photo booths, all set up by IIT Patna students. With music, laughter, and a lively crowd, the Funfair blends fun and creativity, setting the perfect tone for the inspiring TEDx experience ahead!</p>
        </div>
        <div class="memories-images-container">
            <div class="memories-container">
                Memories We Made 
            </div>
            <div class="images-container">
                <div class="image1"></div>
            </div>
        </div>
        
        <!-- Collage Section -->
        <div class="collage-container">
            <div class="collage-grid">
                <!-- Left Column -->
                <div class="collage-block magenta top-left"></div>
                <div class="collage-block magenta bottom-left"></div>
                <div class="collage-block red bottom-left-wide"></div>
                
                <!-- Middle Column -->
                <div class="collage-block magenta top-middle"></div>
                <div class="collage-block red middle-bottom"></div>
                <div class="collage-block yellow top-yellow"></div>
                <div class="collage-block yellow bottom-yellow"></div>
                
                <!-- Right Column -->
                <div class="collage-block red top-right"></div>
                <div class="collage-block red middle-right"></div>
                <div class="collage-block red bottom-right-tall"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import image from '../assets/Funfair_images/fun_fair.svg'
</script>

<style>
    .main-image-header-container{
        width: 100%;
    }
    .main-image-header-container img{
        width: 100%;
        height: 100%;
    }
    .main-container{
        background-color: black;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        justify-content: center;
        align-items: center;
        margin-top: -0.3rem;
    }
    .description-container{
        color: white;
        font-family: 'EB Garamond';
        font-weight: 400;
        font-size: 29px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: center;
        max-width: 1200px;
        margin-top: 3rem;
    }
    .memories-images-container{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }
    .memories-container{
        font-family: 'EB Garamond';
        color: rgba(206, 0, 0, 1);
        font-weight: 500;
        font-style: Medium;
        font-size: 60px;
        line-height: 100%;
        letter-spacing: 2%;
        text-align: left;
        margin-left: 4rem;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #413030;
    }
    ::-webkit-scrollbar-thumb {
        background: #ef4444;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #dc2626;
    }
    
    /* Collage Styles */
    .collage-container {
        width: 100%;
        max-width: 1200px;
        margin: 2rem auto;
        padding: 0 2rem;
    }
    
    .collage-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(6, 1fr);
        gap: 2px;
        height: 600px;
        background-color: black;
        padding: 2px;
        border-radius: 8px;
    }
    
    .collage-block {
        border: 1px solid black;
        border-radius: 4px;
    }
    
    /* Left Column */
    .top-left {
        grid-row: 1 / 4;
        grid-column: 1;
        background-color: #FF00FF; /* Magenta */
    }
    
    .bottom-left {
        grid-row: 4 / 5;
        grid-column: 1;
        background-color: #FF00FF; /* Magenta */
    }
    
    .bottom-left-wide {
        grid-row: 5 / 7;
        grid-column: 1;
        background-color: #FF0000; /* Red */
    }
    
    /* Middle Column */
    .top-middle {
        grid-row: 1 / 4;
        grid-column: 2;
        background-color: #FF00FF; /* Magenta */
    }
    
    .middle-bottom {
        grid-row: 4 / 5;
        grid-column: 2;
        background-color: #FF0000; /* Red */
    }
    
    .top-yellow {
        grid-row: 5 / 6;
        grid-column: 2;
        background-color: #FFFF00; /* Yellow */
    }
    
    .bottom-yellow {
        grid-row: 6 / 7;
        grid-column: 2;
        background-color: #FFFF00; /* Yellow */
    }
    
    /* Right Column */
    .top-right {
        grid-row: 1 / 3;
        grid-column: 3;
        background-color: #FF0000; /* Red */
    }
    
    .middle-right {
        grid-row: 3 / 4;
        grid-column: 3;
        background-color: #FF0000; /* Red */
    }
    
    .bottom-right-tall {
        grid-row: 4 / 7;
        grid-column: 3;
        background-color: #FF0000; /* Red */
    }
    
    /* Responsive Styles */
    
    /* Tablet Styles */
    @media (max-width: 1024px) {
        .description-container {
            font-size: 24px;
            max-width: 900px;
            margin: 2rem 1rem;
        }
        
        .memories-container {
            font-size: 48px;
            margin-left: 2rem;
        }
        
        .collage-container {
            max-width: 900px;
            padding: 0 1rem;
        }
        
        .collage-grid {
            height: 500px;
        }
    }
    
    /* Mobile Styles */
    @media (max-width: 768px) {
        .main-container {
            gap: 2rem;
            padding: 0 1rem;
        }
        
        .description-container {
            font-size: 20px;
            margin: 1.5rem 0;
            line-height: 120%;
        }
        
        .memories-container {
            font-size: 36px;
            margin-left: 1rem;
            text-align: center;
        }
        
        .memories-images-container {
            align-items: center;
        }
        
        .collage-container {
            max-width: 100%;
            padding: 0 0.5rem;
            margin: 1rem auto;
        }
        
        .collage-grid {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: repeat(8, 1fr);
            height: 400px;
            gap: 1px;
        }
        
        /* Adjust collage block sizes for mobile */
        .top-left {
            grid-row: 1 / 5;
        }
        
        .bottom-left {
            grid-row: 5 / 6;
        }
        
        .bottom-left-wide {
            grid-row: 6 / 9;
        }
        
        .top-middle {
            grid-row: 1 / 5;
        }
        
        .middle-bottom {
            grid-row: 5 / 6;
        }
        
        .top-yellow {
            grid-row: 6 / 7;
        }
        
        .bottom-yellow {
            grid-row: 7 / 9;
        }
        
        .top-right {
            grid-row: 1 / 3;
        }
        
        .middle-right {
            grid-row: 3 / 4;
        }
        
        .bottom-right-tall {
            grid-row: 4 / 9;
        }
    }
    
    /* Small Mobile Styles */
    @media (max-width: 480px) {
        .description-container {
            font-size: 18px;
            margin: 1rem 0;
        }
        
        .memories-container {
            font-size: 28px;
            margin-left: 0.5rem;
        }
        
        .collage-grid {
            height: 300px;
            gap: 1px;
        }
        
        .collage-container {
            padding: 0 0.25rem;
        }
    }
</style>