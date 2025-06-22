<template>
  <a
    :href="href"
    @click.prevent="handleClick"
    class="flex items-center gap-3 text-white hover:text-accent transition"
  >
    <Icon :icon="icon" class="w-5 h-5" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  href: string
  label: string
  icon: string
}>()

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  const header = document.querySelector('header')
  if (el && header) {
    const yOffset = -header.getBoundingClientRect().height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const handleClick = (e: MouseEvent) => {
  if (props.href.startsWith('#')) {
    e.preventDefault()
    scrollTo(props.href.slice(1))
  } else {
    // external link — let browser handle it
    window.location.href = props.href
  }
}
</script>
