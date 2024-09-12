<template>
    <div class="flex relative border-b border-gray-200">
        <img class="absolute left-40 top-8" src="/logo.png" alt="Logo">
        <div class="flex mx-auto montserrat text-sm text-gray-header gap-8 my-7">
            <router-link to="/">
                <p class="hover:text-black hover:cursor-pointer">Форма</p>
            </router-link>
            <router-link to="/Previous">
                <p class="hover:text-black hover:cursor-pointer">Превью</p>
            </router-link>
        </div>
    </div>
</template>