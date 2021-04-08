import { shallowMount } from "@vue/test-utils";
import App from "@/src/App.vue";

describe("App component", () => {
  const wrapper = shallowMount(App, {
    data() {
      return {
        productNumber: 1,
        backgroundColour: [
          "colour_1",
          "colour_2",
          "colour_3"
        ]
      }
    }
  });

  it("should validate initial data values", () => {
    // THEN
    expect(wrapper.vm.productNumber).toEqual(1);
    expect(wrapper.vm.backgroundColour).toEqual(["colour_1", "colour_2", "colour_3"]);
  });

  it("should validate getCurrentProductColour return when productColour value is less than backgroundColour length", () => {
    // WHEN
    const returnedColour = wrapper.vm.getCurrentProductColour();
    // THEN
    expect(returnedColour).toEqual("colour_2");
  });

  it("should validate getCurrentProductColour return when productColour value is less than zero", async () => {
    // GIVEN
    await wrapper.setData({productNumber: 0});
    // WHEN
    const returnedColour = wrapper.vm.getCurrentProductColour();
    // THEN
    expect(returnedColour).toEqual("colour_1");
  });

  it("should validate getCurrentProductColour return when productColour value is greater than backgroundColour length", async () => {
    // GIVEN
    await wrapper.setData({productNumber: 4});
    // WHEN
    const returnedColour = wrapper.vm.getCurrentProductColour();
    // THEN
    expect(returnedColour).toEqual("colour_1");
  });

  it("should validate updateProductNumber returns the parameter value when the parameter number is valid", () => {
    // WHEN
    wrapper.vm.updateProductNumber(2);
    // THEN
    expect(wrapper.vm.productNumber).toEqual(2);
  });

  it("should validate updateProductNumber return 1 when the parameter number is greater than 3", () => {
    // WHEN
    wrapper.vm.updateProductNumber(4);
    // THEN
    expect(wrapper.vm.productNumber).toEqual(1);
  });

  it("should validate updateProductNumber return 1 when the parameter number is less than 1", () => {
    // WHEN
    wrapper.vm.updateProductNumber(0);
    // THEN
    expect(wrapper.vm.productNumber).toEqual(1);
  });

  it("should validate getSelectedProductImage returns valid name when productNumber is valid", async () => {
    // GIVEN
    await wrapper.setData({productNumber: 2});
    // WHEN
    const returnedImage = wrapper.vm.getSelectedProductImage();
    // THEN
    expect(returnedImage).toEqual("img2.png")
  });

  it("should validate getSelectedProductImage returns default image name when productNumber is greater than 3", async () => {
    // GIVEN
    await wrapper.setData({productNumber: 4});
    // WHEN
    const returnedImage = wrapper.vm.getSelectedProductImage();
    // THEN
    expect(returnedImage).toEqual("img1.png")
  });

  it("should validate getSelectedProductImage returns default image name when productNumber is less than 1", async () => {
    // GIVEN
    await wrapper.setData({productNumber: 0});
    // WHEN
    const returnedImage = wrapper.vm.getSelectedProductImage();
    // THEN
    expect(returnedImage).toEqual("img1.png")
  });

  it("should validate productNumber watch function", async () => {
    // GIVEN
    const spyQuerySelector = jest.spyOn(document, "querySelector").mockReturnValueOnce({style: {backgroundColor: ""}});
    wrapper.vm.$options.watch.productNumber.call(wrapper.vm, 2);
    // THEN
    expect(spyQuerySelector).toHaveBeenCalledTimes(1);
    
  });
});