<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content> 
      <ion-grid>
        <ion-row class="bordered3-input">
          <ion-item >
            <ion-img :src="profilePhoto" class="centered-image" style="align-items: center;" >profile Photo</ion-img>
            <ion-button @click="uploadProfilePicture">Upload Profile Picture</ion-button>
          </ion-item>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-item>
              <ion-label class="labelstyle" position="stacked">Username</ion-label>
              <ion-textarea type="text" v-model="username" :disabled="!isEditing" class="bordered-input"></ion-textarea>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label class="labelstyle" position="stacked">Mobile Number</ion-label>
              <ion-textarea type="text" v-model="mobileNumber" :disabled="!isEditing"
                class="bordered-input"></ion-textarea>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label class="labelstyle" position="stacked">Email ID</ion-label>
              <ion-textarea type="text" v-model="emailId" :disabled="!isEditing" class="bordered-input"></ion-textarea>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label class="labelstyle" position="stacked">Address</ion-label>
              <ion-textarea v-model="address" :disabled="!isEditing" class="bordered-input"></ion-textarea>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row class="bordered2-input"></ion-row>


        <ion-row>
          <ion-button v-if="!isEditing" @click="isEditing = true" class="centered-button">Edit</ion-button>
          <ion-button v-if="isEditing" @click="saveProfile" class="centered-button">Save</ion-button>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.bordered-input {
  border: 1px solid #000;
  border-radius: 9px;
  padding-left: 15px;
  padding-bottom: 0px;
  padding-top: 6px;
  font-size: 17px;
  height: 10%;
}

.centered-image {
  display: block;
  margin: 0 auto;
  border: 2px solid #fff;
  border-radius: 50px;
  box-shadow: 0 0 5px gray;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  width: 75px;
  height: 75px;
  





}

.centered-button {
  display: block;
  margin: 0 auto;
  font-size: 17px;
  height: 40px;
  width: 85px;
  object-fit: cover;


}

.labelstyle {
  font-size: 25px;
}
</style>

<style scoped>
.bordered2-input {
  height: 30px;
}

.bordered3-input {
  height: 200px;
}
.box {
  border: 0px solid #000;
  border-radius: 9px;
  padding-left: 15px;
  padding-bottom: 0px;
  padding-top: 6px;
}
</style>



<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonImg, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';




export default {
  components: { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonImg, IonLabel, IonInput, IonTextarea, IonButton },
  data() {
    return {
      profilePhoto: 'path/to/profile/photo',
      username: 'John Doe',
      mobileNumber: '123-456-7890',
      emailId: 'johndoe@example.com',
      address: '123 Main St, Anytown, USA',
      isEditing: false,
      profilePhoto: 'path/to/default/profile/photo',
    }
  },
  methods: {
    saveProfile() {
      // Send a request to an API to save the updated profile information
      // ...
      this.isEditing = false;
    },

    uploadProfilePicture() {
      const options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE
      };
      Camera.getPicture(options).then((imageUri) => {
        File.resolveLocalFilesystemUrl(imageUri).then((entry) => {
          const fileEntry = entry;
          fileEntry.file((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const imgBlob = new Blob([reader.result], { type: file.type });
              const formData = new FormData();
              formData.append('file', imgBlob, file.name);
              const fileTransfer = new FileTransfer();
              fileTransfer.upload(imageUri, 'http://example.com/upload', formData).then((response) => {
                // Update the profilePhoto data property with the uploaded image URL
                this.profilePhoto = response.response;
              }).catch((error) => {
                console.error(error);
              });
            };
            reader.readAsArrayBuffer(file);
          });
        }).catch((error) => {
          console.error(error);
        });
      }).catch((error) => {
        console.error(error);
      });
    }

  },

}
</script>