// [Info](https://glidejs.com/docs/)
import "@glidejs/glide/dist/glide.min.js"

export default function glideJSSettings() {
  const glide = new Glide(".glide", {
    autoplay: 2000,
    hoverpause: true,
    rewindDuration: 500,
    360: {
      perView: 1
    },
    480: {
      perView: 3
    }
  });

  glide.mount()
}
