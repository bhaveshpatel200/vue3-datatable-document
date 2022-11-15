<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-3xl">Specif Column Search</h2>
      <a
        href="#code-preview"
        class="flex items-center border border-primary rounded px-4 py-2 text-primary hover:bg-primary hover:text-white transition duration-300"
        >Code
        <icon-code class="ml-2" />
      </a>
    </div>

    <div class="mb-5">
      <input v-model="search" type="text" class="form-input max-w-xs" placeholder="Search Firsname and Lastname" />
    </div>

    <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length" :search="search"> </vue3-datatable>

    <div id="code-preview" class="space-y-5">
      <h3 class="text-lg mt-20">Code Preview</h3>
      <Highlight>
        <pre>
&lt;!-- html --&gt;
&lt;template&gt;
  &lt;div class=&quot;mb-5&quot;&gt;
    &lt;input
      v-model=&quot;search&quot;
      type=&quot;text&quot;
      class=&quot;form-input max-w-xs&quot;
      placeholder=&quot;Search Firsname and Lastname&quot;
    /&gt;
  &lt;/div&gt;

  &lt;vue3-datatable
    :rows=&quot;rows&quot;
    :columns=&quot;cols&quot;
    :totalRows=&quot;rows?.length&quot;
    :search=&quot;search&quot;
  &gt;
  &lt;/vue3-datatable&gt;
&lt;/template&gt;
</pre
        >
      </Highlight>
      <Highlight>
        <pre>
&lt;!-- script --&gt;
&lt;script setup lang=&quot;ts&quot;&gt;
  import { ref } from &quot;vue&quot;;
  import Vue3Datatable from &quot;@bhplugin/vue3-datatable&quot;;
  import &quot;@bhplugin/vue3-datatable/dist/style.css&quot;;

  const cols =
    ref([
      { field: &quot;id&quot;, title: &quot;ID&quot;, search: false },
      { field: &quot;firstName&quot;, title: &quot;First Name&quot; },
      { field: &quot;lastName&quot;, title: &quot;Last Name&quot; },
      { field: &quot;email&quot;, title: &quot;Email&quot;, search: false },
      { field: &quot;phone&quot;, title: &quot;Phone&quot;, search: false },
    ]) || [];
  const rows = ref([
      {
        &quot;id&quot;: 1,
        &quot;firstName&quot;: &quot;Caroline&quot;,
        &quot;lastName&quot;: &quot;Jensen&quot;,
        &quot;email&quot;: &quot;carolinejensen@zidant.com&quot;,
        &quot;dob&quot;: &quot;2004-05-28&quot;,
        &quot;address&quot;: {
          &quot;street&quot;: &quot;529 Scholes Street&quot;,
          &quot;city&quot;: &quot;Temperanceville&quot;,
          &quot;zipcode&quot;: 5235,
          &quot;geo&quot;: {
            &quot;lat&quot;: 23.806115,
            &quot;lng&quot;: 164.677197
          }
        },
        &quot;phone&quot;: &quot;+1 (821) 447-3782&quot;,
        &quot;isActive&quot;: true,
        &quot;age&quot;: 39,
        &quot;company&quot;: &quot;POLARAX&quot;
      }, 
      ...
    ]);
&lt;/script&gt;
</pre
        >
      </Highlight>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Vue3Datatable from '@bhplugin/vue3-datatable';
  import '@bhplugin/vue3-datatable/dist/style.css';
  const config = useRuntimeConfig();
  const search = ref('');
  const cols =
    ref([
      { field: 'id', title: 'ID', search: false },
      { field: 'firstName', title: 'First Name' },
      { field: 'lastName', title: 'Last Name' },
      { field: 'email', title: 'Email', search: false },
      { field: 'phone', title: 'Phone', search: false },
    ]) || [];

  const { data } = await useFetch(config.SITE_URL + '/data.json');
  const rows = data.value || [];
</script>
