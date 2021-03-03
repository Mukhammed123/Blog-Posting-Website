<template>
  <v-flex class="rounded-xl xl-7 lg-7 md7 sm8 xs10 mx-auto">
    <template v-for="post in postData">
      <v-card class="pa-3 my-2 mx-auto rounded-xl" :key="post.id">
        <v-card class="d-flex justify-space-between" flat>
          <a
            href="#"
            :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            class="d-inline-block"
          >
            <h4 class="text-decoration-underline">{{ post.name }}</h4>
          </a>
          <v-btn :id="post.id" @click="removePost($event)" icon color="gray" class="d-inline-block">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card>
        <h2>{{ post.title }}</h2>
        <v-img :src="post.image"></v-img>
        <p class="mt-2">
          {{ post.text }}
        </p>
      </v-card>
    </template>
  </v-flex>
</template>

<script>
import Vue from 'vue';

import { db } from '@/firebase';

export default Vue.component(
  'post-container',
  Vue.extend({
    name: 'PostsContainer',
    props: {
      postData: { type: Array, default: null },
    },
    methods: {
      // getImgUrl(url) {
      //   return require('@/assets/images/' + url);
      // },
      removePost(event) {
        // console.log(event.currentTarget.id);
        db.collection('blogs').doc(event.currentTarget.id).delete();
      },
    },
  }),
);
</script>
