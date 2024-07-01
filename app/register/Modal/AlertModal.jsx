import {useState} from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";


export default function AlertModal({kvkk,setKvkk}) {
    const [open, setOpen] = useState(false);


    const handleKvkkChange = () => {
        if(kvkk === false) {
        setKvkk(!kvkk);
        }
        setOpen(false);
    }
    return (
        <>
            <Button onClick={() => setOpen(true)} className={'text-darkOrange'}><p className={'subTitle text-black'}>Open KVKK</p></Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper',  boxShadow: 24, p: 4 }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        KVKK
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        By registering on Audiophile, you consent to the collection and processing of your personal data, including your email and password, in accordance with our Privacy Policy. Your data will be used to manage your account, enhance your experience, and communicate with you. We are committed to protecting your privacy and ensuring your data is secure. For more details, please read our full
                        <a href={'/privacy'} className={'text-darkOrange'}> Privacy Policy (representative does not work) </a>
                    </Typography>
                    <div className={'w-full h-[25px] bg-lightOrange mt-3'}>
                        <button onClick={handleKvkkChange} className={'w-full h-full text-white'}>Accept KVKK</button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}