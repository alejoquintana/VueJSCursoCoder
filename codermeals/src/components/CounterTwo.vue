<template>
  <div>
    <div>{{ counter }}</div>
    <button class="btn btn-primary" @click="clicked(2)">Click to Multiply by 2</button>
  </div>
</template>

<script>
import mixin from "../mixin.js";
export default {
	data() {
		return {
			counter:0
		}
	},
  mixins: [mixin],
};
</script>