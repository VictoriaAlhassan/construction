<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <!-- <img -->
    <!-- src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGElMjBncm91cCUyMG9mJTIwYmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" -->
    <!-- alt="" -->
    <!-- class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" -->
    <!-- /> -->
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
