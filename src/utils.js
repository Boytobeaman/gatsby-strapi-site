export const mmtoinch = 0.03937;
export const kgtolbs = 2.20462262;
export const ltogal = 0.26417;
export const contact_url = '/contact/';
export const inquiry_handle_base_url = 'https://api.50d.top';
export const inquiry_api_success_code = 0;
export const inquiry_handle_app_name = '/DEMO_APP';
export const inquiry_handle_inquiry_url = '/inquiry/new';
export const inquiry_handle_email_url = '/email/templateEmail';
export const company_name = 'joinplastic';
export const remote_ip_url = 'https://api.db-ip.com/v2/free/self';
// export const contact_email = 'seller006@joinplastic.com';
export const contact_email = 'inquiry@joinplastic.com';
export const contact_phone_one = '(+86)021-59117621';
export const contact_phone_two = '(+86)13671889020';
export const facebook_url = 'https://www.facebook.com/movingbox.sale.1';
export const twitter_url = 'https://twitter.com/movingboxsale';
export const cdn_url = 'https://cdn.movingboxsale.com';
export const cdn_loading_img = `${cdn_url}/static/loading.gif`;
export const cdn_img_thumbnail = `${cdn_url}/static/noimage_thumbnail.png`;
export const aliResizeStyle_h_20 = '?x-oss-process=image/resize,h_20';
export const aliResizeStyle_h_60 = '?x-oss-process=image/resize,h_60';
export const aliResizeStyle_h_80 = '?x-oss-process=image/resize,h_80';
export const aliResizeStyle_h_100 = '?x-oss-process=image/resize,h_100';
export const aliResizeStyle_h_120 = '?x-oss-process=image/resize,h_120';
export const aliResizeStyle_h_200 = '?x-oss-process=image/resize,h_200';
export const aliResizeStyle_h_300 = '?x-oss-process=image/resize,h_300';
export const aliResizeStyle_h_400 = '?x-oss-process=image/resize,h_400';
export const aliResizeStyle_h_600 = '?x-oss-process=image/resize,h_600';
export const aliResizeStyle_h_800 = '?x-oss-process=image/resize,h_800';
export const aliResizeStyle_h_900 = '?x-oss-process=image/resize,h_900';
export const aliResizeStyle_h_1024 = '?x-oss-process=image/resize,h_1024';
export const aliResizeStyle_h_1200 = '?x-oss-process=image/resize,h_1200';
export const aliResizeStyle_w_300 = '?x-oss-process=image/resize,w_300';
export const aliResizeStyle_w_400 = '?x-oss-process=image/resize,w_400';
export const aliResizeStyle_w_600 = '?x-oss-process=image/resize,w_600';
export const aliResizeStyle_w_800 = '?x-oss-process=image/resize,w_800';
export const aliResizeStyle_w_900 = '?x-oss-process=image/resize,w_900';
export const aliResizeStyle_w_1024 = '?x-oss-process=image/resize,w_1024';
export const aliResizeStyle_w_1200 = '?x-oss-process=image/resize,w_1200';
export const menu = {
  home:{
    url:'/',
    text: 'Home'
  },
  foldingCrate:{
    url: '/folding-crate/',
    text: 'Folding Crate',
    product_identify_cat: 'folding crate'
  },
  nestingBox:{
    url: '/plastic-moving-boxes/',
    text: 'Plastic Moving Boxes',
    product_identify_cat: 'nesting box'
  },
  stackingCrate:{
    url: '/euro-stacking-boxes/',
    text: 'Euro Stacking Boxes',
    product_identify_cat: 'stacking crate'
  },
  palletBox:{
    url: '/pallet-boxes/',
    text: 'Pallet Boxes',
    product_identify_cat: 'pallet box'
  },
  contact:{
    url: '/contact/',
    text: 'Contact'
  },
  about:{
    url: '/about/',
    text: 'About'
  }
}
export const getUrlQuery = function (variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) { return pair[1]; }
  }
  return (false);
}
export const getSrcsetBySrc = function (src){
  return `${src}?x-oss-process=image/resize,w_360 360w,${src}?x-oss-process=image/resize,w_650 650w,${src}?x-oss-process=image/resize,w_850 850w,${src}?x-oss-process=image/resize,w_1000 1000w,${src}?x-oss-process=image/resize,w_1200 1200w`
}
