<template>
  <div>
    <textarea
      :id="id"
      v-model="code"
    ></textarea>
  </div>
</template>
<script>
import CodeMirror from "codemirror/lib/codemirror.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";

export default {
  model: {
    prop: "kataText",
    event: "changeCode",
  },
  props: {
    kataText: {
      default: "function(){\n}",
      type: String,
    },
    isCode: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      id: undefined,
      code: this.kataText
    };
  },
  methods: {
    updateCode(ev) {
      let value = ev.target.value;
      this.$emit('changeCode', value)
    }
  },
  created() {
    this.isCode ? (this.id = "code") : (this.id = "test");
  },

  mounted() {
    CodeMirror.fromTextArea(document.getElementById(this.id), {
      lineNumbers: true,
      mode: "javascript",
      theme: "material-darker",
    });
  },
};
</script>
<style lang="scss" scope>
@import "styles.scss";
</style>
