import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import neostandard from 'neostandard';

export default [
  // JavaScript
  js.configs.recommended,
  // standard (neostandard は eslint-config-standard の後継。スタイル系は prettier に委譲する)
  ...neostandard({
    env: ['browser'],
    files: ['**/*.{js,cjs,mjs,vue}'],
    noStyle: true,
  }),
  // Vue (このプロジェクトは Vue 2 のため vue2 用プリセットを使う)
  ...pluginVue.configs['flat/vue2-recommended'],
  // Formatter
  prettier,
  {
    rules: {
      'vue/order-in-components': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
];
