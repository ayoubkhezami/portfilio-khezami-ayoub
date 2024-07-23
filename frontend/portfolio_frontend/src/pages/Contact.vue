<template>
    <div style="background-color: #222831; padding: 0; margin: 0; height: 100vh;">
      <Header></Header>
  
      <div class="contact-info">
        <h2>Contact Information</h2>
        <div class="cards-container">
          <div class="card">
            <img :src="github" alt="GitHub Logo" class="card-logo">
            <h3>GitHub</h3>
            <a :href="githubUrl" target="_blank">{{ githubUrl }}</a>
          </div>
          <div class="card">
            <img :src="linkedin" alt="LinkedIn Logo" class="card-logo">
            <h3>LinkedIn</h3>
            <a :href="linkedinUrl" target="_blank">{{ linkedinUrl }}</a>
          </div>
          <div class="card">
            <img :src="gmail" alt="Email Logo" class="card-logo">
            <h3>Email</h3>
            <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a>
          </div>
          <div class="card">
            <img :src="phone" alt="Phone Logo" class="card-logo">
            <h3>Phone</h3>
            <span style="color: #42b883;">+216 54 49 75 78</span>
          </div>
        </div>
      </div>
  
      <div class="contact-container">
        <div class="circle" @click="toggleForm">
          <span>Tap here to contact me</span>
        </div>
  
        <!-- Transition wrapper for the contact form -->
        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <div class="contact-form" v-if="showForm">
            <h2>Contact Me</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" v-model="fullname" required />
              </div>
              <div class="form-group">
                <label for="formEmail">Email:</label>
                <input type="email" id="formEmail" v-model="email" required />
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" required></textarea>
              </div>
              <button type="submit">Submit</button>
              <button type="reset" style="margin-left: 4px;"@click="toggleForm" id="btn-close">close</button>
            </form>
          </div>
        </transition>
      </div>
    </div> 
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '@/components/Header.vue'; 
  import github from '../../public/images/github.jpg'
  import gmail from '../../public/images/gmail.png'
  import linkedin from '../../public/images/linkedin.png'
  import phone from '../../public/images/phone.png' 
  import axios from 'axios';
  import emailjs from 'emailjs-com';
  import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

  const githubUrl = 'https://github.com/ayoubkhezami';
  const linkedinUrl = 'https://www.linkedin.com/in/khezami-ayoub/';
  const contactEmail = 'khezamiayoub1@gmail.com';
  
  const fullname = ref('');
  const email = ref('');
  const message = ref('');
  const showForm = ref(false);
  
  const toggleForm = () => {
    showForm.value = !showForm.value;
  };
  
  const handleSubmit = async () => { 
    console.log(import.meta.env.SERVICE_ID);
    console.log(fullname.value,email.value,message.value);
    const response =await emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,{name : fullname.value,email:email.value,message:message.value},import.meta.env.VITE_USER_ID);
    console.log(response); 
    if(response)
  {
  toast.success("Your message is sent successfully ! ", {
    position: toast.POSITION.TOP_RIGHT,
  });
  }
  };
  </script>
  
  <style scoped>
/* General Styles */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #222831;
}

.contact-info {
  padding: 20px 60px;
  color: white;
}

.contact-info h2 {
  color: #42b883;
  margin-bottom: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Center the cards horizontally */
}

.card {
  background-color: #393e46;
  border-radius: 10px;
  padding: 20px;
  color: white;
  min-width: 250px; /* Fixed width for each card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.card-logo {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.card a {
  color: #42b883;
  text-decoration: none;
}

.contact-container {
  position: relative;
}
 
#btn-close{
    background-color: rgb(168, 28, 28);
}
.circle {
  background-color: #42b883;
  color: white;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.circle:hover {
  animation: shake 0.5s;
  box-shadow: 0 4px 15px pink;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
    box-shadow: 0 4px 15px pink;
  }
  50% {
    transform: translateX(5px);
    box-shadow: 0 4px 15px pink;
  }
  75% {
    transform: translateX(-5px);
    box-shadow: 0 4px 15px pink;
  }
}

.card:hover {
  animation: shake 0.5s ease;
  box-shadow: 0 4px 16px rgba(255, 20, 147, 0.6); /* Pink shadow */
}

.contact-form {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 500px;
  background-color: #393e46;
  color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;
}

/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Form and button styles */
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  color: white;
  margin-bottom: 5px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.form-group textarea {
  height: 150px;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #36a374;
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .circle {
    width: 80px; 
    height: 80px;
    font-size: 12px; /* Adjust font size as needed */
  }

  .contact-form {
    width: 90%;
    bottom: 20px;
    right: 10px; /* Adjust position for smaller screens */
    transform: translateY(0);
  }
}
</style>
