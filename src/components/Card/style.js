import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

export const WrapperCard = styled(Grid)`
	position: relative;
	box-shadow: ${({ large }) => large ? 'none': 'rgb(0 0 0 / 8%) 0px 4px 16px'};
	border-radius: ${({ large }) => large ? '0': '12px'};
	margin-bottom: ${({ large }) => large ? '0': '16px'};
	padding: 16px;
	cursor: ${({ large }) => large ? 'default':'pointer'};
`
export const LineWrapper = styled('div')`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px,
`
