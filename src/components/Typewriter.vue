<template>
    <div>{{ displayedText }}</div>
  </template>
  
  <script>
  export default {
    props: {
      text: { type: String, required: true },
      speed: { type: Number, default: 50 } // Speed in ms per character
    },
    data() {
      return {
        displayedText: ""
      };
    },
    mounted() {
      this.typeText();
    },
    methods: {
      typeText() {
        let i = 0;
        const interval = setInterval(() => {
          if (i < this.text.length) {
            this.displayedText += this.text[i];
            i++;
          } else {
            clearInterval(interval);
          }
        }, this.speed);
      }
    }
  };
  </script>
  