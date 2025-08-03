<template>
    <div class="main-container">
        <div class="video-container">
            <img src="https://placehold.co/1200x675/000000/FFF?text=TEDx+Video" alt="tedx-video" class="video">
        </div>
        <div class="form-other-container">
            <div class="heading-container">
                <p>Any questions or remarks? Just leave us a message!</p>
            </div>
            <div class="partner-contactus-form">
                <div class="partner-container">
                    <div class="description-1">
                        Have an idea to collaborate or support our next edition?
                    </div>
                    <div class="description-2">
                        <span class="main-word">TEDxIITPatna</span> thrives on meaningful partnerships — let’s create something impactful together.
                    </div>
                    <div class="button-container">Partner with Us</div>
                </div>
                <div class="line-container"></div>

                <form class="form-container" @submit.prevent="handleSubmit">
                    <div class="common-container">
                        <label for="name" class="common-label">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" class="custom" v-model="name">
                    </div>
                    <div class="common-container">
                        <label for="email" class="common-label">Email</label>
                        <input type="email" name="email" placeholder="Enter your e-mail address" class="custom" v-model="email">
                    </div>
                    <div class="text-area">
                         <textarea name="message" class="custom-textarea" placeholder="Leave your message here..." v-model="suggestion"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                    
                    <AlertBox 
                        v-if="opendialog" 
                        :keyword="submission.keyword" 
                        :description="submission.description" 
                        :buttonText="submission.error ? 'Go Back' : 'Back to Home'"
                        @close="opendialog = false"
                    />
                </form>
            </div>
        </div>
    </div>    
</template>

<script setup>
import AlertBox from './AlertBox.vue';
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const suggestion = ref('');

const submission = ref({ error: false, description: "", keyword: "" });
const opendialog = ref(false);

const handleSubmit = () => {
    if (name.value.trim() === "") {
        submission.value = { error: true, description: "Please write your name!", keyword: "Error" };
        opendialog.value = true;
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        submission.value = { error: true, description: "Please write your email!", keyword: "Error" };
        opendialog.value = true;
        return;
    } else if (!emailRegex.test(email.value)) {
        submission.value = { error: true, description: "Please enter a valid email address.", keyword: "Error" };
        opendialog.value = true;
        return;
    }
    const data = { name: name.value, email: email.value, suggestion: suggestion.value };
    console.log("Form data submitted:", data);
    submission.value = {
        error: false,
        keyword: "Successful",
        description: "We’ve received your query. Our team will be in touch shortly."
    };
    opendialog.value = true;
    name.value = '';
    email.value = '';
    suggestion.value = '';
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
    
    .video-container{
        width: 100%;
        aspect-ratio: 16 / 9;
        max-height: 80vh;
        background-color: #000;
    }
    .video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .form-other-container{
        background-image: linear-gradient(to top, #4c0e0e, #000000 75%);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 3rem; 
    }
    .heading-container{
        font-family: 'Outfit';
        max-width: 50rem;
        text-align: center;
        color: white;
        letter-spacing: 1%;
        font-size: 4rem;
        padding: 2rem;
    }
    .partner-contactus-form{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }
    .line-container {
        width: 2px;
        align-self: stretch;
        background-image: linear-gradient(
            to bottom, 
            rgba(255, 255, 255, 0.8),
            rgba(128, 128, 128, 0.3)
        );
        border-radius: 2px;
    }
    .partner-container{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 4rem;
    }
    .description-1{
        font-family: 'EB_Garamond';
        color: white;
        text-align: center;
        font-size: 2rem;
    }
    .description-2{
        font-family: 'EB_Garamond';
        color: white;
        text-align: center;
        font-size: 2rem;
    }
    .main-word{
        color: red;
        font-family: 'EB_Garamond';
    }
    .button-container{
        background-color: rgba(137, 17, 17, 1);
        color: white;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: 2%;
        font: 'Outfit';
        font-size: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 175px;
        padding: 1rem;
        text-align: center;
        font-style: Medium;
        border-radius: 10px;
        margin-top: 3rem;
        cursor: pointer;
    }
    .form-container{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        position: relative; 
    }
    .common-container{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: 50px;
    }
    .common-label{
        font-family: 'Outfit';
        font-weight: 500;
        font-size: 25px;
        line-height: 100%;
        letter-spacing: 2%;
        text-align: center;
        color: white;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
    .custom{
        border: none;
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        font-family: 'Outfit';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 2%;
        text-align: center;
        background-color: rgba(134, 133, 133, 0.7);
        color: white;
        height: 80%;
        width: 100%;
        max-width: 300px;
        border-radius: 5px;
    }
    .custom:focus{
        outline: none;
        box-shadow: none;
        border: none;
    }
    .custom::placeholder{
        color: white;
        font-family: 'Outfit';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 2%;
        text-align: center;
    }
    .text-area{
        width: 100%;
        max-width: 402px;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .custom-textarea{
        border: none;
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(134, 133, 133, 0.85);
        color: white;
        font-family: 'Outfit';
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 2%;
        text-align: left;
        font-weight: 400;
        border-radius: 5px;
        padding: 1rem;
        resize: none;
    }
    .custom-textarea::placeholder{
        font-family: 'Outfit';
        color: white;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 2%;
        text-align: left;
        font-weight: 400;
    }
    button{
        color: rgba(255, 255, 255, 1);
        font-family: 'Outfit';
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 2%;
        text-align: center;
        padding: 1rem;
        background-color: rgba(137, 17, 17, 1);
        box-shadow: none;
        cursor: pointer;
        width: 150px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        outline: none;
        border: none;
        margin-top: 0.5rem;
    }

    @media (max-width: 768px) {
        .heading-container {
            font-size: 1.5rem;
            padding: 2rem 1rem;
        }
        .partner-contactus-form {
            flex-direction: column;
            gap: 3rem;
            width: 100%;
        }
        .form-container {
            order: 1;
            width: 90%;
            max-width: 500px;
        }
        .line-container {
            display: none;
        }
        .partner-container {
            order: 2;
            width: 90%;
            max-width: 500px;
            padding: 1rem;
        }
    }
</style>