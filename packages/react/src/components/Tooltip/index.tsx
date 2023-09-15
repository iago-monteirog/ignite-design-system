import { ComponentProps } from "react";
import { TootipContainer } from "./styles";

export interface TooltipProps extends ComponentProps<typeof TootipContainer> {
    date: string,
    availability: boolean
}

export function Tooltip({ availability = true, date }: TooltipProps) {
    return (
        <TootipContainer>
            <span>{date} - {availability ? 'Disponível' : 'Indisponível'}</span>
        </TootipContainer>
    )
}

Tooltip.display = 'Tooltip'