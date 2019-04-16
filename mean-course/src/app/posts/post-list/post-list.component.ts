import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
    // posts = [
    //     { 'title': 'First post', 'content': 'this is the first post conteent' },
    //     { 'title': 'First post', 'content': 'this is the first post conteent' },
    //     { 'title': 'First post', 'content': 'this is the first post conteent' }   
    // ]

  posts: Post[] = [];
  private postsSub: Subscription;
  isLoading = false;

    constructor(public postsService: PostsService){ }
    ngOnInit() {
        this.isLoading= true;
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[])=>{
            this.isLoading=false;
            this.posts = posts;
        });
    }

    onDelete(postId: string){
         this.postsService.deletePost(postId)
    }


    ngOnDestroy(){
        this.postsSub.unsubscribe();
    }
}