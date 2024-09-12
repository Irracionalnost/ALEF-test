<script setup>
import { inject } from 'vue';
import Child from './Child.vue';

const items = inject('children');

const addChild = () => {
    items.value.push({id: items.value.length + 1, name: '', age: ''});
}

const deleteChild = (id) => {
    const ind = items.value.findIndex((item)=>item.id === id);
    items.value.splice(ind, 1);
}

</script>  

<template>
    <div class="mt-16">
        <div class="flex justify-between items-center">
            <div class="text-base font-semibold mb-6 flex-1">
                <h1 v-if="items.length > 0 ">Дети (макс.5)</h1>
            </div>
            <button v-if="items.length < 5" class="mb-6 float-right">
                <div @click="addChild" class="flex items-center border-2 border-primary-blue rounded-3xl px-6 py-2 text-primary-blue hover:bg-blue-300 hover:text-white  active:bg-blue-600 transition">
                    <img class="mr-1" src="/plus.png" alt="+">
                    <button>Добавить ребенка</button>
                </div>
            </button>
        </div>
        <div v-auto-animate>
            <Child v-for="item in items" :key="item.id" :items="items" :child-id="item.id" @delete-child="deleteChild"/>
        </div>
    </div> 
</template>