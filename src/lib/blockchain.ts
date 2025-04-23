
import { Activity } from './data';

export interface Block {
  index: number;
  timestamp: string;
  data: Activity;
  previousHash: string;
  hash: string;
  nonce: number;
}

export interface Blockchain {
  chain: Block[];
  difficulty: number;
}

// Simulate blockchain network nodes
export const NETWORK_NODES = [
  "Maintenance Node",
  "Supply Chain Node",
  "Quality Control Node",
  "Management Node"
];

// Initialize a new blockchain
export const initBlockchain = (): Blockchain => ({
  chain: [createGenesisBlock()],
  difficulty: 2
});

// Create the first block in the chain (genesis block)
export const createGenesisBlock = (): Block => {
  const genesisActivity: Activity = {
    id: '0',
    type: 'add',
    partName: 'Genesis Block',
    user: 'System',
    date: new Date().toISOString(),
  };
  
  const block = {
    index: 0,
    timestamp: new Date().toISOString(),
    data: genesisActivity,
    previousHash: '0',
    hash: '',
    nonce: 0
  };
  
  block.hash = calculateHash(block);
  return block;
};

// Calculate the hash of a block
export const calculateHash = (block: Omit<Block, 'hash'>): string => {
  return window.btoa(
    JSON.stringify(block.index) + 
    block.timestamp + 
    JSON.stringify(block.data) + 
    block.previousHash + 
    block.nonce
  );
};

// Mine a new block (simulates Proof of Work)
export const mineBlock = (lastBlock: Block, data: Activity, difficulty: number): Block => {
  let nonce = 0;
  let timestamp = new Date().toISOString();
  let hash = '';
  
  const newBlock: Omit<Block, 'hash'> = {
    index: lastBlock.index + 1,
    timestamp,
    data,
    previousHash: lastBlock.hash,
    nonce
  };
  
  // Simulate "mining" with a simple proof of work
  const target = Array(difficulty + 1).join('0');
  
  while (hash.substring(0, difficulty) !== target) {
    nonce++;
    newBlock.nonce = nonce;
    newBlock.timestamp = new Date().toISOString(); // Update timestamp to make hash different
    hash = calculateHash(newBlock);
    
    // Don't freeze the browser for too long
    if (nonce > 100) break;
  }
  
  return {
    ...newBlock,
    hash
  };
};

// Add a new block to the chain
export const addBlock = (blockchain: Blockchain, data: Activity): Blockchain => {
  const newBlock = mineBlock(
    blockchain.chain[blockchain.chain.length - 1],
    data,
    blockchain.difficulty
  );
  
  return {
    ...blockchain,
    chain: [...blockchain.chain, newBlock]
  };
};

// Validate the blockchain
export const isChainValid = (blockchain: Blockchain): boolean => {
  for (let i = 1; i < blockchain.chain.length; i++) {
    const currentBlock = blockchain.chain[i];
    const previousBlock = blockchain.chain[i - 1];
    
    // Verify hash
    if (currentBlock.hash !== calculateHash({
      index: currentBlock.index,
      timestamp: currentBlock.timestamp,
      data: currentBlock.data,
      previousHash: currentBlock.previousHash,
      nonce: currentBlock.nonce
    })) {
      return false;
    }
    
    // Verify chain link
    if (currentBlock.previousHash !== previousBlock.hash) {
      return false;
    }
  }
  
  return true;
};

// Load blockchain from localStorage
export const loadBlockchain = (): Blockchain => {
  const storedChain = localStorage.getItem('blockchain');
  return storedChain ? JSON.parse(storedChain) : initBlockchain();
};

// Save blockchain to localStorage
export const saveBlockchain = (blockchain: Blockchain): void => {
  localStorage.setItem('blockchain', JSON.stringify(blockchain));
};

// Simulate consensus (simplified version of Hyperledger's consensus)
export const simulateConsensus = (blockchain: Blockchain): boolean => {
  // In a real Hyperledger network, nodes would validate transactions
  // Here we'll simulate with a random approval process
  const approvalThreshold = 0.7; // 70% of nodes must agree
  const nodesApproving = NETWORK_NODES.filter(() => Math.random() > 0.3).length;
  const consensusReached = (nodesApproving / NETWORK_NODES.length) >= approvalThreshold;
  
  return consensusReached;
};
