import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    inputRules: {
      required(value) {
        if (typeof value === 'string') return value.trim().length > 0 ? true : 'Required';
        return value !== undefined && value !== null ? true : 'Required';
      },
      email(value) {
        // Reference: https://bit.ly/3hU8c2f
        const pattern =
          '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\' +
          's@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,' +
          '3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
        if (!new RegExp(pattern).test(value)) return 'Invalid address format';
        return true;
      },
      password(value) {
        if (!/^[\x20-\x7e]+$/.test(value))
          return 'Only use 0~9, A~Z, a~z and common punctuation characters';
        else if (value.length < 6) return 'Use 6 characters or more for your password';
        return true;
      },
    },
  }),
});
