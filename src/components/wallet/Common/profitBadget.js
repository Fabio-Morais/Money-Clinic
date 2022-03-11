import { styled, useTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomProfitBadget = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.background.paper,
    fontSize: theme.typography.body1.fontSize,
    padding: '0px 8px',
    fontWeight: 600,
    borderRadius: '8px',
    height: '32px',
    alignItems: 'center',
    display: 'flex'
}));

function ProfitBadget(param) {
    const { profit } = param;
    const theme = useTheme();
    return (
        <CustomProfitBadget sx={{ backgroundColor: profit > 0 ? theme.palette.success.dark : theme.palette.error.dark }}>
            {profit > 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            {Math.abs(profit)}%
        </CustomProfitBadget>
    );
}

export default ProfitBadget;
