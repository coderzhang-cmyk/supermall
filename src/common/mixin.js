import { debounce } from './utils'
import BackTop from "components/content/backTop/BackTop";

export const refreshMixin = {
  data() {
    return {
      refrsh: null,
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh);
    this.cancelFunction = () => {
      this.refresh();
    };
    this.$bus.$on("handleGoodsImg", this.cancelFunction);
  },
}
export const backTopMixin = {
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    handleBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
}