import { CaretLeft, CaretRight } from "phosphor-react";
import { CaretButton, ToastContainer } from "./styles";
import { ComponentProps } from "react";

export interface ToastProps extends ComponentProps<typeof CaretButton> { }

export function Toast(props: ToastProps) {
    return (
        <ToastContainer>
            <CaretButton {...props} >
                <CaretLeft size={20} weight="bold" />
            </CaretButton>

            <CaretButton {...props}>
                <CaretRight size={20} weight="bold" />
            </CaretButton>
        </ToastContainer>
    )
}