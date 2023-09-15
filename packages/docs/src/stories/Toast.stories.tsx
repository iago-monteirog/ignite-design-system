import type { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@iagomg-ignite-ui/react'

export default {
    title: 'Calendar/Toast',
    component: Toast,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}