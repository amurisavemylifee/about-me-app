<template>
  <div class="title">Обо мне</div>
  <div class="inputs-block">
    <app-input
      input-type="text"
      input-label="Имя"
      v-model="name"
      :error-text="nError"
    ></app-input>
    <app-input
      input-type="number"
      input-label="Возраст"
      v-model="age"
      :error-text="aError"
    ></app-input>
    <app-multiselect
      label="Выберите ваши интересы"
      :options="interestsMap"
      v-model="interests"
      :error-text="iError"
    ></app-multiselect>
  </div>
  <app-button
    btn-style="primary"
    @action="saveForm()"
    :is-disabled="isFieldsAreEmpty"
    >Отправить</app-button
  >
  <app-button
    btn-style="danger"
    @action="clearFields"
    :is-disabled="isFieldsAreEmpty"
    >Стереть</app-button
  >
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AppMultiselect from "@/components/AppMultiselect.vue";
import { ref, computed } from "vue";
import { useInterestsMap } from "@/use/useInterestsMap.js";

export default {
  components: { AppInput, AppButton, AppMultiselect },
  setup() {
    const store = useStore();
    const router = useRouter();

    let name = ref(store.getters.getData.name);
    let age = ref(store.getters.getData.age);
    let interests = ref(store.getters.getData.interests);
    let isFieldsAreEmpty = computed(() => {
      return !name.value && !age.value && interests.value.length <= 0
        ? true
        : false;
    });
    function clearFields() {
      name.value = "";
      age.value = "";
      nError.value = "";
      aError.value = "";
      iError.value = "";
      interests.value.splice(0, interests.value.length);
    }

    let nError = ref("");
    let aError = ref("");
    let iError = ref("");

    function saveForm() {
      nError.value = validator(name.value, "required", "name");
      aError.value = validator(age.value, "required");
      iError.value = validator(interests.value.length, "required");

      if (!nError.value && !aError.value && !iError.value) {
        store.commit("setData", {
          name: name.value,
          age: age.value,
          interests: interests.value,
        });
        router.replace("/preview");
      }
    }

    function validator(value, ...validations) {
      let errorMessage = "";
      if (validations.indexOf("required") !== -1) {
        if (!value) {
          errorMessage = "Это обязательное поле";
        }
      }
      if (validations.indexOf("name") !== -1) {
        if (!/^[a-zA-ZА-Яа-я\u0020]*$/g.test(value)) {
          errorMessage = "В имени присутствуют недопустимые символы";
        }
      }

      return errorMessage;
    }
    return {
      name,
      age,
      clearFields,
      isFieldsAreEmpty,
      nError,
      aError,
      iError,
      saveForm,
      interests,
      ...useInterestsMap(),
    };
  },
};
</script>

<style lang="scss" scoped>
.inputs-block {
  margin-bottom: 50px;
}
a.btn + a.btn {
  margin-left: 25px;
}
</style>