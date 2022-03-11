<template>
  <div class="title">Мои данные</div>
  <div class="card">
    {{
      $store.state.aboutMeData.name +
      "   " +
      $store.state.aboutMeData.age +
      " " +
      ageCheck($store.state.aboutMeData.age)
    }}
  </div>
  <div class="title">Мои интересы</div>
  <ul>
    <li
      v-for="item in $store.state.aboutMeData.interests"
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

export default {
  name: "Preview",
  components: {
    AppButton,
  },
  setup() {
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
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 16px;
}
.interests-list-item {
  padding: 0 0 25px 0;
}
</style>