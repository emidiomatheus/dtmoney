import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Container = styled(ToastContainer)`
  .Toastify__toast--info {
    background: rgb(51, 102, 255);
    color: white;
  }

  .Toastify__toast--success {
    background: #33cc95;
    color: white;
  }

  .Toastify__progress-bar--success {
    background: white;
  }

  .Toastify__toast--error {
    background: #e52e4d;
    color: white;
  }

  .Toastify__progress-bar--error {
    background: white;
  }
`;