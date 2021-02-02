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

export default Vue.extend({
  name: 'Home',
  data: () => {
    return {
      postData: [
        {
          id: '1',
          author: 'John Smith',
          title: 'Is It Easy to Find a Job That You Will Like?',
          image: 'assets/images/job.jpeg',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam est sed quibusdamc upiditate iure officia nemo iste magnam voluptatem necessitatibus amet ullam culpa deleniti accusamus, velit qui aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicingelit. Quam libero non quisquam itaque! Tempore veritatis accusantium officiis distinctio, nesciunt quas illo expedita quos non id eius nemo? Explicabo, totam delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis nesciunt ea nobis similique illum accusantium, voluptatibus, corporis temporibus molestias quaerat doloribus distinctio adipisci tempore! Corporis autem praesentium deserunt ullam.',
        },
        {
          id: '2',
          author: 'John Smith',
          title: 'What Sport Do You Like to Do?',
          image: 'assets/images/sports.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam est sed quibusdamc upiditate iure officia nemo iste magnam voluptatem necessitatibus amet ullam culpa deleniti accusamus, velit qui aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicingelit. Quam libero non quisquam itaque! Tempore veritatis accusantium officiis distinctio, nesciunt quas illo expedita quos non id eius nemo? Explicabo, totam delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis nesciunt ea nobis similique illum accusantium, voluptatibus, corporis temporibus molestias quaerat doloribus distinctio adipisci tempore! Corporis autem praesentium deserunt ullam.',
        },
        {
          id: '3',
          author: 'Musa Mukhammed',
          title: 'Books Make Us Smarter',
          image: 'assets/images/books.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam est sed quibusdamc upiditate iure officia nemo iste magnam voluptatem necessitatibus amet ullam culpa deleniti accusamus, velit qui aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicingelit. Quam libero non quisquam itaque! Tempore veritatis accusantium officiis distinctio, nesciunt quas illo expedita quos non id eius nemo? Explicabo, totam delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis nesciunt ea nobis similique illum accusantium, voluptatibus, corporis temporibus molestias quaerat doloribus distinctio adipisci tempore! Corporis autem praesentium deserunt ullam.',
        },
        {
          id: '4',
          author: 'Ben Askren',
          title: 'Enjoy Your Life',
          image: 'assets/images/sunset.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam est sed quibusdamc upiditate iure officia nemo iste magnam voluptatem necessitatibus amet ullam culpa deleniti accusamus, velit qui aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicingelit. Quam libero non quisquam itaque! Tempore veritatis accusantium officiis distinctio, nesciunt quas illo expedita quos non id eius nemo? Explicabo, totam delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis nesciunt ea nobis similique illum accusantium, voluptatibus, corporis temporibus molestias quaerat doloribus distinctio adipisci tempore! Corporis autem praesentium deserunt ullam.',
        },
        {
          id: '5',
          author: 'Musa Mukhammed',
          title: 'Technologies Nowadys',
          image: 'assets/images/database-blue.png',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam est sed quibusdamc upiditate iure officia nemo iste magnam voluptatem necessitatibus amet ullam culpa deleniti accusamus, velit qui aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicingelit. Quam libero non quisquam itaque! Tempore veritatis accusantium officiis distinctio, nesciunt quas illo expedita quos non id eius nemo? Explicabo, totam delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis nesciunt ea nobis similique illum accusantium, voluptatibus, corporis temporibus molestias quaerat doloribus distinctio adipisci tempore! Corporis autem praesentium deserunt ullam.',
        },
      ],
    };
  },
  components: { MakeNewPost, PostsContainer },
  mixins: [extensions],
});
</script>
