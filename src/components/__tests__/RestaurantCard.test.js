import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import Mock_Data from "../mocks/resCardMock.json"

it("should render restaurant card component with props", () => {
    render(<RestaurantCard resData = {Mock_Data}/>)

    const name = screen.getByText("La Pino'z Pizza");
    expect(name).toBeInTheDocument();

})