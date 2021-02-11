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
import { blogs } from '@/plugins/firebase';

export default Vue.extend({
  name: 'Home',
  data: () => {
    return {
      postData: blogs.data,
    };
  },
  components: { MakeNewPost, PostsContainer },
  mixins: [extensions],
  mounted() {
    // $store.state.blogs.forEach((blog) => {
    //   this.postData.push(blog);
    // });
    // console.log(blogsArray);
    // blogsArray.forEach((blog) => {
    //   this.postData.push(blog);
    // });
    // console.log(this.postData);
    // blogsContainer.get().then((snapShot) => {
    //   snapShot.docs.forEach((doc) => {
    //     this.postData.push(doc.data());
    //   });
    // });
  },
});
</script>
