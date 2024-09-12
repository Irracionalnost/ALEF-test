<script setup>
import {ref, provide} from 'vue';
import Header from './components/Header.vue';
const person = ref({name: '', age: ''});
const children = ref([]);

provide('person', person);
provide('children', children);
</script>

<template>
<div>
    <Header/>
    <router-view></router-view>
</div>
</template>

<style scoped>

</style>
