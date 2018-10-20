import * as React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

it("Button should render", () => {
  const handleClick = jest.fn();
  const component = shallow(<Button onClick={handleClick}>Foo</Button>);
  expect(component.exists()).toBeTruthy();
  expect(component.text()).toBe("Foo");
});

it("Button should handle click", () => {
  const handleClick = jest.fn();
  const component = shallow(<Button onClick={handleClick}>Foo</Button>);
  component.simulate("click");
  expect(handleClick).toHaveBeenCalledTimes(1);
});
