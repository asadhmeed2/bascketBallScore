import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { TeamsList } from "../../components/TeamsList";
import { TeamsForm } from "../../components";

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

        {/* add team to list */}
        <div className="">
          <TeamsForm />
        </div>

        {/* teams list */}
        <TeamsList />
      </IonContent>
    </IonPage>
  );
};
