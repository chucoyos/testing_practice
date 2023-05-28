function capitalize(text) {
  // returns a capitalized text an can handle any case
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  
}
export default capitalize