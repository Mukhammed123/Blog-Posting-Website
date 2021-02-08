<template>
  <v-flex class="xl-7 lg-7 md7 sm8 xs10 mx-auto mt-6">
    <v-card class="rounded-xl my-5 pb-2">
      <v-layout row class="px-4">
        <v-avatar color="indigo" size="34" class="my-auto mx-3">
          <span class="white--text headline">MM</span>
        </v-avatar>
        <v-text-field
          placeholder="Would you like to share your thoughts?"
          class="mr-3 inp"
        ></v-text-field>
      </v-layout>
      <v-row no-gutters id="action-container">
        <v-col class="btn1">
          <v-btn plain style="width: 100%">
            <v-icon>mdi-video</v-icon>
            <span>Live Video</span>
          </v-btn>
        </v-col>
        <v-col class="btn2">
          <v-btn plain style="width: 100%" @click="openDialog">
            <v-icon>mdi-image</v-icon>
            <span>Image/Video</span>
          </v-btn>
        </v-col>
        <v-col class="btn3">
          <v-btn plain style="width: 100%">
            <v-icon>mdi-emoticon</v-icon>
            <span>Feeling/Activity</span>
          </v-btn>
        </v-col>
      </v-row>
      <upload-file-dialog
        :value="openUploadDialog"
        @upload="openUploadDialog = false"
      ></upload-file-dialog>
    </v-card>
  </v-flex>
</template>

<script>
import UploadFileDialog from '@/components/App/UploadFileDialog';

import Vue from 'vue';
export default Vue.component(
  'make-new-post',
  Vue.extend({
    name: 'MakeNewPost',
    components: { UploadFileDialog },
    data: () => {
      return {
        openLiveDialog: false,
        openUploadDialog: false,
        openFeelingsDialog: false,
      };
    },
    methods: {
      openDialog() {
        console.log(this.openUploadDialog);
        this.openUploadDialog = true;
      },
    },
  }),
);
</script>

<style scoped>
@media only screen and (max-width: 812px) {
  div.btn1.col button {
    padding: 0;
  }
  .v-btn__content span {
    font-size: 0.85em;
  }
  .v-btn__content i {
    font-size: 1.1em;
  }
  div.btn2.col button {
    padding: 0;
  }
  div.btn3.col button {
    padding: 0;
    margin-right: 1em;
  }
}

@media only screen and (max-width: 427px) {
  div.btn1.col button {
    padding: 0;
  }
  .v-btn__content span {
    display: none;
  }
  .v-btn__content i {
    font-size: 2.3em;
  }
  .inp {
    font-size: 0.75rem;
  }
}
</style>
