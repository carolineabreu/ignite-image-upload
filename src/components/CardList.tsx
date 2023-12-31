import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [imageUrl, setImageUrl] = useState('');

  function handleViewImage(url: string): void {
    onOpen();
    setImageUrl(url);
  }

  return (
    <>
      <SimpleGrid templateColumns="repeat(3, 1fr)" gap={10}>
        {cards?.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage isOpen={isOpen} imgUrl={imageUrl} onClose={onClose} />
      )}
    </>
  );
}
