test("RestaurantCard component should render correctly", () => {
    render(<RestaurantCard resData={mockData} />);
    const restaurantName = screen.getByText("Pizza Factory");
    expect(restaurantName).toBeInTheDocument();
});


import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import mockData from "./MOCKS/resData.json";