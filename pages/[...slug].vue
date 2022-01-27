<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/test-1">Test 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/test-2">Test 2</NuxtLink>
        </li>
      </ul>
    </nav>
    <div>Uri from useFetch (data.uri): {{ data.uri }}</div>
    <div>Route path ($route.path): {{ $route.path }}</div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = await useFetch('/api/page', { params: { uri: route.params.slug ? (route.params.slug).join('/') : '' } });
</script>
