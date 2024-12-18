export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-7769-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_DATA = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
  };

 export const SEARCH_API_DATA = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2M0NjA3ZWYwYjhhMWUxNWY2MTA1NWEwMWI0ZDUxOCIsIm5iZiI6MTczMTU1OTkwNi4wNzg2MDczLCJzdWIiOiI2NzJkYjM1M2E4MTg3MTNiZGY0OTQwYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RVTgMnsEVyZZ6TO_4N7N1amYMf1VQyFecyx1RBakgcQ'
    }
  };

  export const IMG_CDN_URL='https://image.tmdb.org/t/p/w500';

  export const IMG_BG_URL ='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg'


  export const OPENAI_GPT_KEY=process.env.REACT_APP_OPENAI_GPT_KEY