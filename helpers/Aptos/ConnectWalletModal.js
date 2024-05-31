import styles from '../../styles/Home.module.css'

import { useWallet } from "@aptos-labs/wallet-adapter-react"

import Modal from "react-bootstrap/Modal"

const ConnectWalletModal = (props) => {
    const {show, onConnect} = props

    const wallet = useWallet();
    
    //show={show}
    return (
        <Modal id={styles.connectWalletModal} show={show} onHide={onConnect} centered>
            <Modal.Body className="d-flex flex-column">
                {wallet.wallets.map((walletType) => {
                    return <button key={walletType.name} className={styles.walletAdapterOption}
                        onClick={async () => {
                            onConnect(walletType.name);
                            wallet.connect(walletType.name);
                            console.log("Connect clicked");
                        }}
                    >
                        <img src={walletType.icon} />
                        <h6 className="mb-0">{walletType.name}</h6>
                    </button>
                })}
            </Modal.Body>
        </Modal>
    )
}

export default ConnectWalletModal;
