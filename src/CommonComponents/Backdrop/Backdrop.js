import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import LinearProgress from '@mui/material/LinearProgress';
import { useState , useEffect} from 'react';
// import Button from '@mui/material/Button';

const MUI_BackDrop = (props) => {
    //State
    const [open, setOpen] = useState(true);
    //ComponentDidUpdate
    useEffect(()=>{
        if(props.loading !== null){
            setOpen(props.loading)
        }
    },[props.loading])
    //render
    return(
        <div className='col-12'>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default MUI_BackDrop