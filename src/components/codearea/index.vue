<template>
  <div>
    <textarea :id="id" v-model="kataText"></textarea>
  </div>
</template>
<script>
import CodeMirror from "codemirror/lib/codemirror.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";

export default {
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
    }
  },
    created() {
      this.isCode ? this.id = "code" : this. id = "test";
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
