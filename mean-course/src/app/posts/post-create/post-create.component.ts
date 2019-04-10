import { Component } from "@angular/core";
import { post } from "selenium-webdriver/http";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
    
    newPost = "NO CONTENT"

    onAddPost(postInput: HTMLTextAreaElement){
        this.newPost =  postInput.value    
    }
}