import CardButton from "@components/ui/CardButton";
import CardImage from "@components/ui/CardImage";
import CardItemName from "@components/ui/CardItemName";
import CardLayout from "@components/ui/CardLayout";

interface image {
  id: string;
  name: string;
  link: string;
  address: string;
  isSpecial: boolean;
 
}
const ImageItem: React.FC<{
  image: image;
  onDragStart?: (FromEvent) => void;
}> = ({ image , onDragStart}) => {
  return (
    <CardLayout>
      <CardImage
        image={image.address}
        isSpecial={image.isSpecial}
        link={image.link}
      />
      <CardItemName itemName={image.name} />
      <CardButton link={image.link} />
    </CardLayout>
  );
};

export default ImageItem;
