
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Edit, Trash } from 'lucide-react';
import { Part } from '@/lib/data';

interface PartCardProps {
  part: Part;
  onEdit: (part: Part) => void;
  onDelete: (partId: string) => void;
}

const PartCard = ({ part, onEdit, onDelete }: PartCardProps) => {
  const isLowStock = part.quantity < part.minQuantity;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">
            {part.name}
          </CardTitle>
          {isLowStock && (
            <Badge variant="destructive" className="px-2 py-1">
              Low Stock
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">SKU: {part.sku}</p>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="aspect-square rounded-md bg-muted flex items-center justify-center mb-4">
          {part.image ? (
            <img 
              src={part.image} 
              alt={part.name} 
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <Package className="h-12 w-12 text-muted-foreground" />
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Category</p>
            <p className="font-medium">{part.category}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Location</p>
            <p className="font-medium">{part.location}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Quantity</p>
            <p className={`font-medium ${isLowStock ? 'text-red-500' : ''}`}>
              {part.quantity} / {part.minQuantity}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Price</p>
            <p className="font-medium">${part.price.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-1">
        <Button variant="outline" size="sm" onClick={() => onEdit(part)}>
          <Edit className="h-4 w-4 mr-1" /> Edit
        </Button>
        <Button variant="outline" size="sm" className="text-red-500" onClick={() => onDelete(part.id)}>
          <Trash className="h-4 w-4 mr-1" /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PartCard;
