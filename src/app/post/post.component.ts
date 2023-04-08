import { Component } from '@angular/core';
import { PostServicesService} from '../Services/post-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(private postService:PostServicesService, private router:Router) {}

  PostsList:any = [];
  errorMessage:any;

  ngOnInit(): void {
    
    this.postService.GetAllPosts().subscribe({
      next:data=>this.PostsList = data,
      error:error=>this.errorMessage = error
    });
  }
 
  
}
