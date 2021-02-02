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

export default Vue.component(
  'profile',
  Vue.extend({
    name: 'Profile',
    components: { MakeNewPost, PostsContainer },
    data: () => {
      return {
        postData: [
          {
            id: '1',
            author: 'Musa Mukhammed',
            title: 'Technologies Nowadys',
            image: 'assets/images/database-blue.png',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam est sed quibusdamc upiditate iure officia nemo iste magnam voluptatem necessitatibus amet ullam culpa deleniti accusamus, velit qui aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicingelit. Quam libero non quisquam itaque! Tempore veritatis accusantium officiis distinctio, nesciunt quas illo expedita quos non id eius nemo? Explicabo, totam delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis nesciunt ea nobis similique illum accusantium, voluptatibus, corporis temporibus molestias quaerat doloribus distinctio adipisci tempore! Corporis autem praesentium deserunt ullam.',
          },
          {
            id: '2',
            author: 'Musa Mukhammed',
            title: 'Books Make Us Smarter',
            image: 'assets/images/books.jpg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam est sed quibusdamc upiditate iure officia nemo iste magnam voluptatem necessitatibus amet ullam culpa deleniti accusamus, velit qui aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicingelit. Quam libero non quisquam itaque! Tempore veritatis accusantium officiis distinctio, nesciunt quas illo expedita quos non id eius nemo? Explicabo, totam delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis nesciunt ea nobis similique illum accusantium, voluptatibus, corporis temporibus molestias quaerat doloribus distinctio adipisci tempore! Corporis autem praesentium deserunt ullam.',
          },
        ],
      };
    },
  }),
);
</script>
