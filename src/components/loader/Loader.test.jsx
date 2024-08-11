import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from 'vitest';
import Loader from './Loader';

describe("Loader", () => {
    it("renders component", () => {
        render(
            <BrowserRouter>
                <Loader />
            </BrowserRouter>);
        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });
});