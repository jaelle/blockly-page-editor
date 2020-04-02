# blockly-page-editor

This tutorial will walk you through the steps of creating a web-based visual programming editor from scratch using Blockly. You will learn how to integrate a resizable Blockly interface into a webpage, create custom blocks, and generate some JavaScript.

For this example, you will create a Blockly editor that can modify the look and feel of the current webpage. The user will be able to use blocks to change the site colors and edit the header text.

## Working Example and Tutorial Files

You can view the finished project online at:
http://jaelle.github.io/blockly-page-editor 

The files for this tutorial are available on GitHub.
https://github.com/jaelle/blockly-page-editor

## Get Blockly

Before you get started, make sure to download Blockly. There are several ways to go about this.
* Download the zip file.
* Download the TAR ball.
* Clone the project from git.
  `git clone https://github.com/google/blockly.git blockly`
  
## Start Creating the Page Editor

Now it is time to design the page editor. This webpage will be editable by a Blockly editor contained in the page. It is made up of several parts.

* HTML
  * Webpage (/index.html)
  * Blockly Editor (/blockly.html)
* Styles (/styles.css)
  * Javascript
    * Blockly (/blockly/blockly_uncompressed.js)
    * Blockly Language Support (/blockly/msg/js/en.js)
    * Blockly JavaScript Generator (/blockly/generators/javascript.js)
    * Custom blocks (/blocks.js)
    * Custom block javascript generator (/javascript.js)

Start by creating the HTML page (/index.html). Make it look something like the code found here:
https://github.com/jaelle/blockly-page-editor/blob/gh-pages/index.html 

Next, create the HTML page for Blockly (/blockly.html). This will run in the iframe of index.html. More information about creating a Blockly editor in an iframe can be found on the Blockly Developer site. Make sure it looks something like this:
https://github.com/jaelle/blockly-page-editor/blob/gh-pages/blockly.html
 

Add some styles. An example stylesheet can be found here:
https://github.com/jaelle/blockly-page-editor/blob/gh-pages/styles.css

Visiting /index.html in the browser should reveal the Blockly editor loaded on the page. Several default blocks are loaded into the Blockly editor.  However, we want to create our own custom blocks for editing the page.
