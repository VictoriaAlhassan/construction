<!-- <template>
  <div class="about-page">
    <div class="about-content">
      <h1>About Us</h1>
      <p>We are a team of skilled professionals dedicated to providing high-quality construction services to our clients. With years of experience in the industry, we pride ourselves on delivering top-notch results that exceed our clients' expectations.</p>
      <p>At our construction company, we specialize in a wide range of services, including residential and commercial construction, remodeling, renovations, and more. We are committed to providing exceptional craftsmanship, attention to detail, and excellent customer service.</p>
      <h2>Our Team</h2>
      <p>Our team of experts includes experienced architects, designers, builders, and project managers. Each member of our team brings a unique set of skills and expertise to every project we undertake.</p>
      <ul>
        <li>John Doe - Architect</li>
        <li>Jane Smith - Designer</li>
        <li>Tom Jones - Builder</li>
        <li>Sarah Lee - Project Manager</li>
      </ul>
      <h2>Our Mission</h2>
      <p>Our mission is to provide high-quality construction services to our clients while maintaining the highest standards of safety, sustainability, and ethical practices. We are committed to building long-term relationships with our clients and delivering exceptional results that exceed their expectations.</p>
    </div>
  </div>
</template>

<style>
.about-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.about-content {
  max-width: 800px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

ul {
  list-style: none
}
</style>

 -->

<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <svg
      viewBox="0 0 1097 845"
      aria-hidden="true"
      class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
    >
      <path
        fill="url(#7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1)"
        fill-opacity=".2"
        d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
      />
      <defs>
        <linearGradient
          id="7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1"
          x1="1097.04"
          x2="-141.165"
          y1=".22"
          y2="363.075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      viewBox="0 0 1097 845"
      aria-hidden="true"
      class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
    >
      <path
        fill="url(#49c00522-612e-41d3-bb32-ce7d1fa28850)"
        fill-opacity=".2"
        d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
      />
      <defs>
        <linearGradient
          id="49c00522-612e-41d3-bb32-ce7d1fa28850"
          x1="1097.04"
          x2="-141.165"
          y1=".22"
          y2="363.075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#776FFF" />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          About Us
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          We are a team of skilled professionals dedicated to providing
          high-quality construction services to our clients. With years of
          experience in the industry, we pride ourselves on delivering top-notch
          results that exceed our clients' expectations. At our construction
          company, we specialize in a wide range of services, including
          residential and commercial construction, remodeling, renovations, and
          more. We are committed to providing exceptional craftsmanship,
          attention to detail, and excellent customer service.
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <div
          v-for="card in cards"
          :key="card.name"
          class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
        >
          <component
            :is="card.icon"
            class="h-7 w-5 flex-none text-indigo-400"
            aria-hidden="true"
          />
          <div class="text-base leading-7">
            <h3 class="font-semibold text-white">{{ card.name }}</h3>
            <p class="mt-2 text-gray-300">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    name: "Sales",
    description:
      "Whether you are looking to build a new home, remodel your existing property, or undertake a commercial construction project, we have the expertise and experience to get the job done right.",
  },
  {
    name: "Technical Support",
    description:
      " Our team is available to help you via phone, email, or live chat, and we will work with you to resolve any issues as quickly and efficiently as possible.",
  },
  {
    name: "Media Inquiries",
    description:
      " We appreciate your interest in our construction company and are happy to assist you with any media-related inquiries.",
  },
];
</script>
