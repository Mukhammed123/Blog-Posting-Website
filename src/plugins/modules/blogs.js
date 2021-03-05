// import axios from 'axios';
import { db } from '@/firebase';

const state = {
  blogs: [
    // {
    //   name: 'Ben Askren',
    //   image: 'sunset.jpg',
    //   title: 'Enjoy Your Life',
    //   text:
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam est sed quibusdamc upiditate iure officia nemo iste magnam voluptatem necessitatibus amet ullam culpa deleniti accusamus, velit qui aspernatur voluptate. Lorem ipsum dolor sit, amet consectetur adipisicingelit. Quam libero non quisquam itaque! Tempore veritatis accusantium officiis distinctio, nesciunt quas illo expedita quos non id eius nemo? Explicabo, totam delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur blanditiis nesciunt ea nobis similique illum accusantium, voluptatibus, corporis temporibus molestias quaerat doloribus distinctio adipisci tempore! Corporis autem praesentium deserunt ullam.',
    // },
  ],
};

const getters = {
  allBlogs: (state) => state.blogs,
  filteredBlogs: (state) => {
    var allblogs = state.blogs;
    allblogs.filter((blog) => blog.name === 'Mukhammed Musa');
    return allblogs;
  },
};

const actions = {
  async fetchBlogs({ commit }) {
    var blogsContainer = [];
    // db.collection('blogs')
    //   .get()
    //   .then((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //       blogsContainer.push(doc.data());
    //     });
    //   });
    db.collection('blogs').onSnapshot((Snapshot) => {
      let changes = Snapshot.docChanges();
      changes.forEach((change) => {
        console.log(change.type);
        if (change.type == 'added') {
          // blogsContainer.unshift();
          var flag = true;
          for(var j=0; j <state.blogs.length; j++) {
            if(state.blogs[j].id == change.doc.id){
              flag = false;
              break;
            }
          }
          if(flag)
            commit('addBlog', { ...change.doc.data(), id: change.doc.id });
        } else if (change.type == 'removed') {
          blogsContainer = [];
          for (var i = 0; i < state.blogs.length; i++) {
            if (state.blogs[i].id != change.doc.id) {
              blogsContainer.push(state.blogs[i]);
            }
          }
          commit('setBlogs', blogsContainer);
        }
      });
    });
    // console.log(blogsContainer);
    // commit('setBlogs', blogsContainer);
  },
};

const mutations = {
  setBlogs: (state, blogs) => (state.blogs = blogs),
  addBlog: (state, blog) => state.blogs.unshift(blog),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
