// material-ui

// project imports
import BudgetCard from './BudgetCard';
import AddIcon from '@mui/icons-material/Add';

import { Button, Container, Grid, Stack } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

function AddExpense() {
    return (
        <MainCard>
            <Container>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <h1>Monthly Budgets</h1>
                    </Grid>
                    <Grid item>
                        <Stack direction="horizontal" gap="2">
                            <Button variant="contained" startIcon={<AddIcon />}>
                                Add Budget
                            </Button>
                            <Button variant="outlined" startIcon={<AddIcon />}>
                                Add Expense
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
                <BudgetCard name="Home expenses" amount={200} max={1000} />
                <BudgetCard name="Food" amount={0} max={200} />
                <BudgetCard name="Transportation" amount={50} max={100} />
            </Container>
        </MainCard>
    );
}

export default AddExpense;
