
import MainLayout from '@/components/layout/MainLayout';
import { useBlockchain } from '@/context/BlockchainContext';
import { Package, ArrowDown, ArrowUp, ArrowRight, Cpu, Check, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import { isChainValid } from '@/lib/blockchain';

const BlockchainExplorer = () => {
  const { blockchain } = useBlockchain();
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [validationResult, setValidationResult] = useState<boolean | null>(null);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'add':
        return <ArrowUp className="h-5 w-5 text-green-500" />;
      case 'remove':
        return <ArrowDown className="h-5 w-5 text-red-500" />;
      case 'update':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'move':
        return <ArrowRight className="h-5 w-5 text-purple-500" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const validateChain = () => {
    const isValid = isChainValid(blockchain);
    setValidationResult(isValid);
  };

  return (
    <MainLayout title="Blockchain Explorer">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">
            Explore the Hyperledger Fabric-inspired blockchain ledger for part inventory
          </p>
          
          <div className="flex gap-3">
            <Button 
              variant={validationResult === null ? "outline" : validationResult ? "default" : "destructive"}
              onClick={validateChain}
            >
              {validationResult === null ? (
                <span>Validate Blockchain</span>
              ) : validationResult ? (
                <span className="flex items-center">
                  <Check className="h-4 w-4 mr-1" /> Valid Chain
                </span>
              ) : (
                <span className="flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-1" /> Invalid Chain
                </span>
              )}
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {blockchain.chain.map((block, index) => (
            <Card 
              key={block.index} 
              className={`cursor-pointer ${index === 0 ? 'bg-muted/50' : ''}`}
              onClick={() => setSelectedBlock(index)}
            >
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Block #{block.index}</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {new Date(block.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {index > 0 && getActivityIcon(block.data.type)}
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Hash:</span>
                    <p className="truncate font-mono text-xs">{block.hash}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Previous Hash:</span>
                    <p className="truncate font-mono text-xs">{block.previousHash}</p>
                  </div>
                  {index > 0 && (
                    <>
                      <div>
                        <span className="text-muted-foreground">Transaction:</span>
                        <p>{block.data.type} - {block.data.partName}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">By:</span>
                        <p>{block.data.user}</p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedBlock !== null && (
        <Dialog open={selectedBlock !== null} onOpenChange={() => setSelectedBlock(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Block #{blockchain.chain[selectedBlock].index} Details</DialogTitle>
              <DialogDescription>
                Created on {new Date(blockchain.chain[selectedBlock].timestamp).toLocaleString()}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="text-muted-foreground">Index:</span>
                <span>{blockchain.chain[selectedBlock].index}</span>
                
                <span className="text-muted-foreground">Timestamp:</span>
                <span>{new Date(blockchain.chain[selectedBlock].timestamp).toLocaleString()}</span>
                
                <span className="text-muted-foreground">Nonce:</span>
                <span>{blockchain.chain[selectedBlock].nonce}</span>
              </div>
              
              <div>
                <span className="text-muted-foreground block mb-1">Hash:</span>
                <code className="font-mono text-xs bg-muted p-2 rounded-md block break-all">
                  {blockchain.chain[selectedBlock].hash}
                </code>
              </div>
              
              <div>
                <span className="text-muted-foreground block mb-1">Previous Hash:</span>
                <code className="font-mono text-xs bg-muted p-2 rounded-md block break-all">
                  {blockchain.chain[selectedBlock].previousHash}
                </code>
              </div>
              
              {selectedBlock > 0 && (
                <div>
                  <span className="text-muted-foreground block mb-1">Transaction Data:</span>
                  <code className="font-mono text-xs bg-muted p-2 rounded-md block break-all whitespace-pre">
                    {JSON.stringify(blockchain.chain[selectedBlock].data, null, 2)}
                  </code>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </MainLayout>
  );
};

export default BlockchainExplorer;
