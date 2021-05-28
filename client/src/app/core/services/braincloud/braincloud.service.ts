import { Injectable } from '@angular/core';
import env from "../../../../../env.json"
import get from "lodash/get"
const { appId, appSecret } = env
@Injectable({
  providedIn: 'root'
})
export class BraincloudService {

  public wrapper
  constructor() {



  }
  get isLoggedIn(): boolean {
    const profileId: string | undefined | null = this.wrapper.getStoredProfileId()

    return profileId?.length > 0

  }

  initializeBrainCloud() {

    const brainCloud = require("braincloud")
    this.wrapper = new brainCloud.BrainCloudWrapper("naame")
    this.wrapper.initialize(appId, appSecret, "1.0.0")
    this.wrapper.setAlwaysAllowProfileSwitch(false)
    this.wrapper.resetStoredProfileId()
    this.wrapper.resetStoredAnonymousId()
    //console.log(this.wrapper)
  }
  convertToPromise(funcName: string, ...args): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        get(this.wrapper,funcName)(...args, response => {
          resolve(response)
        }, error => {
          reject(error)
        });

      }
      catch (error) {
        reject(error);
      }
    })
  }
}
