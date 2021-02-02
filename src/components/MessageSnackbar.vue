<template>
  <v-snackbar
    class="message-snackbar"
    :timeout="timeout"
    :value="value"
    @input="$emit('input', $event)"
  >
    {{ message }}
    <template #action="{ attrs }">
      <v-btn
        v-if="action !== null"
        v-bind="attrs"
        text
        :color="`${type} lighten-2`.trim()"
        @click="
          $emit('result', action.toLowerCase());
          $emit('input', false);
        "
      >
        {{ action }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import Vue from 'vue';

export default Vue.component(
  'message-snackbar',
  Vue.extend({
    name: 'MessageSnackbar',
    props: {
      value: { type: Boolean, default: true },
      type: { type: String, default: '' },
      message: { type: String, default: '' },
      action: { type: String, default: null },
      timeout: { type: [Number, String], default: null },
    },
  }),
);
</script>
