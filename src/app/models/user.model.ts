import { Gender } from "./enums/gender.enum";
import { Picture } from "./picture.model";

export interface User{
    fullName: string;
    picture: Picture;
    gender: Gender;
    email: string;
}