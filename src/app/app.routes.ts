import { RouterModule } from "@angular/router";
import { pathToFileURL } from "url";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { StarshipdetailComponent } from "./components/starships/starshipdetail/starshipdetail.component";
import { StarshipsComponent } from "./components/starships/starships.component";

const appRoutes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "starships", component: StarshipsComponent, pathMatch: "full" },
  { path: "starships/:id", component: StarshipdetailComponent, pathMatch: "full" }

];
export const routing = RouterModule.forRoot(appRoutes);
