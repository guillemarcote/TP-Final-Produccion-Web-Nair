<template>
  <div class="product-list">
    <h2>Celulares</h2>
    <div class="products">
      <div class="product-card" v-for="cel in celulares" :key="cel.id">
        <img :src="require(`@/assets/${cel.image}`)" alt="Celular" />
        <h3>{{ cel.name }}</h3>
        <p>{{ cel.description }}</p>
        <span class="price">${{ cel.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaCelulares',
  data() {
    return {
      celulares: [
        {
          id: 1,
          name: 'iPhone 16 Pro Max',
          description: 'Pantalla OLED 6.86", chip A18 Pro.',
          price: 950000,
          image: 'celular1.jpg'
        },
        {
          id: 2,
          name: 'Samsung Galaxy S25',
          description: 'Triple cámara, pantalla 120Hz, 5G.',
          price: 870000,
          image: 'celular2.jpg'
        },
        {
          id: 3,
          name: 'Xiaomi Redmi Note 11',
          description: 'Gran batería, pantalla AMOLED, excelente relación calidad-precio.',
          price: 420000,
          image: 'celular3.jpg'
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
