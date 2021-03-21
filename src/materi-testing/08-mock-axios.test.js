import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from "../App";

jest.mock("axios");

describe("Testing seluruh aplikasi", () => {
  it("Melakukan test untuk list user", async () => {
    const users = [
      {
        id: 1,
        name: "Aditia Falacha Arvin",
      },
      {
        id: 2,
        name: "Lutfi Maulana",
      },
      {
        id: 3,
        name: "Mas Hakim"
      },
    ];

    axios.get.mockImplementation(() => Promise.resolve({data: users}));
    render(<App />);

    const btn = screen.getByTestId("get-user");
    userEvent.click(btn);

    await waitFor(() => {
      expect(screen.getAllByTestId("user-name")).toHaveLength(users.length);
    });

    axios.get.mockImplementation(() => Promise.reject());
    const btn2 = screen.getByTestId("get-user");
    userEvent.click(btn2);
  })
})