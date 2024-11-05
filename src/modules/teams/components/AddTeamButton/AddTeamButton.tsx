import React, { useCallback } from "react";

import { IonButton } from "@ionic/react";

import { TeamsFormModal } from "../TeamsFormModal";

export const AddTeamButton = () => {
  const [isOpenTeamFormModal, setIsOpenTeamFormModal] = React.useState(false);

  const onOpenTeamModal = useCallback(() => {
    setIsOpenTeamFormModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenTeamFormModal(false);
  }, []);

  return (
    <div>
      <div className="flex justify-end">
        <IonButton color="success" onClick={onOpenTeamModal}>
          + Add Team
        </IonButton>
      </div>

      <TeamsFormModal isOpen={isOpenTeamFormModal} onClose={onCloseModal} />
    </div>
  );
};
