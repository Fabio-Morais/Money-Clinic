import { Button, Menu, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material';
import { MdAddCircleOutline } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { styled, useTheme } from '@mui/material/styles';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { GrEdit } from 'react-icons/gr';
import AddCoinDialog from '../../Common/Dialogs/AddCoinDialog';
import { useState } from 'react';

import AddEditTransactionDialog from '../../Common/Dialogs/AddEditTransactionDialog';
import EditPortfolioDialog from '../../Common/Dialogs/EditPortfolioDialog';

const GreyButton = styled(Button)(({ theme }) => ({
    '&:hover': { backgroundColor: theme.palette.grey['300'] }
}));

function Options({ currency, addTransactionHandle, portfolioHandle }) {
    const [open, setOpen] = useState(false);
    const [openTransaction, setOpenTransaction] = useState(false);
    const [openEditPortfolio, setOpenEditPortfolio] = useState(false);
    const [coin, setCoin] = useState({});
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAddCoin = (e, data) => {
        setOpen(false);
        setOpenTransaction(true);
        setCoin(data);
    };
    const handleClose = () => {
        setOpenTransaction(false);
        setOpen(false);
    };
    return (
        <Stack direction="row" spacing={1}>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <>
                        <GreyButton
                            variant="contained"
                            startIcon={<BiDotsHorizontalRounded />}
                            sx={{ backgroundColor: 'grey.300', color: 'grey.900' }}
                            {...bindTrigger(popupState)}
                        >
                            More
                        </GreyButton>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem
                                onClick={() => {
                                    popupState.close();
                                    setOpenEditPortfolio(true);
                                }}
                            >
                                <GrEdit size={16} />
                                <Typography sx={{ fontSize: '15px', fontWeight: '600', marginLeft: '10px' }}> Edit Portfolio</Typography>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </PopupState>
            <Button variant="contained" startIcon={<MdAddCircleOutline />} onClick={handleClickOpen}>
                Add new
            </Button>
            <AddCoinDialog fullScreen={fullScreen} handleClose={handleClose} handleAddCoin={handleAddCoin} open={open} />
            {openTransaction && (
                <AddEditTransactionDialog
                    fullScreen={fullScreen}
                    handleClose={handleClose}
                    addTransactionHandle={addTransactionHandle}
                    open={openTransaction}
                    coin={coin}
                    currency={currency}
                />
            )}
            {openEditPortfolio && (
                <EditPortfolioDialog
                    portfolioHandle={portfolioHandle}
                    open={openEditPortfolio}
                    closeEditDialogHandle={() => setOpenEditPortfolio(false)}
                />
            )}
        </Stack>
    );
}

export default Options;
