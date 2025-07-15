<template>
  <div class="carousel-container">
    <img :src="require(`@/../../public/${images[current]}`)" alt="Imagen del carrusel" />
  </div>
</template>

<script>
export default {
  name: "CarruselImagen",
  data() {
    return {
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
      current: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.current = (this.current + 1) % this.images.length;
    }, 3000);
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  height: 230px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  max-width: 1000px;
  background-color: white;
  text-align: center;
}
.carousel-container img {
  width: max-content;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}
</style>
