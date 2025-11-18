<template>
  <div class="layout">
    <div class="bg-warmgray-400 bg-opacity-20 flex min-h-screen flex-col">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18nParam } from "@/i18n/utils";

useI18nParam();
</script>
