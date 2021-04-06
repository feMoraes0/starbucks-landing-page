import { shallowMount } from "@vue/test-utils";
import ProductBox from "@/src/components/ProductBox.vue";

describe("Product Box component", () => {
  const wrapper = shallowMount(ProductBox, {
    propsData: {
      currentImage: "any_image",
    },
  });

  it("should validate component property", () => {
    // THEN
    expect(wrapper.props().currentImage).toBe("any_image");
  });
});