<template>
  <div class="explore" style="overflow: scroll">
    <v-layout row wrap class="pa-4">
      <v-flex
        class="xl4 md4 sm6 xs12 pa-3"
        style="overflow: hidden"
        v-for="post in postData"
        :key="post.id"
      >
        <v-card style="height: 100%">
          <v-img :src="getUrl(post.img)" max-height="280" aspect-ratio="1" contain></v-img>
          <h3 class="pl-1 mt-1">{{ post.title }}</h3>
          <p class="pa-2 mb-0">{{ post.description }}</p>
          <v-container class="justify-center">
            <v-btn color="yellow lighten-2">Learn More</v-btn>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Explore',
  data: () => {
    return {
      postData: [
        {
          id: '1',
          title: 'Sports',
          img: 'assets/images/sport-blogs.jpg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
        {
          id: '2',
          title: 'Technology',
          img: 'assets/images/technology.jpg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
        {
          id: '3',
          title: 'Fashion',
          img: 'assets/images/fashion.jpg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
        {
          id: '4',
          title: 'Games',
          img: 'assets/images/games.jpg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
        {
          id: '5',
          title: 'Logic',
          img: 'assets/images/logic.jpg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
        {
          id: '6',
          title: 'History',
          img: 'assets/images/history.jpg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
        {
          id: '7',
          title: 'Anime',
          img: 'assets/images/anime.jpg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
        {
          id: '8',
          title: 'Studies/Universities',
          img: 'assets/images/universities.jpeg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
        {
          id: '9',
          title: 'Merchandises',
          img: 'assets/images/merch.jpg',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel magnam id nesciunt cum aperiam voluptatibus, iusto minima labore eligendi sapiente doloremque odit possimus iure suscipit...',
        },
      ],
    };
  },
  methods: {
    getUrl(url) {
      return require('@/' + url);
    },
  },
});
</script>
