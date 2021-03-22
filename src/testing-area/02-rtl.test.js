import {render, screen} from '@testing-library/react'
import App from '../App';

test("Menyapa Adit", () => {
  render(<App />);
  const text = screen.getByText("Hello Adit");
  expect(text).toBeInTheDocument();
})