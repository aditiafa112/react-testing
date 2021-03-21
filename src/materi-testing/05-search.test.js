import {render, screen} from '@testing-library/react';
import App from "../App";

describe("Melakukan testing untuk seluruh App", () => {
  it("Memunculkan role yang ada dalam sebuah dokumen", () => {
    render(<App/>);
    // screen.getByRole('');
    screen.getByTestId('sample-input');
  })
})