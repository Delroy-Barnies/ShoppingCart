import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe("Loader", () => {
    it("renders component", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>);
        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });
});