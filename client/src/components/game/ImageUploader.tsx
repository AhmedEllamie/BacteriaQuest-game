import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
}

export function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive"
      });
      return;
    }

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 2MB",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    try {
      // Convert to base64 for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onImageUpload(base64String);
        setIsUploading(false);
        toast({
          title: "Success",
          description: "Custom bacteria mascot uploaded!",
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Please try again",
        variant: "destructive"
      });
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="bacteria-image">Upload Custom Bacteria Mascot</Label>
      <Input
        id="bacteria-image"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={isUploading}
        className="cursor-pointer"
      />
      <p className="text-sm text-muted-foreground">
        Upload a custom image for your bacteria mascot (max 2MB)
      </p>
    </div>
  );
}