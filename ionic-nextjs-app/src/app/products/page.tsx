'use client';

import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  IonText,
  IonThumbnail,
  IonImg,
  IonChip
} from '@ionic/react';
import { list, grid, star, home } from 'ionicons/icons';
import { dummyProducts, Product } from '@/data/products';
import { useRouter } from 'next/navigation';

type ViewMode = 'list' | 'grid';

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const router = useRouter();

  const ProductListItem = ({ product }: { product: Product }) => (
    <IonItem>
      <IonThumbnail slot="start">
        <IonImg src={product.image} alt={product.name} />
      </IonThumbnail>
      <IonLabel>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
          <IonText color="primary">
            <strong>${product.price}</strong>
          </IonText>
          <IonChip color={product.inStock ? 'success' : 'danger'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </IonChip>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <IonIcon icon={star} color="warning" />
            <IonText>{product.rating}</IonText>
          </div>
        </div>
      </IonLabel>
    </IonItem>
  );

  const ProductGridItem = ({ product }: { product: Product }) => (
    <IonCol size="6" sizeMd="4" sizeLg="3">
      <IonCard>
        <IonImg src={product.image} alt={product.name} />
        <IonCardHeader>
          <IonCardTitle>{product.name}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonText>
            <p style={{ fontSize: '14px', margin: '0 0 8px 0' }}>{product.description}</p>
          </IonText>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <IonText color="primary">
              <strong>${product.price}</strong>
            </IonText>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <IonIcon icon={star} color="warning" />
              <IonText>{product.rating}</IonText>
            </div>
          </div>
          <IonBadge color={product.inStock ? 'success' : 'danger'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </IonBadge>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => router.push('/')} fill="clear">
              <IonIcon icon={home} />
            </IonButton>
          </IonButtons>
          <IonTitle>Products</IonTitle>
          <IonButtons slot="end">
            <IonButton 
              fill="clear" 
              onClick={() => setViewMode('list')}
              color={viewMode === 'list' ? 'primary' : 'medium'}
            >
              <IonIcon icon={list} />
            </IonButton>
            <IonButton 
              fill="clear" 
              onClick={() => setViewMode('grid')}
              color={viewMode === 'grid' ? 'primary' : 'medium'}
            >
              <IonIcon icon={grid} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>

        {viewMode === 'list' ? (
          <IonList>
            {dummyProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </IonList>
        ) : (
          <IonGrid>
            <IonRow>
              {dummyProducts.map((product) => (
                <ProductGridItem key={product.id} product={product} />
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
}