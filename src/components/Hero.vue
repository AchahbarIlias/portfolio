<template>
  <main class="bg-backgrounddark w-fill h-fill py-4">

    <section class="mx-4 text-center mt-40 flex-col justify-center">
      <h1 class="mt-2 text-5xl sm:text-7xl text-textgreyish">Ilias Achahbar</h1>
      <p class="mt-2 text-lg text-textpurple">Full Stack Web Developer</p>
    </section>

    <section class="mx-4 text-center mt-40 flex-col justify-center">
      <h1 class="mt-2 text-5xl sm:text-7xl text-textgreyish">Currulicum Vitea</h1>
      <p class="mt-2 text-lg text-textpurple">Life and Work</p>
      <div class="grid gap-4 justify-center mt-20 mx-10">

        <div class="h-auto w-auto bg-white p-4">
          <img class="mx-auto" src="../assets/emmaus.png" alt="">
          <h2 class="px-4">Intern • IT Department • Emmaüs vzw</h2>
        </div>

        <div class="h-auto w-auto bg-white p-4">
          <img class="mx-auto" src="../assets/emmaus.png" alt="">
          <h2 class="px-4">Administrative Work • IT Department • Emmaüs vzw</h2>
        </div>

        <div class="h-auto w-auto bg-white p-4">
          <img class="mx-auto" src="../assets/maarten.png" alt="">
          <h2 class="px-4">Cleaner • Cleaning Department • Sint-Maarten Mechelen</h2>
        </div>

      </div>
    </section>

    <section class="mx-4 text-center mt-40 flex-col justify-center">
      <h1 class="mt-2 text-5xl sm:text-7xl text-textgreyish">Career</h1>
      <p class="mt-2 text-lg text-textpurple">Timeline of studying</p>
      <div class="mt-4 mx-auto h-40 w-2 bg-backgroundpurple"></div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'Hero',
}
</script>


<style scoped>

</style>
