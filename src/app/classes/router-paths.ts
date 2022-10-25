import { Routes } from "@angular/router";
import { NewsComponent } from "../components/news/news.component";

export class RouterPaths {
    public routes: Routes = [
        { path: "news", component: NewsComponent }
    ]
}
