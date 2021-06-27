<template>
  <div>
    <div>
      <select
        @change="changeSelect($event.target.value)"
      >
        <option
          v-for="(option, index) in options"
          :value="index"
          :key="option.key"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    options: {
      type: Array,
      default: () => [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
      ],
    },
    label: {
      type: String,
      default: 'Label',
    },
    changeSelect: {
      type: Function,
      default: () => {

      },
    },
  },
}
</script>