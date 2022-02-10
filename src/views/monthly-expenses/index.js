import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// project imports
import EarningCard from 'charts/EarningCard';
import PopularCard from 'charts/PopularCard';
import TotalOrderLineChartCard from 'charts/TotalOrderLineChartCard';
import TotalIncomeDarkCard from 'charts/TotalIncomeDarkCard';
import TotalIncomeLightCard from 'charts/TotalIncomeLightCard';
import TotalGrowthBarChart from 'charts/TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

function MonthlyExpenses() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={6} md={8}>
                <item>
                    <TotalGrowthBarChart isLoading={isLoading} />
                </item>
             </Grid>
            <Grid item xs={6} md={4}>
                <item>
                    <PopularCard isLoading={isLoading} />
                </item>
            </Grid>
        </Grid>
    );
}

export default MonthlyExpenses;
