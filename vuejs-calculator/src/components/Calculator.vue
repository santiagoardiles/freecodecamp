<!--       Calculator.vue       -->

<!-- Template. -->
<template>
  <div class="calculator">
    <!-- Display. -->
    <div class="display">{{ current || 0 }}</div>

    <!-- First row. -->
    <div class="btn" @click="clear">C</div>
    <div class="btn" @click="sign">+/-</div>
    <div class="btn" @click="percent">%</div>
    <div class="btn operator">÷</div>

    <!-- Second row. -->
    <div class="btn" @click="append('7')">7</div>
    <div class="btn" @click="append('8')">8</div>
    <div class="btn" @click="append('9')">9</div>
    <div class="btn operator">x</div>

    <!-- Third row. -->
    <div class="btn" @click="append('4')">4</div>
    <div class="btn" @click="append('5')">5</div>
    <div class="btn" @click="append('6')">6</div>
    <div class="btn operator">-</div>

    <!-- Fourth row. -->
    <div class="btn" @click="append('1')">1</div>
    <div class="btn" @click="append('2')">2</div>
    <div class="btn" @click="append('3')">3</div>
    <div class="btn operator">+</div>

    <!-- Footer row. -->
    <div class="btn zero">0</div>
    <div class="btn">.</div>
    <div class="btn operator">=</div>
  </div>
</template>

<!-- JavaScript. -->
<script>
export default {
  data() {
    return {
      current: "",
    };
  },

  methods: {
    clear() {
      this.current = "";
    },

    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },

    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },

    append(number) {
      this.current = this.current + number; // Concatenation, not addition.
    },
  },
};
</script>

<!-- Styles. -->
<style scoped>
.calculator {
  font-size: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1/ 5;
  background-color: #333;
  color: white;
}

.zero {
  grid-column: 1/ 3;
}

.btn {
  background-color: #eee;
  border: 1px solid #999;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
