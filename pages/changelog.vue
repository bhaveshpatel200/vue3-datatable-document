<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Changelogs</h2>
        </div>

        <div class="space-y-6 divide-y divide-gray-200 [&>*:not(:first-child)]:pt-6">
            <!-- 3.0.0 -->
            <div class="space-y-4">
                <div>
                    <div class="text-xl font-bold">Version 3.0.0</div>
                    <div class="text-sm text-gray-500">16 April, 2026</div>
                </div>

                <div>
                    <div class="font-semibold text-green-600 mb-1">Architecture</div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li>Extracted all logic from monolithic <strong>custom-table.vue</strong> (~800 → ~200 lines) into single-responsibility composables</li>
                        <li>New composables: <strong>usePagination</strong>, <strong>useSorting</strong>, <strong>useFiltering</strong>, <strong>useSelection</strong>, <strong>useRowClick</strong></li>
                        <li>Introduced <strong>filter-strategies.ts</strong> — strategy pattern replacing 130+ line if-else chain for column filtering</li>
                        <li>Extracted pure utility helpers into <strong>utils.ts</strong> (<code>cellValue</code>, <code>dateFormat</code>, <code>stringFormat</code>)</li>
                        <li>Zero prop mutations enforced — column filter state managed via internal <code>columnFilterState</code> reactive Map</li>
                        <li><strong>normalizedColumns</strong> computed applies defaults immutably — used everywhere instead of raw <code>props.columns</code></li>
                    </ul>
                </div>

                <div>
                    <div class="font-semibold text-blue-600 mb-1">Events — Breaking Changes</div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li><strong>Renamed</strong> <code>@change</code> → <code>@changeServer</code> for clarity (server mode aggregate event)</li>
                        <li><strong>New event</strong> <code>@reset</code> — fires when <code>reset()</code> called. Only event emitted during reset; all others suppressed</li>
                        <li><strong>@pageChange</strong> now fires only from explicit user pagination clicks — silent on programmatic resets (filter/search/pagesize/reset)</li>
                        <li>Removed internal <code>suppressPageEvent</code> flag — replaced with explicit <code>onUserPageChange()</code> handler pattern</li>
                    </ul>
                </div>

                <div>
                    <div class="font-semibold text-purple-600 mb-1">Selection</div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li>Rewrote selection system — removed fragile <code>suppressEmit</code> flag and watcher-based emit</li>
                        <li><strong>selectedAll</strong> is now a <code>computed</code> reactive to both <code>selected</code> and visible rows (was ref + watcher)</li>
                        <li>Row checkbox uses explicit <code>@change</code> handler instead of <code>v-model</code> — single emit per interaction, no double-fire</li>
                        <li>Added <strong>toggleRow()</strong> method for cleaner row click selection</li>
                    </ul>
                </div>

                <div>
                    <div class="font-semibold text-orange-600 mb-1">Column Filtering</div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li>Boolean column filter defaults to <strong>"All"</strong> (empty) instead of "equal"</li>
                        <li>Auto-set filter condition when user types with "No filter" selected — defaults to <code>contain</code> (string) or <code>equal</code> (number/date)</li>
                        <li>Filter dropdown width increased (<code>bh-w-[180px]</code>) with <code>whitespace-normal</code> for better readability</li>
                        <li><strong>column-header.vue</strong> refactored — flat individual props instead of <code>:all="props"</code> pattern</li>
                        <li><strong>column-filter.vue</strong> emits <code>conditionChange</code> instead of mutating props</li>
                        <li>Debounced text/number filter inputs (300ms) in column header</li>
                        <li><code>getColumnsWithFilterState()</code> now defaults <code>type</code> to <code>'string'</code> when not explicitly set</li>
                    </ul>
                </div>

                <div>
                    <div class="font-semibold text-teal-600 mb-1">New Props</div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li><strong>skeletonRowCount</strong> — number of skeleton loader rows (default: 10)</li>
                        <li>Skeleton loader now renders one <code>&lt;td&gt;</code> per visible column instead of single colspan</li>
                    </ul>
                </div>

                <div>
                    <div class="font-semibold text-teal-600 mb-1">New Slots</div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li><strong>#noData</strong> — custom empty state slot alongside <code>noDataContent</code> text prop</li>
                        <li><strong>#firstArrow</strong>, <strong>#previousArrow</strong>, <strong>#nextArrow</strong>, <strong>#lastArrow</strong> — custom pagination arrow slots</li>
                    </ul>
                </div>

                <div>
                    <div class="font-semibold text-teal-600 mb-1">i18n / Localization</div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li>Added <strong>all</strong>, <strong>true</strong>, <strong>false</strong> keys to <code>columnFilterLang</code> for boolean filter dropdown translation</li>
                    </ul>
                </div>

                <div>
                    <div class="font-semibold text-red-600 mb-1">Bug Fixes</div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li>Fixed pagination breaking after page size change when already on page 1 (stale <code>suppressPageEvent</code> flag)</li>
                        <li>Fixed selection checkbox not updating properly in client-side mode (stale <code>suppressEmit</code> flag)</li>
                        <li>Fixed double <code>@rowSelect</code> emit when <code>selectRowOnClick</code> enabled</li>
                        <li>Fixed <code>@pageChange</code> event firing during filter/search/pagesize resets</li>
                        <li>Fixed reset emitting <code>@searchChange</code>, <code>@pageSizeChange</code> etc. — now only emits <code>@reset</code></li>
                        <li>Fixed <code>selectedAll</code> not reacting to visible row changes (page/filter/sort)</li>
                    </ul>
                </div>
            </div>

            <!-- 2.0.1 -->
            <div class="space-y-4">
                <div>
                    <div class="text-xl font-bold">Version 2.0.1</div>
                    <div class="text-sm text-gray-500">30 January, 2025</div>
                </div>

                <div>
                    <ul class="list-disc pl-10 text-gray-800 text-base space-y-1">
                        <li>Fixed a global CSS issue</li>
                        <li>Added <strong>getVisibleRows</strong> method</li>
                        <li>Fixed column filtering to apply only when enabled</li>
                        <li>Fixed sorting to apply only when enabled</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
