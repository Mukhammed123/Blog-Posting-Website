import Vue from 'vue';

import * as extensions from '@/extensions';

export default Vue.extend({
  data: () => {
    const data = new Object();
    for (const key of Reflect.ownKeys(extensions)) {
      if (typeof key !== 'string' || key === '__esModule') continue;
      data[`${key}$`] = extensions[key];
    }
    return data;
  },
});
