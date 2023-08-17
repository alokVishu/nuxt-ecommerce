<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item v-for="i in 10" :key="i">
          Menu Option {{ i }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-card>
          <v-card-text class="d-flex align-center ">
            <v-btn color="primary" size="small" :icon="drawer ? 'mdi-chevron-left' : 'mdi-chevron-right'"
              @click="drawer = !drawer"></v-btn>

            <h6 class="text-h6 ms-4">My eCommerce Store</h6>
            <v-spacer></v-spacer>
            <span>Instant Delivery</span>
          </v-card-text>
        </v-card>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
const drawer = ref(true);
</script>

<style lang="scss" scoped></style>