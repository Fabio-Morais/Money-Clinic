// project imports
import BudgetCard from './BudgetCard';
import MainCard from 'ui-component/cards/MainCard';

// material ui
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

// ==============================|| SAMPLE PAGE ||============================== //

function AddExpense() {
    return (
        <MainCard>
            <Container>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h2">Monthly Budgets</Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained" startIcon={<AddIcon />}>
                                Add Budget
                            </Button>
                            <Button variant="outlined" startIcon={<AddIcon />}>
                                Add Expense
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ mx: 'auto', mb: 2, mt: 2 }}>
                    <BudgetCard name="Home expenses" amount={200} max={1000} />
                </Box>
                <Box sx={{ mx: 'auto', mb: 2, mt: 2 }}>
                    <BudgetCard name="Food" amount={0} max={200} />
                </Box>
                <Box sx={{ mx: 'auto', mb: 2, mt: 2 }}>
                    <BudgetCard name="Transportation" amount={50} max={100} />
                </Box>
                <Box sx={{ mx: 'auto', mb: 2, mt: 2 }}>
                    <BudgetCard name="Leisure" amount={20} max={50} />
                </Box>
                <Box sx={{ mx: 'auto', mb: 2, mt: 2 }}>
                    <BudgetCard name="Others" amount={50} max={100} />
                </Box>
            </Container>
        </MainCard>
    );
}

export default AddExpense;
