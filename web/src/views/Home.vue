<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Hero -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">{{ t("home.hero.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">
            {{ t("home.hero.subtitle") }}<br />
            {{ t("home.hero.description") }}<br />
            <i18n-t keypath="home.hero.description2" tag="span">
              <template #emphasize>
                <span class="font-semibold">{{ t("home.hero.emphasize") }}</span>
              </template>
            </i18n-t>
          </p>
        </div>

        <!-- Feature Card -->
        <div class="group border-muted bg-card hover:bg-muted/50 relative rounded-2xl border p-6">
          <h2 class="mb-4 text-xl font-bold">{{ t("home.features.title") }}</h2>
          <ul class="text-muted-foreground list-disc space-y-2 pl-5">
            <li>{{ t("home.features.items.0") }}</li>
            <li>{{ t("home.features.items.1") }}</li>
            <li>{{ t("home.features.items.2") }}</li>
          </ul>
        </div>

        <!-- Use Case -->
        <div class="group border-muted bg-card hover:bg-muted/50 relative rounded-2xl border p-6">
          <h2 class="mb-2 text-xl font-bold">{{ t("home.useCases.title") }}</h2>
          <div class="text-muted-foreground group-hover:text-foreground mt-2 flex flex-col gap-2">
            <p>
              <span class="font-semibold">{{ t("home.useCases.student.label") }}</span>
              {{ t("home.useCases.student.description") }}
            </p>
            <p>
              <span class="font-semibold">{{ t("home.useCases.business.label") }}</span>
              {{ t("home.useCases.business.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped></style>
