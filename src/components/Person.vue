<script setup>
import {inject} from 'vue'
defineProps({
    title: String
})
const person = inject('person');
</script>

<template>
    <h1 class="text-base mb-4 font-semibold">{{title}}</h1> 
    <div class="flex flex-col border border-gray-200 rounded px-3 my-4">
        <span class="text-gray-header outline-none">Имя</span>
        <input v-model="person.name" class="outline-none" type="text">
    </div>
    <div class="flex flex-col border border-gray-200 rounded px-3 my-4">
        <span class="text-gray-header">Возраст</span>
        <input v-model="person.age" class="outline-none" type="number" :min="0" :max="99">
    </div>
</template>