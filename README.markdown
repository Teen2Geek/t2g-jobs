# T2G Jobs

## Contribute

### Add to the list(s)

To post a job, email us at hello@teen2geek.com

We should be able to get to you after 1-2 business days maximum, after curating your submission. Make sure to include:

* the position
* the location or whether it is virtual
* how to contact you
* your company name
* a link to your company's site

### Contribute to development

First, here's some technical specifications:

* All code is compiled from [Jade](http://jade-lang.com) and [LESS](http://lesscss.org) to HTML and CSS

* Asset Pipeline is [HarpJS](http://harpjs.com) (v0.10.0), compiles all the Jade/LESS files in the ```_harp/``` folder to static HTML/CSS in the primary folder

* Hosted on Github Pages

To run the server on your local machine, you first need NodeJS and NPM. Then, install harp like:

```bash
$ sudo npm install -g harp
```

Then, go into the directory of the project and type:

```bash
$ harp server _harp
```

Your server should then be running at ```localhost:9000```. From there, make all modifications to the Jade and LESS files in the ```_harp``` directory.

