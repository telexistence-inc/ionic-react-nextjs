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
  IonText
} from '@ionic/react';

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
          <IonButton expand="block" routerLink="/products">
            View Products
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}