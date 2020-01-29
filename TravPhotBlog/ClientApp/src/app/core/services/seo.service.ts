import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { SeoData } from '../models/seo-data';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private readonly metaService: Meta, private readonly titleService: Title, @Inject(DOCUMENT) private readonly dom) { }

  public setData(data: SeoData): void {
    //this.setSection(data.section);
    this.setTitle(data.Title);
    //this.setType(data.Type);
    this.setDescription(data.Description);
    this.setKeywords(data.Keywords);
    this.setImage(data.Image, data.ImageAlt);
    //this.setUrl(data.Url);
    this.setPublished(data.Published);
    //this.setModified(data.Modified);
    this.setAuthor(data.Author);
    this.setSiteCreator(data.SiteName);
  }

  public setSection(section?: string): void {
    if (Boolean(section)) {
      this.metaService.updateTag({ name: 'article:section', content: section });
    }
    else {
      this.metaService.removeTag(`name='article:section'`);
    }
  }

  public setTitle(title: string = '') {
    this.titleService.setTitle(title);
    if (title && title.length) {
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ name: 'title', content: title });
    }
    else {
      this.metaService.removeTag(`name='twitter:title'`);
      this.metaService.removeTag(`property='og:title'`);
      this.metaService.removeTag(`name='title'`);
    }
  }

  public setType(type?: string) {
    if (type && type.length) {
      this.metaService.updateTag({ property: 'og:type', content: type });
    }
    else {
      this.metaService.removeTag(`property='og:type'`);
    }
  }

  public setDescription(description?: string) {
    if (description && description.length) {
      this.metaService.updateTag({ name: 'twitter:description', content: description });
      this.metaService.updateTag({ property: 'og:description', content: description });
      this.metaService.updateTag({ name: 'description', content: description });
    }
    else {
      this.metaService.removeTag(`name='twitter:description'`);
      this.metaService.removeTag(`property='og:description'`);
      this.metaService.removeTag(`name='description'`);
    }
  }

  public setKeywords(keywords?: string) {
    if (keywords && keywords.length) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }
    else {
      this.metaService.removeTag(`name='keywords'`);
    }
  }

  public setImage(image?: string, alt?: string) {
    if (image && image.length) {
      this.metaService.updateTag({ name: 'twitter:image', content: image });
      this.metaService.updateTag({ name: 'twitter:image:alt', content: alt });
      this.metaService.updateTag({ property: 'og:image', content: image });
      this.metaService.updateTag({ property: 'og:image:alt', content: alt });
      this.metaService.updateTag({ property: 'og:image:height', content: '630' });
      this.metaService.updateTag({ property: 'og:image:width', content: '1200' });
    }
    else {
      this.metaService.removeTag(`name='twitter:image'`);
      this.metaService.removeTag(`name='twitter:image:alt'`);
      this.metaService.removeTag(`property='og:image'`);
      this.metaService.removeTag(`property='og:image:alt'`);
      this.metaService.removeTag(`property='og:image:height'`);
      this.metaService.removeTag(`property='og:image:width'`);
    }
  }

  public setUrl(url?: string) {
    if (url && url.length) {
      this.metaService.updateTag({ property: 'og:url', content: url });
    }
    else {
      this.metaService.removeTag(`property='og:url'`);
    }
    this.setCanonicalUrl(url);
  }

  public setPublished(publishedDateString?: string) {
    if (publishedDateString) {
      const publishedDate = new Date(publishedDateString);
      this.metaService.updateTag({ name: 'article:published_time', content: publishedDate.toISOString() });
      this.metaService.updateTag({ name: 'published_date', content: publishedDate.toISOString() });
    } else {
      this.metaService.removeTag(`name='article:published_time'`);
      this.metaService.removeTag(`name='publication_date'`);
    }
  }

  public setModified(modifiedDateString?: string) {
    if (modifiedDateString) {
      const modifiedDate = new Date(modifiedDateString);
      this.metaService.updateTag({ name: 'article:modified_time', content: modifiedDate.toISOString() });
      this.metaService.updateTag({ name: 'og:updated_time', content: modifiedDate.toISOString() });
    } else {
      this.metaService.removeTag(`name='article:modified_time'`);
      this.metaService.removeTag(`name='og:updated_time'`);
    }
  }

  public setAuthor(author?: string) {
    if (author && author.length) {
      this.metaService.updateTag({ name: 'article:author', content: author });
      this.metaService.updateTag({ name: 'author', content: author });
    } else {
      this.metaService.removeTag(`name='article:author'`);
      this.metaService.removeTag(`name='author'`);
    }
  }

  public setSiteCreator(site?: string): void {
    if (Boolean(site)) {
      this.metaService.updateTag({ property: 'og:site_name', content: site });
      this.metaService.updateTag({ name: 'twitter:site', content: site });
      this.metaService.updateTag({ name: 'twitter:creator', content: site });
    } else {
      this.metaService.removeTag(`property='og:site_name'`);
      this.metaService.removeTag(`name='twitter:site'`);
      this.metaService.removeTag(`name='twitter:creator'`);
    }
  }

  public setTwitterCard(card?: string): void {
    if (Boolean(card)) {
      this.metaService.updateTag({ name: 'twitter:card', content: card });
    } else {
      this.metaService.removeTag(`name='twitter:card'`);
    }
  }

  public setCanonicalUrl(url?: string) {
    // first remove potential previous url
    const selector = `link[rel='canonical']`;
    const canonicalElement = this.dom.head.querySelector(selector);
    if (canonicalElement) {
      this.dom.head.removeChild(canonicalElement);
    }

    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);

  }
}
