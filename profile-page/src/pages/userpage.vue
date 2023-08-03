<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-item>
                <ion-label position="stacked">Username</ion-label>
                <ion-input type="text" v-model="username" :disabled="!isEditing" class="bordered-input"></ion-input>
              </ion-item>
            </ion-col>
            <ion-col size="12">
              <ion-item>
                <ion-label position="stacked">Mobile Number</ion-label>
                <ion-input type="text" v-model="mobileNumber" :disabled="!isEditing" class="bordered-input"></ion-input>
              </ion-item>
            </ion-col>
            <ion-col size="12">
              <ion-item>
                <ion-label position="stacked">Email ID</ion-label>
                <ion-input type="text" v-model="emailId" :disabled="!isEditing" class="bordered-input"></ion-input>
              </ion-item>
            </ion-col>
            <ion-col size="12">
              <ion-item>
                <ion-label position="stacked">Address</ion-label>
                <ion-textarea v-model="address" :disabled="!isEditing" class="bordered-input"></ion-textarea>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <style scoped>
  .bordered-input {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }
  </style>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonImg, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';

export default {
  components: { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonImg, IonLabel, IonInput, IonTextarea, IonButton },
  data() {
    return {
      profilePhoto: 'path/to/profile/photo',
      username: 'John Doe',
      mobileNumber: '123-456-7890',
      emailId: 'johndoe@example.com',
      address: '123 Main St, Anytown, USA',
      isEditing: false
    }
  },
  methods: {
    saveProfile() {
      // Send a request to an API to save the updated profile information
      // ...
      this.isEditing = false;
    }
  }
}
</script>