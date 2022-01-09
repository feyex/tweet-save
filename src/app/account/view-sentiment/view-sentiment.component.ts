import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/auth/user-auth.service';

@Component({
  selector: 'app-view-sentiment',
  templateUrl: './view-sentiment.component.html',
  styleUrls: ['./view-sentiment.component.css']
})
export class ViewSentimentComponent implements OnInit {
  tweetId: any;
  sentimentResponse: any
  tweetResponse: any;

  constructor(private activatedRoute:ActivatedRoute, private service:UserAuthService, private toast:ToastrService, private route:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      res => {
        this.tweetId = res['id']
        console.log(this.tweetId)
        this.getSentimentById();
        this.getTweetById();
      }
    )
  }

  getSentimentById(){
    this.service.getSentimentById(this.tweetId).then(
      sentiment => {
        this.sentimentResponse = Array.of(sentiment);
        this.sentimentResponse = this.sentimentResponse[0];
      }
    )
  }

  getTweetById(){
    this.service.getTweetsId(this.tweetId).then(
      tweet => {
        this.tweetResponse = tweet;
      }
    )
  }

}
