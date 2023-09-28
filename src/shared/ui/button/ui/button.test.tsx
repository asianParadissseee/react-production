import {render, screen} from "@testing-library/react";
import {Button} from "shared/ui/button";
import {ThemeButton} from "./button";

describe("button test", () => {
    test("button render", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    test("button props theme", () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass('clear');
        screen.debug()
    });


})
