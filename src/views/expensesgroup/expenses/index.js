import { useEffect, useState } from 'react';
// material-ui
import { Grid } from '@mui/material';
// project imports

// project imports
import PopularCard from './PopularCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

function Expenses() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={6} md={8}>
                <TotalGrowthBarChart isLoading={isLoading} />
            </Grid>
            <Grid item xs={6} md={4}>
                <PopularCard isLoading={isLoading} />
            </Grid>
        </Grid>
    );
}
export default Expenses;
