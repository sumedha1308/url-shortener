<div id="top"></div>

# [URL Shortener](https://url-shorteners5.herokuapp.com/)<br>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#API EndPoints">API EndPoints</a></li>
      </ul>
    </li>
    <li><a href="#Enhancement">Enhancement</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

There are many great URL shortener available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. 

Here's why:
* User can easily create short, secure, unique URL from Long URL.
* This URL Shortener saves the user's time in shortening the same URL again as the recent 5 URLs are saved in the table.
* These short URLs can be easily copied or redirected to specified long URLs. :smile:

![image](https://github.com/sumedha1308/url-shortener/blob/master/public/resources/Updated-UI/Homepage_new.png)

<p align="right">(<a href="#top">back to top</a>)</p>

![image](https://github.com/sumedha1308/url-shortener/blob/master/public/resources/Updated-UI/Recent-Urls.png)

<p align="right">(<a href="#top">back to top</a>)</p>


![image](https://github.com/sumedha1308/url-shortener/blob/master/public/resources/Updated-UI/Recent-5.png)

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [html5](https://html.com/html5/)
* [css](https://devdocs.io/css/)
* [Node.js](https://nodejs.org/en/docs/)
* [express ^4.17.1](http://expressjs.com/)
* [nanoid 3.1.23](https://www.npmjs.com/package/nanoid)
* [heroku](https://www.heroku.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is set of instructions and information to use URL shortener.

### Prerequisites

* Internet.
* Any Web Browser.

<p align="right">(<a href="#top">back to top</a>)</p>

### Usage

* Please enter any long URL then click Shorten button.
* Short URL of given long URL is displayed in the same text box.
* User can copy short URL by clicking copy button. When URL will be copied, yellow coloured copied button will be displayed for a second.
* Newly added shorten URL will be diplayed in the table below the textbox.
* Recent 5 shorten URLs will be displayed in the table.
* User can see shortened URL and respective original long URL.
* User can redirect to long URL by clicking either shorten URL or long URL.
* To shorten new URL, either refresh the browser or User can simply remove previous URL and click enter, Shorten button will be displayed again.

<p align="right">(<a href="#top">back to top</a>)</p>

### API Endpoints

<br>

```
GET https://url-shortner-sumedha.herokuapp.com/api/urls/

Sample Response Body :
{
    "56ZmrO1-3WsjZ_Y8S31bd": "https://www.amazon.in/"
}
Status : 404 (URL does not exist)
```

<br>

<br>

```
GET https://url-shortner-sumedha.herokuapp.com/api/urls/shortUrlID

If User Copy GET API (https://url-shortner-sumedha.herokuapp.com/api/urls/shortUrlId) in browser , Original Long URL will be open.

Status : 404 (URL does not exist)
```

<br>

<br>

```
POST https://url-shortner-sumedha.herokuapp.com/api/urls/
Sample Request Body:
{
	"longUrl":"https://www.amazon.in/"
}

Sample Response Body :
{
    "shortUrl": "https://url-shortner-sumedha.herokuapp.com/api/urls/56ZmrO1-3WsjZ_Y8S31bd"
}

```

<br>


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Enhancement -->
## Enhancement
* Can add database to store all the recent shorten URLs.
* Can make frontend more catchy.
* Can improve coding standards.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Sumedha Deshpande - [Linkedin](www.linkedin.com/in/sumedha1308) - sumedhasd1308@gmail.com

Project Link: [URL Shortener](https://github.com/sumedha1308/url-shortener)

<p align="right">(<a href="#top">back to top</a>)</p>
