<template>
  <div class="home" style="overflow: scroll">
    <make-new-post />
    <posts-container :post-data="allBlogs" />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import MakeNewPost from '@/components/App/MakeNewPost';
import PostsContainer from '@/components/App/PostsContainer';
import extensions from '@/mixins/extensions';

export default Vue.extend({
  name: 'Home',
  methods: {
    ...mapActions(['fetchBlogs']),
  },
  computed: mapGetters(['allBlogs']),
  components: { MakeNewPost, PostsContainer },
  mixins: [extensions],
  created() {
    this.fetchBlogs();
  },
});
</script>
