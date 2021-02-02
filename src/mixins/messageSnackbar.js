import Vue from 'vue';

import MessageSnackbar from '@/components/MessageSnackbar';

// <message-snackbar
//   v-model="$data.$_mixin_messageSnackbar_showing"
//   :type="$data.$_mixin_messageSnackbar_type"
//   :message="$data.$_mixin_messageSnackbar_message"
//   :action="$data.$_mixin_messageSnackbar_action"
//   :timeout="$data.$_mixin_messageSnackbar_timeout"
//   @result="result = $event"
// />

export const MessageSnackbarType = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
};

export default Vue.extend({
  components: {
    MessageSnackbar,
  },
  data: () => ({
    $_mixin_messageSnackbar_showing: false,
    $_mixin_messageSnackbar_type: '',
    $_mixin_messageSnackbar_message: '',
    $_mixin_messageSnackbar_action: null,
    $_mixin_messageSnackbar_timeout: null,
  }),
  methods: {
    $_mixin_messageSnackbar_show(type, message, action = null, timeout = 5000) {
      this.$data.$_mixin_messageSnackbar_type = type;
      this.$data.$_mixin_messageSnackbar_message = message;
      this.$data.$_mixin_messageSnackbar_action = action;
      this.$data.$_mixin_messageSnackbar_timeout = timeout;
      this.$data.$_mixin_messageSnackbar_showing = true;
    },
    $_mixin_messageSnackbar_hide() {
      this.$data.$_mixin_messageSnackbar_type = '';
      this.$data.$_mixin_messageSnackbar_message = '';
      this.$data.$_mixin_messageSnackbar_action = null;
      this.$data.$_mixin_messageSnackbar_timeout = null;
      this.$data.$_mixin_messageSnackbar_showing = false;
    },
  },
});
