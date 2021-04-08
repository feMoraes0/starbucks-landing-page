import { shallowMount } from "@vue/test-utils";
import Content from "@/src/components/Content.vue";
import Button from "@/src/components/Button.vue";
import ProductBox from "@/src/components/ProductBox.vue";

describe("Content components", () => {
  const wrapper = shallowMount(Content, {
    propsData: {
      selectedImage: "any_image",
      productColour: "any_colour"
    }
  });

  it("should validate component dependencies", () => {
    // THEN
    expect(wrapper.findComponent(Button).exists()).toBe(true);
    expect(wrapper.findComponent(ProductBox).exists()).toBeTruthy();
  });

  it("should validate component properties", () => {
    // THEN
    expect(wrapper.props().selectedImage).toEqual("any_image");
    expect(wrapper.props().productColour).toEqual("any_colour");
  });

  it("should validate productColour watch function", async () => {
    // GIVEN
    const spyQuerySelector = jest.spyOn(document, "querySelector").mockReturnValueOnce({style: {color: ""}});
    await wrapper.setProps({productColour: "another_colour"});
    // THEN
    expect(wrapper.props().productColour).toEqual("another_colour");
    expect(spyQuerySelector).toHaveBeenCalledTimes(1);
  });
});