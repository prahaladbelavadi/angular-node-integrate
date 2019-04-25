import { NgModule } from "@angular/core";
import { LoginComponent } from "src/app/auth/login/login.component";
import { SignupComponent } from "src/app/auth/signup/signup.component";
import { AngularMaterialModule } from "angular-material";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports:[CommonModule,
        AngularMaterialModule,
        FormsModule,
        AuthRoutingModule
    ],
    providers:[],
    exports:[]
})


export class AuthModule{}