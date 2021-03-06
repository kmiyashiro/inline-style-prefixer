import camelToDashCase from '../utils/camelToDashCase'

const properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
}
const values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
}

export default function sizing({ property, value, prefix: { css }, keepUnprefixed }) {
  // This might change in the future
  // Keep an eye on it
  if (properties[property] && values[value]) {
    return {
      [property]: css + value + (keepUnprefixed ? ';' + camelToDashCase(property) + ':' + value : '')
    }
  }
}
