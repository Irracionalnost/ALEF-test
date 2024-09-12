
<script setup>
import { inject } from 'vue';
import Person from  '../components/Person.vue';
import ChildList from '../components/ChildList.vue';

const children = inject('children');
const person = inject('person');

const saveButton = () => {
    localStorage.setItem("person",   JSON.stringify(person.value));
    localStorage.setItem("children", JSON.stringify(children.value));    
}

</script>



<template>
    <div class="mx-auto mt-16 montserrat w-1/2">  
        <Person title="Персональные данные"/>
        <ChildList />
        <button @click="saveButton" class="text-white bg-primary-blue rounded-3xl px-6 py-3 hover:bg-blue-500 active:bg-blue-700"> Сохранить </button>
    </div>
</template>