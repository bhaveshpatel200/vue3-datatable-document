<template>
  <div class="relative">
    <div class="antialiased font-poppins font-normal text-sm text-black bg-white min-h-screen">
      <!--  BEGIN SIDEBAR  -->
      <layout-sidebar />
      <!--  END SIDEBAR  -->

      <!--  BEGIN CONTENT AREA  -->
      <div class="main-content md:pl-[260px]">
        <!--  BEGIN TOP NAVBAR  -->
        <layout-header />
        <!--  END TOP NAVBAR  -->

        <div class="p-8">
          <NuxtPage />
          <!-- BEGIN FOOTER -->
          <layout-footer />
          <!-- END FOOTER -->
        </div>
      </div>
      <!--  END CONTENT AREA  -->
    </div>
  </div>
</template>
<script setup>
  const appConfig = useAppConfig();
  const nuxtApp = useNuxtApp();
  nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0);
  });
</script>
