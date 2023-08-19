<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="QR Logo"
          class="shrink mr-2"
          contain
          v-bind:src="require('./assets/qr-code.png')"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title class="hidden-sm-and-down"
          >QR Code Generator</v-toolbar-title
        >
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex">
        <v-btn icon @click="$router.push('/').catch(() => {})">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon @click="$router.push('/history').catch(() => {})">
          <v-icon>mdi-history</v-icon>
        </v-btn>
        <v-btn icon @click="$router.push('/about').catch(() => {})">
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-btn icon @click="toggleTheme">
          <v-icon>{{ iconToggle }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    iconToggle() {
      return this.$vuetify.theme.dark
        ? "mdi-weather-sunny"
        : "mdi-weather-night";
    },
  },
  created() {
    const dark = localStorage.getItem("dark");
    if (dark) {
      this.$vuetify.theme.dark = JSON.parse(dark);
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark", this.$vuetify.theme.dark);
    },
  },
};
</script>
