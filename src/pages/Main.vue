<script setup>
import NavigationBar from "../components/NavigationBar.vue";
import AppBar from "../components/AppBar.vue";
import BreadCrumbs from "../components/ui-elements/BreadCrumbs.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="flex h-screen">
    <div class="fixed top-0 left-0 h-screen">
      <NavigationBar />
    </div>
    <div class="bg-[#1F2937] w-full ml-[16rem] flex flex-col">
      <div class="sticky top-0 w-full z-10">
        <AppBar />
      </div>
      <div class="flex-1  overflow-y-auto" style="scrollbar-width: none">
        <BreadCrumbs />
        <router-view class="w-full px-4"></router-view>
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>
