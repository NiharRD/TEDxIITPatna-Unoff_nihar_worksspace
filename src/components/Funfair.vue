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
</style>