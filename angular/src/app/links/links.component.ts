import { Component, OnInit, Input } from '@angular/core';

type LinkItem = {
  id: string;
  displayTitle: string;
  url: string;
  imgSrc: string;
}

const linkItems: LinkItem[] = [
  {
    id: 'twitter',
    displayTitle: 'Twitter',
    url: 'https://twitter.com/yammerjp',
    imgSrc: '/assets/twitter.png'
  },
  {
    id: 'github',
    displayTitle: 'GitHub',
    url: 'https://github.com/yammerjp',
    imgSrc: '/assets/github.png'
  },
  {
    id: 'qiita',
    displayTitle: 'Qiita',
    url: 'https://qiita.com/yammerjp',
    imgSrc: '/assets/qiita.png'
  },
  {
    id: 'hatenablog',
    displayTitle: 'はてなブログ',
    url: 'https://basd4g.hatenablog.com',
    imgSrc: '/assets/hatenablog.png'
  },
  {
    id: 'memo-yammer-jp',
    displayTitle: 'memo.yammer.jp',
    url: 'https://memo.yammer.jp',
    imgSrc: '/assets/memo-yammer-jp.png'
  },
]

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  linkItems: LinkItem[] = linkItems
  constructor() { }

  ngOnInit(): void {
  }

}
