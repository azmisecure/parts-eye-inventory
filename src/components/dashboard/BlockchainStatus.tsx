
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity } from '@/lib/data';
import { Blockchain, Block } from '@/lib/blockchain';
import { Badge } from '@/components/ui/badge';
import { useBlockchain } from '@/context/BlockchainContext';
import { Loader2 } from 'lucide-react';

const BlockchainStatus = () => {
  const { blockchain, miningInProgress, pendingTransactions, consensusStatus, networkNodes } = useBlockchain();
  
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Hyperledger Fabric Network</CardTitle>
        <Badge variant={miningInProgress ? "outline" : "default"}>
          {miningInProgress ? (
            <div className="flex items-center">
              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
              Mining Block...
            </div>
          ) : "Network Active"}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-muted-foreground">Blockchain Height</h3>
            <p className="text-2xl font-bold">{blockchain.chain.length}</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-muted-foreground">Mining Difficulty</h3>
            <p className="text-2xl font-bold">{blockchain.difficulty}</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-muted-foreground">Pending Transactions</h3>
            <p className="text-2xl font-bold">{pendingTransactions.length}</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-muted-foreground">Consensus Status</h3>
            <p className="text-sm font-medium">{consensusStatus}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Network Nodes</h3>
          <div className="flex flex-wrap gap-2">
            {networkNodes.map((node, index) => (
              <Badge key={index} variant="outline" className="bg-muted">
                {node}
              </Badge>
            ))}
          </div>
        </div>
        
        {blockchain.chain.length > 1 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Latest Block</h3>
            <div className="bg-muted p-3 rounded-md text-xs">
              <div className="grid grid-cols-2 gap-1">
                <span className="text-muted-foreground">Hash:</span>
                <span className="truncate">{blockchain.chain[blockchain.chain.length - 1].hash.substring(0, 16)}...</span>
                <span className="text-muted-foreground">Previous Hash:</span>
                <span className="truncate">{blockchain.chain[blockchain.chain.length - 1].previousHash.substring(0, 16)}...</span>
                <span className="text-muted-foreground">Transaction:</span>
                <span>{blockchain.chain[blockchain.chain.length - 1].data.type} - {blockchain.chain[blockchain.chain.length - 1].data.partName}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlockchainStatus;
