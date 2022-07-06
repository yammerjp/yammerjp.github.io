import { Component, OnInit } from '@angular/core';

import { CacheFeeds } from '../../lib/CacheFeeds'
import slides from '../../feeds/slides.json'
import contributions from '../../feeds/contributions.json'
import relatedArticles from '../../feeds/related-articles.json'
import { fetchAndTransformFeeds } from '../../lib/FeedTransformer'
import type { JsonFeedItem } from '../../types/JsonFeedItem'

const cacheFeeds = new CacheFeeds();
cacheFeeds.setFetcher('投稿', () => fetchAndTransformFeeds('https://rsss.yammer.jp/v0/json_feed'))
cacheFeeds.setFetcher('発表', () => Promise.resolve(slides))
cacheFeeds.setFetcher('寄稿', () => Promise.resolve(contributions))
cacheFeeds.setFetcher('関連', () => Promise.resolve(relatedArticles))
cacheFeeds.setFetcher('近況', () => fetchAndTransformFeeds('https://textfeed-api.herokuapp.com/json_feed'))

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabNames: string[] = []
  tabName: string = ''
  cardItems: JsonFeedItem[] = []
  message: string = ''

  constructor() {
    this.tabNames = ['投稿', '発表', '寄稿', '関連', '近況'] 
    this.tabName = this.tabNames[0]
    this.cardItems = []
    this.message = ''
  }

  ngOnInit(): void {
    this.fetch(this.tabNames[0])
    this.cardItems = slides
  }

  async fetch(t: string) {
    this.tabName = t
    this.message = '...fetching'
    this.cardItems = []

    await cacheFeeds.getFeed(t).then(items => {
      this.message = ''
      this.cardItems = items
      console.log(this.cardItems)
    }).catch(() => {
      this.message = '...failed to fetch items'
      this.cardItems = []
    })
  }
}
