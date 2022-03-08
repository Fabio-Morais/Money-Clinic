// project imports
import BudgetCard from './BudgetCard';
import MainCard from 'ui-component/cards/MainCard';
import AddExpenseDialog from './Dialogs/AddExpenseDialog';
import AddBudgetDialog from './Dialogs/AddBudgetDialog';
import { useState } from 'react';

// material ui
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

function AddExpense() {
    const [openAddExpense, setOpenAddExpense] = useState(false);
    const [openAddBudget, setOpenAddBudget] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const buttonClickOpenAddExpenseHandler = () => {
        setOpenAddExpense(true);
    };

    const buttonClickCloseAddExpenseHandler = () => {
        setOpenAddExpense(false);
    };

    const buttonClickOpenAddBudgetHandler = () => {
        setOpenAddBudget(true);
    };

    const buttonClickCloseAddBudgetHandler = () => {
        setOpenAddBudget(false);
    };

    return (
        <MainCard>
            <Container>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Typography variant="h2">Monthly Budgets</Typography>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" startIcon={<AddIcon />} onClick={buttonClickOpenAddBudgetHandler}>
                            Add Budget
                        </Button>
                        <AddBudgetDialog fullScreen={fullScreen} handleClose={buttonClickCloseAddBudgetHandler} open={openAddBudget} />

                        <Button variant="outlined" startIcon={<AddIcon />} onClick={buttonClickOpenAddExpenseHandler}>
                            Add Expense
                        </Button>
                        <AddExpenseDialog fullScreen={fullScreen} handleClose={buttonClickCloseAddExpenseHandler} open={openAddExpense} />
                    </Stack>
                </Grid>
                <Stack spacing={2} sx={{ mt: 2 }}>
                    <BudgetCard name="Home expenses" amount={500} max={500} />
                    <BudgetCard name="Food" amount={0} max={200} />
                    <BudgetCard name="Transportation" amount={20} max={100} />
                    <BudgetCard name="Leisure" amount={20} max={50} />
                    <BudgetCard name="Others" amount={50} max={100} />
                </Stack>
            </Container>
        </MainCard>
    );
}

export default AddExpense;
