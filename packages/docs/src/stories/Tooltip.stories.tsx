import type { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@iagomg-ignite-ui/react'

export default {
    title: 'Calendar/Tooltip',
    component: Tooltip,
    args: {
        date: '14 de setembro',
        availability: true
    },
    argTypes: {
        availability: {
            options: [true, false],
            control: { type: 'inline-radio' },
        }
    },
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const Unavailable: StoryObj<TooltipProps> = {
    args: {
        availability: false
    }
}