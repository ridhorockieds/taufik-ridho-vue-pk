<template>
  <v-container>
    <v-row class="my-5">
      <v-col cols="12">
        <img
          src="https://i.imgur.com/qIufhof.png"
          alt="404 Not Found"
          class="mx-auto d-block"
          width="300px"
          height="300px"
        />
        <h1 class="text-center">404 Not Found</h1>
        <h2 class="text-center">
          The page you are looking for does not exist.
        </h2>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn color="primary" dark @click="$router.go(-1)">
          Back to Previous Page
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>