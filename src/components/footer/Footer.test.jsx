import { vi, describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Footer from './Footer';

describe("Footer", () => {

    it("renders component", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>);
        expect(screen.getByText(/CONTACT/)).toBeInTheDocument();
    });

    it("renders correct email img", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>);
        expect(screen.getByTestId("emailImg")).toBeInTheDocument();
    });

    it("renders correct globe img", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>);
        expect(screen.getByTestId("globeImg")).toBeInTheDocument();
    });

    it("renders correct github img", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>);
        expect(screen.getByTestId("githubImg")).toBeInTheDocument();
    });




});