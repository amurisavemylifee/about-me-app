import { computed, ref } from "vue";

export function useInterestsMap(value) {
    let interestsValue = ref(value)
    let interestsMap = [
        { name: 'Футбол', value: 'Football' },
        { name: 'Баскетбол', value: 'Basketball' },
        { name: 'Бейсбол', value: 'Baseball' },
        { name: 'Волейбол ', value: 'Volleyball' },
        { name: 'Гребля', value: 'Rowing' },
        { name: 'Регби', value: 'Rugby' },
        { name: 'Крикет', value: 'Cricket' },
    ]

    let translatedValue = computed(() => {
        return interestsMap
            .filter((h) => {
                if (interestsValue.value.includes(h.value)) {
                    return h.name;
                }
            })
            .map((h) => h.name);
    });


    return {
        interestsMap,
        translatedValue
    }
}