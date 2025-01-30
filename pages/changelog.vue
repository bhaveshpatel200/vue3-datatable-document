<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Changelogs</h2>
        </div>

        <div class="space-y-4 divide-y divide-gray-200 [&>*:not(:first-child)]:pt-4">
            <div class="space-y-2">
                <div class="text-lg font-semibold">Version 2.0.1 - 30 January, 2025</div>
                <ul class="list-disc pl-10 text-gray-800 text-base">
                    <li>Fixed a global CSS issue</li>
                    <li>Added <strong>getVisibleRows</strong> method</li>
                    <li>Fixed column filtering to apply only when enabled</li>
                    <li>Fixed sorting to apply only when enabled</li>
                </ul>
            </div>
        </div>
    </div>
</template>
