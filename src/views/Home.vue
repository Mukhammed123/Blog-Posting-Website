<template>
  <div class="home" style="overflow: scroll">
    <make-new-post></make-new-post>
    <posts-container :post-data="postData"></posts-container>
  </div>
</template>

<script>
import Vue from 'vue';

import MakeNewPost from '@/components/App/MakeNewPost';
import PostsContainer from '@/components/App/PostsContainer';
import extensions from '@/mixins/extensions';
import { blogsContainer } from '@/plugins/firebase';

export default Vue.extend({
  name: 'Home',
  data: () => {
    return {
      postData: [],
    };
  },
  components: { MakeNewPost, PostsContainer },
  mixins: [extensions],
  mounted() {
    blogsContainer.get().then((snapShot) => {
      snapShot.docs.forEach((doc) => {
        this.postData.push(doc.data());
      });
    });
  },
});
</script>
