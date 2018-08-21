import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider); //used to rip out injected version of web3 (injected by metamask)

export default web3;