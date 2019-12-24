// I wrap the emoji-mart React code itself here, so that we don't need to pass in a huge "data"
// object via a JSON-stringified custom element attribute. Also, AFAICT there is no way when
// using `remount` to pass in functions as attributes, since everything is stringified. So
// I just fire a global event here when an emoji is clicked.

import NimblePicker from 'emoji-mart/dist-modern/components/picker/nimble-picker'
import { createElement } from 'react'

export default function createEmojiMartPickerFromData (data) {
  return props => (
    createElement(NimblePicker, Object.assign({
      set: 'twitter', // same as Mastodon frontend
      data, // same as Mastodon frontend
      native: true
    }, props))
  )
}
