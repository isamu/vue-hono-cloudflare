<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- About Header -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-4xl">{{ t("about.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-base">
            {{ t("about.description") }}
          </p>
        </div>

        <!-- Technology Stack -->
        <div class="group border-muted bg-card hover:bg-muted/50 relative rounded-2xl border p-6">
          <h2 class="mb-4 text-xl font-bold">{{ t("about.techStack.title") }}</h2>
          <ul class="text-muted-foreground space-y-2">
            <li>{{ t("about.techStack.frontend") }}</li>
            <li>{{ t("about.techStack.backend") }}</li>
            <li>{{ t("about.techStack.ui") }}</li>
            <li>{{ t("about.techStack.i18n") }}</li>
          </ul>
        </div>

        <!-- Get Started -->
        <div class="group border-muted bg-card hover:bg-muted/50 relative rounded-2xl border p-6">
          <h2 class="mb-4 text-xl font-bold">{{ t("about.getStarted.title") }}</h2>
          <ol class="text-muted-foreground list-decimal space-y-2 pl-5">
            <li>{{ t("about.getStarted.step1") }}</li>
            <li>{{ t("about.getStarted.step2") }}</li>
            <li>{{ t("about.getStarted.step3") }}</li>
            <li>{{ t("about.getStarted.step4") }}</li>
          </ol>
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
