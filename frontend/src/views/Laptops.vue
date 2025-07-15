<template>
  <div class="product-list">
    <h2>Laptops</h2>
    <div class="products">
      <div class="product-card" v-for="laptop in laptops" :key="laptop.id">
        <div class="container-img">
            <img :src="require(`@/../../public/${laptop.image}`)" alt="Laptop" />
        </div>
        <h3>{{ laptop.name }}</h3>
        <p>{{ laptop.description }}</p>
        <span class="price">${{ laptop.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaLaptops',
  data() {
    return {
      laptops: [
        {
          id: 1,
          name: 'HP Pavilion 15',
          description: 'Laptop rápida con Intel i5 y 8GB de RAM.',
          price: 1450000,
          image: 'laptop1.jpg'
        },
        {
          id: 2,
          name: 'Dell Inspiron 14',
          description: 'Pantalla Full HD, SSD 256GB.',
          price: 1550000,
          image: 'laptop2.jpg'
        },
        {
          id: 3,
          name: 'MacBook Air M1',
          description: 'Rendimiento silencioso y batería de larga duración.',
          price: 1980000,
          image: 'laptop3.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
.product-list {
  padding: 20px;
  text-align: center;
}

.container-img{
    min-height: 16.5rem;
    align-content: center;
}

.products {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.product-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 15px;
  max-width: 250px;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  color: #2e7d32;
  font-size: 18px;
}
</style>
