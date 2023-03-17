<template>
  <div class="homepage">
    <div class="overlay"></div>
    <div class="homepage-content">
      <h1>Get Ready.</h1>
      <h1>We're finishing!</h1>
    </div>
  </div>
  <div class="services flex justify-center items-center h/2-screen">
    <h1>Our Services</h1>
  </div>
  <!-- <p class="paragraph">fxbgjjjjllkmmb vxewdcgvhnhjjgvfcdxwfhgvdggjhkhvcdsgv -->
  <!-- cgvmjnkjnkkdffghjjnkjgfgjkjnvgfdshjhjvgfcgft</p> -->

  <div class="container">
    <div class="icon-container">
      <div class="icon-wrapper">
        <img class="icon" src="/fast.png" alt="fast operations" />
        <div class="text">Fast Operations</div>
        <p class="description">
          vhsanckavhsjafhvbjshfbvsjf <br />cgvdvhccbhgvzdfchngxhvchdgh
        </p>
      </div>
      <div class="icon-wrapper">
        <img class="icon" src="/construction.png" alt="construction" />
        <div class="text">Construction</div>
        <p class="description">
          vhsanckavhsjafhvbjshfbvsjf <br />cgvdvhccbhgvzdfchngxhvchdgh
        </p>
      </div>
      <div class="icon-wrapper">
        <img class="icon" src="/rennovation2.png" alt="rennovation" />
        <div class="text">Rennovation</div>
        <p class="description">
          vhsanckavhsjafhvbjshfbvsjf <br />cgvdvhccbhgvzdfchngxhvchdgh
        </p>
      </div>
      <div class="icon-wrapper">
        <img class="icon" src="/architecture.png" alt="architecture" />
        <div class="text">Architecture</div>
        <p class="description">
          vhsanckavhsjafhvbjshfbvsjf <br />cgvdvhccbhgvzdfchngxhvchdgh
        </p>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-content">
      <h2 class="text-white">
        Leading The Way In Building<br />And Civil Construction
      </h2>
      <p>
        Construction is the process of constructing<br />
        an infrastructure.
      </p>
    </div>
    <div class="image">
      <img src="/leadingtheway1.jpg" alt="Image" />
    </div>
  </div>

  <div class="second-container">
    <div class="second-content">
      <div class="second-image">
        <img src="/leadingtheway2.jpg" alt="Image" />
      </div>

      <div class="second-text">
        <h1>We Believe In The <br />Power Of Great Ideas</h1>
        <p>
          Propper Started its journey in 1995 as Birla<br />
          Communication Limited with GSM licenses in<br />Gujarat and
          Maharashtra circles
        </p>
        <h2>We Provide</h2>
        <ul class="two-columns-list">
          <li><span class="hyphen">-</span> Architect Planning</li>
          <li><span class="hyphen">-</span>3D Modeling</li>
          <li><span class="hyphen">-</span> Soil Test</li>
          <li><span class="hyphen">-</span> Supervision</li>
          <li><span class="hyphen">-</span> Interior design</li>
          <li><span class="hyphen">-</span> Rennovation Building</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.homepage {
  background-image: url("/static/building.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  /* position:relative */
}
.hyphen {
  color: blue;
}
.icon {
  filter: saturate(50%) hue-rotate(200deg);
  width: 37px;
  height: 37px;
  /* margin-left: 50px; */
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    1.5,
    1.5,
    1.5,
    1.5
  ); /* adjust the alpha value to control the darkness */
  z-index: -1;
}

.homepage-content {
  margin-left: 50px;
  color: white;
  text-shadow: 1px 1px 1px black;
  font-size: 80px;
  font-style: bold;
}
.services h1 {
  font-size: 25px;
  margin-top: 35px;
}
.paragraph {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper img {
  width: 64px;
  height: 64px;
}

.text {
  text-align: center;
  margin-top: 8px;
}

.description {
  text-align: center;
  margin-top: 4px;
  font-size: 14px;
  color: #888;
}

.card {
  display: flex;
  flex-direction: row;
  background-color: #075878;
  padding: 24px;
  margin-top: 32px;
  margin-left: 35px;
  margin-right: 30px;
}

.image {
  flex: 1;
}

.image img {
  max-width: 100%;
  height: 100%;
}

.card-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
}

h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-bottom: 24px;
}

.second-container {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  height: 100vh;
  margin-left: 35px;
}

.second-content {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
}

.second-text {
  flex: 1;
  margin-left: 50px;
}

.second-text h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
}

.second-text p {
  font-size: 18px;
  line-height: 1.5;
  color: #444;
}

.second-image {
  flex: 1;
}

.second-image img {
  max-width: 100%;
  height: auto;
}
.two-columns-list {
  columns: 2;
  list-style-type: none;
  margin-right: 65px;
  padding: 0;
}
</style>
