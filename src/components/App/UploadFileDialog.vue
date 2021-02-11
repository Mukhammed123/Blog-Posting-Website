<template>
  <v-dialog
    class="upload-dialog"
    max-width="450px"
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
        <v-form @submit.prevent="userPosted">
          <v-text-field placeholder="Name" v-model="name" :rules="rules.required"></v-text-field>
          <v-text-field placeholder="Title" v-model="title" :rules="rules.required"></v-text-field>
          <v-file-input
            @change="onFileSelected"
            v-model="chosenFile"
            label="Click here to upload your file"
          ></v-file-input>
          <v-text-field placeholder="Description" v-model="text"></v-text-field>
          <v-btn type="submit" :disabled="isDisabled()">
            <v-icon color="primary">mdi-upload</v-icon>
            <span>Post</span>
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue';

import { db } from '@/plugins/firebase';

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
        name: '',
        title: '',
        text: '',
        rules: {
          required: [(value) => !!value || 'Required.'],
        },
      };
    },
    methods: {
      close() {
        // testCollection.get().then((snapShot) => {
        //   snapShot.docs.forEach((doc) => {
        //     console.log(doc.data());
        //   });
        // });
        this.name = '';
        this.title = '';
        this.chosenFile = null;
        this.$emit('upload', false);
      },
      onFileSelected(event) {
        console.log(event);
        console.log(this.chosenFile.name);
      },
      userPosted(event) {
        var image = event.target[3].value.split('\\');
        image = image[image.length - 1];
        db.collection('blogs').add({
          name: event.target[0].value,
          title: event.target[1].value,
          image: image,
          text: this.text,
        });
        this.close();
      },
      isDisabled() {
        if (this.name.length > 0 && this.title.length > 0 && this.chosenFile) return false;
        else return true;
      },
    },
  }),
);
</script>
