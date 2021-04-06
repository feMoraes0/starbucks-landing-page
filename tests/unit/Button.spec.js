import { shallowMount } from "@vue/test-utils";
import Button from "@/src/components/Button.vue";

describe("Button component", () => {
  const wrapper = shallowMount(Button, {
    propsData:{
      content: "any_content",
      backgroundColour: "any_background_colour"
    }
  });

  it("should validate received properties", () => {
    // THEN
    expect(wrapper.props().content).toEqual("any_content");
    expect(wrapper.props().backgroundColour).toEqual("any_background_colour");
  });

  it("should validate watch function", async () => {
    // GIVEN
    const spy = jest.spyOn(document, "querySelector").mockReturnValueOnce({ style: { backgroundColor: "" }});
    await wrapper.setProps({backgroundColour: "another_background_colour"});
    // THEN
    expect(wrapper.props().backgroundColour).toEqual("another_background_colour");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});