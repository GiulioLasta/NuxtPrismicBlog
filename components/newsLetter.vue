<template>
  <div class="block mb-5 p-2 border border-white rounded-md w-fit	">
      <h4>Subscribe to my newsletter for updates on my advetures!</h4>
      <form
      action="https://formspree.io/f/xbljljdl"
      method="POST">
        <label>
          Email:
          <input type="email" name="email">
        </label>
        <label class="hidden">
          Your message:
          <textarea class="hidden" name="message"></textarea>
        </label>
        <button type="submit" class="ml-4">Subscribe</button>
      </form>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>