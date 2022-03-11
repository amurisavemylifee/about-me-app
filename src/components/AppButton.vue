<template>
  <a
    :class="['btn', btnStyle, btnType, { disabled: isDisabled ? true : false }]"
    @click="action"
    ><slot></slot
  ></a>
</template>

<script>
export default {
  emits: ["action"],
  props: {
    btnStyle: {
      type: String,
      default: "primary",

      validator: (value) => {
        return ["primary", "danger"].indexOf(value) !== -1;
      },
    },
    btnType: {
      type: String,
      default: "filled",
      validator: (value) => {
        return ["filled", "outline"].indexOf(value) !== -1;
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    function action() {
      if (!props.isDisabled) {
        ctx.emit("action");
      }
    }
    return {
      action,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  box-shadow: -1px 5px 5px 0px rgba(0, 0, 0, 0.301);
  transition-duration: 0.5s;
  &:hover {
    box-shadow: -1px 5px 5px 0px rgba(0, 0, 0, 0.5);
  }
}
.danger {
  --color: #ef5350;
}
.primary {
  --color: #66bb6a;
}
.filled {
  background-color: var(--color);
  border: 0;
  color: white;
}
.disabled {
  --color: #eceff1;
  color: rgba(0, 0, 0, 0.301);
  cursor: not-allowed;
}
.outline {
  border: var(--color) 2px solid;
  background-color: transparent;
}
</style>