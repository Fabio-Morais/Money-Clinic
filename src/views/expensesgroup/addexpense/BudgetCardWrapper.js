import BudgetCard from './BudgetCard';
import { Stack } from '@mui/material';

function BudgetCardWrapper() {
    return (
        <Stack spacing={2} sx={{ mt: 2 }}>
            <BudgetCard name="Home expenses" amount={500} max={500} />
            <BudgetCard name="Food" amount={0} max={200} />
            <BudgetCard name="Transportation" amount={20} max={100} />
            <BudgetCard name="Leisure" amount={20} max={50} />
            <BudgetCard name="Others" amount={50} max={100} />
        </Stack>
    );
}

export default BudgetCardWrapper;
