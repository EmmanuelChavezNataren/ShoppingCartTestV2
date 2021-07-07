import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getObject<T>(key: string): Promise<T> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  async set(key: string, value: any): Promise<void> {
    await Storage.set({
      key,
      value,
    });
  }

  async get(key: string): Promise<string> {
    const { value } = await Storage.get({ key });
    return value;
  }

  async remove(key: string): Promise<void> {
    await Storage.remove({ key });
  }


}
