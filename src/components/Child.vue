<script setup>
import {computed} from 'vue';

const props = defineProps({
    childId: Number,
    items: Array
});
const items_index = computed(()=>{
    return props.items.findIndex((item)=>item.id === props.childId)
})
const existChild = computed(() => {
    const ind = props.items.findIndex((item)=>item.id === props.childId);
    return ind !== -1;
});

const emit = defineEmits(['deleteChild']);

</script>
<template>
    <div v-if="existChild" class="flex items-center justify-between">
        <div class="flex flex-col border border-gray-200 rounded px-3 mb-4 w-5/12">
            <span class="text-gray-header outline-none">Имя</span>
            <input v-model="items[items_index].name" class="outline-none" type="text">
        </div>
        <div class="flex flex-col border border-gray-200 rounded px-3 mb-4 w-5/12">
            <span class="text-gray-header">Возраст</span>
            <input v-model="items[items_index].age" class="outline-none" type="number" :min="0" :max="99">
        </div>
        <button @click="()=>emit('deleteChild', childId)" class="text-primary-blue hover:text-blue-700">Удалить</button>
    </div>
</template>