import '../styles/pagination.css'

function renderPlayerControl (h, elm, onClick) {
  return h('li', [
    h(
      'button',
      {
        class: { 'hooper-control': true },
        on: {
          click: onClick
        },
        attrs: {
          type: 'button',
          title: `${elm.label} Carousel`
        }
      },
      [
        h('span', { class: `hooper-control__icon ${elm.icon}` }),
        h('span', { class: 'hooper-sr-only' }, `${elm.label} Carousel`)
      ]
    )
  ])
}

export default {
  inject: ['$hooper'],
  name: 'HooperControl',
  props: {
    controls: Array
  },
  computed: {},
  methods: {
    clickHandler (v) {
      this.$emit(v)
    }
  },
  render (h) {
    const children = []
    if (this.controls) {
      this.controls.forEach(e => {
        children.push(renderPlayerControl(h, e, () => this.clickHandler(e.emit)))
      })
    }

    return h(
      'ul',
      {
        class: {
          'hooper-controls': true
        }
      },
      children
    )
  }
}
