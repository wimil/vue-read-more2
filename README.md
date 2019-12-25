# Vue.js ReadMore

[![npm version](https://badge.fury.io/js/vue-read-more2.svg)](https://badge.fury.io/js/vue-read-more2)

Bifurcated project of https://github.com/orlyyani/read-more, I have added some improvements to the directive



# NPM

```
 npm install vue-readmore --save
```

# Features!

  - Add read more length
  - Add read more link
  - Custom read more string
  - Custom read less string

# Usage

```
 import ReadMore from 'vue-read-more';
 
 Vue.use(ReadMore);
```

# Sample

You can use either the Component approach or the Directive approach.

### Component

```
<template>
  <div class="hello">
    <read-more more-str="read more" :text="msg" link="#" less-str="read less" :max-chars="50"></read-more>
    <read-more more-str="read more" less-str="read less" :text="msg2" link="#"></read-more>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      msg2: 'Lorem ipsum dolor sit amet'
    }
  }
}
</script>
```

### Directive

```
<template>
  <div class="hello">
    <div v-readMore="{ moreStr: 'Read More', lessStr: 'Read Less', limit: 100 }">{{msg}}</div>
    <div v-readMore="{ limit: 100, text: msg2 }"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      msg2: 'Lorem ipsum dolor sit amet'
    }
  }
}
</script>
```

### Using Options

All read more options were converted to props to be able use them in the `vue-read-more` component.

*Usage*
```html
<read-more more-str="read more" :text="msg" link="#" less-str="read less" :max-chars="50"></read-more>
```


# API


| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `text` (required) | `String` | `none` | `text` is used to limit the submitted string based on the `maxChars`.| 
| `maxChars` | `Number` | `100` | It is used to limit the `text` value to generate a read more text. |
| `link` | `String` | `#` | You can pass a link incase you want to redirect the user when the `moreStr` has been triggerd.
| `moreStr` | `String` | `read more` | You can customize your read more string by passing a value to `moreStr`.
| `lessStr` | `String` | `none` | You can customize your read less string by passing a value to `lessStr`.

*Note:*
When you didn't pass something in the `lessStr`, after clicking the read more you wouldn't have a read less link.

# License

#### MIT
Use at your own risk!
with :heart: by Wimil