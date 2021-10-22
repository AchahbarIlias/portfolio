<template>
    <div class="font-sans antialiased" id="app">
  <nav class="w-screen fixed flex items-center justify-between flex-wrap bg-black p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img class="h-8 sm:h-20 mr-2 sm:mr-4 ml-0 sm:ml-12" src="./assets/logo.png" alt="">
      <span class="font-semibold text-xl tracking-tight"></span>
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-textpurple hover:border-borderpurple">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">

      </div>
      <div>
        <a href="#responsive-header" class=" no-underline block mt-4 sm:inline-block sm:mt-0 text-white sm:mx-8">Life</a>
        <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white sm:mx-8">Work Experience</a>
        <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white sm:mx-8">Skills</a>
        <a href="#responsive-header" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white sm:mx-8">Projects</a>
        <a href="#" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-black sm:ml-4 mt-4 sm:mt-0 mr-0 sm:mr-12">Contact</a>
      </div>
    </div>
  </nav>
    <Hero/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    Hero
  },
  data: function(){
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style>

</style>
