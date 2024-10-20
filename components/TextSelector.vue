<template>
  <div @mouseup="handleTextSelect" class="text-selector">
    <p v-html="textWithHighlights"></p>
    <div v-if="isTextSelected" class="selection-info">
      <p>Selected Text: <strong>{{ selectedText }}</strong></p>
      <button @click="translateSelectedText">Translate</button>
      <span class="highlight">dd</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "This is some sample text. You can select part of this text to perform actions.",
      selectedText: "",
      isTextSelected: false,
      highlightedText: "",
    };
  },
  computed: {
    textWithHighlights() {
      if (!this.highlightedText) return this.text;

      const escapedText = this.highlightedText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
      const regex = new RegExp(`(${escapedText})`, 'gi'); // Case-insensitive matching

      return this.text.replace(regex, `<span class="highlight">$1</span>`);
    },
  },
  methods: {
    handleTextSelect() {
      const selection = window.getSelection();
      const selected = selection.toString();

      // Clear previous highlights
      this.highlightedText = "";

      if (selected.length > 0) {
        this.selectedText = selected;
        this.isTextSelected = true;

        // Store the newly selected text for highlighting
        this.highlightedText = selected;
      } else {
        this.isTextSelected = false; // Clear selection info
      }
    },
    async translateSelectedText() {
      if (!this.selectedText) return;

      try {
        const response = await this.$axios.$post('YOUR_API_ENDPOINT', {
          text: this.selectedText,
        });
        console.log(response); // Replace with your handling logic
      } catch (error) {
        console.error("Error translating text:", error);
      }
    },
  },
};
</script>

<style >
.text-selector {
  position: relative;
}

.highlight {
  background-color: yellow; /* Style for highlighting the selected text */
  border: 1px dashed red; /* Example outline */
}

.selection-info {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
</style>
