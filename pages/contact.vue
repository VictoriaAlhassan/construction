<template>
   <div class="relative isolate bg-gray-900">
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div class="relative px-6 pt-14 lg:static lg:px-8">
            <div class="mx-auto max-w-xl pt-24 pb-20 sm:pt-32 lg:mx-0 lg:max-w-lg lg:py-48">
              <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                <svg class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                  <defs>
                    <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
                    <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                  </svg>
                  <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
                </svg>
                <svg class="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]" viewBox="0 0 1155 678" aria-hidden="true">
                  <path fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)" fill-opacity=".2" d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z" />
                  <defs>
                    <linearGradient id="0a9a5302-e517-46c6-85f0-d826aa6a313e" x1="1155.49" x2="-78.208" y1="677.823" y2="203.355" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4F46E5" />
                      <stop offset="1" stop-color="#80CAFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in touch</h1>
              <p class="mt-6 text-lg leading-8 text-gray-300">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
              <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a class="hover:text-white" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd><a class="hover:text-white" href="mailto:hello@example.com">hello@info.com</a></dd>
                </div>
              </dl>
            </div>
          </div>
          <form class="px-6 lg:px-8 lg:pt-14">
            <div class="mx-auto max-w-xl pb-24 pt-20 sm:pb-32 lg:mr-0 lg:max-w-lg lg:py-48">
              <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-white">First name</label>
                  <div class="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
                  </div>
                </div>
                <div>
                  <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Last name</label>
                  <div class="mt-2.5">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
                  <div class="mt-2.5">
                    <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Phone number</label>
                  <div class="mt-2.5">
                    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block text-sm font-semibold leading-6 text-white">Message</label>
                  <div class="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-end">
                <button type="button" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Send message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
</template>


<script setup>

</script>

<style>

</style>