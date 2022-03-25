// react imports
import PropTypes from 'prop-types';
import { useState } from 'react';

// material ui
import { Card, Box, Grid, Stack, Button, CardContent, LinearProgress, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';

import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';

import AddExpenseDialog from './Dialogs/AddExpenseDialog';

function BudgetCard({ name, amount, max }) {
    const [openAddExpense, setOpenAddExpense] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const buttonClickOpenAddExpenseHandler = () => {
        setOpenAddExpense(true);
    };

    const buttonClickCloseAddExpenseHandler = () => {
        setOpenAddExpense(false);
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h3">{name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">
                            {amount}€ / {max}€
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={2} mb={2}>
                    <LinearProgress value={(amount / max) * 100} max={max} variant="determinate" />
                </Box>
                <Grid container alignItems="center" justifyContent="flex-end">
                    <Stack direction="row" spacing={1}>
                        <Button variant="outlined" startIcon={<AddIcon />} onClick={buttonClickOpenAddExpenseHandler}>
                            Add Expense
                        </Button>
                        <AddExpenseDialog
                            fullScreen={fullScreen}
                            handleClose={buttonClickCloseAddExpenseHandler}
                            open={openAddExpense}
                            name={name}
                        />
                        <Button variant="outlined" startIcon={<VisibilityIcon />}>
                            View Expenses
                        </Button>
                    </Stack>
                </Grid>
            </CardContent>
        </Card>
    );
}

BudgetCard.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
    max: PropTypes.number
};

export default BudgetCard;
