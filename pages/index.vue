<template>
    <div class="space-y-8">
        <div class="p-3 bg-success-light text-success rounded-lg flex items-center flex-wrap">
            <span class="mr-2"><icon-announcement /></span>
            <div>
                The <span class="font-semibold">@bhplugin/vue3-datatable</span> now offers support for <span class="font-semibold">Server Side Rendering</span>. Please check the
                <a href="#props" class="underline hover:no-underline"><span class="font-semibold">"isServerMode"</span></a> prop to enable this feature.
            </div>
        </div>

        <div id="install">
            <div>
                <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Installation</h2>
                <div class="px-2 space-y-3">
                    <div>
                        <h3 class="text-lg py-2">NPM</h3>
                        <div class="p-3 bg-gray-100 rounded-lg font-semibold">npm install @bhplugin/vue3-datatable --save</div>
                    </div>
                    <div>
                        <h3 class="text-lg py-2">Yarn</h3>
                        <div class="p-3 bg-gray-100 rounded-lg font-semibold">yarn add @bhplugin/vue3-datatable</div>
                    </div>
                    <div>
                        <h3 class="text-lg py-2">Bower</h3>
                        <div class="p-3 bg-gray-100 rounded-lg font-semibold">bower install @bhplugin/vue3-datatable --save</div>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Include</h2>
                <div class="px-2 space-y-3">
                    <div>
                        <h3 class="text-lg py-2">Component</h3>
                        <div class="p-3 bg-gray-100 rounded-lg font-semibold">import Vue3Datatable from '@bhplugin/vue3-datatable'</div>
                    </div>
                    <div>
                        <h3 class="text-lg py-2">CSS</h3>
                        <div class="p-3 bg-gray-100 rounded-lg font-semibold">import '@bhplugin/vue3-datatable/dist/style.css'</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="props">
            <div>
                <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Props</h2>
                <div class="table-responsive">
                    <table class="bh-table-striped">
                        <thead>
                            <tr>
                                <th>Props</th>
                                <th align="left">Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="font-semibold">columns (required)</td>
                                <td align="left">array</td>
                                <td>[]</td>
                                <td>table columns <a href="#column-props" class="text-primary hover:underline">Column Props</a></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">rows (required)</td>
                                <td align="left">array</td>
                                <td>[]</td>
                                <td>table rows</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">isServerMode</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>set <strong>true</strong> if you need server side pagination.</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">totalRows</td>
                                <td align="left">number</td>
                                <td>0</td>
                                <td>
                                    total number of rows. <br />
                                    <strong>totalRows</strong> required when <strong>isServerMode</strong> is true.
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold">skin</td>
                                <td align="left">string</td>
                                <td>"bh-table-striped bh-table-hover"</td>
                                <td>
                                    custom class for skin <br />
                                    <strong>bh-table-striped</strong> - for stripe row <br />
                                    <strong>bh-table-hover</strong> - for hover row <br />
                                    <strong>bh-table-bordered</strong> - for bordered row <br />
                                    <strong>bh-table-compact</strong> - for compact table
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold">loading</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>enable loader</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">hasCheckbox</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>enable checkbox</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">search</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>enable global search</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">page</td>
                                <td align="left">number</td>
                                <td>1</td>
                                <td>current page</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">pageSize</td>
                                <td align="left">number</td>
                                <td>10</td>
                                <td>number of rows per page</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">pageSizeOptions</td>
                                <td align="left">array</td>
                                <td>[10, 20, 30, 50, 100]</td>
                                <td>pagesize options</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">showPageSize</td>
                                <td align="left">boolean</td>
                                <td>true</td>
                                <td>enable pagesize options</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">rowClass</td>
                                <td align="left">array, function</td>
                                <td>""</td>
                                <td>custom row class</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">cellClass</td>
                                <td align="left">array, function</td>
                                <td>""</td>
                                <td>custom cell class</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">sortable</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>enable sorting</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">sortColumn</td>
                                <td align="left">string</td>
                                <td>"id"</td>
                                <td>name of sort column</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">sortDirection</td>
                                <td align="left">string</td>
                                <td>"asc"</td>
                                <td>sort direction (asc or desc)</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">columnFilter</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>enable individual column filter</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">pagination</td>
                                <td align="left">boolean</td>
                                <td>true</td>
                                <td>enable pagination</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">showNumbers</td>
                                <td align="left">boolean</td>
                                <td>true</td>
                                <td>enable numbers pagination</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">showNumbersCount</td>
                                <td align="left">number</td>
                                <td>5</td>
                                <td>show numbers of count in pagination</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">showFirstPage</td>
                                <td align="left">boolean</td>
                                <td>true</td>
                                <td>enable first page in pagination</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">showLastPage</td>
                                <td align="left">boolean</td>
                                <td>true</td>
                                <td>enable last page in pagination</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">firstArrow</td>
                                <td align="left">string</td>
                                <td>default arrow</td>
                                <td>custom first page arrow</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">lastArrow</td>
                                <td align="left">string</td>
                                <td>default arrow</td>
                                <td>custom last page arrow</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">previousArrow</td>
                                <td align="left">string</td>
                                <td>default arrow</td>
                                <td>custom previous page arrow</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">nextArrow</td>
                                <td align="left">string</td>
                                <td>default arrow</td>
                                <td>custom next page arrow</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">paginationInfo</td>
                                <td align="left">string</td>
                                <td>"Showing {0} to {1} of {2} entries"</td>
                                <td>custom pagination info</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">noDataContent</td>
                                <td align="left">string</td>
                                <td>No data available</td>
                                <td>custom no data message</td>
                            </tr>

                            <tr>
                                <td class="font-semibold">stickyHeader</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>enable fixed header</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">height</td>
                                <td align="left">string</td>
                                <td>450px</td>
                                <td>only will be used when stickyHeader enabled</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">stickyFirstColumn</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>enable fixed first column</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">cloneHeaderInFooter</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>enable clone header in footer</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">selectRowOnClick</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>custom no data message</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="column-props" class="mt-5">
                <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Columns options</h2>
                <div class="table-responsive">
                    <table class="bh-table-striped">
                        <thead>
                            <tr>
                                <th>Props</th>
                                <th align="left">Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="font-semibold">isUnique</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>db column is primary key or not</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">field</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>db column name</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">title</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>display column name</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">value</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>filter value if filter enabled</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">condition</td>
                                <td align="left">string</td>
                                <td>"contain"</td>
                                <td>default condition for column filter if filter enabled</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">type</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>column type (string, date, number, bool)</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">width</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>custom width of column</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">minWidth</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>custom minimum width of column</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">maxWidth</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>custom maximum width of column</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">hide</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>show/hide column</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">filter</td>
                                <td align="left">boolean</td>
                                <td>true</td>
                                <td>enable column filter</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">search</td>
                                <td align="left">boolean</td>
                                <td>true</td>
                                <td>enabled global search</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">sort</td>
                                <td align="left">boolean</td>
                                <td>true</td>
                                <td>enable sorting</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">slotMode</td>
                                <td align="left">boolean</td>
                                <td>false</td>
                                <td>enable slot for cell rendering</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">cellRenderer</td>
                                <td align="left">function, string</td>
                                <td>true</td>
                                <td>custom cell rendering</td>
                            </tr>

                            <tr>
                                <td class="font-semibold">headerClass</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>custom header cell class</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">cellClass</td>
                                <td align="left">string</td>
                                <td>""</td>
                                <td>custom cell class</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div id="events">
            <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Events</h2>
            <div class="table-responsive">
                <table class="bh-table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="font-semibold">sortChange</td>
                            <td>will trigger when sorting changed</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">searchChange</td>
                            <td>will trigger when search changed</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">pageChange</td>
                            <td>will trigger when page changed</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">pageSizeChange</td>
                            <td>will trigger when pagesize changed</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">rowSelect</td>
                            <td>will trigger when row selected using checkbox</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">filterChange</td>
                            <td>will trigger when column filter changed</td>
                        </tr>

                        <tr>
                            <td class="font-semibold">rowClick</td>
                            <td>will trigger when row clicked</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">rowDBClick</td>
                            <td>will trigger when row double clicked</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div id="methods">
            <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Methods</h2>
            <div class="table-responsive">
                <table class="bh-table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="font-semibold">reset</td>
                            <td>will reset all options like selected rows, filter, search, currennt page etc</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">getSelectedRows</td>
                            <td>will returns all selected rows</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">getColumnFilters</td>
                            <td>will return all column filters</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">clearSelectedRows</td>
                            <td>will unselect all selected rows</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">selectRow(index)</td>
                            <td>will select row with the given index (non-existent row will be ignored)</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">unselectRow(index)</td>
                            <td>will unselect row with the given index (non-existent row will be ignored)</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">isRowSelected(index)</td>
                            <td>will return true if the row with given index is selected</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div id="slots">
            <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Slots</h2>
            <Highlight>
                <pre>
&lt;template #id=&quot;data&quot;&gt;
  &lt;strong&gt;&#123;&#123; data.value.id &#125;&#125;&lt;/strong&gt;
&lt;/template&gt;

&lt;template #name=&quot;data&quot;&gt;
  &lt;strong&gt;&#123;&#123; data.value.name &#125;&#125;&lt;/strong&gt;
&lt;/template&gt;

&lt;template #email=&quot;data&quot;&gt;
  &lt;strong&gt;&#123;&#123; data.value.email &#125;&#125;&lt;/strong&gt;
&lt;/template&gt;
</pre
                >
            </Highlight>
        </div>

        <div id="usage">
            <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Usage</h2>
            <h3 class="text-lg py-2">Basic</h3>
            <Highlight>
                <pre>
&lt;template&gt;
  &lt;vue3-datatable :rows=&quot;rows&quot; :columns=&quot;cols&quot;&gt;
  &lt;/vue3-datatable&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
  import { ref } from &quot;vue&quot;;
  import Vue3Datatable from &quot;@bhplugin/vue3-datatable&quot;;
  import &quot;@bhplugin/vue3-datatable/dist/style.css&quot;;

  const cols =
    ref([
      { field: &quot;id&quot;, title: &quot;ID&quot;, width: &quot;90px&quot;, filter: false },
      { field: &quot;name&quot;, title: &quot;Name&quot; },
      { field: &quot;username&quot;, title: &quot;Username&quot; },
      { field: &quot;email&quot;, title: &quot;Email&quot; },
      { field: &quot;phone&quot;, title: &quot;Phone&quot; },
      { field: &quot;date&quot;, title: &quot;Date&quot;, type: &quot;date&quot; },
      { field: &quot;active&quot;, title: &quot;Active&quot;, type: &quot;bool&quot; },
      { field: &quot;age&quot;, title: &quot;Age&quot;, type: &quot;number&quot; },
      {
        field: &quot;address.city&quot;,
        title: &quot;Address&quot;,
        search: true,
        cellRenderer: (item: any) =&gt; {
          return (
            item &amp;&amp;
            item.address?.street +
              &quot;, &quot; +
              item.address?.suite +
              &quot;&lt;br/&gt;&lt;strong&gt;&quot; +
              item.address?.city +
              &quot;&lt;/strong&gt;&quot; +
              &quot;&lt;br/&gt;&lt;strong&gt;&quot; +
              &quot;lat: &quot; +
              item.address?.geo?.lat +
              &quot;&amp;nbsp;&amp;nbsp; lng: &quot; +
              item.address?.geo?.lng +
              &quot;&lt;/strong&gt;&quot;
          );
        },
      },
      { field: &quot;company.name&quot;, title: &quot;Company&quot; },
    ]) || [];

  const rows = ref([
    {
      id: 1,
      name: &quot;Leanne Graham&quot;,
      username: &quot;Bret&quot;,
      email: &quot;Sincere@april.biz&quot;,
      address: {
        street: &quot;Kulas Light&quot;,
        suite: &quot;Apt. 556&quot;,
        city: &quot;Gwenborough&quot;,
        zipcode: &quot;92998-3874&quot;,
        geo: {
          lat: &quot;-37.3159&quot;,
          lng: &quot;81.1496&quot;,
        },
      },
      phone: &quot;1-770-736-8031 x56442&quot;,
      website: &quot;hildegard.org&quot;,
      company: {
        name: &quot;Romaguera-Crona&quot;,
        catchPhrase: &quot;Multi-layered client-server neural-net&quot;,
        bs: &quot;harness real-time e-markets&quot;,
      },
      date: &quot;Tue Sep 27 2022 22:19:57&quot;,
      active: true,
      age: 10,
    },
    ...
  ]);
&lt;/script&gt;
</pre
                >
            </Highlight>
        </div>

        <div id="license">
            <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">License</h2>
            <div class="text-lg">
                <strong>@bhplugin/vue3-datatable</strong> is open-sourced software licensed under the
                <a target="_blank" href="http://opensource.org/licenses/MIT" class="text-primary hover:underline"> [MIT license] </a>
            </div>
        </div>
        <div id="plugins">
            <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Our other plugins</h2>
            <div class="text-lg">
                Angular Datatable - <a target="_blank" href="https://www.npmjs.com/package/@bhplugin/ng-datatable" class="text-primary hover:underline"> @bhplugin/ng-datatable </a>
            </div>
        </div>
        <div id="support" class="pb-28">
            <h2 class="text-3xl py-3 border-b border-gray-300 mb-4">Support</h2>
            <div>
                <a href="https://www.buymeacoffee.com/bhplugin" target="_blank" class="inline-flex">
                    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 217px !important" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* tables */
    .table-responsive {
        @apply overflow-auto rounded-lg border border-collapse;
    }
    table {
        @apply w-full border-collapse divide-y divide-gray-200;
    }
    table thead th,
    table tbody td {
        @apply text-left py-2.5 px-4;
    }
    table th {
        @apply font-semibold;
    }
    table tbody tr,
    table thead tr {
        @apply divide-x divide-gray-200;
    }
    table tbody {
        @apply divide-y divide-gray-200;
    }
    table.bh-table-striped tr {
        @apply even:bg-gray;
    }
</style>
