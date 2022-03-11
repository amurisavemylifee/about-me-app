<template>
  <div :class="{ input_wrapper: true, warning: errorText }">
    <div class="label">{{ Label }}</div>
    <input
      :type="inputType"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <small v-if="errorText">{{ errorText }}</small>
  </div>
</template>
  
<script>
import { ref } from "vue";

export default {
  name: "AppInput",
  emits: ["update:modelValue"],
  props: {
    inputLabel: {
      type: String,
      default: "Label",
    },
    modelValue: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    errorText: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const Label = ref(props.inputLabel).value;

    return {
      Label,
    };
  },
};
</script>

<style lang="scss" scoped>
.input_wrapper {
  margin-bottom: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px;
}
.input {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  &:focus {
    outline: 0;
  }
}
.label {
  font-size: 13px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.48);
  user-select: none;
}
.warning {
  border: 1px solid #ff0000;
  color: #ff0000;
  .label {
    color: #ff0000;
  }
}
small {
  font-size: 10px;
  color: #ff0000;
}
</style>