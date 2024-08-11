import { vi, describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Cart from './Cart';

const mockData = [{
    image: "",
    title: "mock",
    price: 200,
    rating: { rate: 2.9 },
    category: "Jewelery",
    textContent: "Add to cart",
    count: 1
}];

describe("Cart", () => {
    it("should render items heading", () => {
        render(
            <BrowserRouter>
                <Cart
                    shoppingList={mockData} />
            </BrowserRouter>);
        expect(screen.getByRole("heading", { name: "mock" }).textContent).toMatch(/mock/);
    });

    it("should render items price", () => {
        render(
            <BrowserRouter>
                <Cart
                    shoppingList={mockData} />
            </BrowserRouter>);
        expect(screen.getByText(/200/)).toBeInTheDocument();
    });

    it("should render subtotal", () => {
        render(
            <BrowserRouter>
                <Cart
                    shoppingList={mockData} />
            </BrowserRouter>);
        expect(screen.getByText(/Subtotal:/)).toBeInTheDocument();
    });

    it("should render shipping info", () => {
        render(
            <BrowserRouter>
                <Cart
                    shoppingList={mockData} />
            </BrowserRouter>);
        expect(screen.getByText(/Shipping taxes and discount codes calculated at checkout/)).toBeInTheDocument();
    });

    describe("count button", () => {
        it("should render", () => {
            render(
                <BrowserRouter>
                    <Cart
                        shoppingList={mockData} />
                </BrowserRouter>);
            expect(screen.getByTestId("count")).toBeInTheDocument();
        });
    });

    describe("check out button", () => {
        it("should render", () => {
            render(
                <BrowserRouter>
                    <Cart
                        shoppingList={mockData} />
                </BrowserRouter>);
            expect(screen.getByText(/Check out/)).toBeInTheDocument();
        });
    });
});