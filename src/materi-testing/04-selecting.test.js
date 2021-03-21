import {fireEvent, render, screen} from '@testing-library/react'
import App from '../App';

describe('Testing untuk seluru app saat pertama render', () => {
  test("Memastikan kontent text P sesuai saat pertama render", () => {
    render(<App />);
    const textP = screen.getByText("Saya sedang Sembunyi")
    expect(textP).toBeInTheDocument()
  })

  test("Memastikan kontent button sesuai saat pertama render", () => {
    render(<App />);
    const textBtn = screen.getByText("Munculkan")
    expect(textBtn).toBeInTheDocument()
  })
})

describe('Testing untuk seluru app setelah melakukan click pada button', () => {
  test("Memastikan kontent text P sesuai setelah action click button", () => {
    render(<App />);

    // muncul ke sembunyi
    const textBtn = screen.getByText("Munculkan");
    expect(textBtn).toBeInTheDocument()
    fireEvent.click(textBtn);

    const textP = screen.getByText("Saya sedang Muncul");
    expect(textP).toBeInTheDocument()

    // sembunyi ke muncul
    const textBtn2 = screen.getByText("Sembunyikan");
    expect(textBtn2).toBeInTheDocument()
    fireEvent.click(textBtn2);
    
    const textP2 = screen.getByText("Saya sedang Sembunyi");
    expect(textP2).toBeInTheDocument()
  })

  test("Memastikan kontent button sesuai setelah action click button", () => {
    render(<App />);

    // const textBtn = screen.getByRole("button");
    const textBtn = screen.getByTestId("button-fireEvent");
    expect(textBtn).toBeInTheDocument()
    fireEvent.click(textBtn);
    
    const textBtnResult = screen.getByText("Sembunyikan");
    expect(textBtnResult).toBeInTheDocument()

    const textBtn2 = screen.getByTestId("button-fireEvent");
    expect(textBtn2).toBeInTheDocument()
    fireEvent.click(textBtn2);
    
    const textBtnResult2 = screen.getByText("Munculkan");
    expect(textBtnResult2).toBeInTheDocument()
  })
})