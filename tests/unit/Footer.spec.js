import { shallowMount } from "@vue/test-utils";
import Footer from "@/src/components/Footer.vue";

describe("Footer component", () => {
  const wrapper = shallowMount(Footer);

  it("should validate component main tag", () => {
    // THEN
    expect(wrapper.find("footer").exists()).toBeTruthy();
  });

  it("should trigger a parent function via emit function", async () => {
    // WHEN
    wrapper.vm.updateProduct("any_product");
    // THEN
    expect(wrapper.emitted().updateProductNumber).toBeTruthy();
    expect(wrapper.emitted().updateProductNumber.length).toBe(1);
    expect(wrapper.emitted().updateProductNumber[0]).toEqual(["any_product"]);
  });
});