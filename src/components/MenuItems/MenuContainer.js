import React, { useContext, useEffect, useState } from 'react'
import MenuButtons from "./MenuButtons";
import { useHistory } from "react-router-dom";
import { MenuWrapper } from "../../context/Menu/MenuContext";
import { NewGame } from './../../api/game';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { btn_font} from "./MenuItems.module.scss";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function MenuContainer() {
    const classes = useStyles();
    const [openDifficultyModal, setOpenDifficultyModal] = useState(false);
    const [openRoomModal, setOpenRoomModal] = useState(false);
    const [playWithAI, setPlayWithAI] = useContext(MenuWrapper);


    const history = useHistory()

    const handleOpenDifficultyModal = () => {
        setOpenDifficultyModal(true);
    };

    const handleCloseDifficultyModal = () => {
        setOpenDifficultyModal(false);
    };


    const handleOpenRoomModal = () => {
        setOpenRoomModal(true)
    }
    const handleCloseRoomModal = () => {
        setOpenRoomModal(false)
    }


    const handleMultiPlayer = () => history.push('/GamePage');

    const handlePlayWithAI = (level) => {
        let obj = {
            level: level
        }

        NewGame(obj)
            .then(res => {
                console.log(res);
                setPlayWithAI(true)
                history.push('/GamePage')
            }).catch(err => {
                console.log(err);
            })


    }
    const CreateRoom = () => {
        handleOpenRoomModal()
    }
    useEffect(() => {
        setPlayWithAI(false)
    }, [])

    return (
        <div className='d-flex flex-column align-items-center pb-5'>

            <MenuButtons
                text='Multi player'
                width={'200px'}
                radius={'40px'}
                color='primary'
                event={handleMultiPlayer}
            />

            <MenuButtons
                text='Play with AI'
                width={'200px'}
                radius={'40px'}
                color='primary'
                event={() => handleOpenDifficultyModal()}
            />


            <MenuButtons
                text='Make a Room'
                width={'200px'}
                radius={'40px'}
                color='primary'
                event={() => CreateRoom()}
            />

            <MenuButtons
                text='Seeting'
                width={'200px'}
                radius={'40px'}
                color='primary'
                event={() => { }}
            />

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openDifficultyModal}
                onClose={handleCloseDifficultyModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openDifficultyModal}>
                    <div className={classes.paper}>
                        <MenuButtons
                            text='Hard'
                            width={'150px'}
                            radius={'20px'}
                            color='primary'
                            event={() => handlePlayWithAI('Hard')}
                        />
                        <MenuButtons
                            text='Normal'
                            width={'150px'}
                            radius={'20px'}
                            color='primary'
                            event={() => handlePlayWithAI('normal')}
                        />
                        <MenuButtons
                            text='Easy'
                            width={'150px'}
                            radius={'20px'}
                            color='primary'
                            event={() => handlePlayWithAI('easy')}
                        />

                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openRoomModal}
                onClose={handleCloseRoomModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openRoomModal}>
                    <div className={classes.paper}>
                        <TextField  
                        id="standard-basic" label="Invite Link" 
                        value={'link'} />

                        
                        <Button className='mt-4' >
                            <span className={btn_font + "  text-primary"} >
                                Let's Go
                            </span>

                        </Button>

                    </div>
                </Fade>
            </Modal>

        </div>

    )
}

export default MenuContainer
