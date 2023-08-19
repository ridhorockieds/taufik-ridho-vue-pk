<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12" sm="5" md="6">
        <v-card>
          <v-card-title>
            <h2>Text to QR Code</h2>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="text"
              label="Input text or url..."
              outlined
            ></v-text-field>
            <v-btn color="primary" @click="generateQR" block>
              Generate QR
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" md="6">
        <v-card>
          <v-card-title>
            <h2>QR Code</h2>
          </v-card-title>
          <v-card-text v-if="qrCode">
            <p class="text-center"><strong>Text:</strong> {{ qrCode }}</p>
            <v-card class="mx-auto mb-5" max-width="290" color="#fff">
              <v-card-text>
                <VueQRCodeComponent :text="qrCode"></VueQRCodeComponent>
              </v-card-text>
            </v-card>
            <v-btn color="primary" @click="downloadQR" block>
              Download QR Code
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import swal from "sweetalert";
import VueQRCodeComponent from "vue-qrcode-component";

export default {
  name: "QRGeneratorView",
  components: {
    VueQRCodeComponent,
  },
  data() {
    return {
      text: "",
      qrCode: "t.me/ridhorockieds",
      dataHistory: [],
    };
  },
  mounted() {
    if (localStorage.getItem("history")) {
      this.dataHistory = JSON.parse(localStorage.getItem("history"));
    }
  },
  methods: {
    generateQR() {
      if (this.text.trim() === "") {
        swal("Error", "Text cannot be empty", "error");
        return;
      } else {
        this.qrCode = this.text;
        this.dataHistory.unshift(this.text);
        localStorage.setItem("history", JSON.stringify(this.dataHistory));
        this.text = "";
      }
    },
    downloadQR() {
      let datetime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/-/g, "")
        .replace(/:/g, "")
        .replace("T", "_");
      const canvas = document.getElementsByTagName("canvas")[0];
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
  },
};
</script>