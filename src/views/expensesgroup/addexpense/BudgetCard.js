import { Card, Grid, Stack, Button, CardContent } from '@mui/material';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';

function BudgetCard({ name, amount, max }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <h2>{name}</h2>
                    </Grid>
                    <Grid item>
                        <h2>
                            {amount}€ / {max}€
                        </h2>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="flex-end">
                        <Stack direction="row" spacing={1}>
                            <Button variant="outlined" startIcon={<AddIcon />}>
                                Add Expense
                            </Button>
                            <Button variant="outlined" startIcon={<VisibilityIcon />}>
                                View Expenses
                            </Button>
                        </Stack>
                    </Grid>
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
