import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { GameScore, Timer } from "./components";

export const HomePage = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar> */}
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="text-center text-3xl">Timer</div>
        <Timer defaultTime={10} />

        <hr className="my-4" />

        <div className="text-center text-3xl">Game Score</div>

        <GameScore />
      </IonContent>
    </IonPage>
  );
};
