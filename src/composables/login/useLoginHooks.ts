import { ref } from "vue";

export default function useLoginHooks() {
  const name = ref("name");
  return {
    name,
  };
}
