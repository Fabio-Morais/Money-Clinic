// project imports
import MainCard from 'ui-component/cards/MainCard';

import AddBudgetDialog from './Dialogs/AddBudgetDialog';
import { useState } from 'react';
import BudgetCardWrapper from './BudgetCardWrapper';

// material ui
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, Grid, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

function AddExpense() {
    const [openAddBudget, setOpenAddBudget] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const buttonClickOpenAddBudgetHandler = () => {
        setOpenAddBudget(true);
    };

    const buttonClickCloseAddBudgetHandler = () => {
        setOpenAddBudget(false);
    };

    return (
        <MainCard title="Monthly Budgets">
            <Container>
                <Grid container alignItems="center" justifyContent="flex-end">
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" startIcon={<AddIcon />} onClick={buttonClickOpenAddBudgetHandler}>
                            Add Budget
                        </Button>
                        <AddBudgetDialog fullScreen={fullScreen} handleClose={buttonClickCloseAddBudgetHandler} open={openAddBudget} />
                    </Stack>
                </Grid>
                <BudgetCardWrapper />
            </Container>
        </MainCard>
    );
}

export default AddExpense;
