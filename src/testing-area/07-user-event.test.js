import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import CompUserEvent from './CompUserEvent';

const MOCK_SUBMIT_BTN = jest.fn();

describe("Testing seluruh app", () => {
  it("testing onChance event", () => {
    render(<App/>);
    const input = screen.getByPlaceholderText("input value");
    userEvent.type(input, "Aditia Falacha Arvin");
    expect(screen.getByText(/Anda mengetik Aditia Falacha Arvin/)).toBeInTheDocument();
  })
  it("testing onClick pada text submit", () => {
    render(<CompUserEvent onSubmit={MOCK_SUBMIT_BTN} />);
    const textSubmit = screen.getByTestId('text-submit');
    userEvent.click(textSubmit);
    expect(MOCK_SUBMIT_BTN).toHaveBeenCalled();
  })
})