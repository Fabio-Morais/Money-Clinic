// material-ui

// project imports
import { Button, Container, Grid, Stack } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

function AddExpense() {
    return (
        <MainCard>
            <Container>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <h1>Budgets</h1>
                    </Grid>
                    <Grid item>
                        <Stack direction="horizontal" gap="2">
                            <Button variant="contained">Add Budget</Button>
                            <Button variant="outlined">Add Expense</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </MainCard>
    );
}

export default AddExpense;
