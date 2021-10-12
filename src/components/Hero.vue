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
      
      <div class="mx-auto justify-center mt-20 flex flex-col lg:flex-row ">

      <div class="mx-auto text-center lg:mx-0 lg:mt-6 h-8 w-40 bg-backgroundpurple rounded-xl">
        <p class="text-2xl text-white">2016</p>
      </div>

      <div class="lg:mx-9 mx-auto h-20 w-2 bg-backgroundpurple transform lg:rotate-90"></div>

      <div class="sm:w-80 lg:mx-0 mx-auto bg-backgroundpurple w-auto h-auto p-4 rounded-2xl	">
        <p class="mt-2 text-2xl text-white">Network and IT</p>
        <p class="mt-2 text-lg text-white">COLOMAplus</p>
      </div>

      <div class="lg:mx-9 mx-auto h-20 w-2 bg-backgroundpurple transform lg:rotate-90"></div>

      <div class="mx-auto text-center lg:mx-0 lg:mt-6 h-8 w-40 bg-backgroundpurple rounded-xl">
        <p class="text-2xl text-white">2018</p>
      </div>

      <div class="lg:mx-9 mx-auto h-20 w-2 bg-backgroundpurple transform lg:rotate-90"></div>

      <div class="sm:w-80 lg:mx-0 mx-auto bg-backgroundpurple w-auto h-auto p-4 rounded-2xl	">
        <p class="mt-2 text-2xl text-white">Applied Computer Science</p>
        <p class="mt-2 text-md text-white">(Software Development)</p>
        <p class="mt-2 text-lg text-white">UC Leuven-Limburg</p>
      </div>

      <div class="lg:mx-9 mx-auto h-20 w-2 bg-backgroundpurple transform lg:rotate-90"></div>

      <div class="mx-auto text-center lg:mx-0 lg:mt-6 h-8 w-40 bg-backgroundpurple rounded-xl">
        <p class="text-2xl text-white">Now</p>
      </div>
    </div>
    </section>

    <section class="mx-4 text-center mt-40 flex-col justify-center">
      <h1 class="mt-2 text-5xl sm:text-7xl text-textgreyish">Skills</h1>
      <p class="mt-2 text-lg text-textpurple">...</p>
      <div class="grid gap-4 grid-cols-2 justify-center mt-20 ">

        <div class="h-auto w-auto border-8 border-jsyellow p-4">
          <img class="h-20 mx-auto" src="../assets/javascript-logo.png" alt="">
          <h2 class="text-white">JavaScript</h2>
        </div>

        <div class="h-auto w-auto border-8 border-javared p-4">
          <img class="h-20 mx-auto" src="../assets/java-logo.png" alt="">
          <h2 class="text-white">Java</h2>
        </div>

        <div class="h-auto w-auto border-8 border-csharppurple p-4">
          <img class="h-20 mx-auto" src="../assets/csharp.svg" alt="">
          <h2 class="text-white">C#</h2>
        </div>

        <div class="h-auto w-auto border-8 border-phppurple p-4">
          <img class="h-20 mx-auto" src="../assets/php-logo.png" alt="">
          <h2 class="text-white">PHP</h2>
        </div>

        <div class="h-auto w-auto border-8 border-cplusplusblue p-4">
          <img class="h-20 mx-auto" src="../assets/cplusplus-logo.png" alt="">
          <h2 class="text-white">C++</h2>
        </div>
      </div>
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
