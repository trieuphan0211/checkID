import React from "react";

export const DoubleTap = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      {...props}
    >
      <path
        d="M29.705 18.3799C33.075 18.3799 35.1525 20.8049 35.3175 24.2024L35.33 24.6524V29.9399L40.8775 30.9474C41.9436 31.1416 42.9602 31.547 43.8674 32.1398C44.7746 32.7325 45.5541 33.5006 46.1602 34.399C46.7663 35.2974 47.1866 36.3079 47.3965 37.371C47.6064 38.4342 47.6016 39.5286 47.3825 40.5899L47.275 41.0399L44.655 50.8474C44.3888 51.843 43.8542 52.7463 43.1096 53.4588C42.3649 54.1712 41.4389 54.6654 40.4325 54.8874L40.02 54.9624L33.975 55.8299C32.8526 55.9909 31.7078 55.809 30.6906 55.308C29.6734 54.807 28.8314 54.0103 28.275 53.0224L28.075 52.6349L28 52.4774C27.4153 51.2183 26.5364 50.1182 25.4375 49.2699L24.9525 48.9249L20.2425 45.7849L20.01 45.6374L19.765 45.5074L13.8575 42.5699C13.5513 42.4177 13.2926 42.1847 13.1093 41.8961C12.926 41.6075 12.8251 41.2742 12.8175 40.9324C12.7575 38.1599 13.9825 36.0224 16.3675 34.8324C18.12 33.9524 20.4525 34.0024 23.4325 34.8724L24.08 35.0724V24.6474C24.08 21.0174 26.185 18.3799 29.705 18.3799ZM29.705 22.1299C28.555 22.1299 27.9225 22.8174 27.84 24.2949L27.83 24.6499V37.7624C27.8298 38.0704 27.7538 38.3737 27.6086 38.6454C27.4634 38.917 27.2535 39.1488 26.9975 39.32C26.7414 39.4913 26.4471 39.5969 26.1406 39.6274C25.8341 39.6578 25.5248 39.6124 25.24 39.4949C21.59 37.9899 19.1375 37.6374 18.0425 38.1849C17.4075 38.5024 16.9925 38.9099 16.7675 39.4824L16.6725 39.7824L21.435 42.1499L21.8875 42.3924L22.3225 42.6649L27.0325 45.8049C28.7361 46.9402 30.1326 48.4792 31.0975 50.2849L31.4025 50.8974L31.4775 51.0524C31.6275 51.3753 31.8663 51.6488 32.166 51.8409C32.4657 52.033 32.814 52.1359 33.17 52.1374L33.4425 52.1174L39.4875 51.2499C39.8039 51.2044 40.1035 51.0788 40.3577 50.885C40.6119 50.6911 40.8124 50.4355 40.94 50.1424L41.0325 49.8799L43.6525 40.0699C43.9517 38.949 43.7934 37.7552 43.2126 36.751C42.6317 35.7468 41.6758 35.0144 40.555 34.7149L40.38 34.6724L33.12 33.3499C32.7331 33.2801 32.378 33.0905 32.1048 32.8078C31.8316 32.5252 31.6541 32.1639 31.5975 31.7749L31.58 31.5049V24.6499C31.58 22.9249 30.9425 22.1299 29.705 22.1299ZM29.7025 5.87988C32.6859 5.87872 35.6236 6.61404 38.2546 8.0206C40.8857 9.42716 43.1289 11.4615 44.7852 13.943C46.4414 16.4245 47.4595 19.2765 47.749 22.2458C48.0386 25.2152 47.5906 28.2102 46.445 30.9649C45.486 30.1176 44.3804 29.4525 43.1825 29.0024C44.0332 26.7033 44.2819 24.2249 43.9048 21.8027C43.5278 19.3804 42.5376 17.0949 41.0283 15.1632C39.519 13.2315 37.5408 11.7179 35.2816 10.7662C33.0225 9.81446 30.5575 9.45631 28.121 9.72574C25.6844 9.99517 23.3572 10.8832 21.3606 12.3055C19.364 13.7278 17.7643 15.6371 16.7135 17.8519C15.6627 20.0666 15.1958 22.5133 15.357 24.9594C15.5183 27.4055 16.3025 29.7698 17.635 31.8274C16.8048 31.9607 15.9998 32.2195 15.2475 32.5949C14.8475 32.7949 14.4675 33.0199 14.11 33.2599C12.4755 30.5076 11.599 27.3716 11.5697 24.1707C11.5404 20.9698 12.3594 17.8182 13.9433 15.0365C15.5272 12.2548 17.8195 9.94221 20.5871 8.33386C23.3547 6.72552 26.5015 5.87882 29.7025 5.87988ZM29.7025 12.1349C31.6395 12.1346 33.5472 12.6082 35.2591 13.5144C36.9711 14.4207 38.4353 15.732 39.524 17.3341C40.6128 18.9362 41.293 20.7803 41.5054 22.7056C41.7178 24.631 41.4559 26.579 40.7425 28.3799L37.83 27.8524V24.6549L37.82 24.1674L37.825 24.0099C37.827 22.3726 37.3328 20.7731 36.4075 19.4224L36.1825 19.0924C34.7875 17.1199 32.5575 15.8799 29.705 15.8799C26.7675 15.8799 24.4925 17.1949 23.105 19.2624C22.1101 20.6442 21.5765 22.3047 21.58 24.0074L21.585 24.2824L21.58 24.6499V31.8749L20.925 31.7849C20.3317 31.7112 19.7845 31.4274 19.3825 30.9849C18.3475 29.8374 17.83 27.5124 17.83 24.0049C17.8297 22.4456 18.1365 20.9014 18.733 19.4607C19.3295 18.02 20.204 16.7109 21.3065 15.6081C22.409 14.5054 23.7179 13.6307 25.1585 13.0339C26.5991 12.4371 28.1432 12.1299 29.7025 12.1299V12.1349Z"
        fill="#4F9CF9"
      />
    </svg>
  );
};
