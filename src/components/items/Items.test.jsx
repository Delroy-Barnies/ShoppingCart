import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from 'vitest';
import Items from './Items';

const mockData = [{
    image: "",
    title: "mock",
    price: 200,
    rating: { rate: 2.9 },
    category: "Jewelery",
    textContent: "Add to cart"
}];

describe("Items", () => {
    it("should render items heading", () => {
        render(
            <BrowserRouter>
                <Items
                    data={mockData} />
            </BrowserRouter>);
        expect(screen.getByRole("heading", { name: "mock" }).textContent).toMatch(/mock/);
    });

    it("should render items price", () => {
        render(
            <BrowserRouter>
                <Items
                    data={mockData} />
            </BrowserRouter>);
        expect(screen.getByText(/200/)).toBeInTheDocument();
    });

    it("should render items rating", () => {
        render(
            <BrowserRouter>
                <Items
                    data={mockData} />
            </BrowserRouter>);
        expect(screen.getByText(/2.9/)).toBeInTheDocument();
    });

    describe("Add to cart button", () => {
        it("should render", () => {
            render(
                <BrowserRouter>
                    <Items
                        data={mockData} />
                </BrowserRouter>);
            expect(screen.getByRole("button", { name: "Add to cart" }).textContent).toMatch(/Add to cart/);
        });
    });
});