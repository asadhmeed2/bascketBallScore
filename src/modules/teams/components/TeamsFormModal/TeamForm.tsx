import React, { useCallback } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonModal,
  IonToolbar,
} from "@ionic/react";

import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { v4 as uuidv4 } from "uuid";

import { Team } from "../../../shared/types";
import { useTeamsStore } from "../../store";

type Props = {};

export const TeamsForm = (props: Props) => {
  const { addTeam } = useTeamsStore((state) => state);

  const schema = yup.object({
    name: yup.string().required(),
  });

  const { handleSubmit, control, register, reset } = useForm<FormInputs>({
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

    reset({
      name: "",
    });
  }, []);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <IonInput
              {...field}
              {...register("name")}
              placeholder="Team Name"
            />
          )}
        />

        <IonButton type="submit">Add</IonButton>
      </div>
    </form>
  );
};

export type FormInputs = {
  name: string;
};
