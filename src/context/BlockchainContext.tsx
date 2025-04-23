
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { addBlock, Blockchain, Block, initBlockchain, loadBlockchain, saveBlockchain, simulateConsensus, NETWORK_NODES } from '../lib/blockchain';
import { Activity, MaintenanceDetails } from '../lib/data';
import { useToast } from '@/components/ui/use-toast';

interface BlockchainContextType {
  blockchain: Blockchain;
  pendingTransactions: Activity[];
  addTransaction: (activity: Activity) => void;
  miningInProgress: boolean;
  lastBlock: Block | null;
  consensusStatus: string;
  networkNodes: typeof NETWORK_NODES;
}

const BlockchainContext = createContext<BlockchainContextType | undefined>(undefined);

export const BlockchainProvider = ({ children }: { children: ReactNode }) => {
  const [blockchain, setBlockchain] = useState<Blockchain>(initBlockchain());
  const [pendingTransactions, setPendingTransactions] = useState<Activity[]>([]);
  const [miningInProgress, setMiningInProgress] = useState(false);
  const [consensusStatus, setConsensusStatus] = useState('No recent transactions');
  const { toast } = useToast();

  // Load blockchain from localStorage on component mount
  useEffect(() => {
    const loadedBlockchain = loadBlockchain();
    setBlockchain(loadedBlockchain);
  }, []);

  // Save blockchain to localStorage whenever it changes
  useEffect(() => {
    saveBlockchain(blockchain);
  }, [blockchain]);

  // Process pending transactions
  useEffect(() => {
    if (pendingTransactions.length > 0 && !miningInProgress) {
      const processPendingTransaction = async () => {
        setMiningInProgress(true);
        setConsensusStatus('Validating transaction...');
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const transaction = pendingTransactions[0];
        
        // Simulate Hyperledger consensus
        const consensusReached = simulateConsensus(blockchain);
        
        if (consensusReached) {
          setConsensusStatus('Consensus reached! Mining block...');
          
          // Simulate mining delay
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          const newBlockchain = addBlock(blockchain, transaction);
          setBlockchain(newBlockchain);
          
          let toastMessage = `Transaction for "${transaction.partName}" has been added to the blockchain`;
          
          if (transaction.type === 'maintenance') {
            toastMessage = `Maintenance record for "${transaction.partName}" has been verified and added to the blockchain`;
          }
          
          toast({
            title: "Block Mined Successfully",
            description: toastMessage,
          });
          
          setConsensusStatus('Transaction completed and verified');
        } else {
          setConsensusStatus('Consensus failed - transaction rejected');
          
          toast({
            title: "Transaction Rejected",
            description: "Network nodes could not reach consensus on this transaction",
            variant: "destructive",
          });
        }
        
        // Remove the processed transaction
        setPendingTransactions(prev => prev.slice(1));
        setMiningInProgress(false);
      };
      
      processPendingTransaction();
    }
  }, [pendingTransactions, miningInProgress, blockchain, toast]);

  const addTransaction = (activity: Activity) => {
    setPendingTransactions(prev => [...prev, activity]);
    
    const transactionType = activity.type === 'maintenance' ? 'maintenance record' : 'transaction';
    
    toast({
      title: `${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} Submitted`,
      description: `Your ${transactionType} has been submitted to the network for validation`,
    });
  };

  const lastBlock = blockchain.chain.length > 0 
    ? blockchain.chain[blockchain.chain.length - 1] 
    : null;

  return (
    <BlockchainContext.Provider
      value={{
        blockchain,
        pendingTransactions,
        addTransaction,
        miningInProgress,
        lastBlock,
        consensusStatus,
        networkNodes: NETWORK_NODES
      }}
    >
      {children}
    </BlockchainContext.Provider>
  );
};

export const useBlockchain = (): BlockchainContextType => {
  const context = useContext(BlockchainContext);
  if (context === undefined) {
    throw new Error('useBlockchain must be used within a BlockchainProvider');
  }
  return context;
};
