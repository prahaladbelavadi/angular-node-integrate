import { Component } from "@angular/core";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
    posts: [
        { title: 'First post', content: 'this is the first post conteent' },
        { title: 'First post', content: 'this is the second post conteent' },
        { title: 'First post', content: 'this is the third post conteent' }
    ]
}