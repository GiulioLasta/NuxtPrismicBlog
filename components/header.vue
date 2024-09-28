<template>
  <header class="header">
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #333;
  padding: 15px;
}

.header nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.header nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
