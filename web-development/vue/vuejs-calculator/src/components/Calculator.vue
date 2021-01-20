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
    <div class="btn operator" @click="divide">÷</div>

    <!-- Second row. -->
    <div class="btn" @click="append('7')">7</div>
    <div class="btn" @click="append('8')">8</div>
    <div class="btn" @click="append('9')">9</div>
    <div class="btn operator" @click="times">x</div>

    <!-- Third row. -->
    <div class="btn" @click="append('4')">4</div>
    <div class="btn" @click="append('5')">5</div>
    <div class="btn" @click="append('6')">6</div>
    <div class="btn operator" @click="minus">-</div>

    <!-- Fourth row. -->
    <div class="btn" @click="append('1')">1</div>
    <div class="btn" @click="append('2')">2</div>
    <div class="btn" @click="append('3')">3</div>
    <div class="btn operator" @click="plus">+</div>

    <!-- Footer row. -->
    <div class="btn zero">0</div>
    <div class="btn" @click="dot">.</div>
    <div class="btn operator" @click="equal">=</div>
  </div>
</template>

<!-- JavaScript. -->
<script>
export default {
  data() {
    return {
      previous: null,
      current: "",
      operator: null,
      operatorClicked: false,
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
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }

      this.current = `${this.current}${number}`;
    },

    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },

    // Math operations.
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    plus() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    },
  },
};
</script>

<!-- Styles. -->
<style scoped>
.calculator {
  margin: 0 auto;
  width: 500px;
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
