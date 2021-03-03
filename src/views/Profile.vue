<template>
  <div class="profile" style="overflow: scroll">
    <make-new-post></make-new-post>
    <posts-container :post-data="filteredBlogs"></posts-container>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import MakeNewPost from '@/components/App/MakeNewPost';
import PostsContainer from '@/components/App/PostsContainer';

export default Vue.component(
  'profile',
  Vue.extend({
    name: 'Profile',
    components: { MakeNewPost, PostsContainer },
    data: () => {
      return {};
    },
    methods: {
      ...mapActions(['fetchBlogs']),
    },
    computed: mapGetters(['filteredBlogs']),
  }),
);
</script>
