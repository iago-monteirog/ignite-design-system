import { styled } from "../../styles";

export const TootipContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '$3 $4',
    background: '$gray900',
    borderRadius: '$sm',
    width: '$64',

    color: '$gray100',
    fontFamily: '$default',
    fontSize: 'sm', 
    fontWeight: '$medium',
    textAlign: 'center',
    lineHeight: 1.4,
    position: 'relative',

    '&::before': {
        content: '""',
        position: 'absolute',
        bottom: '-16px',
        left: '50%',
        marginLeft: '-15px',
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderTop: '16px solid $gray900', 
    },

})