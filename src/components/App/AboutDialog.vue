<template>
  <v-dialog class="about-dialog" max-width="360px" :value="value" @input="$emit('input', $event)">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
      <slot v-bind="scope" :name="slot" />
    </template>
    <v-card>
      <v-toolbar color="primary" dark dense flat>
        <v-icon left>mdi-information</v-icon>
        <v-toolbar-title>About</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container class="d-flex justify-center pb-0" fluid>
        <v-icon x-large :color="$store.state.app.themeColor">
          mdi-{{ $store.state.app.icon }}
        </v-icon>
      </v-container>
      <v-card-title class="justify-center text-h5">{{ $store.state.app.name }}</v-card-title>
      <v-card-subtitle class="text-center text-subtitle-1">
        Version: {{ $store.state.app.package.version }}
      </v-card-subtitle>
      <v-card-text class="text--primary">
        <div class="font-weight-medium">Developers:</div>
        <ul>
          <li
            v-for="(contributor, i) in $store.state.app.package.contributors"
            :key="`packageContributors-${i}`"
          >
            {{ contributor.name }}
            &lt;
            <a class="d-inline-block" :href="`mailto:${contributor.email}`">
              {{ contributor.email }}
            </a>
            &gt;
          </li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-container class="pa-0 d-flex justify-center" fluid>
          <div class="text-caption">
            Copyright ©
            <a class="d-inline-block" target="_blank" :href="$store.state.app.package.author.url">
              {{ $store.state.app.package.author.name }}
            </a>
            {{ new Date().getFullYear() }}
          </div>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue';

import extensions from '@/mixins/extensions';

export default Vue.component(
  'about-dialog',
  Vue.extend({
    name: 'AboutDialog',
    mixins: [extensions],
    props: {
      value: { type: Boolean, default: false },
    },
    methods: {
      close() {
        this.$emit('input', false);
      },
    },
  }),
);
</script>
