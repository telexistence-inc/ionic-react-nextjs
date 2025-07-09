'use client';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonMenu,
  IonMenuButton,
  IonIcon,
  IonSplitPane
} from '@ionic/react';
import { home, business, settings, logOut } from 'ionicons/icons';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button onClick={() => handleNavigation('/')}>
              <IonIcon icon={home} slot="start" />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem button onClick={() => handleNavigation('/products')}>
              <IonIcon icon={business} slot="start" />
              <IonLabel>Products</IonLabel>
            </IonItem>
            <IonItem button onClick={() => handleNavigation('/settings')}>
              <IonIcon icon={settings} slot="start" />
              <IonLabel>Settings</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon icon={logOut} slot="start" />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonMenuButton slot="start" />
            <IonTitle>Ionic Next.js App</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ionic Next.js App</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to Ionic with Next.js!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>This app combines the power of Ionic React components with Next.js routing and features.</p>
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonList>
          <IonItem>
            <IonLabel>
              <IonText>
                <h2>Ionic Components</h2>
              </IonText>
              <IonText>
                <p>Use any Ionic React component in your Next.js app</p>
              </IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonText>
                <h2>Next.js Features</h2>
              </IonText>
              <IonText>
                <p>Server-side rendering, API routes, and more</p>
              </IonText>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <IonText>
                <h2>TypeScript Support</h2>
              </IonText>
              <IonText>
                <p>Built with TypeScript for better development experience</p>
              </IonText>
            </IonLabel>
          </IonItem>
        </IonList>

        <div style={{ padding: '16px' }}>
          <IonButton expand="block" onClick={() => handleNavigation('/products')}>
            View Products
          </IonButton>
        </div>
      </IonContent>
      </IonPage>
    </>
  );
}