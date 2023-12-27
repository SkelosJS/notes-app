<script>
export default {
  mounted() {
    console.log("test");
  }
}
</script>

<template>
  <NuxtLayout name="header">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@400;500;600;700&display=swap');

*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

.montserrat {
  font-family: 'Montserrat', sans-serif;
}

.lato {
  font-family: 'Lato', sans-serif;
}

#__nuxt {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #000;
}

html {
  scroll-behavior: smooth;
}
</style>