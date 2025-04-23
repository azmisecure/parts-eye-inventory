
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Location, sampleLocations } from '@/lib/data';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});

type FormValues = z.infer<typeof formSchema>;

const Locations = () => {
  const [locations, setLocations] = useState<Location[]>(sampleLocations);
  const [showDialog, setShowDialog] = useState(false);
  const [editingLocation, setEditingLocation] = useState<Location | undefined>(undefined);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const openAddDialog = () => {
    form.reset({
      name: '',
      description: '',
    });
    setEditingLocation(undefined);
    setShowDialog(true);
  };

  const openEditDialog = (location: Location) => {
    form.reset({
      id: location.id,
      name: location.name,
      description: location.description,
    });
    setEditingLocation(location);
    setShowDialog(true);
  };

  const handleSubmit = (values: FormValues) => {
    if (editingLocation) {
      // Edit existing location
      const updatedLocations = locations.map(location =>
        location.id === editingLocation.id
          ? { ...location, name: values.name, description: values.description }
          : location
      );
      setLocations(updatedLocations);
      toast({
        title: "Location Updated",
        description: `${values.name} has been updated.`,
      });
    } else {
      // Add new location
      const newLocation: Location = {
        id: `${locations.length + 1}`,
        name: values.name,
        description: values.description,
        partCount: 0,
      };
      setLocations([...locations, newLocation]);
      toast({
        title: "Location Added",
        description: `${values.name} has been added.`,
      });
    }
    setShowDialog(false);
  };

  const handleDeleteLocation = (locationId: string) => {
    setLocations(locations.filter(location => location.id !== locationId));
    toast({
      title: "Location Deleted",
      description: "The location has been removed.",
      variant: "destructive",
    });
  };

  return (
    <MainLayout title="Locations">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">Manage your storage locations</p>
          <Button onClick={openAddDialog}>
            <Plus className="h-4 w-4 mr-2" /> Add Location
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location) => (
            <Card key={location.id}>
              <CardHeader>
                <CardTitle>{location.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{location.description}</p>
                <p className="mt-2 font-medium">{location.partCount} parts</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => openEditDialog(location)}>
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500"
                  onClick={() => handleDeleteLocation(location.id)}
                >
                  <Trash className="h-4 w-4 mr-1" /> Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {editingLocation ? 'Edit Location' : 'Add New Location'}
              </DialogTitle>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter location name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter location description" 
                          {...field} 
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter className="pt-4">
                  <Button type="button" variant="outline" onClick={() => setShowDialog(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingLocation ? 'Save Changes' : 'Add Location'}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default Locations;
