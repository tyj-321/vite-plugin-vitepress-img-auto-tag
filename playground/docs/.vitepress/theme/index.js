import Theme from 'vitepress/theme'
import './style.css'
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress';
export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      new mediumZoom('[zoom-ble]', { background: 'var(--vp-c-bg)' }); // Should there be a new?
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}
