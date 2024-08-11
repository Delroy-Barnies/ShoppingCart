import { vi, describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import Cart from '../cart/Cart';

describe("Navbar", () => {
    it("should render brand main heading", () => {
        render(
            <BrowserRouter>
                <Navbar count={0} />
            </BrowserRouter>);
        expect(screen.getByRole("heading", { name: "DRENCH" }).textContent).toMatch(/DRENCH/);
    });

    it("should render brand sub heading", () => {
        render(
            <BrowserRouter>
                <Navbar count={0} />
            </BrowserRouter>);
        expect(screen.getByRole("heading", { name: "MANUFACTORING CO." }).textContent).toMatch(/MANUFACTORING CO./);
    });

    it("should render about link", () => {
        render(
            <BrowserRouter>
                <Navbar count={0} />
            </BrowserRouter>);
        expect(screen.getByRole("link", { name: "ABOUT" }).textContent).toMatch(/ABOUT/);
    });

    it("should render dropdown menu", () => {
        render(
            <BrowserRouter>
                <Navbar count={0} />
            </BrowserRouter>);
        expect(screen.getByText(/SHOP ALL/)).toBeInTheDocument();
    });

    it("should render review link", () => {
        render(
            <BrowserRouter>
                <Navbar count={0} />
            </BrowserRouter>);
        expect(screen.getByRole("link", { name: "REVIEW" }).textContent).toMatch(/REVIEW/);
    });

    it("should render github img", () => {
        render(
            <BrowserRouter>
                <Navbar count={0} />
            </BrowserRouter>);
        expect(screen.getByTestId("githubImg")).toBeInTheDocument();
    });

    it("should render profile img", () => {
        render(
            <BrowserRouter>
                <Navbar count={0} />
            </BrowserRouter>);
        expect(screen.getByTestId("profileImg")).toBeInTheDocument();
    });

    it("should render cart  img", () => {
        render(
            <BrowserRouter>
                <Navbar count={0} />
            </BrowserRouter>);
        expect(screen.getByTestId("cartImg")).toBeInTheDocument();
    });

    describe("shop all button", () => {
        it("should drop down menu on hover", async () => {
            render(
                <BrowserRouter>
                    <Navbar count={0} />
                </BrowserRouter>);

            fireEvent.mouseEnter(screen.getByText('SHOP ALL'));
            await waitFor(() => screen.getByTestId('dropdown'));
            expect(screen.getByRole("link", { name: "Jewelery" }).textContent).toMatch(/Jewelery/);
        });
    });

    describe("cart button", () => {

        it("should open cart on click", async () => {
            render(
                <BrowserRouter>
                    <Navbar section="shop" count={0} />
                    <Cart shoppingList={[]} />
                </BrowserRouter>);

            fireEvent.mouseDown(screen.getByTestId('cartButton'));
            await waitFor(() => screen.getByTestId('cart'));
            expect(screen.getByRole('button', { name: "Check out" }).textContent).toMatch(/Check out/);
        });
    });

    describe("close button", () => {
        it("should render after cart opens", () => {
            render(
                <BrowserRouter>
                    <Navbar cartOpened={true} section="shop" count={0} />
                </BrowserRouter>);

            expect(screen.getByRole('button', { name: "CLOSE" }).textContent).toMatch(/CLOSE/);
        });
    });

});