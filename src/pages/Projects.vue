<template>
    <div style="background-color: #222831; padding: 0; margin: 0; min-height: 100vh;">
      <Header></Header>
  
      <div class="section3">
        <div class="experience">
          <h2>Professional Experience</h2>
          <div class="card">
            <h3>Mobile Application for the Iberis Platform</h3>
            <p><strong>End-of-Studies Internship at Iberis from February 12 to May 12, 2024</strong></p>
            <p>Design and development of user interface</p>
            <p>Ensure integration between front-end and back-end</p>
            <p><strong>Technologies:</strong> Vue.js, Ionic, Laravel, MySQL</p>
          </div>
          <div class="card">
            <h3>E-commerce Website for GAMING</h3>
            <p><strong>Summer Internship at SwiftCode from July 12 to August 12, 2023</strong></p>
            <p>Design and development of user interface</p>
            <p>Integrate an HTML, CSS, and Bootstrap template into React.js</p>
            <p>Establish connection between front-end and back-end</p>
            <p><strong>Technologies:</strong> React.js, Node.js, Express.js, MongoDB, Bootstrap</p>
          </div>
        </div>
        
        <div class="academic-projects">
          <h2>Academic Projects</h2>
          <div class="card">
            <h3>DOUJA E-commerce Website</h3>
            <p>Development of a website for selling artisanal products</p>
            <p>UML design of the website</p>
            <p>Website design</p>
            <p><strong>Technologies:</strong> React.js, Node.js, Firebase, Bootstrap</p>
          </div>
          <div class="card">
            <h3>STYDYNET Website Creation</h3>
            <p>Development of a website for data management</p>
            <p><strong>Technologies:</strong> HTML, CSS, JS, PHP, MySQL</p>
          </div>
          <div class="card">
            <h3>Tic Tac Toe Game</h3>
            <p>Development of a simple Tic Tac Toe game</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Bootstrap</p>
          </div>
          <div class="card">
            <h3>Mobile Application Development</h3>
            <p>Application for managing student absences</p>
            <p>Development of Java and XML modules communicating with Real-Time Database</p>
            <p><strong>Technologies:</strong> Java, XML, Firebase, Android Studio</p> 
           
           
          </div>
        </div>
      </div>
    </div>
</template>

  
  <script setup>
  import Header from '@/components/Header.vue';
  </script>
  
  <style>
  /* General Styles */
  body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #222831;
  }
  
  .section3 {
    display: flex; /* Use Flexbox for layout */
    flex-wrap: wrap; /* Allow items to wrap to the next line */
    padding: 20px 60px;
    gap: 20px; /* Space between columns */
  }
  
  .experience, .academic-projects {
    flex: 1; /* Allow both sections to grow equally */
    min-width: 300px; /* Minimum width for responsiveness */
  }
  
  .experience h2, .academic-projects h2 {
    color: #42b883;
    margin-bottom: 20px;
  }
  
  .card {
    background-color: #393e46;
    border-radius: 10px;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card h3 {
    color: #42b883;
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 16px;
  }
  
  /* Animation for card hover effect */
  .card:hover {
    animation: shake 0.5s ease;
    box-shadow: 0 4px 16px rgba(255, 20, 147, 0.6); /* Pink shadow */
  }
  
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(0); }
    75% { transform: translateX(5px); }
    100% { transform: translateX(0); }
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .section3 {
      padding: 20px 20px;
      flex-direction: column; /* Stack sections vertically on small screens */
    }
  
    .card {
      margin-bottom: 20px;
    }
  }
  </style>
  
  