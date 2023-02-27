import { defineCustomElement as defineModal } from '@ionic/core/components/ion-modal.js';
import { defineCustomElement as defineInput } from '@ionic/core/components/ion-input.js';
import { initialize, modalController } from '@ionic/core/components';

initialize();
defineModal();
defineInput();

const createModal = async () => {
    const component = document.createElement('ion-input');
    component.type = "text";
    const modal = await modalController.create({
        component
    });
    return modal;
}

export const runTest = async () => {

    while (true) {
        const modal = await createModal();
        await modal.present();
        await new Promise(r => setTimeout(r, 300));
        await modal.dismiss();
    }
}