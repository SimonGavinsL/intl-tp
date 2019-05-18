<template>
  <div class="selectable-cell">
    <a-radio-group @change="onChange" v-model="value">
      <a-radio value="categ">Categorical</a-radio>
      <a-radio value="char">Character</a-radio>
      <a-radio value="num">Numeric</a-radio>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    option: String
  },
  data() {
    return {
      value: this.option
    };
  },
  methods: {
    onChange() {
      this.$emit("change", this.value);
    }
  }
};
</script>
