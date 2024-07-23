<template>
    <div style="background-color: #222831; padding: 0; margin: 0; height: 100vh;">
      <Header></Header>

      <div class="pdf-viewer">
        <h2>My CV</h2>
        <iframe
          :src="cv"
          width="100%"
          height="90%"
          style="border: none;"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
 import cv from '../../public/pdf/AyoubKhezami-.pdf' 
 import Header from '@/components/Header.vue'  
 
  </script>
  
  <style>
  .pdf-viewer {
    padding: 20px 60px;
    color: white;
    height: calc(100vh - 60px); /* Adjust to leave space for header */
    overflow: auto;
  }
  
  .pdf-viewer h2 {
    color: #42b883;
  }
  </style>
  