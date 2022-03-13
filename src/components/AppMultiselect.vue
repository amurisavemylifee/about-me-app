<template>
  <div
    :class="{ input_wrapper: true, warning: errorText }"
    @click="isOpened = !isOpened"
  >
    <svg
      height="16px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 128 128"
      width="16px"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :class="['icon', { 'icon--hidden': isOpened }]"
    >
      <g>
        <line
          style="
            fill: none;
            stroke: #2f3435;
            stroke-width: 12;
            stroke-linecap: square;
            stroke-miterlimit: 10;
          "
          x1="111"
          x2="64"
          y1="40.5"
          y2="87.499"
        />
        <line
          style="
            fill: none;
            stroke: #2f3435;
            stroke-width: 12;
            stroke-linecap: square;
            stroke-miterlimit: 10;
          "
          x1="64"
          x2="17"
          y1="87.499"
          y2="40.5"
        />
      </g>
    </svg>
    <div class="label">{{ label }}</div>
    <input type="text" class="input" readonly :value="translatedValue" />
    <small v-if="errorText">{{ errorText }}</small>
    <div :class="['dropdown', { 'dropdown--hidden': !isOpened }]" @click.stop>
      <div class="input_wrapper">
        <input type="text" class="input" v-model="searchValue" />
      </div>
      <div class="options-wrapper">
        <div class="option" v-for="item in filteredList" :key="item.value">
          <input
            type="checkbox"
            :id="item.value"
            name="group"
            :value="item.value"
            v-model="value"
          />
          <label :for="item.value">{{ item.name }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, watch, computed } from "vue";
import { useInterestsMap } from "@/use/useInterestsMap.js";

export default {
  name: "AppMultiselect",
  emits: ["update:modelValue"],
  props: {
    options: {
      type: Array,
      default: () => {
        return [{ name: "default", value: "default" }];
      },
    },
    modelValue: {
      type: Array,
      default: () => {
        return ["default"];
      },
    },
    label: {
      type: String,
      default: "Label",
    },
    errorText: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    let isOpened = ref(false);
    let value = ref(props.modelValue);
    let searchValue = ref("");

    let filteredList = computed(() => {
      if (searchValue.value) {
        return props.options.filter((h) => {
          return h.name.includes(searchValue.value);
        });
      } else {
        return props.options;
      }
    });

    watch(value, (newValue) => {
      emit("update:modelValue", newValue);
    });
    return {
      isOpened,
      value,
      searchValue,
      filteredList,
      ...useInterestsMap(value),
    };
  },
};
</script>

<style lang="scss" scoped>
.options-wrapper {
  max-height: 200px;
  overflow-y: scroll;
}
.input_wrapper {
  position: relative;
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
  cursor: default;
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
.dropdown {
  position: absolute;
  padding: 15px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  background: white;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translate(0, 100%);
  cursor: default;
  &--hidden {
    display: none;
  }
}
.option {
  padding: 5px;
  color: black;
}
.icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%);
  &--hidden {
    display: none;
  }
}
.multiselect_wrapper {
  position: relative;
  margin-bottom: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px 27px;
  cursor: pointer;
}
</style>