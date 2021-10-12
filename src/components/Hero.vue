<template>
  <main class="bg-backgrounddark w-fill h-fill py-4">

    <section class="mx-4 text-center mt-40 flex-col justify-center">
      <h1 class="mt-2 text-5xl sm:text-7xl text-textgreyish">Ilias Achahbar</h1>
      <p class="mt-2 text-lg text-textpurple">Full Stack Web Developer</p>
    </section>

    <section class="mx-4 text-center mt-40 flex-col justify-center">
      <h1 class="mt-2 text-5xl sm:text-7xl text-textgreyish">Life and Work</h1>
      <p class="mt-2 text-lg text-textpurple">An insight into my life</p>


      <div class="bg-backgroundpurple mt-10 text-textgreyish font-extrabold">
        <h2>#- - - Biography - - -#</h2>
      </div>

      <div class="bg-backgroundpurple mt-4 text-textgreyish p-6 mx-6 md:text-lg font-semibold">
        <p>Student in Leuven who lives in Mechelen, Belgium. I am in my graduation year at the UCLL studying Applied Information Technology.</p>
        <p class="mt-2">Currently fascinated by web development and all things around it.</p>
      </div>


      <div class="bg-backgroundpurple mt-10 text-textgreyish font-extrabold">
        <h2>#- - - Work Experience - - -#</h2>
      </div>

      <div class="grid gap-4 justify-center mt-4 mx-6">

        <div class="h-auto w-auto bg-white p-4 border-4 border-borderpurple font-semibold">
          <img class="mx-auto" src="../assets/emmaus.png" alt="">
          <h2 class="px-4">Intern • IT Department • Emmaüs vzw</h2>
        </div>

        <div class="h-auto w-auto bg-white p-4 border-4 border-borderpurple font-semibold">
          <img class="mx-auto" src="../assets/emmaus.png" alt="">
          <h2 class="px-4">Administrative Work • IT Department • Emmaüs vzw</h2>
        </div>

        <div class="h-auto w-auto bg-white p-4 border-4 border-borderpurple font-semibold">
          <img class="mx-auto" src="../assets/maarten.png" alt="">
          <h2 class="px-4">Cleaner • Cleaning Department • Sint-Maarten Mechelen</h2>
        </div>

      </div>
    </section>


      <section class="mx-4 text-center mt-40 flex-col justify-center">
      <h1 class="mt-2 text-5xl sm:text-7xl text-textgreyish">Skills</h1>
      <p class="mt-2 text-lg text-textpurple">...</p>
    <div class="grid sm:grid-cols-2 gap-4">


<div>
      <div class="bg-backgroundpurple mt-10 text-textgreyish font-extrabold">
        <h2>#- - - Programming Languages - - -#</h2>
      </div>

      <div class="grid gap-4 md:grid-cols-2 justify-center mt-10 mx-8 font-semibold">

        <div class="h-auto w-auto border-b-8 border-jsyellow p-4">
          <img class="h-20 mx-auto" src="../assets/javascript-logo.png" alt="">
          <h2 class="text-white">JavaScript</h2>
          <div class="text-textpurple">
            <ul>
              <li>NodeJs</li>
              <li>VueJS</li>
              <li>Express</li>
            </ul>
          </div>

        </div>

        <div class="h-auto w-auto border-b-8 border-javared p-4">
          <img class="h-20 mx-auto" src="../assets/java-logo.png" alt="">
          <h2 class="text-white">Java</h2>
          <div class="text-textpurple">
            <ul>
              <li>Spring</li>
            </ul>
          </div>
        </div>

        <div class="h-auto w-auto border-b-8 border-csharppurple p-4">
          <img class="h-20 mx-auto" src="../assets/csharp.svg" alt="">
          <h2 class="text-white">C#</h2>
        </div>

        <div class="h-auto w-auto border-b-8 border-phppurple p-4">
          <img class="h-20 mx-auto" src="../assets/php-logo.png" alt="">
          <h2 class="text-white">PHP</h2>
        </div>

        <div class="h-auto w-auto border-b-8 border-cplusplusblue p-4">
          <img class="h-20 mx-auto" src="../assets/cplusplus-logo.png" alt="">
          <h2 class="text-white">C++</h2>
        </div>

        <div class="h-auto w-auto border-b-8 border-elixirpurple p-4">
          <img class="h-20 mx-auto" src="../assets/elixir-logo.png" alt="">
          <h2 class="text-white">Elixir</h2>
          <div class="text-textpurple">
            <ul>
              <li>Phoenix</li>
            </ul>
          </div>
        </div>

        <div class="h-auto w-auto border-b-8 border-cssblue p-4">
          <img class="h-20 mx-auto" src="../assets/css-logo.png" alt="">
          <h2 class="text-white">CSS</h2>
          <div class="text-textpurple">
            <ul>
              <li>Tailwindcss</li>
              <li>Vuetify</li>
            </ul>
          </div>
        </div>
      </div>

</div>

<div>
      <div class="bg-backgroundpurple mt-10 text-textgreyish font-extrabold">
        <h2>#- - - Languages - - -#</h2>
      </div>

            <div class="grid gap-4 grid-cols-1 justify-center mt-10 mx-8 font-semibold">

        <div class="h-auto w-auto border-b-8 border-white p-4">
          <h2 class="text-white">Dutch</h2>
        </div>

        <div class="h-auto w-auto border-b-8 border-white p-4">
          <h2 class="text-white">English</h2>
        </div>

        <div class="h-auto w-auto border-b-8 border-white p-4">
          <h2 class="text-white">French</h2>
        </div>




      </div>

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
