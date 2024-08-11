import { vi, describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from './Home';

describe("Home", () => {

    it("renders about component", () => {
        render(
            <BrowserRouter>
                <Home section="about" />
            </BrowserRouter>);
        expect(screen.getByText(/ABOUT US/)).toBeInTheDocument();
    });

    it("renders review component", () => {
        render(
            <BrowserRouter>
                <Home section="review" />
            </BrowserRouter>);
        expect(screen.getByText(/REVIEW/)).toBeInTheDocument();
    });


});