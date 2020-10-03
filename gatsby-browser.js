import "tailwindcss/dist/base.min.css"
import "tailwindcss/dist/components.css"
import "tailwindcss/dist/utilities.css"

// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!("IntersectionObserver" in window)) {
    import("intersection-observer")
    console.log("# IntersectionObserver is polyfilled!")
  }
}
