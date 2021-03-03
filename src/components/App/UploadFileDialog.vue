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
          <v-btn type="submit" :disabled="isDisabled">
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

import { db, firebase } from '@/firebase';

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
        current: new Date(),
        rules: {
          required: [(value) => !!value || 'Required.'],
        },
      };
    },
    methods: {
      close() {
        this.$emit('upload', false);
      },
      onFileSelected(event) {
        console.log(event);
        console.log(this.chosenFile.name);
      },
      userPosted(event) {
        console.log(this.chosenFile);
        console.log(event);
        var image = event.target[3].value.split('\\');

        // Create the file metadata
        var metadata = {
          contentType: 'image/jpeg',
        };

        // Create a root reference
        var storageRef = firebase.storage().ref();

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef
          .child('images/' + image[image.length - 1].name)
          .put(this.chosenFile, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;

              // ...

              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log(this.current.toLocaleString());
              db.collection('blogs').add({
                name: this.name,
                time: this.current.toLocaleString(),
                title: this.title,
                image: downloadURL,
                text: this.text,
              });
              this.chosenFile = null;
              this.name = '';
              this.title = '';
              this.text = '';
            });
          },
        );
        this.close();
      },
    },
    computed: {
      isDisabled() {
        if (this.name.length > 0 && this.title.length > 0 && this.chosenFile) return false;
        else return true;
      },
    },
  }),
);
</script>
