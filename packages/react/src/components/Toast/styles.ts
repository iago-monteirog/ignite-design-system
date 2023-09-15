import { styled } from "../../styles";

export const ToastContainer = styled('div', {
    display: "flex",
    gap: '$2',
})

export const CaretButton = styled('button', {
    all: 'unset',

    svg: {
        color: '$gray200',
        cursor: 'pointer',
    }
})