import type { JsonFeedItem } from '../..//types/JsonFeedItem'
import { Component, OnInit, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser'

function description(str: string) {
  const maxLength = 400;
  if (str.length && str.length <= maxLength) {
    return str;
  }
  return `${str.slice(0, maxLength - 1)}...`;
}

function iso8601toStr(isoDate: string): string {
  const d = new Date(isoDate);
  const yyyy = `${d.getFullYear()}`;
  const mm = (`00${d.getMonth() + 1}`).slice(-2);
  const dd = (`00${d.getDate()}`).slice(-2);
  return `${yyyy}/${mm}/${dd}`;
}

@Component({
  selector: 'app-json-feed-item-card',
  templateUrl: './json-feed-item-card.component.html',
  styleUrls: ['./json-feed-item-card.component.scss'],
})
export class JsonFeedItemCardComponent implements OnInit {
  @Input() item!: JsonFeedItem
  @Input() isFirst!: boolean

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  safeHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.item.content_html ?? '')
  }

  description() {
    return description(this.item.content_text ?? '')
  }
  iso8601toStr() {
    return iso8601toStr(this.item.date_published)
  }
}
