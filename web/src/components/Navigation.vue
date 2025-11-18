<template>
  <nav class="border-muted bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a :href="localizedUrl('/')" class="text-foreground hover:text-primary text-xl font-bold transition-colors">
            Home
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:!flex md:items-center md:space-x-6">
          <div class="flex items-baseline space-x-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                isCurrentPage(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
              ]"
            >
              {{ item.name }}
            </a>
          </div>

          <!-- Language Switcher -->
          <div class="border-muted flex items-center space-x-1 border-l pl-6">
            <a
              v-for="lang in languages"
              :key="lang"
              :href="getLanguageUrl(lang)"
              :class="[
                locale === lang ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground',
                'px-2 py-1 text-sm transition-colors',
              ]"
            >
              {{ lang.toUpperCase() }}
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:!hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            type="button"
            class="text-muted-foreground hover:text-foreground focus:ring-primary inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">{{ t("navigation.openMenu") }}</span>
            <svg
              v-if="!mobileMenuOpen"
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            isCurrentPage(item.href)
              ? 'text-primary bg-muted'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted',
            'block rounded-md px-3 py-2 text-base font-medium transition-colors',
          ]"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </a>

        <!-- Language Switcher Mobile -->
        <div class="border-muted mt-3 border-t pt-3">
          <div class="flex items-center space-x-2 px-3">
            <span class="text-muted-foreground text-sm">Language:</span>
            <a
              v-for="lang in languages"
              :key="lang"
              :href="getLanguageUrl(lang)"
              :class="[
                locale === lang ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground',
                'px-2 py-1 text-sm transition-colors',
              ]"
              @click="mobileMenuOpen = false"
            >
              {{ lang.toUpperCase() }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { languages } from "@/i18n/index";
import { useLocalizedUrl } from "@/i18n/utils";

const route = useRoute();
const mobileMenuOpen = ref(false);
const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();

const navigation = computed(() => [
  { name: t("navigation.home"), href: localizedUrl("/") },
  { name: t("navigation.about"), href: localizedUrl("/about") },
]);

const isCurrentPage = (href: string) => {
  const currentPath = route.params.lang ? route.path.slice((route.params.lang as string).length + 1) : route.path;
  if (href === "/") {
    return currentPath === "/" || currentPath === "";
  }
  return currentPath.startsWith(href);
};

const getLanguageUrl = (lang: string) => {
  const basePath = (() => {
    if (route.params.lang) {
      return route.path.slice((route.params.lang as string).length + 1);
    }
    return route.path;
  })();
  return `/${lang}${basePath}`;
};
</script>

<style scoped></style>
