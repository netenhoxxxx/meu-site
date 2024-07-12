
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.c395d8e4673ed3b6321a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1110.latest.pt-BR.020cb15f59b1fd8f3925.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6605.latest.pt-BR.0a027deb4f4e87ae29a9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.pt-BR.d3bc65d7a91c6d71a13d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.046ae138874903872a9c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.pt-BR.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1662.latest.pt-BR.4892ba65f4970525948a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.pt-BR.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.pt-BR.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8831.latest.pt-BR.e97f2d5621fd4177e5f1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/236.latest.pt-BR.e9e2e84c5887659c1ef7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5718.latest.pt-BR.12016a66b755f2d903d3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2714.latest.pt-BR.31afab028916f37ea84e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4619.latest.pt-BR.a15c30ad9555d1691299.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.6933a95a9ca6d36e5d78.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/1110.latest.pt-BR.40cc870ad0f292b10d20.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.8ae030d5b62ddbf3a670.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.3e483127dbf554cf988e.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  