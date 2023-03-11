<template>
    <header class="bg-transparent">
      <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div class="flex items-center color-white">
            <h1>Propper.</h1>
            <!-- <div class="ml-10 hidden space-x-8 lg:block"> -->
<!--                  -->
            <!-- </div> -->
          </div>
          <div class="ml-10 space-x-4">
            <ul class="flex gap-4 color-white" >
    <li><NuxtLink to="/">Home</NuxtLink></li>
    <li><NuxtLink to="/about">About</NuxtLink></li>
    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
    <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
</ul>
            <!-- <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</a>  -->
            <!-- <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Sign in</a> -->
            <!-- <a href="#" class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up</a> -->
          </div>
        </div>
        <!-- <div class="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden"> -->
          <!-- <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</a> -->
        <!-- </div> -->
      </nav>
    </header>
    <div>
        <slot/>
    </div>

    <footer class="site-footer">
    <div class="container">
      <h3 class="footer-heading">Our Clients Say</h3>
      <p class="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,<br> dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
      <div class="testimonial-section">
        <div class="testimonial">
          <div class="testimonial-content">
          <img src="/client1.jpg" alt="Client 1" class="testimonial-img">
          <p class="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."</p>
        </div>
        </div>
        <div class="testimonial">
          <div class="testimonial-content">
          <img src="/client2.jpg" alt="Client 2" class="testimonial-img">
          <p class="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."</p>
        </div>
        </div>
      </div>
      </div>

      <div class="footer-icons">
  <div class="icon-container">
    <div class="icon-wrapper">
      <img class="icon" src="/address.png" alt="address">
      <div class="text">Address</div>
      <p class="description">123 Main St, Anytown, USA</p>
    </div>
    <div class="icon-wrapper">
      <img class="icon" src="/phone.png" alt="phone">
      <div class="text">Call Us</div>
      <p class="description">+1-555-1234</p>
    </div>
    <div class="icon-wrapper">
      <img class="icon" src="/email.png" alt="email">
      <div class="text">Email</div>
      <p class="description">info@example.com</p>
    </div>
   </div>
      <!-- <div class="footer-image"></div> -->
      <!-- <div class="footer-icons"> -->
        <!-- <div class="icon-box"> -->
          <!-- <img class="icon" src="/phone.png"/> -->
          <!-- <h4>Call Us</h4> -->
          <!-- <p>+1-555-1234</p> -->
        <!-- </div> -->
        <!-- <div class="icon-box"> -->
          <!-- <img  class="icon" src="email.png"/> -->
          <!-- <h4>Email </h4> -->
          <!-- <p>info@example.com</p> -->
        <!-- </div> -->
        <!-- <div class="icon-box"> -->
          <!-- <img class="icon" src="/address.png"/> -->
          <!-- <h4>Address</h4> -->
          <!-- <p>123 Main St, Anytown, USA</p> -->
        <!-- </div> -->
      <!-- </div> -->
    </div>
  </footer>
  </template>

<style scoped>
.router-link-exact-active{
    text-decoration: underline;
}
/* .footer-icons { */
  /* display: flex; */
  /* justify-content: space-around; */
  /* margin-top: 30px; */
  /* margin-left: 300px; */
/* } */
/*  */
/* .icon-box { */
  /* flex-basis: 30%; */
/*    */
/* } */
.icon{
    filter:saturate(50%) hue-rotate(150deg);
    width:37px;
    height:37px;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* padding: 20px; */
  color: white;
  text-shadow: 1px 1px 1px black;
  z-index: 9999;
}

.site-footer {
  background-color: #f2f2f2;
  padding: 50px 0;
  text-align: center;
}

.footer-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer-text {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0;
  margin-left: 25px;
  margin-right:25px
}


.testimonial-section {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.testimonial {
  flex-basis: 45%;
  max-width: 400px;
}

.testimonial-img {
  border-radius: 45%;
  display: block;
  height: 90px;
  margin: 0 auto 20px;
  width: 100px;
}

.testimonial-text {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0;
}
.testimonial-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.footer-icons{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.icon-container {
  margin-top: 35px;
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
  width: 35px;
  height: 35px;
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

/* .footer-image { */
  /* background-image: url('/location3.jpg'); */
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  /* background-size:cover; */
  /* height: 400px; */
  /* margin-top: 30px; */
/* } */

</style>
  
  <!-- <script setup> -->
<!-- //   const navigation = [ -->
    <!-- // { name: 'Home', href: '/' }, -->
    <!-- // { name: 'About', href: '/about' }, -->
    <!-- // { name: 'Pricing', href: '/pricing' }, -->
    <!-- // { name: 'Gallery', href: '/gallery' }, -->
    <!-- // {name: 'Pricing', href: '/pricing'} -->
<!-- //   ] -->
<!-- //   </script> -->


<!-- <template>
    <div>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-betwwen">
            <h3>Propper</h3>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
                <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
            </ul>
        </nav>
    </header>
   <div class="container mx-auto p-4 ">
      <slot />
   </div>
    </div>
</template>

<style scoped>
.router-link-exact-active{
    color:#12b488
}
</style>







 -->
