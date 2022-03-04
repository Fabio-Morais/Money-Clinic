// react imports
import PropTypes from 'prop-types';

// material ui
import { Card, Grid, Stack, Button, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';

function BudgetCard({ name, amount, max }) {
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
