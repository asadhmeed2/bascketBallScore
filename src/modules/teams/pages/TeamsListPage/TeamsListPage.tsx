import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { TeamsList } from "../../components/TeamsList";

export const TeamsListPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>teams List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Teams</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* teams list */}
        <TeamsList />

        {/* add team to list */}

        {/* teamFormModal */}
      </IonContent>
    </IonPage>
  );
};
