import React, { useCallback } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonModal,
  IonToolbar,
} from "@ionic/react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { v4 as uuidv4 } from "uuid";

import { Team } from "../../../shared/types";
import { useTeamsStore } from "../../store";

const schema = yup.object({
  name: yup.string().required(),
});

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const TeamsFormModal = (props: Props) => {
  const { addTeam } = useTeamsStore((state) => state);

  const { handleSubmit } = useForm({
    defaultValues: { name: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((data: FormInputs) => {
    const team: Team = {
      id: uuidv4(),
      name: data.name,
      score: 0,
    };

    addTeam(team);

    props.onClose();
  }, []);

  return (
    <IonModal
      isOpen={props.isOpen}
      onDidDismiss={props.onClose}
      initialBreakpoint={0.5}
      breakpoints={[0.5]}
    >
      <IonContent className="">
        <IonToolbar>
          <IonButton onClick={props.onClose}>Cancel</IonButton>
        </IonToolbar>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <IonInput
            name="name"
            type="text"
            placeholder="Team Name"
            required
          ></IonInput>

          <IonButton type="submit">Add</IonButton>
        </form>
      </IonContent>
    </IonModal>
  );
};

export type FormInputs = {
  name: string;
};
