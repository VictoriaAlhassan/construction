<template>
  <div class="relative isolate bg-gray-900">
    <!-- <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"> -->
    <div class="relative px-6 pt-14 lg:static lg:px-8">
      <div class="gallery">
        <div class="title">Finished Projects</div>
        <div class="images">
          <div v-for="(image, index) in images" :key="index" class="grid-item">
            <img :src="image.src" :alt="image.alt" />
            <div class="caption">{{ image.description }}</div>
          </div>
        </div>
      </div>
      <div class="gallery">
        <div class="title">Ongoing Project</div>
        <div class="images">
          <div v-for="(image, index) in process" :key="index" class="grid-item">
            <img :src="image.src" :alt="image.alt" />
            <div class="caption">{{ image.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "/shahousing1.jpg",
          alt: "Image 1",
          description: "Exterior || Villa",
        },
        {
          src: "/shagalleryvid1.mp4",
          alt: "Image 2",
          description: "Architect || Urban development ",
        },
        {
          src: "/shagalleryvid2.mp4",
          alt: "Image 3",
          description: "Exterior || Villa",
        },
        {
          src: "/image7.jpg",
          alt: "Image 4",
          description: "Exterior || cottage",
        },
        {
          src: "/image8.jpg",
          alt: "Image 5",
          description: "Interior || Penthouse",
        },
        {
          src: "/image9.jpg",
          alt: "Image 6",
          description: "Interior || Bedroom",
        },
      ],
      process: [
        {
          src: "/shahousingprocess1.jpg",
          alt: "Image 1",
        },
        {
          src: "/shahousingprocess2.jpg",
          alt: "Image 2",
        },
        {
          src: "/shahousingprocess3.jpg",
          alt: "Image 3",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* body{ */
/* background-color: black; */
/* margin-top: 4rem; */
/* } */
.title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-top: 3.5rem;
}
.caption {
  position: relative;
  bottom: -50%;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  opacity: 0;
  transition: bottom 0.3s ease-out, opacity 0.3s ease-out;
}

.grid-item:hover .caption {
  opacity: 1;
  bottom: 0;
}
.images {
  margin-top: 4rem;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.grid-item {
  overflow: hidden;
}

img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-out;
  border-radius: 10px;
}

img:hover {
  transform: scale(1.1);
}
</style>
