<template>
  <div class="preview-wrapper">
    <div class="title">Мои данные</div>
    <div class="card">
      {{
        $store.state.aboutMeData.name +
        ", " +
        $store.state.aboutMeData.age +
        " "
      }}<strong>{{ ageCheck($store.state.aboutMeData.age) }}</strong>
    </div>
  </div>
  <div class="title">Мои интересы</div>
  <ul>
    <li
      v-for="item in translatedValue"
      :key="item.value"
      class="interests-list-item"
    >
      {{ item }}
    </li>
  </ul>
  <app-button
    btn-type="outline"
    btn-style="primary"
    @action="$router.push('/edit')"
    >Редактировать</app-button
  >
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import { useInterestsMap } from "@/use/useInterestsMap.js";
import { useStore } from "vuex";

export default {
  name: "Preview",
  components: {
    AppButton,
  },
  setup() {
    let store = useStore();

    function ageCheck(age) {
      if (age.slice(-2, -1)[0] == "1") {
        return "лет";
      } else if (["1"].includes(age.slice(-1))) {
        return "год";
      } else if (["2", "3", "4"].includes(age.slice(-1))) {
        return "года";
      }
      return "лет";
    }
    return {
      ageCheck,
      ...useInterestsMap(store.getters.getData.interests),
    };
  },
};
</script>

<style lang="scss" scoped>
.preview-wrapper {
  font-size: 24px;
}
.card {
  margin-bottom: 16px;
}
.interests-list-item {
  text-align: center;
  padding: 15px 0;
  border-radius: 10px;
  border: 1px #f1f1f1 solid;
  margin-bottom: 5px;
}
strong {
  font-weight: bold;
}
</style>