<template>
  <v-container>
    <v-row class="my-5">
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-center">
            <h2>History</h2>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="clearHistory"> Clear History </v-btn>
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">No</th>
                    <th class="text-left">Text</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in history" :key="index">
                    <td>{{ index + 1 }}.</td>
                    <td>{{ item }}</td>
                    <td>
                      <dialog-component
                        :dialog="dialog"
                        :text="item"
                        @closeDialog="dialog = false"
                      ></dialog-component>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DialogComponent from "../components/DialogComponent.vue";
import swal from "sweetalert";
export default {
  name: "HistoryView",
  data() {
    return {
      dialog: false,
      text: "",
      history: [],
    };
  },
  components: {
    DialogComponent,
  },
  mounted() {
    if (localStorage.getItem("history")) {
      this.history = JSON.parse(localStorage.getItem("history"));
    }
  },
  methods: {
    clearHistory() {
      localStorage.removeItem("history");
      this.history = [];
      swal("Success", "History cleared", "success");
    },
  },
};
</script>