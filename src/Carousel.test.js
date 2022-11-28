import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

test('renders without crashing', () => {
  render(<Carousel />)
})

test('should match snapshot', () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click on the right arrow", () => {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});
