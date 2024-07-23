<template>
    <div class="container">
      <div class="logo">
        <router-link class="link-logo" to="/">Kezami Ayoub</router-link>
        <div class="menu-icon" @click="toggleMenu">
          &#9776; Menu
        </div>
      </div> 
      
      <div class="menus">
        <div class="links" :class="{ show: menuOpen }">
          <router-link class="link" to="/aboutme">About Me</router-link>
          <router-link class="link" to="/projects">My Projects</router-link>
          <router-link class="link" to="/contacts">Contacts</router-link>
          <router-link class="link" to="/cv">Curriculum Vitae</router-link>
        </div>
       
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const menuOpen = ref(false);
  
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  </script>
  
  <style>
  .container {
  height: 100px;
  display: flex;
  justify-content: space-between; /* Adjusted to space out items */
  align-items: center; /* Center items vertically */
  padding: 0 20px; 
  background-color: #222831; 
  top: 0; 
  position: relative; /* Ensure proper positioning for mobile */
}

.logo {
  color: white;
  font-size: 50px;
  font-weight: 900;
  font-family: "Edu AU VIC WA NT Hand", cursive;
  height: 50px;
}

.link-logo {
  text-decoration: none; 
  color: white;
}

.menus {
  display: flex;
  align-items: center;
}

.links {
  display: flex; 
  height: 50px;
}

.link {
  color: white;
  text-decoration: none;
  margin-left: 18px;
  font-size: 20px;
  margin-top: 20px;
  font-family: "Edu AU VIC WA NT Hand", cursive;
  height: 50px;
}

/* Hide menu icon and links on larger screens */
.menu-icon {
  display: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
}

/* Mobile and Tablet Styles */
@media only screen and (max-width: 1024px) {
  .container {
    flex-direction: column; /* Stack logo and menu vertically */
    align-items: flex-start;
    padding: 10px; /* Adjust padding for mobile */
  }

  .logo {
    font-size: 40px;
    text-decoration: none; 
    color: white;
  }

  .menus {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative; /* Ensure proper positioning for the dropdown */ 
    background-color: #222831;
  }

  .menu-icon {
    display: block; 
    margin-left: auto; /* Align the menu icon to the right */
    margin-bottom: 10px; /* Add space below the menu icon */
  }

  .links {
    display: flex;
    flex-direction: column;
    width: 100%; 
    background-color: #222831; /* Match background color */
    padding: 10px 0; /* Add padding for better appearance */
    position: absolute; /* Position absolutely to overlay content */
    top: 60px; /* Adjust based on menu icon size */
    left: 0;
    transform: translateY(-100%); /* Start off-screen */
    opacity: 0; /* Start hidden */
    transition: transform 0.3s ease, opacity 0.3s ease; /* Smooth slide and fade */
    z-index: 1000; /* Ensure menu appears on top of other elements */
  }

  .link {
    font-size: 14px;
    text-align: center;
    padding: 10px 0; /* Add padding to menu items */
    border-radius: 5px; 
    background-color: pink;
  }

  .links.show {
    transform: translateY(0); /* Slide into view */
    opacity: 1; /* Make visible */
  }
}


  </style>
  