<template>
  <div class="product-list">
    <h2>Accesorios</h2>
    <div class="products">
      <div class="product-card" v-for="acc in accesorios" :key="acc.id">
        <img :src="require(`@/assets/${acc.image}`)" alt="Accesorio" />
        <h3>{{ acc.name }}</h3>
        <p>{{ acc.description }}</p>
        <span class="price">${{ acc.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaAccesorios',
  data() {
    return {
      accesorios: [
        {
          id: 1,
          name: 'Auriculares Bluetooth',
          description: 'Inalámbricos con estuche de carga.',
          price: 18000,
          image: 'accesorio1.jpg'
        },
        {
          id: 2,
          name: 'Mouse Inalámbrico',
          description: 'Con sensor óptico y diseño ergonómico.',
          price: 19500,
          image: 'accesorio2.jpg'
        },
        {
          id: 3,
          name: 'Funda universal para celulares',
          description: 'Resistente al agua y a golpes.',
          price: 6500,
          image: 'accesorio3.jpg'
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
