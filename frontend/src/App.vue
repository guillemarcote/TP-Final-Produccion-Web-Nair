<template>
  <div id="app">
    <header>
      <h1>Tienda Electrónica GM</h1>
    </header>

    <main>
      <CarruselImagen />
      <section class="categorias">
        <h2>Categorías</h2>
        <div class="cards">
          <router-link to="/laptops" class="card">Laptops</router-link>
          <router-link to="/celulares" class="card">Celulares</router-link>
          <router-link to="/accesorios" class="card">Accesorios</router-link>
        </div>
      </section>
      <router-view />
    </main>
    
    <footer>
      <p>📧 Contacto: info@tiendaelectronicagm.com | 📞 11-2233-4455</p>
    </footer>
  </div>
</template>


<script>
import CarruselImagen from './components/CarruselImagen.vue';

export default {
  components: {
    CarruselImagen
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f6f8;
  color: #333;
}

header {
  background: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
}

main {
  padding: 20px;
}

.categorias h2 {
  margin-bottom: 10px;
  text-align: center;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

footer {
  background: #2e2e2e;
  color: #ccc;
  text-align: center;
  padding: 15px;
  margin-top: 40px;
}
</style>
