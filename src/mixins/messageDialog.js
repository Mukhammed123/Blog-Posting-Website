import Vue from 'vue';

import MessageDialog from '@/components/MessageDialog';

/*
<message-dialog
  v-model="$data.$_mixin_messageDialog_opened"
  :type="$data.$_mixin_messageDialog_type"
  :title="$data.$_mixin_messageDialog_title"
  :message="$data.$_mixin_messageDialog_message"
  :yes-button="$data.$_mixin_messageDialog_yesButton"
  :no-button="$data.$_mixin_messageDialog_noButton"
  :cancel-button="$data.$_mixin_messageDialog_cancelButton"
  :persistent="$data.$_mixin_messageDialog_persistent"
  @yes="yes()"
  @no="no()"
  @cancel="cancel()"
/>
*/

export const MessageDialogType = {
  info: 'info',
  success: 'success',
  question: 'question',
  warning: 'warning',
  error: 'error',
};

const buttons = {
  ok: { label: 'OK', action: 'ok' },
  cancel: { label: 'Cancel', action: 'cancel' },
  abort: { label: 'Abort', action: 'abort' },
  retry: { label: 'Retry', action: 'retry' },
  ignore: { label: 'Ignore', action: 'ignore' },
  yes: { label: 'Yes', action: 'yes' },
  no: { label: 'No', action: 'no' },
};

export const MessageDialogButtons = {
  ok: { yes: buttons.ok, no: null, cancel: null },
  okCancel: { yes: buttons.ok, no: null, cancel: buttons.cancel },
  AbortRetryIgnore: { yes: buttons.retry, no: buttons.abort, cancel: buttons.ignore },
  yesNoCancel: { yes: buttons.yes, no: buttons.no, cancel: buttons.cancel },
  yesNo: { yes: buttons.yes, no: buttons.no, cancel: null },
  retryCancel: { yes: buttons.retry, no: null, cancel: buttons.cancel },
};

export default Vue.extend({
  components: {
    MessageDialog,
  },
  data: () => ({
    $_mixin_messageDialog_opened: false,
    $_mixin_messageDialog_type: '',
    $_mixin_messageDialog_title: '',
    $_mixin_messageDialog_message: '',
    $_mixin_messageDialog_yesButton: null,
    $_mixin_messageDialog_noButton: null,
    $_mixin_messageDialog_cancelButton: null,
    $_mixin_messageDialog_persistent: false,
  }),
  methods: {
    $_mixin_messageDialog_open(type, title, message, buttons, persistent = true) {
      this.$data.$_mixin_messageDialog_type = type;
      this.$data.$_mixin_messageDialog_title = title;
      this.$data.$_mixin_messageDialog_message = message;
      this.$data.$_mixin_messageDialog_yesButton = buttons.yes;
      this.$data.$_mixin_messageDialog_noButton = buttons.no;
      this.$data.$_mixin_messageDialog_cancelButton = buttons.cancel;
      this.$data.$_mixin_messageDialog_persistent = persistent;
      this.$data.$_mixin_messageDialog_opened = true;
    },
  },
});
