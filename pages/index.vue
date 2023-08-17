<template>
  <v-row class="mt-6">
    <v-col cols="12" md="6" lg="4" v-for="p in products" :key="p.id">
      <v-card flat class="border" :to="`/product/${p.id}`">
        <v-card-item>
          <template #prepend>
            <v-avatar rounded="0">
              <v-img :src="p.image"></v-img>
            </v-avatar>
          </template>
          <template #append>
            <span class="text-medium-emphasis font-weight-bold">${{ p.price }}</span>
          </template>

          <v-card-title>
            {{ p.title }}
          </v-card-title>
          <v-card-subtitle>
            <span class="text-capitalize">{{ p.category }}</span>
          </v-card-subtitle>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const drawer = ref(true);
const products = ref([])

const { data } = await useFetch('/api/product');

products.value = data.value;
</script>