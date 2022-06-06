history.replaceState({},'',location.href.replace(/.?m=1/g,''))
  let scpt=document.createElement('script');
  scpt.text=`
  {
    "@context": "https://schema.org",
    "@graph":[
      {
        "@type": "Organization",
        "name": "MrJaz",
        "alternateName": "www.mrjaz.com",
        "url": "https://www.mrjaz.com/",
        "logo": "https://www.mrjaz.com/favicon.ico",
        "image": "https://www.mrjaz.com/favicon.ico",
        "description": "${title.innerText}",
        "sameAs": [
          "https://www.mrjaz.com/",
          "https://www.am2z.com/",
          "https://ttoy1.blogspot.com/"
        ]
      },
      {
        "@type": "WebSite",
        "name": "${title.innerText}",
        "url": "https://ttoy1.blogspot.com/",
        "description": "${description.content}",
        "image": "${image.content}",
        "publisher": {"name": "MrJaz"},
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ttoy1.blogspot.com/s?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ImageObject",
        "name": "${title.innerText}",
        "url": "${image.content}",
        "contentUrl": "${image.content}",
        "author": "MrJaz",
        "caption": "${title.innerText}",
        "description": "${description.content}"
      },
      {
        "@type": "Article",
        "name" : "${title.innerText}",
        "headline": "${title.innerText}",
        "description": "${description.content}",
        "image": "${image.content}",
        "keywords": ["${title.innerText}","${keywords.content.replace(/,/g,`","`)}"],
        "articleBody" : "${document.body.innerText}",
        "articleSection" : "${document.body.innerText}",
        "url" : "${url.href}",
        "author": {"@type": "Person","name": "MrJaz"},
        "mainEntityOfPage": "${url.href}",
        "datePublished": "",
        "dateModified": "",
        "publisher": {"@type": "Organization","name": "MrJaz","logo": "https://www.mrjaz.com/favicon.ico"
        }
      },
      {
        "@type": "WebPage",
        "url": "${url.href}",
        "name": "${title.innerText}",
        "description": "${description.content}",
        "breadcrumb": "MrJaz > TemplateToy > Am2z",
        "potentialAction": {
          "@type": "ReadAction",
          "target": "${url.href}"
        }
      },
      {
        "@type":"CreativeWorkSeries",
        "name":"${title.innerText}",
        "aggregateRating":{
          "@type":"AggregateRating",
          "ratingValue":"5",
          "bestRating": "5",
          "ratingCount":"696"
        }
      },
      {
        "@type": "CreativeWork",
        "name": "${title.innerText}",
        "headline": "${title.innerText}",
        "contentRating": "excellent",
        "image": "${image.content}",
        "author": "MrJaz",
        "publisher": {"name": "MrJaz"}
      }
    ]
  }`;
  scpt.type='application/ld+json';
  document.head.append(scpt);
  iframe.src='//ttoy1.blogspot.com/2021/?b='+iframe.title;
