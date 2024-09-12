<script setup>
const person = JSON.parse(localStorage.getItem('person'));
const children = JSON.parse(localStorage.getItem('children'));
</script>
<template>
    <div class="w-1/2 mx-auto mt-16 montserrat font-medium">
        <h1 class="mb-4">Персональные данные</h1>
        <p class="font-semibold">{{ person.name }}, {{ person.age }} лет</p>
        <div v-if="children.length > 0">
            <h1 class="mt-12">Дети</h1>
            <div class="flex flex-col">
                <p class="font-semibold mt-6 bg-gray-100 mt-4 px-4 py-2 rounded-md w-max" v-for="item in children" :key="item.id">{{ item.name }}, {{ item.age }} лет</p>
            </div>
        </div>   
    </div>
</template>