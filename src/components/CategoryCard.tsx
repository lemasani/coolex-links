import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  badgeText?: string;
  className?: string;
  onInquire?: () => void;
}

const CategoryCard = ({
  name,
  description,
  icon: Icon,
  imageUrl,
  badgeText,
  className,
  onInquire,
}: CategoryCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg",
        className
      )}
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <div className="h-10 w-10 rounded-full bg-coolex-accent/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-coolex-accent" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {badgeText && (
          <Badge variant="secondary" className="mb-3">
            {badgeText}
          </Badge>
        )}
        <Button variant="outline" className="w-full mt-2" onClick={onInquire}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
