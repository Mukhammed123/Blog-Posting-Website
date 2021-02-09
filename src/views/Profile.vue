<template>
  <div class="profile" style="overflow: scroll">
    <make-new-post></make-new-post>
    <posts-container :post-data="postData"></posts-container>
  </div>
</template>

<script>
import Vue from 'vue';

import MakeNewPost from '@/components/App/MakeNewPost';
import PostsContainer from '@/components/App/PostsContainer';
import { blogsContainer } from '@/plugins/firebase';

export default Vue.component(
  'profile',
  Vue.extend({
    name: 'Profile',
    components: { MakeNewPost, PostsContainer },
    data: () => {
      return {
        postData: [],
      };
    },
    mounted() {
      blogsContainer
        .where('name', '==', 'Mukhammed Musa')
        .get()
        .then((snapShot) => {
          snapShot.docs.forEach((doc) => {
            this.postData.push(doc.data());
          });
        });
    },
  }),
);
</script>
