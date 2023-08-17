<template>
  <v-card class="mt-6" v-if="product.l">
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="3">
          <v-img :src="product.image" class="mx-auto" width="130"></v-img>
        </v-col>
        <v-col cols="12" sm="7">
          <h5 class="text-h5 mb-4">{{ product.title }}</h5>
          <p>{{ product.description }}</p>
          <h6 class="text-h6">Price: {{ product.price }}</h6>
          <h6 class="text-h6 mb-2">Category: {{ product.category }}</h6>
          <v-rating readonly color="warning" density="compact" :model-value="product.rating.rate"></v-rating>
          <div>
            <v-btn color="success" class="me-4">Buy Now</v-btn>
            <v-btn color="error" variant="tonal" to="/">Explore More</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const product = ref();
const { id } = useRoute().params;
const { data } = await useFetch(`/api/product/${id}`);
product.value = data.value;

</script>
