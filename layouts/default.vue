<template>
  <div class="relative">
    <div
      class="antialiased font-poppins font-normal text-sm text-black bg-gray-50 min-h-screen"
    >
      <!--  BEGIN SIDEBAR  -->
      <layout-sidebar />
      <!--  END SIDEBAR  -->

      <!--  BEGIN CONTENT AREA  -->
      <div class="main-content md:pl-[260px]">
        <!--  BEGIN TOP NAVBAR  -->
        <layout-header />
        <!--  END TOP NAVBAR  -->

        <div class="p-8">
          <slot />
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
</script>
