import 'firebase/auth';
import 'firebase/firestore';

import { firebase } from '@firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBGp5LpHEDcVuuDHr4mXetP48sRkjLXd-4',
  authDomain: 'blog-post-api-6b15e.firebaseapp.com',
  projectId: 'blog-post-api-6b15e',
  storageBucket: 'blog-post-api-6b15e.appspot.com',
  messagingSenderId: '103005114980',
  appId: '1:103005114980:web:1d366165ea6e513a924571',
  measurementId: 'G-D3DQ8L1SZM',
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// const auth = firebase.auth()

db.settings({ timestampsInSnapshots: true });

const testCollection = db.collection('test');

const blogsContainer = db.collection('blogs');

const blogs = {
  data: [],
  methods: {
    addBlog(blog) {
      blogs.data.push(blog);
    },
  },
};

db.collection('blogs').onSnapshot((snapShot) => {
  let changes = snapShot.docChanges();
  console.log(changes);
  changes.forEach((change) => {
    if (change.type == 'added') {
      blogs.methods.addBlog(change.doc.data());
    }
  });
});

export { db, testCollection, blogsContainer, blogs };
