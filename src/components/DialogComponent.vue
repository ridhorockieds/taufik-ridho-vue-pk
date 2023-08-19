<template>
  <v-dialog v-model="dialogVisible" max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" color="primary">Show QR Code</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">QR Code</span>
      </v-card-title>
      <v-card-text class="pt-3">
        <p class="text-center"><strong>Text:</strong> {{ text }}</p>
        <v-spacer></v-spacer>
        <v-card class="mx-auto" max-width="290" color="#fff">
          <v-card-text>
            <VueQRCodeComponents :text="text"></VueQRCodeComponents>
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="downloadQR">Download</v-btn>
        <v-btn color="primary" @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import VueQRCodeComponents from "vue-qrcode-component";
export default {
  name: "DialogComponent",
  components: {
    VueQRCodeComponents,
  },
  props: {
    text: String,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    downloadQR() {
      let datetime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/-/g, "")
        .replace(/:/g, "")
        .replace("T", "_");
      const canvas = document.querySelector("canvas");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qr" + datetime + ".png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>
