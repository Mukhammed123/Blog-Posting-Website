<template>
  <v-dialog
    class="message-dialog"
    max-width="360px"
    :persistent="persistent"
    :value="value"
    @input="$emit('input', $event)"
  >
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
      <slot v-bind="scope" :name="slot" />
    </template>
    <v-card>
      <v-card-title>
        <v-icon large left :color="type">{{ icon }}</v-icon>
        {{ title }}
      </v-card-title>
      <v-card-text class="text-body-1 text--primary">{{ message }}</v-card-text>
      <v-card-actions>
        <v-btn
          v-if="cancelButton !== null"
          color="warning"
          text
          @click="
            $emit(cancelButton.action);
            $emit('input', false);
          "
        >
          {{ cancelButton.label }}
        </v-btn>
        <v-spacer />
        <v-btn
          v-if="noButton !== null"
          color="error"
          text
          @click="
            $emit(noButton.action);
            $emit('input', false);
          "
        >
          {{ noButton.label }}
        </v-btn>
        <v-btn
          v-if="yesButton !== null"
          color="primary"
          text
          @click="
            $emit(yesButton.action);
            $emit('input', false);
          "
        >
          {{ yesButton.label }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue';

export default Vue.component(
  'message-dialog',
  Vue.extend({
    name: 'MessageDialog',
    props: {
      value: { type: Boolean, default: true },
      type: { type: String, default: '' },
      title: { type: String, default: '' },
      message: { type: String, default: '' },
      yesButton: { type: Object, default: null },
      noButton: { type: Object, default: null },
      cancelButton: { type: Object, default: null },
      persistent: { type: Boolean, default: false },
    },
    computed: {
      color() {
        const type = this.type.trim().toLowerCase();
        switch (type) {
          case 'info':
            return 'info';
          case 'success':
            return 'success';
          case 'question':
            return 'accent';
          case 'warning':
            return 'warning';
          case 'error':
            return 'error';
          default:
            return '';
        }
      },
      icon() {
        const type = this.type.trim().toLowerCase();
        switch (type) {
          case 'info':
            return 'mdi-information';
          case 'success':
            return 'mdi-check-circle';
          case 'question':
            return 'mdi-help-circle';
          case 'warning':
            return 'mdi-alert-circle';
          case 'error':
            return 'mdi-close-circle';
          default:
            return '';
        }
      },
    },
  }),
);
</script>
