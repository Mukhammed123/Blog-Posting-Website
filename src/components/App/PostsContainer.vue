<template>
  <v-flex class="rounded-xl xl-7 lg-7 md7 sm8 xs10 mx-auto">
    <template v-for="post in postData">
      <v-card class="pa-3 my-2 mx-auto rounded-xl" :key="post.id">
        <a href="#" :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
          <h4 class="text-decoration-underline">{{ post.author }}</h4>
        </a>
        <h2>{{ post.title }}</h2>
        <v-img :src="getImgUrl(post.image)"></v-img>
        <p class="mt-2">
          {{ post.description }}
        </p>
      </v-card>
    </template>
  </v-flex>
</template>

<script>
import Vue from 'vue';

export default Vue.component(
  'post-container',
  Vue.extend({
    name: 'PostsContainer',
    props: ['postData'],
    methods: {
      getImgUrl(url) {
        return require('@/' + url);
      },
    },
  }),
);
</script>
