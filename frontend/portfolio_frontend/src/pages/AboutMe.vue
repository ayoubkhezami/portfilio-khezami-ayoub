<template>
  <div style="background-color: #222831; height: 100vh; margin: 0; padding: 0;">
    <Header></Header>

    <div class="section1 ">
      <div class="photo">
        <img :src="ayoubphoto" alt="Ayoub's image" class="animated-border" />
      </div>
      <div class="intro">
        <h3>Web and Mobile Developer</h3>
        <p>I am <span> Ayoub Khezami</span></p>
        <p>22 years old</p>
        <p>
          I just graduated in Business Computing specialized in E-Business at the Higher School Of Economics And Commercial Sciences Of Tunis (ESSECT).
        </p>
      </div>
    </div>

    <v-container >
      <v-row>
        <v-col  class="card1" cols="3" md="6" >
          <div class="info-category">
            <h3>Programming Languages</h3>
            <ul>
              <li v-for="language in programmingLanguages" :key="language">{{ language }}</li>
            </ul>
          </div>
        </v-col>
        <v-col class="card1" cols="3" >
          <div class="info-category">
            <h3>Frameworks</h3>
            <ul>
              <li v-for="framework in frameworks" :key="framework">{{ framework }}</li>
            </ul>
          </div>
        </v-col>
        <v-col class="card1" cols="3" >
          <div class="info-category">
            <h3>SQL Databases</h3>
            <ul>
              <li v-for="database in sqlDatabases" :key="database">{{ database }}</li>
            </ul>
          </div>
        </v-col>
        <v-col class="card1" cols="3" >
          <div class="info-category">
            <h3>Software</h3>
            <ul>
              <li v-for="softwareItem in software" :key="softwareItem">{{ softwareItem }}</li>
            </ul>
          </div>
        </v-col>
        <v-col class="card1" cols="3" >
          <div class="info-category">
            <h3>CSS</h3>
            <ul>
              <li v-for="cssItem in css" :key="cssItem">{{ cssItem }}</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <div class="card">
            <h3>Baccalaureate in Computer Sciences</h3>
            <p>Completed high school education with a focus on computer sciences, covering foundational topics in programming and IT.</p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="card">
            <h3>Higher School Degree in Business Computing</h3>
            <p>Graduated from Higher School Of Economics And Commercial Sciences Of Tunis (ESSECT) with specialization in E-Business.</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ayoubphoto from '../../public/images/ayoubPhoto.png';
import Header from '@/components/Header.vue' 
const programmingLanguages = ref([
  'JavaScript',
  'C#',
  'Java',
  'Python',
  'PHP'
]);

const frameworks = ref([
  'Vue JS',
  'Ionic',
  '.NET',
  'React JS',
  'Express',
]);

const sqlDatabases = ref([
  'Firebase',
  'MySQL',
  'MongoDB',
  'PL/SQL'
]);

const software = ref([
  'VS Code',
  'Visual Studio 2022',
  'Sublime Text',
  'SQL Server'
]);

const css = ref([
  'Tailwind CSS',
  'Bootstrap'
]);
</script>

<style scoped>
/* General Styles */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #222831;
} 
.card1{
  border: 1px solid #424f61; 
  background-color: #151a22;  
  margin-left: 6px; 
  max-width: 220px; 
  min-width: 200px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(176, 23, 23, 0.2);
  
} 
.card1:hover{
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(181, 95, 137, 0.341);
}

.section1 {
  display: flex;
  justify-content: space-around;
  margin: 30px 40px;
  flex-direction: row;
}

.intro {
  color: white;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 100px;
}

.intro span {
  color: #42b883;
  font-size: 35px;
  font-family: "Edu AU VIC WA NT Hand", cursive;
  font-weight: 600;
  margin-left: 3px;
}

.photo {
  position: relative;
  width: 400px; /* Adjust size as needed */
  height: 400px; /* Adjust size as needed */
  border-radius: 50%;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Animation for the border */
.photo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 10px solid transparent;
  border-radius: 50%;
  border-color: #42b883;
  box-sizing: border-box;
  animation: borderAnimation 6s linear infinite;
}

@keyframes borderAnimation {
  0% {
    transform: rotate(0deg);
    border-color: #42b883 transparent transparent transparent;
  }
  25% {
    border-color: transparent #42b883 transparent transparent;
  }
  50% {
    border-color: transparent transparent #42b883 transparent;
  }
  75% {
    border-color: transparent transparent transparent #42b883;
  }
  100% {
    transform: rotate(360deg);
    border-color: #42b883;
  }
}

.intro p {
  font-size: 20px;
}

.section2 {
  background-color: #222831;
  padding: 20px 60px;
}

.info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.info-category {
  flex: 1 1 200px; /* Adjust base size as needed */
  color: white;
}

.info-category h3 {
  color: #42b883;
  margin-bottom: 10px;
}

.info-category ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.info-category li {
  font-size: 18px;
  margin-bottom: 5px;
}

.section3 {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  gap: 20px; /* Space between cards */
  padding: 20px 60px;
}

.card {
  background-color: #393e46;
  border-radius: 10px;
  padding: 20px;
  color: white;
  flex: 1 1 calc(50% - 20px); /* Two cards per row with a gap */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px; /* Space between cards vertically */
}

.card h3 {
  color: #42b883;
  margin-bottom: 10px;
}

.card p {
  font-size: 16px;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .section1 {
    flex-direction: column; /* Stack photo and intro vertically */
    align-items: center;
  }

  .photo {
    width: 250px; /* Adjust size as needed */
    height: 250px; /* Adjust size as needed */
  }

  .intro {
    margin-top: 20px;
    text-align: center;
  }

  .section2 {
    padding: 20px;
  }

  .info {
    flex-direction: column; /* Stack info categories vertically */
    align-items: center;
  }

  .info-category {
    width: 100%;
    margin-bottom: 20px;
  }

  .section3 {
    padding: 20px;
    flex-direction: column; /* Stack cards vertically on small screens */
  }

  .card {
    flex: 1 1 100%; /* Full width for cards on small screens */
  }
}
</style>
