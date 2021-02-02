<template>
  <v-dialog
    class="upload-dialog"
    max-width="360px"
    :value="value"
    @upload="$emit('upload', $event)"
  >
    <v-card>
      <v-toolbar color="primary" dark dense flat>
        <v-icon left>mdi-upload</v-icon>
        <v-toolbar-title>Upload Image/Video</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
        <v-text-field placeholder="What is on your mind?"></v-text-field>
        <v-file-input
          @change="onFileSelected"
          v-model="chosenFile"
          label="Click here to upload your file"
        ></v-file-input>
      </v-container>
      <v-container justify-center>
        <v-btn>
          <v-icon color="primary">mdi-upload</v-icon>
          <span>Upload</span>
        </v-btn>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue';

export default Vue.component(
  'upload-file-dialog',
  Vue.extend({
    name: 'UploadFileDialog',
    props: {
      value: { type: Boolean, default: false },
    },
    data: () => {
      return {
        chosenFile: null,
      };
    },
    methods: {
      close() {
        this.$emit('upload', false);
      },
      onFileSelected(event) {
        console.log(event);
        console.log(this.chosenFile);
      },
    },
  }),
);
</script>
